"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const agendaController_1 = require("../controllers/agendaController");
class AgendaRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/:id', agendaController_1.agendaController.getByUserId);
    }
}
const agendaRoutes = new AgendaRoutes();
exports.default = agendaRoutes.router;
//# sourceMappingURL=agendaRoutes.js.map