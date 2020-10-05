const { Sequelize, DataTypes, Model } = require('sequelize')
const connection = require('../database/database')
const Category = require('../categories/Category')

const Article = connection.define('articles', {
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    slug: {
        type: DataTypes.STRING,
        allowNull: false
    },
    body: {
        type: DataTypes.TEXT,
        allowNull: false
    }
})

Category.hasMany(Article)
Article.belongsTo(Category)

Article.sync({ force: false })
module.exports = Article
