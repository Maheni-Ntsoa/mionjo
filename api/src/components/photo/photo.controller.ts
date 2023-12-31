import { Request, Response } from 'express';
import sequelize from 'sequelize';
import { Photo } from './photo.model';

class PhotoController {
  findStatPlainte(req: Request, res: Response) {
    Photo.findAll({
      where: {
        idgenerale: 1,
        evenement: req.body.evenement,
        etat: 2,
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

  findStatEvent(req: Request, res: Response) {
    Photo.findAll({
      where: {
        idgenerale: 1,
        evenement: {
          [sequelize.Op.not]: null,
        },
        etat: 2,
      },
      attributes: [
        [sequelize.fn('DISTINCT', sequelize.col('evenement')), 'evenement'],
      ],
      order: [['datecreation', 'DESC']],
    })
      .then((result) => {
        const data: string[] = result.map((item) => item.evenement);
        res.json({ data, success: true });
      })
      .catch((err) => {
        res.json({ success: false, err });
      });
  }

  findAllStatPlainte(req: Request, res: Response) {
    Photo.findAll({
      where: { idgenerale: 1, etat: 2 },
      order: [['datecreation', 'DESC']],
    })
      .then((result) => {
        res.json({ data: result, success: true });
      })
      .catch((err) => {
        res.json({ success: false, err });
      });
  }

  findByIdGenerale(req: Request, res: Response) {
    Photo.findAll({
      where: { idgenerale: req.params.idgenerale, etat: 0 },
      order: [['datecreation', 'DESC']],
    })
      .then((result) => {
        res.json({ data: result, success: true });
      })
      .catch((err) => {
        res.json({ success: false, err });
      });
  }

  findPhotoEvent(req: Request, res: Response) {
    Photo.findAll({
      where: {
        idgenerale: 1,
        evenement: {
          [sequelize.Op.not]: null,
        },
        etat: 0,
      },
      attributes: [
        [sequelize.fn('DISTINCT', sequelize.col('evenement')), 'evenement'],
      ],
      order: [['datecreation', 'DESC']],
    })
      .then((result) => {
        const data: string[] = result.map((item) => item.evenement);
        res.json({ data, success: true });
      })
      .catch((err) => {
        res.json({ success: false, err });
      });
  }

  async createManyStat(req: Request, res: Response) {
    try {
      let files: any = req.files;
      let data = [];
      if (files.length > 1) {
        let idg = +req.body.idgenerale[0];
        let event = req.body.evenement[0];
        for (let i = 0; i < files.length; i++) {
          let cleanFileName = files[i].originalname
            .toLowerCase()
            .replace(/[^a-z0-9.]/g, '');
          let tempData = {
            idgenerale: idg,
            nomphoto: cleanFileName,
            evenement: event,
            etat: 2,
          };
          data.push(tempData);
        }
      } else if (files.length === 1) {
        let idg = +req.body.idgenerale;
        let event = req.body.evenement;
        for (let i = 0; i < files.length; i++) {
          let cleanFileName = files[i].originalname
            .toLowerCase()
            .replace(/[^a-z0-9.]/g, '');
          let tempData = {
            idgenerale: idg,
            nomphoto: cleanFileName,
            evenement: event,
          };
          data.push(tempData);
        }
      }
      const createdPhotos = await Photo.bulkCreate(data);
      if (!createdPhotos) {
        res.json({
          success: false,
          message: `Il y a une erreur dans l'insertion`,
        });
      }
      res.json({
        success: true,
        message: ` Photos ont été insérés.`,
      });
      console.log('here');
    } catch (error) {
      res.json({
        success: false,
        message: `Il y a une erreur dans l'insertion ${error}`,
      });
    }
  }

  findPhotosByEvent(req: Request, res: Response) {
    Photo.findAll({
      where: {
        idgenerale: 1,
        evenement: req.body.evenement,
        etat: 0,
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

  list(req: Request, res: Response) {
    Photo.findAll({
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
    Photo.findOne({
      where: { id: req.params.id, etat: 0 },
    })
      .then((result) => {
        res.json({ success: true, data: result });
      })
      .catch((err) => {
        res.json({ success: false, err });
      });
  }

  async createMany(req: Request, res: Response) {
    try {
      let files: any = req.files;
      let data = [];
      if (files.length > 1) {
        let idg = +req.body.idgenerale[0];
        let event = req.body.evenement[0];
        for (let i = 0; i < files.length; i++) {
          let cleanFileName = files[i].originalname
            .toLowerCase()
            .replace(/[^a-z0-9.]/g, '');
          let tempData = {
            idgenerale: idg,
            nomphoto: cleanFileName,
            evenement: event,
          };
          data.push(tempData);
        }
      } else if (files.length === 1) {
        let idg = +req.body.idgenerale;
        let event = req.body.evenement;
        for (let i = 0; i < files.length; i++) {
          let cleanFileName = files[i].originalname
            .toLowerCase()
            .replace(/[^a-z0-9.]/g, '');
          let tempData = {
            idgenerale: idg,
            nomphoto: cleanFileName,
            evenement: event,
          };
          data.push(tempData);
        }
      }
      const createdPhotos = await Photo.bulkCreate(data);
      if (!createdPhotos) {
        res.json({
          success: false,
          message: `Il y a une erreur dans l'insertion`,
        });
      }
      res.json({
        success: true,
        message: ` Photos ont été insérés.`,
      });
    } catch (error) {
      res.json({
        success: false,
        message: `Il y a une erreur dans l'insertion ${error}`,
      });
    }
  }

  async delete(req: Request, res: Response) {
    try {
      const photo = await Photo.findByPk(req.params.id);
      if (!photo) {
        throw new Error(`Photo non existante`);
      }
      await photo.destroy();
      res.json({ success: true, message: 'Deleted' });
    } catch (error) {
      res.json({
        success: false,
        message: `Erreur lors de la suppression du Photo : ${error}`,
      });
    }
  }
}
export const photoController = new PhotoController();
