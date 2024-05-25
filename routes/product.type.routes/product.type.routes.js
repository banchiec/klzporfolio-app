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
    const { name } = req.body;

    const existsProductType = ProductType.findOne(name);
    if (!existsProductType) {
      const productType = new ProductType({
        name,
      });
      await productType.save();
      res.status(200).json(productType);
    } else {
      throw new Error("Product type exists in DB");
    }
  } catch (error) {
    res.status(500).json(new Error({ error: error.message }));
  }
});

module.exports = router;
