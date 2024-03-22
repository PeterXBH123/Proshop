import mongoose from "mongoose";
import dotenv from "dotenv";
import colors from "colors";
import users from "./data/users.js";
import products from "./data/products.js"
import User from "./models/userModel";
import Order from "./models/orderModel.js";
import connectDb from "./config/db.js";
import Product from "./models/productMongo.js";

dotenv.config();

connectDb();

const importData = async () => {
    try{
        await Order.deleteMany();
        await Product.deleteMany();
        await User.deleteMany();

        const createdUsers = await User.insertMany(users);
        const adminUser = createdUsers[0]._id;

        const sampleProducts = products.map((product) => {
            return { ...product, user: adminUser };
        });
      await Product.insertMany(sampleProducts);

      console.log('Data Imported!'.green.inverse)
    } catch (error){

    }
}