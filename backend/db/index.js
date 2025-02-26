const mongoose = require("mongoose");
const { boolean } = require("zod");

mongoose.connect(
  "mongodb+srv://aniketraj19verma:Bm1R6aGA9AkAC2dw@cluster0.vikfe.mongodb.net/todoHarkirat"
);

const todoSchema = mongoose.Schema({
  title: String,
  description: String,
  completed: Boolean,
});

const Todo = mongoose.model("todos", todoSchema);

module.exports = {
  Todo,
};
