"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("./../config/sequelize");
// pabellon controller
exports.createPabellon = (req, res) => {
    console.log(req.headers);
    let objPabellon = sequelize_1.Pabellon.build(req.body.pabellon);
    objPabellon.save().then((pabellonCreado) => {
        let rpta = {
            message: "Creado Correctamente",
            contenido: pabellonCreado,
        };
        res.status(201).json(rpta);
    }).catch((error) => {
        let rpta = {
            message: "Error al crear",
            contenido: error,
        };
        res.status(501).json(rpta);
    });
};
exports.getPabellonById = (req, res) => {
    sequelize_1.Pabellon.findByPk(req.params.pab_id).then((objPabellon) => {
        if (objPabellon) {
            let rpta = {
                message: 'ok',
                contenido: objPabellon
            };
            res.status(200).json(rpta);
        }
        else {
            let rpta = {
                message: 'error',
                contenido: "no se encontró el pabellon"
            };
            res.status(500).json(rpta);
        }
    });
};
exports.getPabellones = (req, res) => {
    sequelize_1.Pabellon.findAll().then((pabellones) => {
        let rpta = {
            message: 'ok',
            contenido: pabellones
        };
        res.status(200).json(rpta);
    });
};
exports.updatePabellon = (req, res) => {
    sequelize_1.Pabellon.update({
        pab_desc: req.body.pabellon.pab_desc
    }, {
        where: {
            pab_id: req.body.pabellon.pab_id
        }
    }).then((actualiado) => {
        let rpta = {
            message: "Actualizado Correctamente",
            contenido: actualiado
        };
        res.status(200).json(rpta);
    }).catch((error) => {
        let rpta = {
            message: "Error al actualizar",
            contenido: error
        };
        res.status(501).json(rpta);
    });
};
exports.getAulasXPabellones = (req, res) => {
    sequelize_1.Pabellon.findAll({
        include: [{
                model: sequelize_1.Aula
            }]
    }).then((resultado) => {
        let rpta = {
            message: "ok",
            contenido: resultado
        };
        res.status(200).json(rpta);
    });
};
exports.getAulasByPabellonId = (req, res) => {
    // Aula.findaAll({
    //     where: {
    //         pab_id: req.params.pab_id
    //     }
    // })
    sequelize_1.Pabellon.findAll({
        where: {
            pab_id: req.params.pab_id
        },
        include: [{
                model: sequelize_1.Aula,
                include: [{
                        model: sequelize_1.TipoAula
                    }]
            }]
    }).then((resultado) => {
        let rpta = {
            message: "ok",
            contenido: resultado
        };
        res.status(200).json(rpta);
    });
};
