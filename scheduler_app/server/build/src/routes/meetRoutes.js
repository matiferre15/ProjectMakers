"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const meetController_1 = require("../controllers/meetController");
class MeetRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.post('/', meetController_1.meetController.create);
    }
}
const meetRoutes = new MeetRoutes();
exports.default = meetRoutes.router;
//# sourceMappingURL=meetRoutes.js.map