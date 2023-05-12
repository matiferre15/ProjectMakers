"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const userController_1 = require("../controllers/userController");
class UserRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/', userController_1.userController.list);
        this.router.get('/:id', userController_1.userController.getById);
        this.router.post('/', userController_1.userController.create);
        this.router.put('/:id', userController_1.userController.put);
        this.router.delete('/:id', userController_1.userController.delete);
        this.router.get('/:username/:password', userController_1.userController.auth);
    }
}
const userRoutes = new UserRoutes();
exports.default = userRoutes.router;
//# sourceMappingURL=userRoutes.js.map