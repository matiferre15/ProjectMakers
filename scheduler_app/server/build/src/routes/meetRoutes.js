"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const meetController_1 = require("../../controllers/meetController");
class MeetRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/', meetController_1.meetController.index);
    }
}
const meetRoutes = new MeetRoutes();
exports.default = meetRoutes.router;
