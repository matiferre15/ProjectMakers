import { Router } from 'express';
import { meetController } from '../controllers/meetController';

class MeetRoutes{
    public router: Router = Router();

    constructor(){
        this.config();
    }

    config(): void{
        this.router.post('/', meetController.create);
    }
}

const meetRoutes = new MeetRoutes();
export default meetRoutes.router  ;