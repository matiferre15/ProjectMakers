import { Router } from 'express';
import { agendaController } from '../controllers/agendaController';

class AgendaRoutes{
    public router: Router = Router();

    constructor(){
        this.config();
    }

    config(): void{

        this.router.get('/:id', agendaController.getByUserId);

    }
}

const agendaRoutes = new AgendaRoutes();
export default agendaRoutes.router;