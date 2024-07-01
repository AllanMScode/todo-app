// the model will define how the database will look

const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema({
  // mongoose.Schema creates a new schema(database) & the object provides a blueprint of the schema
  // todosSchema is the variable which stores the value of mongoose.Schema
  inputtodo: String,
});

const Todo = mongoose.model("Todo", todoSchema); // The first argument, "Todo", is the name you want to give to the model. This name will be used to refer to your todos in your application. The second argument, todoSchema, is the schema you defined earlier. The model will use this schema to understand the structure of your data.
// the name of the table / collection will probably be 'todos'

module.exports = Todo; // This line makes the Todo model available to other parts of your application.
