const { Sequelize, DataTypes } = require("sequelize")
const connection = require('./database')

const Resposta = connection.define('respostas', {
    resposta: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    perguntaid: {
        type: DataTypes.INTEGER,
        allowNull: false,
    }
})

Resposta.sync({ force: false})
    .then(()=>{ console.log(`Tabela respostas criada com sucesso`) })

module.exports = Resposta