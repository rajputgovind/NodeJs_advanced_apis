import { StatusCodes } from "http-status-codes";
import Product from "../models/ProductModel.js";


export const postProduct =async(req, res)=>{
    try {
        const { productName,productPrice,userId  } = req.body
        const product = Product({productName,productPrice,userId})
        const savedProduct = await product.save()

        res.status(StatusCodes.CREATED).json({message:"product Created successfully", success: true, data:savedProduct})
    } catch (error) {
        console.log("Error in saveing user")
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({message:"error in saving user", success:false, error: error.message} )
    }
}

export const getAllProduct = async(req,res)=>{
    try {
        // const product = await Product.find({}).populate("userId")
        const product  = await Product.aggregate([
            {
                $lookup:{
                    from:"users",
                    localField:"userId",
                    foreignField:"_id",
                    as:"user"
                }
            }
        ])
        console.log("product",product)
        res.status(StatusCodes.OK).json({message:"user find successfully", success:true, data:product})
    } catch (error) {
        console.log("error in get user", error)
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({message:"error in get all user", success:false, error:error.message})
    }
}