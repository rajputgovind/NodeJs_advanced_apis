import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: { type: String, required: true , trim:true},
    gender: { type: String, require: true },
    age: { type: Number, required: true },
    phone: { type: Number, required: true },
    city: { type: String, required: true }

}, {
    timestamps: true
})

const User = new mongoose.model('User', userSchema)

export default User