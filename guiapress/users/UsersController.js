const express = require('express')
const router = express.Router()

const User = require('../users/User')
const bcrypt = require('bcryptjs')

router.get('/admin/users', (req, res) => {
    // res.send('Listagem de usuários')
    User.findAll().then(users => {
        res.render('admin/users', { users: users })
    })
})

router.get('/admin/users/create', (req, res) => {
    res.render('admin/users/create')
})

router.post('/users/create', (req, res) => {
    let { password, email } = req.body
    
    User.findOne(
        { where: { email: email}}
    ).then( user => {
        if(user == undefined) {
            let salt = bcrypt.genSaltSync();
            let hash = bcrypt.hashSync(password, salt)
        
            User.create({
                email: email,
                password: hash
            }).then(() => {
                res.redirect('/')
            }).catch(err => {
                res.redirect('/')
            })
        } else {
            res.redirect('/admin/users/create')
        }
    })
    //res.json({ email, password })
})

router.get('/login', (req, res) => {
    res.render('admin/users/login')
})

router.post('/authenticate', (req, res) => {
    let { email, password } = req.body

    User.findOne({ where: { email: email} } ).then(user => {
        if(user != undefined) {
            let correct = bcrypt.compareSync(password, user.password)

            if(correct) {
                req.session.user = {
                    id: user.id,
                    email: user.email
                }
                res.redirect('/admin/articles')
            } else {
                res.redirect('/login')
            }
        } else {
            res.redirect('/login')
        }
    })
})

router.get('/logout', (req, res) => {
    req.session.user = undefined
    res.redirect('/')
})

module.exports = router