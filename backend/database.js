const { DB_USER, DB_PASSWORD, DB_HOST, DB_NAME } = process.env;

const mongoose = require("mongoose");

mongoose.connect(`mongodb://${DB_HOST}/${DB_NAME}`, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
})
        .then(db => console.log('Db is connected '))
        .catch(error => console.log(error)) 