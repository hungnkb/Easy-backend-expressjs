import express from 'express';
import productsApiController from '../../controllers/api/products.api.controller';
import categoriesApiController from '../../controllers/api/categories.api.controller';
import usersApiController from '../../controllers/api/users.api.controller';


const apiRouter = express.Router();

apiRouter.get('/users', usersApiController.readAll);

apiRouter.post('/categories', categoriesApiController.create);
apiRouter.get('/categories/:id', categoriesApiController.read)

apiRouter.get('/products', productsApiController.readAll);
apiRouter.post('/products', productsApiController.create);

export default apiRouter; 