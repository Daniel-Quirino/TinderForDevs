const express = require('express');
const routes = require('./routes');
const mongoose = require('mongoose');

const server = express();
server.use(express.json());

mongoose.connect('mongodb+srv://max:OKH9F6X8otrwY9Bg@cluster0-cdkpo.mongodb.net/test?retryWrites=true&w=majority', {
    useNewUrlParser:true
})

server.use(routes)

server.listen(3333);