import { Router } from "express";
import { roleController } from './role.controller';
const router = Router();

export default router;

router.route('/').get(roleController.list);
router.route('/').post(roleController.createOrUpdate);
router.route('/:id').get(roleController.findOne);
router.route('/:id').post(roleController.delete);