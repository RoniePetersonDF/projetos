const express = require('express')
const app = express()
const cookieParser = require('cookie-parser')

const adminRoutes = require('./routes/admin')
const bookRoutes = require('./routes/book')

const host = '127.0.0.1'
const port = 3000

app.use(express.json())
app.use(cookieParser())


app.use('/books', bookRoutes)
app.use('/admin', adminRoutes)

app.use((req,res,next)=>{
    console.log(`Passando pelo middleware em nível de aplicação`)
    return next()
})

app.get('/', (req, res) => {
    res.send(`Página inicial 1`)
})

app.get('/setcookie', (req, res)=>{
    res.cookie('user', 'Ronie Peterson', {maxAge:900000, httpOnly:true})
    return res.send(`Cookie foi gravado com sucesso!`)
})

app.get('/getcookie', (req, res)=>{
    let user = req.cookies['user']
    if(user) {
        return res.send(user)
    }
})

app.listen(port, ()=>{
    console.log(`Server running in: http://${host}:${port}`)
})