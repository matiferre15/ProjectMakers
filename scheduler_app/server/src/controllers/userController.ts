import {Request, Response } from 'express';
import pool from '../database';

class UserController{

    public async list (req: Request, res: Response) {
        const [users] = await pool.promise().query('SELECT * FROM usuarios');
        console.log(users);
        res.json(users); 
    }

    public async auth (req: Request, res: Response) {
        console.log(req.body);
        const {username, password} = req.body;
        const [users] = await pool.promise().query('SELECT * FROM usuarios WHERE nombre = ? AND password = ?', [username, password]);
        console.log(users);
        res.json(users); 
    }

    public async getByUsername(req: Request, res: Response) {
        const { user } = req.params;
        try {
          const [users] = await pool.promise().query('SELECT * FROM usuarios WHERE nombre = ?', [user]);
          if (users.length > 0) {
            res.json(users[0]);
          } else {
            res.status(404).json({ message: 'Usuario no encontrado' });
          }
        } catch (error) {
          console.log(error);
          res.status(500).json({ message: 'Error al buscar el usuario' });
        }
      }

    public async create (req: Request, res: Response): Promise<void> {
        await pool.promise().query('INSERT INTO usuarios set ?', [req.body]);
        res.json({message: 'Usuario creado'})
        
    };
    
    const = 20;

    public put(req: Request, res: Response) {
        res.json({text: 'Actualizando la meet numero: ' + req.params.id})
    }

    public delete(req: Request, res: Response) {
        res.json({text: 'Eliminando la meet numero: ' + req.params.id})
    }
}

export const userController = new UserController();