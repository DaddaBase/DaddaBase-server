const mongoose = require("mongoose");
const Review = require("./Review.model")
//const imageSchema = mongoose.Schema({ path: { type: String, required: true } })

const productSchema = mongoose.Schema({
    title: {
        type: String,
        required: true,
        unique: true,
    },
    image: {
        type: String,
        required: true,
    }, 
    url: {
        type: String, 
        required: true
    }
    
}, {
    timeStamps: true,
})

const Product = mongoose.model("Product", productSchema);

module.exports = Product;