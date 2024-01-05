import mongoose from "mongoose";

const productSchema = mongoose.Schema({
  name: {
    type: String,
    default: "",
    required: true,
  },
  image: {
    type: String,
    default: "",
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
    default: "",
    required: true,
  },
  stock: {
    type: Number,
    required: true,
  },
  categories: {
    type: String,
    required: true,
  },
});

const products = mongoose.model("Products", productSchema);
export default products;
