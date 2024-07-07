import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://ryancuth25:KodoKoder251025@cluster0.u2of5to.mongodb.net/food-del').then(()=>console.log("DB Connected"));
}