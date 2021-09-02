const { Schema, model } = require("mongoose");


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
	specs: {},
	reviews: [],
	// collection: [
	// 	{
	// 		type: mongoose.Schema.Types.ObjectId,
	// 		ref: 'products',
	// 	},
	// ],
});


module.exports = model('products', ProductsSchema);
