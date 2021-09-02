const { Schema, model } = require("mongoose");

const FavouritesSchema = new Schema({
	user: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'users',
	},
	products: [
		{
			_id: false,
			product: {
				type: mongoose.Schema.Types.ObjectId,
				ref: 'products',
			},
		},
	],
});

module.exports = model('favourites', FavouritesSchema);