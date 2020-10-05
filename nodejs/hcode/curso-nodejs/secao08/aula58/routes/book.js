const express = require('express')
const router = express.Router()

function log(req,res, next) {
    console.log(`Passando pelo middleware books`)
    return next()
}

router.get('/',log, (req, res)=>{
    res.send(`pagina book`)
})
    
module.exports = router