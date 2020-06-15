"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// aula model
exports.aula_model = (sequelize, type) => {
    var aula = sequelize.define('t_aulas', {
        aula_id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        aula_nro: {
            type: type.STRING(45),
            allowNull: true,
        },
        aula_piso: {
            type: type.INTEGER,
            allowNull: true,
        },
        aula_cap: {
            type: type.INTEGER,
            allowNull: true,
        },
    }, {
        tableName: 't_aulas',
        timestamps: true,
    });
    return aula;
};
