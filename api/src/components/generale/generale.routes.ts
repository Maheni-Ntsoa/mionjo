import { Router } from 'express';
import { generaleController } from './generale.controller';
const router = Router();

export default router;

router.route('/').post(generaleController.createOrUpdate);
router
  .route('/international/:id')
  .put(generaleController.updateInternationDownload);
router.route('/national/:id').put(generaleController.updateNationalDownload);
router.route('/interview').post(generaleController.createOrUpdateInterview);
router.route('/:id').put(generaleController.delete);
router.route('/restaurer/:id').put(generaleController.restaurer);
