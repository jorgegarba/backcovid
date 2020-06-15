"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("./../config/sequelize");
exports.getAulaById = (req, res) => {
    sequelize_1.Aula.findAll({
        where: {
            aula_id: req.params.aula_id
        },
        include: [{
                model: sequelize_1.Pabellon,
            }, {
                model: sequelize_1.TipoAula
            }]
    }).then((resultado) => {
        let rpta = {
            message: 'ok',
            contenido: resultado
        };
        res.status(200).json(rpta);
    });
};
