import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    productName:{type:String, required:true},
    productPrice:{type:Number, required:true},
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    }
})

const Product = new mongoose.model('Product',productSchema)

export default Product