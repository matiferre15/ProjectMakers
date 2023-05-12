import {Request, Response } from 'express';
import pool from '../database';

class RoleController{

    public async list (req: Request, res: Response) {
        const [roles] = await pool.promise().query('SELECT * FROM roles');
        console.log(roles);
        res.json(roles); 
    }

    public getById (req: Request, res: Response) {
        res.json({text: 'Listando un rol'})
    }
    
    public async create (req: Request, res: Response): Promise<void> {
        await pool.promise().query('INSERT INTO roles set ?', [req.body]);
        res.json({message: 'Rol creado'})
        
    }

    public async put(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        await pool.promise().query('UPDATE roles set ? WHERE id = ?', [req.body, id]);
        res.json({message: 'Rol actualizado'})
    }

    public async delete(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        await pool.promise().query('DELETE FROM roles WHERE id = ?', [id]);
        res.json({message: 'El rol ha sido eliminado'})
    }
}

export const roleController = new RoleController();