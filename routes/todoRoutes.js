const express = require("express");
const {
  createTodo,
  getTodos,
  getTodo,
  updateTodo,
  deleteTodo,
} = require("../controllers/todoController");
const { protect } = require("../middleware/authMiddleware");
const { paginateResults } = require("../middleware/pagination");
const Todo = require("../models/Todo");

const router = express.Router();

router
  .route("/")
  .post(protect, createTodo)
  .get(protect, paginateResults(Todo), getTodos);

router
  .route("/:id")
  .get(protect, getTodo)
  .put(protect, updateTodo)
  .delete(protect, deleteTodo);

module.exports = router;
