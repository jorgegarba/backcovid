"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("./../config/sequelize");
exports.getAllPaises = (req, res) => {
    sequelize_1.Pais.findAll({
        include: { model: sequelize_1.IC },
    }).then((data) => {
        res.json(data);
    });
};
exports.getAllPaisesPromise = () => __awaiter(void 0, void 0, void 0, function* () {
    let paises = yield sequelize_1.Pais.findAll({
        include: { model: sequelize_1.IC },
    });
    return paises;
});
