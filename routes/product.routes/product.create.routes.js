const express = require('express')
const router = express.Router()
const Product = require('../../models/product.model')
const { uploadSingle } = require('../../middleware/upload')
const upload = require('../../config/multer')

router.post('/', upload.array('images', 12), async (req, res) => {
	const {
		name,
		description,
		deliveryDays,
		colors,
		category,
		reviews,
		deliveryFormat,
		price,
		sold,
		images,
		deliveryOptions,
		productType,
	} = req.body

	const imagePath = req.file ? req.file.path : null

	console.log(imagePath)
	console.log(req.file)

	const newImage = [
		{
			url: imagePath,
			size: {
				width: 210,
				height: 210,
			},
		},
	]

	try {
		const existsName = await Product.findOne({ name: name })
		if (existsName === null) {
			const product = new Product({
				name,
				description,
				deliveryDays,
				colors,
				category,
				reviews,
				deliveryFormat,
				price,
				sold,
				images: newImage,
				deliveryOptions,
				productType,
			})
			await product.save()
			res.status(200).json(product)
		} else {
			res.status(400).json({ error: 'failed, name exist' })
		}
	} catch (error) {
		res.status(500).json({ error: error.message })
	}
})

module.exports = router
