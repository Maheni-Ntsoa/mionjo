import { Router } from 'express';
import multer from 'multer';
import { photoController } from './photo.controller';

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
router.route('/event').get(photoController.findPhotoEvent);
router.route('/photoByEvent').post(photoController.findPhotosByEvent);
router.route('/statEvent').get(photoController.findStatEvent);
router.route('/statPlainte').post(photoController.findStatPlainte);
router.route('/').get(photoController.list);
router
  .route('/findByIdGenerale/:idgenerale')
  .get(photoController.findByIdGenerale);
router.route('/findAllStatPlainte').get(photoController.findAllStatPlainte);
router.route('/:id').get(photoController.findOne);
router.route('/:id').delete(photoController.delete);
router
  .route('/createMany')
  .post(upload.array('fichiers'), photoController.createMany);
router
  .route('/createManyStatPlainte')
  .post(upload.array('fichiers'), photoController.createManyStat);
