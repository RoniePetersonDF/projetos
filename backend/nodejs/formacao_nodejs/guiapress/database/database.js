const Sequelize = require("sequelize")

const connection = new Sequelize('nodebd', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
})

module.exports = connection