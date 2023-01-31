const express = require("express");
const router = express.Router();
const DadJoke = require("../models/DadJoke.model")

router.get("/", (req, res, next) => {
  res.json("All good in here");
});

router.get("/random-dad-jokes", (req, res, next) => {
  DadJoke.find()
      .then((response) => {
      res.json(response)
  })
})

module.exports = router;
