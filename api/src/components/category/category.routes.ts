import { Router } from "express";
import { categoryController } from './category.controller';
const router = Router();

export default router;

router.route('/').get(categoryController.list);
// router.route('/').post(categoryController.create);
router.route('/:id').get(categoryController.findOne);
// router.route('/:id').patch(categoryController.update);
router.route('/').post(categoryController.createOrUpdate);
router.route('/:id').delete(categoryController.delete);
