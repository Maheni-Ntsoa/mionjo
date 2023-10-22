import { Router } from "express";
import { usercController } from "./userc.controller";
const router = Router();

export default router;

router.route('/').get(usercController.list);
router.route('/:id').get(usercController.findOne);
