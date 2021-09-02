const { Schema, model } = require("mongoose");

const OffersSchema = new Schema({
	name: String,
	oldPrice: Number,
	price: Number,
	product:
		{
			type: mongoose.Schema.Types.ObjectId,
			ref: 'products',
		},
        initialDate: String,
       expirationDate: String,

});

module.exports = model('offers', OffersSchema);