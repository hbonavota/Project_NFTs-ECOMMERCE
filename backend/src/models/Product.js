const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// const findOrCreate = require('mongoose-findorcreate');

const ProductsSchema = new Schema({

	name: { 
		type: String, 
		require: true, 
		index:true, 
		sparse:true
	},
	id: String,
	price: {
		type: Number,
		currency: String, 
		required: true
	},
	image: String,
	tokenId: String,
	address: String,
	reviews: String,
	createdInDB: Boolean,
	description: String
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
	// collection: [
	// 	{
	// 		type: mongoose.Schema.Types.ObjectId,
	// 		ref: 'products',
	// 	},
	// ],
});

// ProductsSchema.plugin(findOrCreate);

module.exports = mongoose.model('products', ProductsSchema);