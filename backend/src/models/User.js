
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UsersSchema = new Schema({
	email: {
		type: String,
		required: [true, 'User email required'],
		validate: {
			validator: function (v) {
				return /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/.test(v);
			},
			message: (props) => `${props.value} is not a valid email!`,
		},
		unique: true,
	},
	password: {
		type: String,
		required: true,
	},
	firstName: String,
	lastName: String,
	imageUrl: String,
	role: {
		type: String,
		enum: {
			values: ['admin', 'client'],
			message: '{VALUE} is not supported',
		},
		default: 'client',
	},
	city: [
		{
			postal_code: Number,
			location: String,
		},
	],
	orders: [
		{
			type: mongoose.Schema.Types.ObjectId,
			ref: 'orders',
		},
	]
});


module.exports = mongoose.model('users', UsersSchema);