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
exports.loginController = void 0;
const database_1 = __importDefault(require("../database"));
class LoginController {
    auth(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log('este es el ' + req.body);
            const { username, password } = req.body;
            console.log('estas son las variables' + username, password);
            const [users] = yield database_1.default.promise().query('SELECT * FROM usuarios WHERE nombre = ? AND password = ?', [username, password]);
            console.log(users);
            res.json(users);
        });
    }
}
exports.loginController = new LoginController();
//# sourceMappingURL=loginController.js.map