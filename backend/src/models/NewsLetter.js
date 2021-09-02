const { Schema, model } = require("mongoose");

const NewsLetterSchema = new Schema({
	emails: [
		{
			type: String,
			required: true,
			validate: {
				validator: function (v) {
					return /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/.test(v);
				},
				message: (props) => `${props.value} is not a valid email!`,
			},
		},
	],
});

module.exports = model('newsLetter', NewsLetterSchema);