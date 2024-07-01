// Import mongoose
const mongoose = require("mongoose");

// Function to connect server to mongoDB Database
async function connectToDb() {
  try {
    await mongoose.connect("mongodb://localhost:27017/todo-app");
    console.log("Connected to database");
  } catch (error) {
    console.log(error);
  }
}

module.exports = connectToDb;
