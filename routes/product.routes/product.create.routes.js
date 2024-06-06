const express = require("express");
const router = express.Router();
const Product = require("../../models/product.model");
const upload = require("../../config/multer");
const fs = require("fs");
const path = require("path");

router.post("/", upload.array("images", 10), async (req, res) => {
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
  } = req.body;

  const imagesFiles = req.files;

  try {
    const existsName = await Product.findOne({ name: name });
    if (existsName === null) {
      const images = [];
      const uploadPath = `uploads/product/${req.baseUrl.split("/")[2]}`;

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
        images,
        deliveryOptions,
        productType,
      });
      await product.save();
      res.status(200).json(product);
    } else {
      res.status(400).json({ error: "failed, name exist" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
