const { Schema, model } = require("mongoose");

const BrandsSchema = new Schema({
	name: {
		type: String,
		required: true,
		unique: true,
	},
	products: [
		{
			type: mongoose.Schema.Types.ObjectId,
			ref: 'products',
		},
	],
	wallet: {
		addressPublicKey: String,
		addressPrivateKey: String
	}
});

module.exports = model('artistNFTs', BrandsSchema);