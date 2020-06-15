"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("./../config/sequelize");
const Sequelize = require("sequelize");
const Op = Sequelize.Op;
exports.createUser = (req, res) => {
    console.log(req.body);
    sequelize_1.Usuario.findAll({
        where: {
            usu_email: req.body.usuario.usu_email,
        },
    }).then((data) => {
        if (data.length > 0) {
            let content = {
                message: "El usuario ya existe",
                codigoHttp: 500,
            };
            res.status(500).json(content);
        }
        else {
            // build() => Construye una instancia de la clase Usuario
            // sin guardarlo en la base de datos
            let objUsuario = sequelize_1.Usuario.build(req.body.usuario);
            objUsuario.setSaltYHash(req.body.usuario.usu_pass);
            // save() => promesa que guarda el registro en la DB
            objUsuario
                .save()
                .then((usuarioCreado) => {
                sequelize_1.Usuario.findByPk(usuarioCreado.usu_id).then((usuarioEncontrado) => {
                    let content = {
                        message: "Usuario creado correctamente",
                        codigoHttp: 201,
                        contenido: usuarioEncontrado,
                    };
                    res.status(201).json(content);
                });
            })
                .catch((error) => {
                let content = {
                    message: "Error al crear el usuario",
                    contenido: error,
                };
                res.status(501).json(content);
            });
        }
    });
};
exports.findUserByNomOApe = (req, res) => {
    let busqueda = req.body.busqueda;
    sequelize_1.Usuario.findAll({
        where: {
            [Op.or]: [
                {
                    usu_nom: {
                        [Op.substring]: busqueda,
                    },
                },
                {
                    usu_ape: {
                        [Op.substring]: busqueda,
                    },
                },
            ],
        },
    }).then((rpta) => {
        res.json(rpta);
    });
};
exports.iniciarSesion = (req, res) => {
    // usu_pass => llega encriptado an base64
    // DESDE POSTMAN, enviar el campo b_usu_pass, encriptado en base64
    let { b_usu_email, b_usu_pass } = req.body;
    // desencriptando password
    let buff = new Buffer(b_usu_pass, "base64");
    let pass_dec = buff.toString("ascii");
    sequelize_1.Usuario.findOne({
        where: {
            usu_email: b_usu_email,
        },
    }).then((objUsuario) => {
        if (objUsuario) {
            // cuando el usuario existe en la base de datos
            // debemos verificar si el password es correcto
            let valido = objUsuario.validPass(pass_dec);
            if (valido) {
                // PENDIENTE => Generar JWT
                let token = objUsuario.generarJWT();
                res.status(200).json({
                    message: "ok",
                    token: token,
                });
            }
            else {
                let rpta = {
                    message: "error",
                    contenido: "incorrecto",
                };
                res.status(500).json(rpta);
            }
        }
        else {
            // cuando el usuario no existe en la base de datos
            let rpta = {
                message: "error",
                contenido: "El usuario no existe",
            };
            res.status(500).json(rpta);
        }
    });
};
