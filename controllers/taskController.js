const Task = require("../models/task");
const createTask = async (req, res) => {
    const { title, description, status } = req.body;
    const task = await Task.create({
        title,
        description,
        status,
        user: req.user._id
    });     
    res.status(201).json({ msg: "Task created successfully" });
};
const getTasks = async (req, res) => {
    const tasks = await Task.find({ user: req.user._id });
    res.status(200).json(tasks);
};
const getTask = async (req, res) => {
    const task = await Task.findById(req.params.id);
    if (!task)   {
        return res.status(404).json({ msg: "Task not found" });
    }
    res.status(200).json(task);
};
const updateTask = async (req, res) => {
    const task = await Task.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.status(200).json(task);
};
const deleteTask = async (req, res) => {
    const task = await Task.findByIdAndDelete(req.params.id);
    res.status(200).json(task);
};
module.exports = { createTask, getTasks, getTask, updateTask, deleteTask }; 