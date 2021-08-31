const { Schema, model } = require("mongoose");

const product = new Schema({
    name: String,
    category: String,
    type: String,
    price: Number,
    imgURL: String,
},
    {
    timestamps: true,
    versionKey: false,
})

module.exports = model('Product', product);