const {Sequelize} = require("sequelize");
const conection = new Sequelize('guiaperguntas', "root","M@t27111829",{
    host:'localhost',
    dialect:'mysql'
});

module.exports = conection;