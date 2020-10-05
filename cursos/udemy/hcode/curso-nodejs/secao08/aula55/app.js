const express = require('express')
const app = express()
app.use(express.json)

const port = 3001
const host = '127.0.0.1'

app.get('/', (req, res) => {
    res.send('Vai mengão')
})

app.get('/admin', (req, res) => {
    res.send('Seção administrativa')
})

app.post('/admin', (req, res) => {
    const body = `Login: ${req.body.login}`
    res.send(`Seção administrativa com id: ${req.params.id}`)
})

app.get('/admin/:id', (req, res) => {
    res.send(`Seção administrativa com id: ${req.params.id}`)
})

app.listen(port, ()=>{
    console.log(`Server running: http://${host}:${port}`)
})