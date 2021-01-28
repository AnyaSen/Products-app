const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true },
  price: { type: { price: Number, unit: String }, required: true },
  pricePerKg: Number,
  description: { type: String, required: true },
  img: {
    type: Buffer
  }
});

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
