import mongoose from 'mongoose';
const { Schema, model } = mongoose;

interface ICategory {
    name: string,
}

const categorySchema  = new Schema<ICategory>({
    name: String,
});

const Category = model<ICategory>('Category', categorySchema);

export {Category};
