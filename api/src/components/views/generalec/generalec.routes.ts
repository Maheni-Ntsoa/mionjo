import { Router } from 'express';
import { generaleCController } from './generalec.controller';
const router = Router();

export default router;

router.route('/').get(generaleCController.list);
router.route('/interview').get(generaleCController.listInterview);
router.route('/:id').get(generaleCController.findOne);
router.route('/allannonces/:idcategorie').get(generaleCController.findByIdCate);
router.route('/search/:exp').get(generaleCController.search);
router
  .route('/:idcategorie/:idrubrique')
  .get(generaleCController.findByIdCateAnfIdRubri);
router
  .route('/corbeille/:idcategorie/:idrubrique')
  .get(generaleCController.corbeille);
