"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pabellon_model = (sequelize, type) => {
    var pabellon = sequelize.define('t_pabellon', {
        pab_id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        pab_desc: {
            type: type.STRING(50),
            allowNull: true,
        },
    }, {
        tableName: 't_pabellon',
        timestamps: true,
    });
    return pabellon;
};
