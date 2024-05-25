const express = require("express")
const router = express.Router()
const Product = require("../../models/product.model")


const deliveryFormat = [
  {
    format: "png",
    price: 12.3,
  },
  {
    format: "png",
    price: 12,
  },
  {
    format: "png",
    price: 12,
  },
  {
    format: "png",
    price: 12,
  }
]


router.post("/", async (req, res) => {
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
        images,
        deliveryOptions,
        productType,
      });
      await product.save();
      res.status(200).json(product);
    } else {
      res.status(400).json({ error: "failed, name exist" })
    }

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;