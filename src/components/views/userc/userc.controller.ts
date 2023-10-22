import { Response, Request } from "express";
import { Userc } from "./userc.model";

class UsercController {
    list(req: Request, res: Response) {
        Userc.findAll({ order: [["datecreation", "DESC"]] })
            .then((result) => {
                res.json({ data: result, success: true });
            })
            .catch((err) => {
                res.json({ success: false, err });
            });
    }

    findOne(req: Request, res: Response) {
        Userc.findOne({
            where: { id: req.params.id },
        })
            .then((result) => {
                res.json({ success: true, data: result });
            })
            .catch((err) => {
                res.json({ success: false, err });
            });
    }
}
export const usercController = new UsercController();
