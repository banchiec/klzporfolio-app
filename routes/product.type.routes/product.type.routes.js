const express = require("express");
const router = express.Router();
const ProductType = require("../../models/product.type.model");

router.get("/", async (req, res) => {
  try {
    const productType = await ProductType.find();
    res.status(200).json(productType);
  } catch (error) {
    res.status(500).json(new Error({ error: error.message }()));
  }
});

router.post("/", async (req, res) => {
  try {
    let { name } = req.body;

    const existsProductType = await ProductType.findOne({ name: name });
    console.log(existsProductType);
    if (!existsProductType) {
      const productType = new ProductType({ name: name });
      await productType.save();
      res.status(200).json(productType);
    } else {
      throw new Error("Product type exists in DB");
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
