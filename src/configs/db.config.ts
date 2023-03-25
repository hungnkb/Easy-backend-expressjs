import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

const connectDB = async () => {
    mongoose.connect(process.env.DB_HOST).then(() => {
        console.log('Database connected')
    }).catch(err => {
        console.log('Database connection error: ' + err.message)
    });
}

export default connectDB;
