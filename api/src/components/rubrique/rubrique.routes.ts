import { Router } from "express";
import { rubriqueController } from './rubrique.controller';
const router = Router();

export default router;

router.route('/').get(rubriqueController.list);
router.route('/').post(rubriqueController.createOrUpdate);
router.route('/:id').get(rubriqueController.findOne);
router.route('/:id').post(rubriqueController.delete);
