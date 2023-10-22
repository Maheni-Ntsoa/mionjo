import { Category } from "./category.model";
import { Response, Request } from "express";

class CategoryController {
    // create(req: Request, res: Response) {
    //     Category.create(req.body)
    //         .then((value) => {
    //             res.json({ success: true, data: value });
    //         })
    //         .catch((err) => {
    //             res.json({ success: false, err });
    //         });
    // }

    // async update(req: Request, res: Response) {
    //     try {
    //         const category = await Category.findByPk(req.params.id);
    //         if (!category) {
    //             throw new Error(`Categorie non existante`)
    //         }
    //         await category.update(req.body, {
    //             where: { id: req.params.id },
    //             returning: true,
    //         });
    //         res.json({ success: true, message: "Updated" })
    //     } catch (error) {
    //         res.json({ success: false, message: `Erreur lors de la mise à jour de la catégorie : ${error}` })
    //     }
    // }

    async createOrUpdate(req: Request, res: Response) {
        try {
            const [category, created] = await Category.upsert(req.body);
            if (created) {
                res.json({ success: true, message: "Catégorie créée avec succès", data: category });
            } else {
                res.json({ success: true, message: "Catégorie mise à jour avec succès" });
            }
        } catch (error) {
            res.json({ success: false, message: `Erreur lors de la création/mise à jour de la catégorie : ${error}` });
        }
    }

    async delete(req: Request, res: Response) {
        try {
            const category = await Category.findByPk(req.params.id);
            if (!category) {
                throw new Error(`Categorie non existante`)
            }
            await category.destroy();
            res.json({ success: true, message: "Deleted" })
        } catch (error) {
            res.json({ success: false, message: `Erreur lors de la suppression de la catégorie : ${error}` })
        }
    }

    list(req: Request, res: Response) {
        Category.findAll({ order: [["datecreation", "DESC"]] })
            .then((result) => {
                res.json({ data: result, success: true });
            })
            .catch((err) => {
                res.json({ success: false, err });
            });
    }

    findOne(req: Request, res: Response) {
        Category.findOne({
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
export const categoryController = new CategoryController();
