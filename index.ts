import express from 'express';
import multer from 'multer';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import route from './src/routers';
dotenv.config();

const app = express();
const PORT = process.env.PORT || 8002

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

route(app)


app.listen(PORT, () => {
    console.log('Server is running at ' + `http://localhost:${PORT}`)
});