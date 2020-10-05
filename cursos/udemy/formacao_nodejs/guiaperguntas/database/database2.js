const { Sequelize } = require("sequelize")
const sequilize = new Sequelize('sqlite::memory')

// const path = require('path')
// const sequelize = new Sequelize({
//     dialect: 'sqlite',
//     storage: path.join(__dirname, '..', 'database_test.sqlite')
// })

module.exports = sequilize