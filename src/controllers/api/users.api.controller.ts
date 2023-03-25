import {Request, Response} from 'express';
import { User } from '../../schemas/User.schema';

class UserController {

    readAll = async (req: Request, res: Response) => {
        console.log(123);
        User.findOne({})
    }
}

export default new UserController();
