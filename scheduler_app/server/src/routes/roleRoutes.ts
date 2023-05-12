import { Router } from 'express';
import { roleController } from '../controllers/roleController';

class RoleRoutes{
    public router: Router = Router();

    constructor(){
        this.config();
    }

    config(): void{
        this.router.get('/', roleController.list);
        this.router.get('/:id', roleController.getById);
        this.router.post('/', roleController.create);
        this.router.put('/:id', roleController.put)
        this.router.delete('/:id', roleController.delete)
    }
}

const roleRoutes = new RoleRoutes();
export default roleRoutes.router  ;