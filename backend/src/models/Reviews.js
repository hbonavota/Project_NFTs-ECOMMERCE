const { Schema, model } = require("mongoose");


const ReviewsSchema = new Schema({
	product: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'products',
	},
	user: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'users',
	},
	review: String,
});

module.exports = model('reviews', ReviewsSchema);