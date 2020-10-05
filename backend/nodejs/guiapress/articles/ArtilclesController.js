const express = require('express')
const router = express.Router()
const Category = require('../categories/Category')
const Article = require('../articles/Article')
const adminAuth = require('../middleware/adminAuth')
const slugify = require('slugify')

router.get('/admin/articles', adminAuth, (req, res) => {
    Article.findAll({
        include: [{ model: Category }]
        })
        .then((articles) => {
            res.render('admin/articles/index', {articles: articles})
        })
})

router.get('/admin/articles/new', adminAuth, (req, res) => {
    Category.findAll()
    .then(
        categories => {
            res.render('admin/articles/new', { categories: categories })
        }
    )
})

router.post('/articles/save', (req, res)=>{
    let {title, body, category} = req.body
    Article.create({
        title: title,
        slug: slugify(title, {
            replacement: '-',
            lower: true
        }),
        body: body,
        categoryId: category
    }).then(() => {
        res.redirect('/admin/articles')
    })
})

router.get('/articles/delete/:id', (req, res) => {
    let id = req.params.id;
    if(id == undefined || isNaN(id)) {
        res.redirect('/admin/articles')
        return
    }
    Article.destroy({
        where: {
            id: id
        }
    }).then(() => {
        res.redirect('/admin/articles')
    })
})

router.get('/admin/articles/edit/:id', adminAuth, (req, res) => {
    let id = req.params.id
    if(isNaN(id)) {
        res.redirect('/admin/articles')
        return
    }
    Article.findByPk(id)
        .then(article => {
            if(article == undefined) {
                res.redirect('/admin/articles')
            }
            Category.findAll()
                .then(categories => {
                    res.render('admin/articles/edit', { article: article, categories: categories })
                })
        })
})

router.post('/articles/update', (req, res) => {
    let { id, title, body, category} = req.body
    
    Article.update({
        title: title.trim(),
        slug: slugify(title, {
            replacement: '-',
            lower: true
        }),
        body : body
    }, {
        where: {
            id: id
        }
    }
    ).then(() => {
        res.redirect('/admin/articles')
    })   
})

router.get('/articles/page/:num', (req, res) => {
    let page = req.params.num
    let offset = 0

    if(isNaN(page) || page == 1) {
        offset = 0
    } else {
        offset = parseInt(page - 1) * 4
    }

    Article.findAndCountAll({
        limit: 4,
        offset: offset
    }).then(articles => {

        let next
        if(offset + 4 >= articles.count) {
            next = false
        } else {
            next = true
        }

        let result = {
            next: next,
            articles : articles
        }

        Category.findAll().then(categories => {
            res.render('admin/articles/page', { articles: result.articles.rows, categories: categories })
        })
        // res.json(result)
    })
})

module.exports = router