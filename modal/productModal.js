const mongoose = require("mongoose");

const Product = new mongoose.Schema(
  {
    name: { type: String, required: true },
    description: { type: String, required: true },
    image: { type: String },
    category: { type: String, required: true },
    price: { type: Number, required: true },
  },
  {
    collection: "Product",
  }
);
const model = mongoose.model("Product", Product);
module.exports = model;
