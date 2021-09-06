require('dotenv').config({ path: `${__dirname}/src/utils/config/.env` });
const express = require('express');
const cookieParser = require('cookie-parser');
//const bodyParser = require('body-parser');
const morgan = require('morgan');
const session = require('express-session');
const passport = require('passport');
const routes = require('./src/routes/index');
const setHeaders = require("./src/utils/middlewares/setHeaders");
const errorHandler = require("./src/utils//middlewares/errorHandler");
const cors=require('cors');
const sessionMiddleware = require('./src/utils/middlewares/sessionMiddleware');

// require('./db.js');

const server = express();
require('./passport/setup')(passport);

server.name = 'API';

server.use(cors(
  {
    credentials: true,
    origin:'http://localhost:3000',
    methods:['GET','POST','DELETE','PUT', 'OPTIONS'],
    allowedHeaders:['Content-Type','Authorization', 'Access-Control-Allow-Origin']
  }
))
server.use(passport.initialize());
server.use(passport.session());

server.use(express.urlencoded({ extended: true, limit: '50mb' }));
server.use(express.json({ limit: '50mb' }));
server.use(cookieParser());
server.use(morgan('dev'));

server.use(
  session({
    secret: process.env.SESSION_SECRET,
    saveUninitialized: true,
    resave: true,
  }),
);

// Passport setup
server.use(passport.initialize());
server.use(passport.session());

// Register all passport strategies
require('./passport/strategies').register(passport);

// Consent screen
server.get('/auth/google', passport.authenticate('google', { scope: ['profile', 'email'] }));

// Authorized redirect (defined in Google Developer Console)
server.get('/auth/google/callback', 
  passport.authenticate('google', { failureRedirect: '/login' }),
  function(req, res) {
    // Successful authentication, redirect to the app.
    res.redirect('http://localhost:3000/profile');
  });

// Index page
server.get('/', (req, res,next) => {
  if (req.user) {
    next()
    res.redirect('/http://localhost:3000');
  } else {
    res.redirect('/login');
  }
});

server.get('/logout', (req, res) => {
  req.logout();

  res.redirect('/login');
});


server.use(setHeaders);
server.use(sessionMiddleware);
// console.log(sessionMiddleware)
server.use('/', routes);

//SI NO AGREGO ESTAS COSAS DEPENDE EL BROWSER VA A TIRAR ERRO


server.get('/', (req, res) => {
  res.send("Página de inicio");
})
// Error catching endware.
server.use(errorHandler);

module.exports = server;
