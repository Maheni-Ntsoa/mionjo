import { Request, Response } from 'express';
import { Video } from './video.model';

class VideoController {
  findByIdGenerale(req: Request, res: Response) {
    Video.findAll({
      where: { idgenerale: req.params.idgenerale },
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
    Video.findAll({
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
    Video.findOne({
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
      let files: any = req.files;
      let data = [];
      if (files.length > 0) {
        for (let i = 0; i < files.length; i++) {
          let cleanFileName = files[i].originalname
            .toLowerCase()
            .replace(/[^a-z0-9.]/g, '');
          let idg = 0;
          if (req.body.idgenerale) {
            if (files.length === 1) {
              idg = +req.body.idgenerale;
            }
            let tempData = { idgenerale: idg, nomvideo: cleanFileName };
            data.push(tempData);
          }
        }
      }
      const createdVideos = await Video.bulkCreate(data);
      if (!createdVideos) {
        res.json({
          success: false,
          message: `Il y a une erreur dans l'insertion`,
        });
      }
      res.json({
        success: true,
        message: `${createdVideos.length} Videos ont été insérés.`,
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
      const video = await Video.findByPk(req.params.id);
      if (!video) {
        throw new Error(`Video non existante`);
      }
      await video.destroy();
      res.json({ success: true, message: 'Deleted' });
    } catch (error) {
      res.json({
        success: false,
        message: `Erreur lors de la suppression du Video : ${error}`,
      });
    }
  }
}
export const videoController = new VideoController();
