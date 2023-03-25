import {Request, Response} from 'express';

class UserController {

    readAll = async (req: Request, res: Response) => {
        console.log(123);
        
    }
}

export default new UserController();
