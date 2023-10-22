import momentTZ from "moment-timezone";
import { Response, Request } from "express";
import { Baniere } from "./baniere.model";

class BaniereController {
  async createOrUpdate(req: Request, res: Response) {
    try {
      const [baniere, created] = await Baniere.upsert(req.body);
      if (created) {
        res.json({ success: true, message: "Baniere créée avec succès", data: Baniere });
      } else {
        res.json({ success: true, message: "Baniere mise à jour avec succès" });
      }
    } catch (error) {
      res.json({ success: false, message: `Erreur lors de la création/mise à jour de la Baniere : ${error}` });
    }
  }

  async delete(req: Request, res: Response) {
    try {
      const baniere = await Baniere.findByPk(req.params.id);
      if (!Baniere) {
        throw new Error(`Categorie non existante`)
      }
      await Baniere.destroy();
      res.json({ success: true, message: "Updated" })
    } catch (error) {
      res.json({ success: false, message: `Erreur lors de la mise à jour de la Baniere : ${error}` })
    }
  }

  list(req: Request, res: Response) {
    Baniere.findAll({ order: [["datecreation", "DESC"]] })
      .then((result) => {
        res.json({ data: result, success: true });
      })
      .catch((err) => {
        res.json({ success: false, err });
      });
  }

  findOne(req: Request, res: Response) {
    Baniere.findOne({
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
export const baniereController = new BaniereController();
