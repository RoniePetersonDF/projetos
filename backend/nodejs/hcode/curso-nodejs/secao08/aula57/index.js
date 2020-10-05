const express = require('express')
const app = express()
const adminRoutes = require('./routes/admin')
const bookRoutes = require('./routes/book')
const host = '127.0.0.1'
const port = 3000

app.use(express.json())
app.use('/books', bookRoutes)
app.use('/admin', adminRoutes)

app.get('/', (req, res) => {
    res.send(`Página inicial 1`)
})


app.listen(port, ()=>{
    console.log(`Server running in: http://${host}:${port}`)
})