require('dotenv').config();

const mongoose = require("mongoose");

mongoose.connect(`mongodb://localhost/henry`, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
})
        .then(db => console.log('Db is connected '))
        .catch(error => console.log(error)) 