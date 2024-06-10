const express = require("express");
const router = express.Router()
const productTypeCreateRoutes = require("./product.type.create.routes")
const productTypeListRoutes = require("./product.type.list.routes")

router.use("/", productTypeCreateRoutes);
router.use("/", productTypeListRoutes)

module.exports = router;