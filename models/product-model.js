const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true },
  price: {
    type: { priceEuros: Number, priceCents: Number, unit: String },
    required: true
  },
  pricePerKg: Number,
  description: { type: String, required: true },
  img: {
    type: Buffer
  },

  glutenFree: { type: Boolean, required: true },
  lactoseFree: { type: Boolean, required: true },
  vegan: { type: Boolean, required: true }
});

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
