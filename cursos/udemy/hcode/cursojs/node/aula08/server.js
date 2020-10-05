const express = require('express');
const app = express();

app.use(express.urlencoded({extended: true}));

app.get('/', (req, res) => {
    res.send(`
        <form action="/" method="post">
        Nome: <input type="text" name="nome">
        <button>Enviar Formulário</button>
        </form>
    `);
});

app.post('/', (req, res) => {
    console.log(req.body);
    res.send(`Recebi do formulário: ${req.body.nome}`);

});

app.get('/testes/:idusuario?/:parametros?', (req, res) => {
    // console.log(req.params);
    // res.send(req.params);
    console.log(req.query);
    res.send(req.query);

});


app.listen(4000, () => {
    console.log('Acessar http://localhost:4000');
    console.log('Servidor executando na porta 4000');
});