const mongoose = require("mongoose");
const dadJokeSchema = mongoose.Schema({
    joke: {
        type: String,
        required: true,
   },
})

const DadJoke = mongoose.model("DadJoke", dadJokeSchema);

module.exports = DadJoke;