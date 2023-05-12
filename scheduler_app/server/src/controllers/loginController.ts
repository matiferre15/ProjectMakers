import {Request, Response } from 'express';
import pool from '../database';

class LoginController{

    public async auth (req: Request, res: Response) {
        console.log('este es el ' + req.body);
        const {username, password} = req.body;
        console.log('estas son las variables' + username, password)
        const [users] = await pool.promise().query('SELECT * FROM usuarios WHERE nombre = ? AND password = ?', [username, password]);
        console.log(users);
        res.json(users); 
    }
}

export const loginController = new LoginController();