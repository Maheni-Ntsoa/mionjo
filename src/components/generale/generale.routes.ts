import { Router } from "express";
import { generaleController } from './generale.controller';
const router = Router();

export default router;

router.route('/').post(generaleController.createOrUpdate);
router.route('/interview').post(generaleController.createOrUpdateInterview);
router.route('/:id').put(generaleController.delete);
router.route('/restaurer/:id').put(generaleController.restaurer);
