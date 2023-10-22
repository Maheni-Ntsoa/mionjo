import { Response } from "express";
import _ from "lodash";
import multer, { FileFilterCallback } from "multer"; // needed, don't delete

export const uploadFile = async (res: Response, file: any, dossier: string) => {
    try {
        if (!file) {
            res.send({
                status: false,
                message: "No file uploaded",
            });
        } else {
            //Use the mv() method to place the file in upload directory (i.e. "uploads")
            // We need to import multer cause io ny mampi creer anle dossier automatique
            file.mv(`public/uploads/${dossier}/${file.name}`);
        }
    } catch (error) {
        throw error;
    }
}