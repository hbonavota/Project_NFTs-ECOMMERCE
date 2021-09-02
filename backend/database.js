require('dotenv').config();
const { DB_NAME, DB_HOST } = process.env;

const mongoose = require("mongoose");
const uri = `mongodb://${DB_HOST}/${DB_NAME}`;
const db = mongoose.connection;

mongoose.connect(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
})

db.once('open', _=> {
        console.log('Database is connected to', uri);
})

db.on('error', err => {
        console.log(err);
})