const { Schema, model } = require("mongoose");


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

module.exports = model('categories', CategoriesSchema);