const express = require("express");
const router = express.Router();
const authRouter = require("./auth.routes/auth.routes");
const categoryRouter = require("./category.routes/category.routes");

// router.get('/', (req, res, next) => {
// 	res.json('All good in here')
// })
router.use("/auth", authRouter);
router.use("/category", categoryRouter);

module.exports = router;
