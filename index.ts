import express from 'express';
import multer from 'multer';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import route from './src/routers';
import cors from 'cors'
import connectDB from './src/configs/db.config';
import mongoose from 'mongoose';
dotenv.config();

mongoose.set('strictQuery', true);

const app = express();
const PORT = process.env.PORT || 8002

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

route(app);

(async () => {
    try {
        await connectDB();
        app.listen(PORT, () => {
            console.log('Server is running at ' + `http://localhost:${PORT}`)
        });
    } catch (err) {
        console.log(err);

    }
})();


