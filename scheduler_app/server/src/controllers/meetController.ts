import { Request, Response } from "express";
import pool from "../database";

class MeetController {
  public async create(req: Request, res: Response): Promise<void> {
    try {
      // extraer los valores recibidos del frontend
      console.log(req.body);

      const { nombre, fecha, descripcion, participantes } = req.body;
      console.log(nombre, fecha, descripcion, participantes)
      // insertar la nueva reunión en la tabla de reuniones
      const [result] = await pool
        .promise()
        .query(
          "INSERT INTO reuniones (nombre, fecha, descripcion, creador_id) VALUES (?, ?, ?, ?)",
          [nombre, fecha, descripcion, 1]
        );
      const reunionId = result.insertId; // obtener el ID de la reunión recién creada
      // insertar cada participante en la tabla de participantes
      for (const participante of participantes) {
        console.log(participante);
        console.log("SELECT id FROM usuarios WHERE nombre = ?", [participante]);
        const [userResult] = await pool
          .promise()
          .query("SELECT id FROM usuarios WHERE nombre = ?", [participante]);
        console.log(userResult[0].id); // revisar el contenido del objeto que devuelve la función
        if (userResult.length > 0) {
          const usuarioId = userResult[0].id;
          await pool
            .promise()
            .query(
              "INSERT INTO participantes (reunion_id, usuario_id) VALUES (?, ?)",
              [reunionId, usuarioId]
            );
        } else {
          console.log(
            `No se encontró ningún usuario con el nombre ${participante}`
          );
        }
      }
      // responder con un mensaje de éxito
      res.status(201).json({ message: "Reunión creada correctamente" });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Error al crear la reunión" });
    }
  }
}

export const meetController = new MeetController();
