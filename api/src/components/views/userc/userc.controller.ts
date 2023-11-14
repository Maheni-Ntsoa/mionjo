import { Request, Response } from 'express';
import { Op } from 'sequelize';
import { Userc } from './userc.model';

class UsercController {
  list(req: Request, res: Response) {
    Userc.findAll({
      where: {
        [Op.and]: [{ etat: { [Op.not]: 10 } }],
      },
      order: [['datecreation', 'DESC']],
    })
      .then((result) => {
        res.json({ data: result, success: true });
      })
      .catch((err) => {
        res.json({ success: false, err });
      });
  }

  findOne(req: Request, res: Response) {
    Userc.findOne({
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
export const usercController = new UsercController();
