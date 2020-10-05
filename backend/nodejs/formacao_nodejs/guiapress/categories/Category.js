const { Sequelize, DataTypes, Model } = require('sequelize')
const connection = require('../database/database')

const Category = connection.define('categories', {
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    slug: {
        type: DataTypes.STRING,
        allowNull: false
    }
})

Category.sync({ force: false })

module.exports = Category
