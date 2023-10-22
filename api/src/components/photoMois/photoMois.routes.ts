import { Router } from "express";
import { photoMoisController } from './photoMois.controller';
import multer from 'multer';

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'public/uploads/photos')
    },
    filename: function (req, file, cb) {
        let cleanFileName = file.originalname.toLowerCase().replace(/[^a-z0-9.]/g, '');
        cb(null, cleanFileName)
    }
})

const upload = multer({ storage: storage });
const router = Router();

export default router;

// router.route('/').get(roleController.list);
router.route('/').get(photoMoisController.list);
router.route('/:id').get(photoMoisController.findOne);
router.route('/:id').delete(photoMoisController.delete);
router.route('/createMany').post(upload.array('fichiers'), photoMoisController.createMany);
