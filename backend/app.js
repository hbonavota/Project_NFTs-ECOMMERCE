const express = require('express');
const cookieParser = require('cookie-parser');
//const bodyParser = require('body-parser');
const morgan = require('morgan');
const routes = require('./src/routes/index');
const setHeaders = require("./src/utils/middlewares/setHeaders");
const errorHandler = require("./src/utils//middlewares/errorHandler");
// require('./db.js');

const server = express();

server.name = 'API';

server.use(express.urlencoded({ extended: true, limit: '50mb' }));
server.use(express.json({ limit: '50mb' }));
server.use(cookieParser());
server.use(morgan('dev'));
server.use(setHeaders);
server.use('/', routes);

server.get('/', (req, res) => {
  res.send("Página de inicio");
})
// Error catching endware.
server.use(errorHandler);

module.exports = server;
