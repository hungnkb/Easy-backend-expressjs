import mongoose, { SchemaType } from 'mongoose';
const { Schema, model } = mongoose;

interface IProduct {
    name: string,
    price: string,
    stock: string,
    categories: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Category' }],
}

const productSchema = new Schema<IProduct>({
    name: String,
    price: String,
    stock: String,
    categories: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Category' }],
});

const Product = model<IProduct>('Product', productSchema);

export { Product };
