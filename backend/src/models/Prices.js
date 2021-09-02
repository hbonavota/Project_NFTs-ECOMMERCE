const { Schema, model } = require("mongoose");


const PriceSchema = new Schema({
	currency: String,
	price: Number,
	date: String,
});

module.exports = model('prices', PriceSchema);