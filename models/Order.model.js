const mongoose = require("mongoose");
const User = require("./UserModel")
//1 to many relationship

const orderSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: User,
    },
    orderTotal: {
        itemsCount: { type: Number, required: true }, cartSubTotal: { type: Number, required: true }
    },
    cartItems: [
        {
            name: { type: String, required: true },
            price: { types: Number, required: true },
            image: { path: { type: String, required: true } },
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