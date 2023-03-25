import { Request, Response } from 'express';
import { Product } from '../../schemas/Product.schema'

class ProductApiController {

    create = async (req: Request, res: Response): Promise<void> => {
        try {
            let { name, price, stock, categories } = req.body;
            console.log(name, price, stock, categories );
            
            let newProduct = Product.create({ name, price, stock, categories }, )
            if (newProduct) {
                res.status(200).json({ newProduct })
            } else {
                res.status(404).json({ message: 'Error creating product' })
            }
        } catch (err) {
            console.log('Error at products.api.controller.readAll ' + err.message);
        }
    }

    readAll = async (req: Request, res: Response): Promise<void> => {
        try {
            let ProductList = await Product.find().populate('categories')
            if (ProductList) {
                res.status(200).json(ProductList);
            } else {
                res.status(404).json({ message: 'Error getting all products'})
            }
        } catch (err) {
            console.log('Error at products.api.controller.create' + err.message);
        }
    }
}

export default new ProductApiController();
