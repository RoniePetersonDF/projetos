const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const port = 3000

const categoriesController = require('./categories/CategoriesController')
const articlesController = require('./articles/ArticlesController')

const Category = require('./categories/Category')
const Article = require('./articles/Article')

const connection = require('./database/database')
connection
    .authenticate()
    .then(()=>{
        console.log('Conexão feita com o banco de dados')
    })
    .catch((err) => {
        console.log(err);
    })

app.set('view engine', 'ejs')
app.use(express.static('public'))

app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

app.use('/', categoriesController)
app.use('/', articlesController)

app.get('/', (req, res) => {
    res.render('index')
})

app.listen(port, () => {
    console.log(`Server running in http://localhost:${port}`)
})