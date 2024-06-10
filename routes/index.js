const express = require('express')
const router = express.Router()
const authRouter = require('./auth.routes/auth.routes')
const categoryRouter = require('./category.routes/category.routes')
const productTypeRouter = require('./product.type.routes')
const productRouter = require('./product.routes')
const uploadsRoutes = require('./uploads.routes')
const validateAuth = require("../middleware/validateAuth");

router.use('/auth', authRouter)
router.use('/categories', validateAuth, categoryRouter)
router.use('/product-type', validateAuth, productTypeRouter)
router.use('/products',  validateAuth, productRouter)
router.use('/uploads',  validateAuth, uploadsRoutes)

module.exports = router
