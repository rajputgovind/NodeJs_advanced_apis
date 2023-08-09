import { StatusCodes } from "http-status-codes";
import User from "../models/UserModel.js";
import {validationResult} from 'express-validator'
import errorHandler from "../middlewares/ValidationErrorHandler.js";

export const userRegistration =async(req, res)=>{
    try {
        const errors = validationResult(req)
        // console.log("req",errors.errors)
        const errMessages = errorHandler(errors)

        if(errMessages && errMessages.length){
            return res.status(StatusCodes.BAD_REQUEST).json({success:false,message:errMessages})
        }

        const { name, phone, age, gender,city  } = req.body
        const user = User({name, phone, age, gender,city})
        const savedUser = await user.save()

        res.status(StatusCodes.CREATED).json({message:"user Created successfully", success: true, data:savedUser})
    } catch (error) {
        console.log("Error in saveing user")
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({message:"error in saving user", success:false, error: error.message} )
    }
}

export const getAllUser = async(req,res)=>{
    try {
        const user = await User.find({})
        res.status(StatusCodes.OK).json({message:"user find successfully", success:true, data:user})
    } catch (error) {
        console.log("error in get user", error)
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({message:"error in get all user", success:false, error:error.message})
    }
}


export const searchUser = async(req,res)=>{
    try {
        // const search  = req.body.search
        const search  = req.query.search
        const page = req.query.page || 1
        const limit = req.query.limit || 2
        const skip =(page-1)*limit 
        const {gender} = req.body

        const userId = await User.find({})
        console.log(userId)
        const user = await User.find({name:{$regex: ".*"+search+".*",$options:"i"}}).limit(limit).skip(skip)
        // const user = await User.find({gender:"male"})

        // console.log(user,"user")

        if(user.length>0){
            return res.status(StatusCodes.OK).json({success:true, message:"user find successfully" ,data: user})
        }else{
            return res.status(StatusCodes.BAD_REQUEST).json({success:false,message:"No result found"})
        }

    } catch (error) {
        console.log(error)
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({success:false,message:"Internal server Error"})
    }
}