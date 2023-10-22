import { Response, Request } from 'express';
import { Op } from 'sequelize';
import { GeneraleC } from './generalec.model';

class GeneraleCController {
  findByIdCateAnfIdRubri(req: Request, res: Response) {
    GeneraleC.findAll({
      where: {
        [Op.and]: [
          { idcategorie: req.params.idcategorie },
          { idrubrique: req.params.idrubrique },
          { etat: { [Op.not]: 10 } },
          { etat: { [Op.not]: 50 } },
          { id: { [Op.not]: 0 } },
        ],
      },
      order: [['datecreation', 'DESC']],
    })
      .then((result) => {
        res.json(result);
      })
      .catch((err) => {
        res.json(err);
      });
  }

  findByIdCate(req: Request, res: Response) {
    GeneraleC.findAll({
      where: {
        [Op.and]: [
          { idcategorie: req.params.idcategorie },
          { etat: { [Op.not]: 10 } },
          { id: { [Op.not]: 0 } },
        ],
      },
      order: [['datelimit', 'DESC']],
    })
      .then((result) => {
        res.json(result);
      })
      .catch((err) => {
        res.json(err);
      });
  }

  corbeille(req: Request, res: Response) {
    GeneraleC.findAll({
      where: {
        [Op.and]: [
          { idcategorie: req.params.idcategorie },
          { idrubrique: req.params.idrubrique },
          { etat: { [Op.not]: 0 } },
          { id: { [Op.not]: 0 } },
        ],
      },
      order: [['datecreation', 'DESC']],
    })
      .then((result) => {
        res.json(result);
      })
      .catch((err) => {
        res.json(err);
      });
  }

  search(req: Request, res: Response) {
    GeneraleC.findAll({
      where: {
        [Op.and]: [
          { etat: { [Op.not]: 10 } },
          { id: { [Op.not]: 0 } },
          {
            // [Op.or]: [
            //     { titre: { [Op.regexp]: req.params.exp } },
            //     { contenu: { [Op.regexp]: req.params.exp } }
            // ]
            [Op.or]: [
              { titre: { [Op.like]: '%' + req.params.exp + '%' } },
              { contenu: { [Op.like]: '%' + req.params.exp + '%' } },
            ],
          },
        ],
      },
      order: [['datecreation', 'DESC']],
    })
      .then((result) => {
        res.json(result);
      })
      .catch((err) => {
        res.json(err);
      });
  }

  list(req: Request, res: Response) {
    GeneraleC.findAll({ order: [['datecreation', 'DESC']] })
      .then((result) => {
        res.json(result);
      })
      .catch((err) => {
        res.json(err);
      });
  }

  listInterview(req: Request, res: Response) {
    GeneraleC.findAll({
      where: { etat: 50 },
      order: [['datecreation', 'DESC']],
    })
      .then((result) => {
        res.json(result);
      })
      .catch((err) => {
        res.json(err);
      });
  }

  findOne(req: Request, res: Response) {
    GeneraleC.findOne({
      where: { id: req.params.id },
    })
      .then((result) => {
        res.json(result);
      })
      .catch((err) => {
        res.json(err);
      });
  }
}
export const generaleCController = new GeneraleCController();
