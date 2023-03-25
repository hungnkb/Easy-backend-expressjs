import express, { Request, Response } from 'express';
import { Category } from '../../schemas/Category.schema';

class CategoryApiController {

    create = async (req: Request, res: Response): Promise<void> => {
        try {
            let name = req.body.name;
            let newCategory = await Category.create({name});
            if (newCategory) {
                res.status(200).json(Category);
            } else {
                res.status(400).json({ message: 'Error creating category' })
            }

        } catch (err) {
            console.log('error at categories.api.controller.create ' + err.message);
        }
    }

    read = async (req: Request, res: Response): Promise<void> => {
        try {
            let id = req.params.id;
            let category = await Category.aggregate([{
               $lookup: {
                from: 'product',
                localField: 'product',
                foreignField: 'product',
                as: 'product'
               }
            }])
            
            console.log(category);
            
        } catch (err) {
            console.log('error at categories.api.controller.read ' + err.message);
        }
    }
}

export default new CategoryApiController();
