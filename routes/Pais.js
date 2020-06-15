"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
// pais router
const express_1 = require("express");
const pais_controller = __importStar(require("./../controllers/Pais"));
exports.pais_router = express_1.Router();
exports.pais_router.get("/paises", pais_controller.getAllPaises);
