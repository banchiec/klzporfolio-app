const { Schema, model } = require('mongoose')

const productTypeSchema = new Schema(
	{
		name: {
			type: String,
			required: true,
		},
		description: {
			type: String,
		},
		image: {
			type: String,
			required: true,
		},
	},
	{
		timestamps: true,
	}
)

const productType = model('productType', productTypeSchema)

module.exports = productType
