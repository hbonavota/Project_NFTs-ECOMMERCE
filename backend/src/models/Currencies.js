const { Schema, model } = require("mongoose");

const CurrencySchema = new Schema({
	quotes: {'': ""},
	dateVig: Number,
	dateCd: Number,
});

module.exports = model('currencies', CurrencySchema);