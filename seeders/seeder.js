const connectDB = require("../config/db");
connectDB();

const productData = require("./products");
const Product = require("../models/Product.model");

const importData = async () => {
  try {
    await Product.insertMany(productData);
    console.log("Seeder data proceeded successfully");
    process.exit();
  } catch (error) {
    console.error("Error while proccessing seeder data", error);
    process.exit(1);
  }
};
importData();
