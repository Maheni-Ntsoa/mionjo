import { Request, Response } from 'express';
import { GeneraleC } from '../views/generalec/generalec.model';
import { Generale } from './generale.model';

function getClientIp(req: Request): string {
  const forwarded = req.headers['x-forwarded-for'];
  if (typeof forwarded === 'string' && forwarded.length > 0) {
    return forwarded.split(',')[0].trim();
  }
  const remote = req.socket.remoteAddress ?? '';
  return remote.replace(/^::ffff:/, '');
}

async function isMadagascarIp(ip: string): Promise<boolean> {
  if (!ip || ip === '127.0.0.1' || ip === '::1') {
    return false;
  }

  try {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 4000);
    const response = await fetch(`https://ipapi.co/${ip}/json/`, {
      signal: controller.signal,
    });
    clearTimeout(timeout);

    if (!response.ok) {
      return false;
    }

    const data = (await response.json()) as {
      country_name?: string;
      country_code?: string;
    };

    return (
      data.country_name === 'Madagascar' || data.country_code === 'MG'
    );
  } catch {
    return false;
  }
}

class GeneraleController {
  async incrementDownload(req: Request, res: Response) {
    try {
      const record = await Generale.findOne({
        where: { id: req.params.id },
      });

      if (!record) {
        res.status(404).json({
          success: false,
          message: 'Annonce introuvable',
        });
        return;
      }

      const isNational = await isMadagascarIp(getClientIp(req));
      const field = isNational ? 'nbdownnational' : 'nbdowninter';
      const current = Number(record.get(field)) || 0;

      const [updatedRows] = await Generale.update(
        { [field]: current + 1 },
        { where: { id: req.params.id } },
      );

      if (updatedRows !== 1) {
        res.json({
          success: false,
          message: 'Aucun enregistrement mis à jour',
        });
        return;
      }

      const updated = await Generale.findOne({
        where: { id: req.params.id },
      });

      res.json({
        success: true,
        message: 'Nbre de telechargement augmenté',
        nbdownnational: Number(updated?.nbdownnational) || 0,
        nbdowninter: Number(updated?.nbdowninter) || 0,
      });
    } catch {
      res.status(500).json({
        success: false,
        message: 'Erreur lors de la mise à jour du téléchargement',
      });
    }
  }

  async updateInternationDownload(req: Request, res: Response) {
    try {
      const record = await Generale.findOne({
        where: { id: req.params.id },
      });

      if (!record) {
        res.status(404).json({
          success: false,
          message: 'Annonce introuvable',
        });
        return;
      }

      const current = Number(record.nbdowninter) || 0;
      const [updatedRows] = await Generale.update(
        { nbdowninter: current + 1 },
        { where: { id: req.params.id } },
      );

      if (updatedRows === 1) {
        res.json({
          success: true,
          message: 'Nbre de telechargement augmenté',
        });
      } else {
        res.json({
          success: false,
          message: 'Aucun enregistrement mis à jour',
        });
      }
    } catch {
      res
        .status(500)
        .json({ success: false, message: 'Erreur de mise à jour' });
    }
  }

  async updateNationalDownload(req: Request, res: Response) {
    try {
      const record = await Generale.findOne({
        where: { id: req.params.id },
      });

      if (!record) {
        res.status(404).json({
          success: false,
          message: 'Annonce introuvable',
        });
        return;
      }

      const current = Number(record.nbdownnational) || 0;
      const [updatedRows] = await Generale.update(
        { nbdownnational: current + 1 },
        { where: { id: req.params.id } },
      );

      if (updatedRows === 1) {
        res.json({
          success: true,
          message: 'Nbre de telechargement augmenté',
        });
      } else {
        res.json({
          success: false,
          message: 'Aucun enregistrement mis à jour',
        });
      }
    } catch {
      res
        .status(500)
        .json({ success: false, message: 'Erreur de mise à jour' });
    }
  }

  async createOrUpdate(req: Request, res: Response) {
    try {
      if (req.body.titulairemarche) {
        req.body.etatannonce = 10;
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
