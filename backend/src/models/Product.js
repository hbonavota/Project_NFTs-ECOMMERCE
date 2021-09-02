const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// const findOrCreate = require('mongoose-findorcreate');

const ProductsSchema = new Schema({
	name: {
		type: String,
		unique: true,
	},
	description: String,
	price: {currency: String, value: Number},
	image: String,
	tokenId: String,
	// categories: [
	// 	{
	// 		type: mongoose.Schema.Types.ObjectId,
	// 		ref: 'categories',
	// 	},
	// ],
	// artist: [
	// 	{
	// 		type: mongoose.Schema.Types.ObjectId,
	// 		ref: 'artistNFTs',
	// 	},
	// ],
	address: String,
	reviews: String,
	// collection: [
	// 	{
	// 		type: mongoose.Schema.Types.ObjectId,
	// 		ref: 'products',
	// 	},
	// ],
});

// ProductsSchema.plugin(findOrCreate);

module.exports = mongoose.model('products', ProductsSchema);