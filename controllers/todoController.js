const Todo = require("../models/Todo");

exports.createTodo = async (req, res) => {
  const { title, description, isFavorite } = req.body;
  try {
    const todo = await Todo.create({
      user: req.user._id,
      title,
      description,
      isFavorite,
    });
    res.status(201).json({ success: true, data: todo });
  } catch (err) {
    res.status(400).json({ success: false, error: err.message });
  }
};

exports.getTodos = async (req, res) => {
  res.status(200).json({ success: true, data: res.paginatedResults });
};

exports.getTodo = async (req, res) => {
  try {
    const todo = await Todo.findById(req.params.id);
    if (!todo || todo.user.toString() !== req.user._id.toString()) {
      return res
        .status(404)
        .json({ success: false, message: "Todo not found" });
    }
    res.status(200).json({ success: true, data: todo });
  } catch (err) {
    res.status(400).json({ success: false, error: err.message });
  }
};

exports.updateTodo = async (req, res) => {
  try {
    const todo = await Todo.findById(req.params.id);
    if (!todo || todo.user.toString() !== req.user._id.toString()) {
      return res
        .status(404)
        .json({ success: false, message: "Todo not found" });
    }
    todo.title = req.body.title || todo.title;
    todo.description = req.body.description || todo.description;
    todo.isFavorite =
      req.body.isFavorite !== undefined ? req.body.isFavorite : todo.isFavorite;
    await todo.save();
    res.status(200).json({ success: true, data: todo });
  } catch (err) {
    res.status(400).json({ success: false, error: err.message });
  }
};

exports.deleteTodo = async (req, res) => {
  try {
    const todo = await Todo.findById(req.params.id);
    if (!todo || todo.user.toString() !== req.user._id.toString()) {
      return res
        .status(404)
        .json({ success: false, message: "Todo not found" });
    }
    await todo.remove();
    res.status(200).json({ success: true, message: "Todo removed" });
  } catch (err) {
    res.status(400).json({ success: false, error: err.message });
  }
};
