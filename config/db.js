require("dotenv").config();

const mongoose = require("mongoose");
const MONGO_URI =
  process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/DaddaBase-server";
const connectDB = async () => {
    try {
        await mongoose.connect(MONGO_URI)
    }
    catch (error) {
        
    }
}

module.exports = connectDB;