import { Request, Response } from 'express';
import { PhotoMois } from './photoMois.model';

class PhotoMoisController {
  list(req: Request, res: Response) {
    PhotoMois.findAll({
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
    PhotoMois.findOne({
      where: { id: req.params.id },
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
      // await PhotoMois.findAll({
      //   order: [['datecreation', 'DESC']],
      // })
      //   .then(async (result) => {
      //     if (result[0]) {
      //       let tempData = {
      //         idgenerale: 1,
      //         nomphoto: result[0].dataValues.nomphoto,
      //       };
      //       await Photo.create(tempData);
      //     }
      //   })
      //   .catch((err) => {
      //     res.json({ success: false, err });
      //   });

      let files: any = req.files;
      let data = [];
      if (files.length > 0) {
        for (let i = 0; i < files.length; i++) {
          let cleanFileName = files[i].originalname
            .toLowerCase()
            .replace(/[^a-z0-9.]/g, '');
          let tempData = { nomphoto: cleanFileName, resume: req.body.resume };
          data.push(tempData);
        }
      }
      const createdPhotoMoiss = await PhotoMois.bulkCreate(data);
      if (!createdPhotoMoiss) {
        res.json({
          success: false,
          message: `Il y a une erreur dans l'insertion`,
        });
      }
      res.json({
        success: true,
        message: `PhotoMoiss ont été insérés.`,
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
      const photoMois = await PhotoMois.findByPk(req.params.id);
      if (!photoMois) {
        throw new Error(`photoMois non existante`);
      }
      await photoMois.destroy();
      res.json({ success: true, message: 'Deleted' });
    } catch (error) {
      res.json({
        success: false,
        message: `Erreur lors de la suppression du PhotoMois : ${error}`,
      });
    }
  }
}
export const photoMoisController = new PhotoMoisController();
