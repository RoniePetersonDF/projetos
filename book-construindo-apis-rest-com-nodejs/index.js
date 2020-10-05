const express = require('express')
const app = express()
const consign = require('consign')


consign()
    .include('libs/config.js')
    .include('db.js')
    .include('libs/middlewares.js')
    .include('routes')
    .include('libs/boot.js')
    .into(app)





