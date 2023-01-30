const mongoose = require("mongoose");
const User = require("../models/User.model")
//1 to many relationship

const orderSchema = mongoose.Schema({
    user: {
        //type: mongoose.Schema.Types.ObjectId,
        //required: true,
        type: Number,
    },
    orderTotal: {
        itemsCount: { type: Number, required: true }, cartSubTotal: { type: Number, required: true }
    },
    cartItems: [
        {
            name: { type: String, required: true },
            price: { type: Number, required: true },
            image: { type: String, required: false  },
            quantity: { type: Number, required: true },//amount user wants to buy
            count: { type: Number, reuired: true }// amount left in stock
        }
    ], 
    transactionResult: {
        status: { type: String },
        createTime: { type: String },
        amount: {type: Number}
    }, 
    isPaid: {
        type: Boolean,
        default: false,
    }, 
    paidOn: {
        type: Date,
    }, 
    isDelivered: {
        type: Boolean,
        required: true,
        default: false,
    },
    deliveredAt: {
        type: Date,
    } 
})

const Order = mongoose.model("Order", orderSchema)
module.exports = Order;