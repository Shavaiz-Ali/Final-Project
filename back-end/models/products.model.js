import mongoose from "mongoose";

const productSchema = mongoose.Schema({
    name:{
        type:String,
        default: "",
        required: true,
    },
    image:{
        type:[String],
        default: "",
        required: true,
    },
    price:{
        type:Number,
        default: "",
        required: true,
    },
    description:{
        type:String,
        default: "",
        required: true,
    },
    category:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Category",
        required:true
    }
});

const products = mongoose.model("Products", productSchema);
export default products