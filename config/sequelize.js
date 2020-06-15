"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const InfoCovid_1 = require("./../models/InfoCovid");
const Pais_1 = require("./../models/Pais");
const Sequelize = require("sequelize");
// importando modelos
const Pabellon_1 = require("./../models/Pabellon");
const TipoAula_1 = require("./../models/TipoAula");
const Aula_1 = require("./../models/Aula");
const Reserva_1 = require("./../models/Reserva");
const Usuario_1 = require("./../models/Usuario");
exports.sequelize = new Sequelize("sql10346797", "sql10346797", "jBipycI2Aw", {
    host: "sql10.freemysqlhosting.net",
    dialect: "mysql",
    logging: console.log,
    timezone: "-05:00",
    dialectOptions: {
        useUTC: false,
        dateStrings: true,
        typeCast: true,
    },
});
// export const sequelize = new Sequelize("ambientes", "root", "root", {
//   host: "localhost",
//   dialect: "mysql",
//   logging: console.log,
//   timezone: "-05:00",
//   dialectOptions: {
//     useUTC: false, //for reading from database
//     dateStrings: true,
//     typeCast: true,
//   },
// });
// logging:console.log => sirve para imprimir todas las consultas que se generen
// en la consola al momento de realizarlas en T-SQL
exports.Pabellon = Pabellon_1.pabellon_model(exports.sequelize, Sequelize);
exports.TipoAula = TipoAula_1.tipoaula_model(exports.sequelize, Sequelize);
exports.Aula = Aula_1.aula_model(exports.sequelize, Sequelize);
exports.Reserva = Reserva_1.reserva_model(exports.sequelize, Sequelize);
exports.Usuario = Usuario_1.usuario_model(exports.sequelize, Sequelize);
exports.Pais = Pais_1.pais_model(exports.sequelize, Sequelize);
exports.IC = InfoCovid_1.ic_model(exports.sequelize, Sequelize);
exports.Pabellon.hasMany(exports.Aula, { foreignKey: "pab_id" });
exports.Aula.belongsTo(exports.Pabellon, { foreignKey: "pab_id" });
exports.TipoAula.hasMany(exports.Aula, { foreignKey: "taula_id" });
exports.Aula.belongsTo(exports.TipoAula, { foreignKey: "taula_id" });
exports.Usuario.hasMany(exports.Reserva, { foreignKey: "usu_id" });
exports.Reserva.belongsTo(exports.Usuario, { foreignKey: "usu_id" });
exports.Aula.hasMany(exports.Reserva, { foreignKey: "aula_id" });
exports.Reserva.belongsTo(exports.Aula, { foreignKey: "aula_id" });
exports.Pais.hasMany(exports.IC, { foreignKey: "pais_id" });
exports.IC.belongsTo(exports.Pais, { foreignKey: "pais_id" });
