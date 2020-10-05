const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.send(`Página admin`)
})

router.get('/:id', (req, res) => {
    const id = req.params.id;
    res.send(`admin com id: ${id}`)
})

router.post('/', (req, res) => {
    const body = req.body
    res.send(`Página admin, body: ${body.login} e ${body.password}`)
})

module.exports=router