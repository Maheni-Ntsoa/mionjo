import { Request, Response } from 'express';
import { Generale } from './generale.model';
import { GeneraleC } from '../views/generalec/generalec.model';
import { generaleCController } from '../views/generalec/generalec.controller';

class GeneraleController {
  async createOrUpdate(req: Request, res: Response) {
    try {
      const [generale, created] = await Generale.upsert(req.body);
      if (created) {
        res.json({
          success: true,
          message: 'Generale créée avec succès',
          data: generale,
        });
      } else {
        res.json({
          success: true,
          message: 'Generale mise à jour avec succès',
        });
      }
    } catch (error) {
      res.json({
        success: false,
        message: `Erreur lors de la création/mise à jour de la Generale : ${error}`,
      });
    }
  }

  async createOrUpdateInterview(req: Request, res: Response) {
    req.body.etat = 50;
    try {
      if (!req.body.id) {
        GeneraleC.findAll({
          where: { etat: 50 },
          order: [['datecreation', 'DESC']],
        })
          .then(async (result) => {
            if (result[0]) {
              result[0].dataValues.idcategorie = 1;
              result[0].dataValues.idrubrique = 1;
              result[0].dataValues.etat = 0;
              await Generale.upsert(result[0].dataValues);
            }
          })
          .catch((err) => {
            res.json(err);
          });
      }
      const [generale, created] = await Generale.upsert(req.body);
      if (created) {
        res.json({
          success: true,
          message: 'Generale créée avec succès',
          data: generale,
        });
      } else {
        res.json({
          success: true,
          message: 'Generale mise à jour avec succès',
        });
      }
    } catch (error) {
      res.json({
        success: false,
        message: `Erreur lors de la création/mise à jour de la Generale : ${error}`,
      });
    }
  }

  delete(req: Request, res: Response) {
    Generale.findOne({
      where: { id: req.params.id },
    }).then((result: any) => {
      Generale.update({ etat: 10 }, { where: { id: req.params.id } })
        .then((result) => {
          if (result[0] === 1) {
            res.json({ success: true, message: 'Suppression réussie' });
          } else {
            res.json({
              success: false,
              message: 'Aucun enregistrement mis à jour',
            });
          }
        })
        .catch((err) => {
          res
            .status(500)
            .json({ success: false, message: 'Erreur de Suppression' });
        });
    });
  }

  restaurer(req: Request, res: Response) {
    Generale.findOne({
      where: { id: req.params.id },
    }).then((result: any) => {
      Generale.update({ etat: 0 }, { where: { id: req.params.id } })
        .then((result) => {
          if (result[0] === 1) {
            res.json({ success: true, message: 'Suppression réussie' });
          } else {
            res.json({
              success: false,
              message: 'Aucun enregistrement mis à jour',
            });
          }
        })
        .catch((err) => {
          res
            .status(500)
            .json({ success: false, message: 'Erreur de Suppression' });
        });
    });
  }
}
export const generaleController = new GeneraleController();
