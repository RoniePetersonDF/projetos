const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send(`
        <form action="/" method="post">
        Nome: <input type="text" name="nome">
        <button>Enviar Formulário</button>
        </form>
    `);
});

app.post('/', (req, res) => {
    res.send('Recebi dados do formulário');
});

app.get('/contato', (req, res) => {
    res.send('Obrigado por entrar em contato.');
});

app.listen(4000, () => {
    console.log('Acessar http://localhost:4000');
    console.log('Servidor executando na porta 4000');
});