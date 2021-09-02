
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
var findOrCreate = require('mongoose-findorcreate');

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
BrandsSchema.plugin(findOrCreate);

module.exports = mongoose.model('artistNFTs', BrandsSchema);