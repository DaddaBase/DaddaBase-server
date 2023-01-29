const mongoose = require("mongoose");
const Review = require("./Review.model")
const imageSchema = mongoose.Schema({ path: { type: String, required: true } })

const productSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true,
    },
    description: {
        type: String,
        required: true,
    }, 
    category: {
        type: String, 
        required: true
    }, 
    count: {
        type: Number, 
        required: true,
    }, 
    price: {
        type: Number, 
        required: true,
    },
    rating: {
        type: Number,
    }, 
    reviewCount: {
        type: Number,
    },
    sales: {
        type: Number,
        default: 0,
    },
    attributes: [
        { key: String}, {value: String}
    ],
    images: [imageSchema],
    reviews: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: Review,
        }
    ],
}, {
    timeStamps: true,
})


productSchema.index({name: "text", description: "text"},{name: "TextIndex"})
productSchema.index({"attributes.key":1, "attribute.value": 1 }) //

const Product = mongoose.model("Product", productSchema);

module.exports = Product;