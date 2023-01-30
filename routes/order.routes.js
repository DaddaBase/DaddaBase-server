const express = require("express");
const router = express.Router();
const Order = require("../models/Order.model")


router.get("/orders", (req, res, next) => {
    Order.find()
        .then((response) => {
        res.json(response)
    })
});

module.exports = router;