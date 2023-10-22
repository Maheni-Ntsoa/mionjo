import { Router } from 'express';
import { photoController } from './photo.controller';
import multer from 'multer';

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'public/uploads/photos');
  },
  filename: function (req, file, cb) {
    let cleanFileName = file.originalname
      .toLowerCase()
      .replace(/[^a-z0-9.]/g, '');
    cb(null, cleanFileName);
  },
});

const upload = multer({ storage: storage });
const router = Router();

export default router;

// router.route('/').get(roleController.list);
router.route('/').get(photoController.list);
router
  .route('/findByIdGenerale/:idgenerale')
  .get(photoController.findByIdGenerale);
router.route('/:id').get(photoController.findOne);
router.route('/:id').delete(photoController.delete);
router
  .route('/createMany')
  .post(upload.array('fichiers'), photoController.createMany);
