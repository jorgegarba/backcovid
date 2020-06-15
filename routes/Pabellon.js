"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
// pabellon router
const express_1 = require("express");
const pabellon_controller = __importStar(require("./../controllers/Pabellon"));
exports.pabellon_router = express_1.Router();
exports.pabellon_router.post("/pabellon", pabellon_controller.createPabellon);
// pabellon_router.get("/pabellon", wachiman, pabellon_controller.getPabellones);
exports.pabellon_router.get("/pabellon", pabellon_controller.getPabellones);
exports.pabellon_router.put("/pabellon", pabellon_controller.updatePabellon);
exports.pabellon_router.get("/pabellones/aulas", pabellon_controller.getAulasXPabellones);
exports.pabellon_router.get("/pabellon/:pab_id/aulas", pabellon_controller.getAulasByPabellonId);
exports.pabellon_router.get("/pabellon/:pab_id", pabellon_controller.getPabellonById);
