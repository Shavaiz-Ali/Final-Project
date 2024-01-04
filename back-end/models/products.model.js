import mongoose from "mongoose";

const productSchema = mongoose.Schema({
    name: {
        type: String,
        default: "",
        required: true,
    },
    image: {
        type: [String],
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
        min:[0, 'wrong min stock'], 
        default:0
    },
});

const products = mongoose.model("Products", productSchema);
export default products