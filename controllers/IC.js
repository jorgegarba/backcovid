"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("./../index");
const sequelize_1 = require("./../config/sequelize");
const Pais_1 = require("./Pais");
exports.updateInfoCovid = (req, res) => {
    sequelize_1.IC.update(Object.assign({}, req.body.infocovid), {
        where: {
            pais_id: req.body.infocovid.pais_id,
        },
    })
        .then((actualizado) => {
        let rpta = {
            message: "Actualizado Correctamente",
            contenido: actualizado,
        };
        Pais_1.getAllPaisesPromise().then((data) => {
            index_1.servidor.io.emit("escucharcovid", data);
        });
        res.status(200).json(rpta);
    })
        .catch((error) => {
        console.log(error);
        let rpta = {
            message: "Error al actualizar",
            contenido: error,
        };
        res.status(501).json(rpta);
    });
};
