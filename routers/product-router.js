const express = require("express");
const multer = require("multer");

const Product = require("../models/product-model");

const router = new express.Router();

router.post("/product", async (req, res) => {
  const product = new Product({
    ...req.body
  });

  try {
    await product.save();
    res.status(201).send(product);
  } catch (e) {
    res.status(400).send(e);
  }
});

router.get("/products", async (req, res) => {
  try {
    const allProducts = await Product.find({});

    res.send(allProducts);
  } catch (e) {
    res.status(500).send();
  }
});

const upload = multer({
  limits: {
    fileSize: 1000000
  },
  fileFilter(req, file, cb) {
    if (!file.originalname.match(/\.(jpeg|jpg|png)$/)) {
      return cb(new Error("File must be an image of jpeg, jpg or png format)"));
    }

    cb(undefined, true);
  }
});

router.post(
  "/products/:id/upload",
  upload.single("upload"),
  async (req, res) => {
    const product = await Product.findByIdAndUpdate(req.params.id, req.body);
    product.img = req.file.buffer;
    await product.save();

    if (!product) {
      return res.status(404).send();
    }
    res.send();
  },
  (error, req, res, next) => {
    res.status(400).send({ error: error.message });
  }
);

router.get("/products/:id/img", async (req, res) => {
  try {
    const product = await Product.findByIdAndUpdate(req.params.id);

    if (!product) {
      return res.status(404).send();
    }

    res.set("Content-Type", "image");
    res.send(product.img);
  } catch (e) {
    res.status(500).send();
  }
});

module.exports = router;
