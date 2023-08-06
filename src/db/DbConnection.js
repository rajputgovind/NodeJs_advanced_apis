import mongoose from "mongoose";

export default async function dbConnection(){
    try {
        await mongoose.connect(process.env.MONGO_URI)
        console.log(`Database connection successfully.....`)
    } catch (error) {
        console.log("Error in database connection.........")
        console.log(error)
    }
}