const Todo = require("../models/todoModel"); // importing todo model (the blueprint)

const express = require("express");
const router = express.Router();

// Routing
// test route
router.get("/", (req, res) => {
  res.json({ hello: "world yo" }); // res.json means it will respond with json
});

// GET
router.get("/get-all-todos", async (req, res) => {
  try {
    // Find the todos
    const listOfAllTodos = await Todo.find();

    // Respond with them
    res.json({ todos: listOfAllTodos });
  } catch (error) {
    console.log(error);
    res.sendStatus(400);
  }
});

// GET single todo
router.get("/get-a-single-todo/:id", async (req, res) => {
  try {
    // Get the id off the url
    const todoIdFromTheUrl = req.params.id;

    // Find the todo using that id
    const todoFromTheDb = await Todo.findOne({
      _id: todoIdFromTheUrl,
    });

    // Respond with the todo
    res.json({ todo: todoFromTheDb });
  } catch (error) {
    console.log(error);
    res.sendStatus(400);
  }
}); // we want to accept an id from the url (eg: the user will send get-a-single-todo/xdfdd (the todo id)), so to get the id from the url, we put a colon and the variable we want to assign it to (here, id)

// POST
router.post("/create-todo", async (req, res) => {
  try {
    // Get the sent in data off request body
    const todoFromRequestBody = req.body.inputtodo;

    // Create a todo with it (take the values from the request body / frontend and insert in the database)
    const ourCreatedTodo = await Todo.create({
      inputtodo: todoFromRequestBody,
    });

    // respond with the new todo (this will be our response in postman / developer tools)
    res.json({ todo: ourCreatedTodo });
  } catch (error) {
    console.log(error);
    res.sendStatus(400);
  }
});

// PUT
router.put("/update-todo/:id", async (req, res) => {
  try {
    // Get the id off the url
    const todoIdFromTheUrl = req.params.id;

    // Get the data off the req body
    const todoFromRequestBody = req.body.inputtodo;

    // Find and update the record
    await Todo.findOneAndUpdate(
      { _id: todoIdFromTheUrl },
      {
        inputtodo: todoFromRequestBody,
      }
    );

    //   Find updated todo (using it's id)
    const updatedTodo = await Todo.findById(todoIdFromTheUrl);

    // Respond with the updated todo (after finding it)
    res.json({ todo: updatedTodo });
  } catch (error) {
    console.log(error);
    res.sendStatus(400);
  }
});

// DELETE
router.delete("/delete-todo/:id", async (req, res) => {
  try {
    // get id off the url
    const todoIdFromTheUrl = req.params.id;

    // Delete the record
    await Todo.deleteOne({ _id: todoIdFromTheUrl });

    // Respond with a message after deleting
    res.json({ success: "Todo Record deleted" });
  } catch (error) {
    console.log(error);
    res.sendStatus(400);
  }
});

module.exports = router;
