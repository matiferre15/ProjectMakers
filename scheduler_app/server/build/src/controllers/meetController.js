"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.meetController = void 0;
class MeetController {
    index(req, res) {
        res.send('Meets');
    }
}
exports.meetController = new MeetController();
