const express = require('express')
const router = express.Router()
const authRouter = require('./auth.routes/auth.routes')
const categoryRouter = require('./category.routes/category.routes')
const productTypeRouter = require('./product.type.routes')
const productRouter = require('./product.routes')

router.use('/auth', authRouter)
router.use('/categories', categoryRouter)
router.use('/product-type', productTypeRouter)
router.use('/products', productRouter)

module.exports = router
