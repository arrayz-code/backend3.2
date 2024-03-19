import mongoose from "mongoose";

export const connectDB = async () => {
try {
    await mongoose.connect("mongodb://localhost/hoteldb ")
    console.log("BD CONECTADA")
} catch (error) {
    console.log(error)
}

}