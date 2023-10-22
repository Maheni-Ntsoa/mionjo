import { Router } from "express";
import { baniereController } from './baniere.controller';
const router = Router();

export default router;

router.route('/').get(baniereController.list);
router.route('/').post(baniereController.createOrUpdate);
router.route('/:id').get(baniereController.findOne);
router.route('/:id').post(baniereController.delete);