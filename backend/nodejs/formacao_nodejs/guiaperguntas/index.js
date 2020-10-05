const express = require("express")
const app = express();
const bodyParser = require('body-parser')
const connection = require('./database/database')
const Pergunta = require('./database/pergunta')
const Resposta = require('./database/resposta')

connection
    .authenticate()
    .then(()=>{
        console.log('Conexão feita com o banco de dados')
    })
    .catch((err) => {
        console.log(err);
    })
// Estou dizendo para o Express usar o EJS como View engine
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

app.set('view engine','ejs')
app.use(express.static('public'))

app.get("/",(req, res) => {
    Pergunta.findAll({ raw: true, order: [
        ['id', 'DESC']
    ] }).then((perguntas)=>{
        res.render("index", {
            perguntas: perguntas
        });
    })
    
});

app.post("/perguntar",(req, res) => {
    const titulo = req.body.titulo
    const descricao = req.body.descricao
    Pergunta.create({
        titulo: titulo,
        descricao: descricao
    }).then(() => {
        res.redirect('/')    
    })
    // res.send(`Título: ${titulo} e descricao: ${descricao}`);
});

app.get('/perguntar/:id?', (req,res)=>{
    const id = req.params.id

    Pergunta.findOne({ where: {id: id}}).then((pergunta)=>{
        if(!pergunta) {
            res.redirect('/')
        }
        Resposta.findAll( { raw: true, where: {perguntaid: id }, order: [['id', 'desc']]  } )
            .then((respostas) => {
                res.render('pergunta', {
                    pergunta: pergunta,
                    respostas: respostas
                })
            })
        
    })
})

app.post('/resposta', (req,res)=>{
    const perguntaid = req.body.perguntaid
    const resposta = req.body.resposta
    Resposta.create({
        resposta: resposta,
        perguntaid: perguntaid
    }).then(()=>{
        res.redirect('/perguntar/' + perguntaid)
    })
})

app.listen(3000,()=>{console.log("App rodando!");});