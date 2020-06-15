"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var jwt = require('jsonwebtoken');
exports.verificarToken = (token) => {
    try {
        let data = jwt.verify(token, "didacticos", { algorithm: "RS256" });
        return data;
    }
    catch (error) {
        console.log(error.message);
        return null;
    }
};
exports.wachiman = (req, res, next) => {
    // la funcion next(); le da el pase a la siguiente funcion
    // en este caso la funcion getReservasByFechas
    if (req.headers.authorization) {
        let token = req.headers.authorization.split(" ")[1];
        let data = exports.verificarToken(token);
        if (data) {
            next();
        }
        else {
            let respuesta = {
                message: "error",
                contenido: "Token inválido o expirado 😢"
            };
            res.status(403).json(respuesta);
            return;
        }
    }
    else {
        // en caso no se reciba el header de "Authorization"
        let respuesta = {
            message: "error",
            contenido: "No se han mandado credenciales de autenticación 😢"
        };
        res.status(403).json(respuesta);
        return;
    }
};
