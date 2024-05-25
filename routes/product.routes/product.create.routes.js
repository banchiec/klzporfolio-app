const express = require("express")
const router = express.Router()

router.post("/", async (req, res) => {
  try {
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
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports(router)