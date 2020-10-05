const express = require('express');
const route = express.Router();
const homeController = require('./controllers/homeController');
const contatoController = require('./controllers/contatoController');

route.get('/', homeController.paginaInicial);

route.post('/', homeController.trataPost);

route.get('/contatos', contatoController.index);

module.exports= route;