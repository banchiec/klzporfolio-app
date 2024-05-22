const express = require("express");
const router = express.Router();
const Category = require("../../models/Category.model.js");
const upload = require("../../config/multer.js");

router.get("/", async (req, res) => {
  try {
    const categories = await Category.find();
    res.status(200).json(categories);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.post("/", upload.single("image"), async (req, res) => {
  try {
    const { name, description, available } = req.body;
    const imagePath = req.file ? req.file.path : null;

    const category = new Category({
      name,
      description,
      image: imagePath,
      available: available,
    });

    await category.save();
    res.status(200).json(category);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
