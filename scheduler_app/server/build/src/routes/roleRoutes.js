"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const roleController_1 = require("../controllers/roleController");
class RoleRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/', roleController_1.roleController.list);
        this.router.get('/:id', roleController_1.roleController.getById);
        this.router.post('/', roleController_1.roleController.create);
        this.router.put('/:id', roleController_1.roleController.put);
        this.router.delete('/:id', roleController_1.roleController.delete);
    }
}
const roleRoutes = new RoleRoutes();
exports.default = roleRoutes.router;
//# sourceMappingURL=roleRoutes.js.map