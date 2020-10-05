const express = require('express')
const router = express.Router()
const Category = require('../categories/Category')
const slugify = require('slugify')
const { route } = require('../articles/ArtilclesController')

router.get('/admin/categories', (req, res) => {
    Category.findAll()
        .then(categories => {
            res.render('admin/categories/index', { categories: categories})
        })
})

router.get('/admin/categories/new', (req, res) => {
    res.render('admin/categories/new')
})

router.post('/categories/save', (req, res) => {
    let title = req.body.title;

    console.log(req.body)
    if(title == undefined || title == '') {
        res.redirect('/admin/categories/new')
        return
    }

    Category.create({
        title: title.trim(),
        slug: slugify(title, {
            replacement: '-',
            lower: true
        })
    }).then(() => {
        res.redirect('/admin/categories/')
    })

})

router.get('/categories/delete/:id', (req, res) => {
    let id = req.params.id;
    if(id == undefined || isNaN(id)) {
        res.redirect('/admin/categories')
        return
    }
    Category.destroy({
        where: {
            id: id
        }
    }).then(() => {
        res.redirect('/admin/categories')
    })
})

router.get('/admin/categories/edit/:id', (req, res) => {
    let id = req.params.id
    if(isNaN(id)) {
        res.redirect('/admin/categories')
        return
    }
    Category.findByPk(id)
        .then(category => {
            if(category == undefined) {
                res.redirect('/admin/categories')
            }
            res.render('admin/categories/edit', { category: category})
        })
})


router.post('/categories/update', (req, res) => {
    let id = req.body.id
    let title = req.body.title
    
    Category.update({
        title: title.trim(),
        slug: slugify(title, {
            replacement: '-',
            lower: true
        })
    }, {
        where: {
            id: id
        }
    }
    ).then(() => {
        res.redirect('/admin/categories')
    })   
})

module.exports = router