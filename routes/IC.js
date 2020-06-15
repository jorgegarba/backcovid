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
const infocovid_controller = __importStar(require("./../controllers/IC"));
exports.infocovid_router = express_1.Router();
exports.infocovid_router.put("/infocovid", infocovid_controller.updateInfoCovid);
