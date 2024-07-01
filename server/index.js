// Import dependencies
const express = require("express");
const connectToDb = require("./config/connectToDb"); // Importing connection file for mongoDB
const crudRoutes = require("./routes/crudRoutes");
const cors = require("cors");

// Create an express app
const app = express();
app.use(cors());

// Configure express app (our server will send & read json, but by default, express can't read json from the request body. We have to configure to do that )
app.use(express.json());

// Connect to database
connectToDb(); // running the function we imported above (to connect to mongoDB)

app.use("", crudRoutes);

const testPort = 8080;

app.listen(testPort);
