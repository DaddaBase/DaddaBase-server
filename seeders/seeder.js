const connectDB = require("../config/db")
connectDB()

const categoryData = require("./categories")
const Category = require("../models/Category.model")

const productData = require("./products")
const Product = require("../models/Product.model")

const orderData = require("./orders")
const Order = require("../models/Order.model")

const importData = async () => {
    try {
        //await Product.collection.deleteMany({})
        await Product.insertMany(productData)
        //await Category.collection.deleteMany({})
        await Category.insertMany(categoryData)
        //await Order.collection.deleteMany({})
        await Order.insertMany(orderData)
        console.log("Seeder data proceeded successfully")
        process.exit()
    } catch (error) {
        console.error("Error while proccessing seeder data", error)
        process.exit(1);
    }
}
importData()


 
