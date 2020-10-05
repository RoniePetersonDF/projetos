const express = require('express')
const bodyParser = require('body-parser')
const jwt = require('jsonwebtoken')
const cors = require('cors')
const app = express()

app.use(cors())
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

const JWTSecret = 'ajkldfadlfkjadlfjasldfjlsdfjsdlfsdlfjsl'

function auth(req, res, next) {
    const authToken = req.headers['authorization']
    if(authToken == undefined) {
        res.status(401)
        res.json({ err: 'Token inválido.'})
        return
    }
    const bearer = authToken.split(' ')
    const token = bearer[1]

    jwt.verify(token, JWTSecret, (err, data) => {
        if(err) {
            res.status(401)
            res.json({ err: 'Token inválido.'})
            return
        }
        res.status(200)
        req.token = token
        req.loggedUser = { id: data.id, email: data.email}
        next()
    })
}

var DB = {
    games: [
        {
            id: 23,
            title: 'Call of Duty MW',
            year: 2019,
            price: 60
        },
        {
            id: 65,
            title: 'Sea of Thieves',
            year: 2018,
            price: 40
        },
        {
            id: 35,
            title: 'Minecraft',
            year: 2012,
            price: 20
        },
        
    ],
    users: [
        {
            id: 1,
            name: 'Ronie Peterson',
            email: 'roniepetersondf@gmail.com',
            password: 'abc123',
        },
        {
            id: 2,
            name: 'João Pedro',
            email: 'joaopedro@gmail.com',
            password: 'abc456',
        },
    ]
}

app.get('/games', auth, (req, res) => {
    res.statusCode = 200
    const data = {
        games: DB.games,
        user: req.loggedUser
    }
    console.log(data)
    res.json(DB.games)
})

app.get('/games/:id', (req, res) => {
    if(isNaN(req.params.id)) {
        res.sendStatus(400)
        return
    }
    const id = parseInt(req.params.id)
    const game = DB.games.find(g => g.id == id)
    if(game == undefined) {
        res.sendStatus(404)
        return
    }
    res.statusCode = 200
    res.json(game)
    
})

app.post('/games', (req, res) => {
    let { title, year, price } = req.body

    const id = Date.now()
    DB.games.push({
        id,
        title, 
        year,
        price
    })
    res.statusCode = 201
    res.json({id, title, year, price })
})

app.delete('/games/:id', (req, res) => {
    if(isNaN(req.params.id)) {
        res.sendStatus(400)
        return
    }
    const id = parseInt(req.params.id)
    const index = DB.games.findIndex(g => g.id == id)
    if(index == -1) {
        res.sendStatus(404)
        return
    }
    DB.games.splice(index, 1)
    res.sendStatus(200)
})

app.put('/games/:id', (req, res) => {
    if(isNaN(req.params.id)) {
        res.sendStatus(400)
        return
    }
    const id = parseInt(req.params.id)
    const game = DB.games.find(g => g.id == id)
    if(game == undefined) {
        res.sendStatus(404)
        return
    }
    
    let { title, price, year } = req.body

    if(title != undefined) {
        game.title = title
    }
    if(price != undefined) {
        game.price = price
    }
    if(year != undefined) {
        game.year = year
    }

    res.sendStatus(200)
})

app.post('/auth', (req, res) => {
    let { email, password } = req.body
    if(email == undefined) {
        res.status(400)
        res.json({ err: 'O e-mail enviado é inválido.'})
        return
    }

    const user = DB.users.find(u => u.email == email)
    if(user == undefined) {
        res.status(404)
        res.json({ err: 'O e-mail enviado não existe na base de dados.'})
        return
    }
    
    if(user.password != password) {
        res.status(401)
        res.json({ err: 'Credenciais inválidas.'})
        return
    }

    jwt.sign({ id: user.id, email: user.email }, JWTSecret, { expiresIn: '1h' }, (err, token) => {
        if(err) {
            res.status(400)
            res.json({ err: 'Falha interna'})
            return
        }    
        res.status(200)
        res.json({token: token})
    })

})

app.listen(3000, () => {
    console.log('http://localhost:3000')
})