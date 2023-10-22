import { IdeeRecu } from "./ideerecu.model";
import { Response, Request } from "express";

class IdeeRecuController {
    async createOrUpdate(req: Request, res: Response) {
        try {
            const [ideeRecu, created] = await IdeeRecu.upsert(req.body);
            if (created) {
                res.json({ success: true, message: "idee recu créée avec succès", data: IdeeRecu });
            } else {
                res.json({ success: true, message: "idee recu mise à jour avec succès" });
            }
        } catch (error) {
            res.json({ success: false, message: `Erreur lors de la création/mise à jour de la idee recu : ${error}` });
        }
    }

    async delete(req: Request, res: Response) {
        try {
            const ideeRecu = await IdeeRecu.findByPk(req.params.id);
            if (!IdeeRecu) {
                throw new Error(`Categorie non existante`)
            }
            await IdeeRecu.destroy();
            res.json({ success: true, message: "Deleted" })
        } catch (error) {
            res.json({ success: false, message: `Erreur lors de la suppression de la idee recu : ${error}` })
        }
    }

    list(req: Request, res: Response) {
        IdeeRecu.findAll({ order: [["datecreation", "DESC"]] })
            .then((result) => {
                res.json({ data: result, success: true });
            })
            .catch((err) => {
                res.json({ success: false, err });
            });
    }

    findOne(req: Request, res: Response) {
        IdeeRecu.findOne({
            where: { id: req.params.id },
        })
            .then((result) => {
                res.json({ success: true, data: result });
            })
            .catch((err) => {
                res.json({ success: false, err });
            });
    }


}
export const ideeRecuController = new IdeeRecuController();
