import apiRouter from "./api";
import {Application, Router} from 'express'

const route = (app: Application): any => {
    app.use('/api', apiRouter)
}

export default route;
