import { Router } from 'express';
import multer from 'multer';
import path from 'path';
import { documentController } from './document.controller';

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(process.cwd(), 'public/uploads/documents'));
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

router.route('/').get(documentController.list);
router.route('/download/:filename').get(documentController.downaloadDoc);
router
  .route('/findByIdGenerale/:idgenerale')
  .get(documentController.findByIdGenerale);
router.route('/:id').get(documentController.findOne);
router.route('/:id').delete(documentController.delete);
router
  .route('/createMany')
  .post(upload.array('fichiers'), documentController.createMany);
