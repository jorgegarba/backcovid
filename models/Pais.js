"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// pais model
exports.pais_model = (sequelize, type) => {
    var pais = sequelize.define("t_pais", {
        pais_id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        pais_nom: {
            type: type.STRING(100),
            allowNull: true,
        },
    }, {
        tableName: "t_pais",
        timestamps: false,
    });
    return pais;
};
