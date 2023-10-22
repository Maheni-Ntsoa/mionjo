import { Response, Request } from "express";
import { sendMailDepotPlainte, sendMailNousContacter, sendMailRetourNousContacter, sendMailRetourPlainte } from "../../middlewares/sendEmail";

class MailController {
    async sendMailDepotPlainte(req: Request, res: Response) {
        try {
            await sendMailDepotPlainte(req.body.nom, req.body.prenom, req.body.tel, req.body.email, req.body.plainte)
            res.json({ success: true, message: "Email envoyee" });
        } catch (error) {
            res.json({ success: false, message: `Erreur lors de l'envoie d'email : ${error}` });
        }
    }

    async sendMailNousContacter(req: Request, res: Response) {
        try {
            await sendMailNousContacter(req.body.nom, req.body.prenom, req.body.email, req.body.objet, req.body.message)
            res.json({ success: true, message: "Email envoyee" });
        } catch (error) {
            res.json({ success: false, message: `Erreur lors de l'envoie d'email : ${error}` });
        }
    }

    async sendMailRetourNousContacter(req: Request, res: Response) {
        try {
            await sendMailRetourNousContacter(req.body.to)
            res.json({ success: true, message: "Email envoyee" });
        } catch (error) {
            res.json({ success: false, message: `Erreur lors de l'envoie d'email : ${error}` });
        }
    }

    async sendMailRetourPlainte(req: Request, res: Response) {
        try {
            await sendMailRetourPlainte(req.body.to)
            res.json({ success: true, message: "Email envoyee" });
        } catch (error) {
            res.json({ success: false, message: `Erreur lors de l'envoie d'email : ${error}` });
        }
    }
}
export const mailController = new MailController();
