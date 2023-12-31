import { Router } from 'express';
import { videoController } from './video.controller';
import multer from 'multer';

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'public/uploads/videos');
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

router.route('/').get(videoController.list);
router
  .route('/findByIdGenerale/:idgenerale')
  .get(videoController.findByIdGenerale);
router.route('/:id').get(videoController.findOne);
router.route('/:id').delete(videoController.delete);
router
  .route('/createMany')
  .post(upload.array('fichiers'), videoController.createMany);
