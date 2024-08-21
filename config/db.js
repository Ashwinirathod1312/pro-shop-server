import mongoose from "mongoose";

const connectDB = async() =>{
    try{
const conn = await mongoose.connect(process.env.MONGO_URI);
console.log(`MongoDB connected ${conn.connection.host}`);

    }
    catch (err){
        console.log(`error in MongoDB connection ${err.message}`);
        process.exit(1)

    }
}
export default connectDB;