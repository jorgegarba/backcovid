"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// ic model
exports.ic_model = (sequelize, type) => {
    var ic = sequelize.define("t_ic", {
        ic_id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        ic_infectados: {
            type: type.INTEGER,
            allowNull: true,
        },
        ic_recuperados: {
            type: type.INTEGER,
            allowNull: true,
        },
        ic_fallecidos: {
            type: type.INTEGER,
            allowNull: true,
        },
    }, {
        tableName: "t_ic",
        timestamps: false,
    });
    return ic;
};
