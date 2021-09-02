
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const findOrCreate = require('mongoose-findorcreate');

const CategoriesSchema = new Schema({
	name: {
		type: String,
		unique: true,
	},
	products: [
		{
			type: mongoose.Schema.Types.ObjectId,
			ref: 'products',
		},
	],
	specs: [],
});
CategoriesSchema.plugin(findOrCreate);

module.exports = mongoose.model('categories', CategoriesSchema);