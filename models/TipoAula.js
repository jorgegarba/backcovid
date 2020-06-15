"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.tipoaula_model = (sequelize, type) => {
    var tipoaula = sequelize.define('t_tipoaula', {
        taula_id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        taula_desc: {
            type: type.STRING(50),
            allowNull: true,
        },
    }, {
        tableName: 't_tipoaula',
        timestamps: true,
    });
    return tipoaula;
};
