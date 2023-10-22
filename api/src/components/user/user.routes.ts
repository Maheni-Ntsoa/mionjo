import { Router } from "express";
import { userController } from './user.controller';
const router = Router();

export default router;

router.route('/').post(userController.create);
router.route('/login').post(userController.login);


