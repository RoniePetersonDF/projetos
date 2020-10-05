const express = require('express')
const bodyParser = require('body-parser')
const multer = require('multer')
const app = express()
const path = require('path')

const host = '127.0.0.1'
const port = 8081

app.use(bodyParser.urlencoded({extended:true}))

const storage = multer.diskStorage({
    destination:(req, file, cb) => {
        cb(null, 'uploads/')
    },
    filename: (req, file, cb) => {
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
    }
})

const upload = multer({storage})

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html')
})

app.post('/upload', upload.single('arquivo'), (req, res, next)=>{
    const file = req.file
    if(!file) {
        const err = new Error('Por favor selecione um arquivo')
        err.httpStatusCode = 400
        return next(err)
    }
    res.send(file)
})
app.listen(port, ()=>{
    console.log(`Server running in: http://${host}:${port}`)
})