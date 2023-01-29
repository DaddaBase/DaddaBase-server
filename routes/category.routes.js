const express = require("express");
const router = express.Router();
const Category = require("../models/Category.model")


router.get("/categories", (req, res, next) => {
    Category.find()
        .then((response) => {
        res.json(response)
    })
});

module.exports = router;