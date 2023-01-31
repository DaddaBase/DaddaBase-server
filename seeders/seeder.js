const connectDB = require("../config/db");
connectDB();

const dadJokeData = require("./dadjokes");
const DadJoke = require("../models/DadJoke.model");

const importData = async () => {
  try {
    await DadJoke.insertMany(dadJokeData);
    console.log("Seeder data proceeded successfully");
    process.exit();
  } catch (error) {
    console.error("Error while proccessing seeder data", error);
    process.exit(1);
  }
};
importData();
