import mongoose from "mongoose";

export const connectDB = async () => {
try {
    await mongoose.connect("mongodb+srv://anggemarigi:Pancho20.@cluster2.vhsetpj.mongodb.net/?retryWrites=true&w=majority&appName=Cluster2")
    console.log("BD CONECTADA")
} catch (error) {
    console.log(error)
}

}