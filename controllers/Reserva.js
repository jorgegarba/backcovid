"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("./../config/sequelize");
const Sequelize = require("sequelize");
const Op = Sequelize.Op;
// Reserva controller
exports.getReservasByFechas = (req, res) => {
    let { p_aula_id } = req.params;
    let { body_res_fechin, body_res_fechfin } = req.body;
    sequelize_1.Reserva.findAll({
        where: {
            res_fechin: {
                [Op.gte]: body_res_fechin
            },
            res_fechfin: {
                [Op.lte]: body_res_fechfin
            },
            aula_id: p_aula_id,
        }
    }).then((resultado) => {
        res.status(200).json(resultado);
    });
};
