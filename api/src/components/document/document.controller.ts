import { Request, Response } from 'express';
import { Document } from './document.model';
import path from 'path';

class DocumentController {
  downaloadDoc(req: Request, res: Response) {
    const filename = req.params.filename;
    const filePath = path.join(
      __dirname,
      '../../../public/uploads/documents',
      filename,
    );
    res.setHeader('Content-Disposition', `attachment; filename=${filename}`);
    res.setHeader('Content-Type', 'application/octet-stream');
    res.download(filePath, filename, (err) => {
      if (err) {
        console.error('Erreur lors du téléchargement du fichier :', err);
        res.status(500).send('Erreur lors du téléchargement du fichier');
      }
    });
  }

  findByIdGenerale(req: Request, res: Response) {
    Document.findAll({
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
    Document.findAll({
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
    Document.findOne({
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
      if (files.length > 1) {
        let idg = +req.body.idgenerale[0];
        for (let i = 0; i < files.length; i++) {
          let cleanFileName = files[i].originalname
            .toLowerCase()
            .replace(/[^a-z0-9.]/g, '');
          let tempData = {
            idgenerale: idg,
            nomdocument: cleanFileName,
            typedocument: req.body.typedocument,
          };
          data.push(tempData);
        }
      } else if (files.length === 1) {
        let idg = +req.body.idgenerale;
        for (let i = 0; i < files.length; i++) {
          let cleanFileName = files[i].originalname
            .toLowerCase()
            .replace(/[^a-z0-9.]/g, '');
          let tempData = {
            idgenerale: idg,
            nomdocument: cleanFileName,
            typedocument: req.body.typedocument,
          };
          data.push(tempData);
        }
      }
      const createdDocuments = await Document.bulkCreate(data);
      if (!createdDocuments) {
        res.json({
          success: false,
          message: `Il y a une erreur dans l'insertion`,
        });
      }
      res.json({
        success: true,
        message: `documents ont été insérés.`,
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
      const document = await Document.findByPk(req.params.id);
      if (!document) {
        throw new Error(`Document non existante`);
      }
      await document.destroy();
      res.json({ success: true, message: 'Deleted' });
    } catch (error) {
      res.json({
        success: false,
        message: `Erreur lors de la suppression du document : ${error}`,
      });
    }
  }
}
export const documentController = new DocumentController();
