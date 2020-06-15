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
const aula_controller = __importStar(require("./../controllers/Aula"));
exports.aula_router = express_1.Router();
exports.aula_router.get('/aula/:aula_id', aula_controller.getAulaById);
