import mongoose from "mongoose";
import dotenv from "dotenv";
import colors from "colors";
import connectDB from "./config/db.js";
import Order from "./models/orderModel.js";
import Product from "./models/productModels.js";
import User from "./models/userModel.js";
import user from "./constants/users.js";
import { products } from "./constants/Constants.js";

dotenv.config();

connectDB();

const importData = async() =>{
try{
await Order.deleteMany();
await Product.deleteMany();
await User.deleteMany();

const createUsers = await User.insertMany(user);
const adminUser = createUsers[0]._id;
const sampleProducts = products.map((product) => { return {...product, user: adminUser}})
await Product.insertMany(sampleProducts);

console.log('Data imported'.green.inverse);
process.exit();
}
catch(err){
console.log(`Error in importing ${err}`.red.inverse);
process.exit(1);
}
}

const destroyData = async() =>{
    try{
    await Order.deleteMany();
    await Product.deleteMany();
    await User.deleteMany();

    console.log('Data Destroyed'.green.inverse);
    process.exit();
    }
    catch(err){
    console.log(`Error in Destroying ${err}`.red.inverse);
    process.exit(1);
    }
    }
    
//  this will create a new arg in the path that we run it in eg if we run node seeder.js -d it will create
// 3rd arg to already existing two
// console.log(process.argv,"arvss");

if(process.argv[2] == "-d"){
    destroyData();
}
else{
    importData();
}