import express from 'express';
import usersApiController from '../../controllers/api/users.api.controller';

const apiRouter = express.Router();

apiRouter.get('/users',usersApiController.readAll);

export default apiRouter;