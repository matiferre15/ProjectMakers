import { Router } from 'express';
import { userController } from '../controllers/userController';

class UserRoutes{
    public router: Router = Router();

    constructor(){
        this.config();
    }

    config(): void{
        this.router.get('/', userController.list);
        this.router.get('/:id', userController.getById);
        this.router.post('/', userController.create);
        this.router.put('/:id', userController.put)
        this.router.delete('/:id', userController.delete)
        this.router.get('/:username/:password', userController.auth);
    }
}

const userRoutes = new UserRoutes();
export default userRoutes.router  ;