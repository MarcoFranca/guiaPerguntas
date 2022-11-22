const Sequelize = require("sequelize")
const conection = require("./database")

const Pergunta = conection.define('perguntas',{
    title:{
        type: Sequelize.STRING,
        allowNull:false
    },
    description:{
        type: Sequelize.TEXT,
        allowNull: false
    }
})

Pergunta.sync({force: false})
module.exports = Pergunta;