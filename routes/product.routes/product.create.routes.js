const express = require("express");
const router = express.Router();
const Product = require("../../models/product.model");
const upload = require("../../config/multer");

router.post("/", upload.array("images", 12), async (req, res) => {
  console.log(req.files.length, "file length");

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
    deliveryOptions,
    productType,
  } = req.body;

  let images = [];
  if (req.files && req.files.length > 0) {
    images = req.files.map((file) => ({
      url: file.path,
      size: {
        width: 210,
        height: 210,
      },
    }));
  }

  try {
    const existsName = await Product.findOne({ name: name });
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
        images,
        deliveryOptions,
        productType,
      });
      await product.save();
      res.status(200).json(product);
    } else {
      res.status(400).json({ error: "Failed, name exists" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
