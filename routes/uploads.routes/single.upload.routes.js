const express = require('express')
const router = express.Router()
const path = require('path')

router.get('/categories/:image', async (req, res) => {
	const { image } = req.params
	res.sendFile(path.join(__dirname, `../../uploads/categories/${image}`))
	//res.sendFile(__dirname + `../../../uploads/categories/${image}`)
})

module.exports = router
