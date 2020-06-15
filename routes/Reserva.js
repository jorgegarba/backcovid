"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
// reserva router
const express_1 = require("express");
const Guards_1 = require("./../utils/Guards");
const reserva_controller = __importStar(require("./../controllers/Reserva"));
exports.reserva_router = express_1.Router();
exports.reserva_router.post('/reservabyfechas/:p_aula_id', Guards_1.wachiman, reserva_controller.getReservasByFechas);
