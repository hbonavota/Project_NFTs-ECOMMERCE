const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// const findOrCreate = require('mongoose-findorcreate');

const ProductsSchema = new Schema({
  name: { type: String, required: true, index: true, sparse: true },
  id: String,
  price: { type: Number, required: true },
  currency: { type: String, required: true },
  images: String,
  tokenId: String,
  address: String,
  reviews: String,
  createdInDB: {
    type: Boolean,
    default: true,
  },
  description: String,
  artistName: String,
  reviews: [],
});

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
// ProductsSchema.plugin(findOrCreate);

module.exports = mongoose.model("products", ProductsSchema);
