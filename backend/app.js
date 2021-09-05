const express = require('express');
const cookieParser = require('cookie-parser');
//const bodyParser = require('body-parser');
const morgan = require('morgan');
const routes = require('./src/routes/index');
const setHeaders = require("./src/utils/middlewares/setHeaders");
const errorHandler = require("./src/utils//middlewares/errorHandler");
const cors=require('cors');
const sessionMiddleware = require('./src/utils/middlewares/sessionMiddleware');
// require('./db.js');

const server = express();

server.name = 'API';

server.use(express.urlencoded({ extended: true, limit: '50mb' }));
server.use(express.json({ limit: '50mb' }));
server.use(cookieParser());
server.use(morgan('dev'));
server.use(setHeaders);
// server.use(sessionMiddleware);
console.log(sessionMiddleware)
server.use('/', routes);

//SI NO AGREGO ESTAS COSAS DEPENDE EL BROWSER VA A TIRAR ERRO
server.use(cors(
  {
    origin:'*',
    methods:['GET','POST','DELETE','PUT'],
    allowedHeaders:['Content-Type','Authorization']
  }
))

server.get('/', (req, res) => {
  res.send("Página de inicio");
})
// Error catching endware.
server.use(errorHandler);

module.exports = server;
