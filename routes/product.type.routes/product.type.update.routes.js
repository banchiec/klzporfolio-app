const express = require("express");
const router = express.Router();
const ProductType = require("../../models/product.type.model");
const upload = require("../../config/multer.js")

router.put("/", upload.single("image"), async (req, res) => {
  try {
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
