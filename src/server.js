const express = require('express');
const morgan = require('morgan');
const server = express();
const router = require('./router/index');

server.use(morgan('dev'));
server.use(express.json());
server.use(router);
server.use('*', (req, res) => {
    res.status(404).json({error: "Please enter a valid endpoint."});
});

module.exports = server;