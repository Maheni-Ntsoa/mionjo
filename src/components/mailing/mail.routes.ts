import { Router } from "express";
import { mailController } from './mail.controller';
const router = Router();

export default router;

router.route('/sendMailDepotPlainte').post(mailController.sendMailDepotPlainte);
router.route('/sendMailNousContacter').post(mailController.sendMailNousContacter);
router.route('/sendMailRetourNousContacter').post(mailController.sendMailRetourNousContacter);
router.route('/sendMailRetourPlainte').post(mailController.sendMailRetourPlainte);
