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
exports.userController = void 0;
const database_1 = __importDefault(require("../database"));
class UserController {
    constructor() {
        this.const = 20;
    }
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const [users] = yield database_1.default.promise().query('SELECT * FROM usuarios');
            console.log(users);
            res.json(users);
        });
    }
    auth(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(req.body);
            const { username, password } = req.body;
            const [users] = yield database_1.default.promise().query('SELECT * FROM usuarios WHERE nombre = ? AND password = ?', [username, password]);
            console.log(users);
            res.json(users);
        });
    }
    getByUsername(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { user } = req.params;
            try {
                const [users] = yield database_1.default.promise().query('SELECT * FROM usuarios WHERE nombre = ?', [user]);
                if (users.length > 0) {
                    res.json(users[0]);
                }
                else {
                    res.status(404).json({ message: 'Usuario no encontrado' });
                }
            }
            catch (error) {
                console.log(error);
                res.status(500).json({ message: 'Error al buscar el usuario' });
            }
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.promise().query('INSERT INTO usuarios set ?', [req.body]);
            res.json({ message: 'Usuario creado' });
        });
    }
    ;
    put(req, res) {
        res.json({ text: 'Actualizando la meet numero: ' + req.params.id });
    }
    delete(req, res) {
        res.json({ text: 'Eliminando la meet numero: ' + req.params.id });
    }
}
exports.userController = new UserController();
//# sourceMappingURL=userController.js.map