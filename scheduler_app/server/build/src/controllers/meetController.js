"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.meetController = void 0;
const database_1 = __importDefault(require("../database"));
class MeetController {
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                // extraer los valores recibidos del frontend
                console.log(req.body);
                const { nombre, fecha, descripcion, participantes } = req.body;
                console.log(nombre, fecha, descripcion, participantes);
                // insertar la nueva reunión en la tabla de reuniones
                const [result] = yield database_1.default
                    .promise()
                    .query("INSERT INTO reuniones (nombre, fecha, descripcion, creador_id) VALUES (?, ?, ?, ?)", [nombre, fecha, descripcion, 1]);
                const reunionId = result.insertId; // obtener el ID de la reunión recién creada
                // insertar cada participante en la tabla de participantes
                for (const participante of participantes) {
                    console.log(participante);
                    console.log("SELECT id FROM usuarios WHERE nombre = ?", [participante]);
                    const [userResult] = yield database_1.default
                        .promise()
                        .query("SELECT id FROM usuarios WHERE nombre = ?", [participante]);
                    console.log(userResult[0].id); // revisar el contenido del objeto que devuelve la función
                    if (userResult.length > 0) {
                        const usuarioId = userResult[0].id;
                        yield database_1.default
                            .promise()
                            .query("INSERT INTO participantes (reunion_id, usuario_id) VALUES (?, ?)", [reunionId, usuarioId]);
                    }
                    else {
                        console.log(`No se encontró ningún usuario con el nombre ${participante}`);
                    }
                }
                // responder con un mensaje de éxito
                res.status(201).json({ message: "Reunión creada correctamente" });
            }
            catch (error) {
                console.error(error);
                res.status(500).json({ message: "Error al crear la reunión" });
            }
        });
    }
}
exports.meetController = new MeetController();
//# sourceMappingURL=meetController.js.map