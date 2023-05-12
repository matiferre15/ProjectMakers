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
exports.roleController = void 0;
const database_1 = __importDefault(require("../database"));
class RoleController {
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const [roles] = yield database_1.default.promise().query('SELECT * FROM reuniones');
            console.log(roles);
            res.json(roles);
        });
    }
    getById(req, res) {
        res.json({ text: 'Listando un rol' });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.promise().query('INSERT INTO roles set ?', [req.body]);
            res.json({ message: 'Rol creado' });
        });
    }
    put(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.promise().query('UPDATE roles set ? WHERE id = ?', [req.body, id]);
            res.json({ message: 'Rol actualizado' });
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.promise().query('DELETE FROM roles WHERE id = ?', [id]);
            res.json({ message: 'El rol ha sido eliminado' });
        });
    }
}
exports.roleController = new RoleController();
//# sourceMappingURL=meetController.js.map