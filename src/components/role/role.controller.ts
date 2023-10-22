import momentTZ from "moment-timezone";
import { Response, Request } from "express";
import { Role } from "./role.model";

function getTime(time: string | Date | undefined) {
  return moment(time).format("yyyy-MM-DD HH:mm:ss");
}

const moment = (...args: (string | Date | undefined)[]) => {
  return momentTZ(...args).tz("Indian/Mayotte");
};

class RoleController {
  async createOrUpdate(req: Request, res: Response) {
    try {
      const [role, created] = await Role.upsert(req.body);
      if (created) {
        res.json({ success: true, message: "Role créée avec succès", data: Role });
      } else {
        res.json({ success: true, message: "Role mise à jour avec succès" });
      }
    } catch (error) {
      res.json({ success: false, message: `Erreur lors de la création/mise à jour de la Role : ${error}` });
    }
  }

  async delete(req: Request, res: Response) {
    try {
      const role = await Role.findByPk(req.params.id);
      if (!Role) {
        throw new Error(`Categorie non existante`)
      }
      await Role.destroy();
      res.json({ success: true, message: "Updated" })
    } catch (error) {
      res.json({ success: false, message: `Erreur lors de la mise à jour de la Role : ${error}` })
    }
  }

  list(req: Request, res: Response) {
    Role.findAll({ order: [["datecreation", "DESC"]] })
      .then((result) => {
        res.json({ data: result, success: true });
      })
      .catch((err) => {
        res.json({ success: false, err });
      });
  }

  findOne(req: Request, res: Response) {
    Role.findOne({
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
export const roleController = new RoleController();
