import { Router } from "express";
import { ideeRecuController } from './ideerecu.controller';
const router = Router();

export default router;

router.route('/').get(ideeRecuController.list);
router.route('/:id').get(ideeRecuController.findOne);
router.route('/').post(ideeRecuController.createOrUpdate);
router.route('/:id').delete(ideeRecuController.delete);
