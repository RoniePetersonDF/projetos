require('dotenv').config()
const express = require('express')
const app = express()
const mongoose = require('mongoose')
const subscribeRouters = require('./routes/subscribers')

mongoose.connect(process.env.DATABASE_STRING, {useNewUrlParser: true})
const db = mongoose.connection
db.on('error', (err)=> console.log(err))
db.once('open', ()=> console.log('Database Connected'))

app.use(express.json())
app.use('/subscribes', subscribeRouters)


app.get('/', (req, res) => {
    res.status(200).json({ server: 'OK' })
})

app.listen(3001, ()=>{
    console.log(`Server running: http://localhost:3001`)
})