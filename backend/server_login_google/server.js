// Load sensitive environmental variables
require('dotenv').config({ path: `${__dirname}/.env` });

// Basic Express server setup
const express = require('express');
const bodyParser = require('body-parser');
const logger = require('morgan');
const session = require('express-session');

// Passport
const passport = require('passport');

// Create app
const app = express();

// Configure passport
require('./passport/setup')(passport);

// Set up logging and body parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(logger('dev'));

// Enable sessions
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    saveUninitialized: true,
    resave: true,
  }),
);

// Passport setup
app.use(passport.initialize());
app.use(passport.session());

// Register all passport strategies
require('./passport/strategies').register(passport);

// Consent screen
app.get('/auth/google', passport.authenticate('google', { scope: ['profile', 'email'] }));

// Authorized redirect (defined in Google Developer Console)
app.get('/auth/google/callback', 
  passport.authenticate('google', { failureRedirect: '/login' }),
  function(req, res) {
    // Successful authentication, redirect to the app.
    res.redirect('/');
  });

// Index page
app.get('/', (req, res) => {
  if (req.user) {
    res.send(`
    <div style="display:flex; justify-content:center; align-items:center; height: 100vh">
      <div style="text-align:center">
        <h1 style="font-size: 32px">
          Welcome back ${req.user.name}${req.user}!
        </h1>
        <a href="/logout">
          <button style="font-size: 32px; padding:0.5em">
            Log out
          </button>
        </a>
      </div>
    </div>
    `);
  } else {
    res.redirect('/login');
  }
});

// Login page
app.get('/login', (req, res) => {
  if (req.user) {
    res.redirect('/');
  } else {
    res.send(`
      <div style="display:flex; justify-content:center; align-items:center; height: 100vh">
        <a href="/auth/google">
          <button style="font-size: 32px; padding:0.5em">
            Log in with Google
          </button>
        </a>
      </div>
    `)
  }
});

// Log out route
app.get('/logout', (req, res) => {
  req.logout();

  res.redirect('/login');
});

// Launch the server
app.listen(process.env.PORT, () => console.log(`LISTENING ON PORT ${process.env.PORT}`));
