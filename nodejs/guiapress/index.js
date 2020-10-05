const express = require('express')
const app = express()
const bodyParser = require('body-parser') 
const connection = require('./database/database')
const session = require('express-session')

const categoriesController = require('./categories/CategoriesController')
const articlesController = require('./articles/ArtilclesController')
const usersController = require('./users/UsersController')

const Categories = require('./categories/Category')
const Articles = require('./articles/Article')
const Article = require('./articles/Article')
const Category = require('./categories/Category')
const User = require('./users/User')


app.set('view engine', 'ejs')
app.use(express.static('public'))

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

app.use(session({
    secret: 'qualquercoisa',
    cookie: { maxAge: 60000 }
}))

connection
    .authenticate()
    .then(() => {
        console.log('Conexão feita com sucesso.')
    }).catch((error) => {
        console.log(error)
    })

app.use('/', categoriesController)
app.use('/', articlesController)
app.use('/', usersController)

app.get('/', (req, res) => {
    Article.findAll({
        order: [ 
            ['id', 'DESC']
        ]
    }).then(articles => {
        Category.findAll()
        .then(categories => {
            res.render('index', { articles: articles, categories: categories })
        })
    })
})

app.get('/articles/:slug', (req, res) => {
    let slug = req.params.slug
    Article.findOne({
        where: { slug: slug }
    }).then((article) => {
        Category.findAll()
        .then(categories => {
            res.render('article', { article: article, categories: categories } )
        })
    })
})

app.get('/category/:slug', (req, res) => {
    let slug = req.params.slug
    console.log(slug)
    Category.findOne({
        where: {
            slug: slug
        },
        include: [ { model: Articles } ]
    })
    .then(category => {
        if(category != undefined) {
            Category.findAll().then(categories => {
                res.render('index', { articles: category.articles, categories: categories})
            })
        } else {
            res.redirect('/')
        }
    })
    .catch(err => {
        res.redirect('/')
    })
})

app.listen(3000)