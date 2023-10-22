import { Response, Request } from "express";
import { Rubrique } from "./rubrique.model";

class RubriqueController {
    async createOrUpdate(req: Request, res: Response) {
        try {
            const [rubrique, created] = await Rubrique.upsert(req.body);
            if (created) {
                res.json({ success: true, message: "Rubrique créée avec succès", data: Rubrique });
            } else {
                res.json({ success: true, message: "Rubrique mise à jour avec succès" });
            }
        } catch (error) {
            res.json({ success: false, message: `Erreur lors de la création/mise à jour de la Rubrique : ${error}` });
        }
    }

    async delete(req: Request, res: Response) {
        try {
            const rubrique = await Rubrique.findByPk(req.params.id);
            if (!Rubrique) {
                throw new Error(`Categorie non existante`)
            }
            await Rubrique.destroy();
            res.json({ success: true, message: "Updated" })
        } catch (error) {
            res.json({ success: false, message: `Erreur lors de la mise à jour de la Rubrique : ${error}` })
        }
    }

    list(req: Request, res: Response) {
        Rubrique.findAll({ order: [["datecreation", "DESC"]] })
            .then((result) => {
                res.json({ data: result, success: true });
            })
            .catch((err) => {
                res.json({ success: false, err });
            });
    }

    findOne(req: Request, res: Response) {
        Rubrique.findOne({
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
export const rubriqueController = new RubriqueController();
