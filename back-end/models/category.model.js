import mongoose from "mongoose"

const categoryModel = new mongoose.Scheme({
    name:{
        type:String,
        required:true
    }
}, {timestamps:true});

export const Category = mongoose.model("Category", categoryModel)