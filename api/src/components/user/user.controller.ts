import bcrypt from 'bcrypt';
import { Request, Response } from 'express';
import { User } from './user.model';

class UserController {
  create(req: Request, res: Response) {
    User.findOne({
      where: { email: req.body.email },
    })
      .then((result) => {
        if (result) {
          res.json({ success: false, message: 'MAIL_TAKEN' });
        } else {
          User.create(req.body)
            .then((value) => {
              res.json({ success: true, data: value });
            })
            .catch((err) => {
              res.json({ success: false, err });
            });
        }
      })
      .catch((err) => {
        res.json({ success: false, err });
      });
  }
  async createOrUpdate(req: Request, res: Response) {
    try {
      const [user, created] = await User.upsert(req.body);
      if (created) {
        res.json({
          success: true,
          message: 'user créée avec succès',
          data: user,
        });
      } else {
        res.json({ success: true, message: 'user mise à jour avec succès' });
      }
    } catch (error) {
      res.json({
        success: false,
        message: `Erreur lors de la création/mise à jour de la user : ${error}`,
      });
    }
  }

  async login(req: Request, res: Response) {
    User.findOne({
      where: {
        email: req.body.email,
      },
    }).then((result) => {
      if (!result || !req.body.mdp) {
        console.error('INVALID_LOGIN');
      } else {
        bcrypt.compare(req.body.mdp, result.mdp, (err, isMached) => {
          if (err) {
            console.error(err.message);
          } else if (!isMached) {
            console.error('MOT DE PASSE INVALID');
          } else {
            result.mdp = '';
            res.json({ success: true, data: result });
          }
        });
      }
    });
  }

  update(req: Request, res: Response) {
    User.findOne({
      where: { id: req.params.id },
    }).then((result: any) => {
      let password = bcrypt.hashSync(req.body.motdepasse, 10);
      User.update(
        { motdepasse: password },
        {
          where: { id: req.params.id },
        },
      )
        .then((value) => {
          res.json({ success: true });
        })
        .catch((err) => {
          res.json({ success: false });
        });
    });
  }

  delete(req: Request, res: Response) {
    User.findOne({
      where: { id: req.params.id },
    }).then((result: any) => {
      if (result) {
        User.update(
          { etat: 10 },
          {
            where: { id: req.params.id },
          },
        )
          .then((value) => {
            res.json({ success: true });
          })
          .catch((err) => {
            res.json({ success: false });
          });
      }
    });
  }
}
export const userController = new UserController();
