const express = require("express");
const router = express.Router();

const { createTask, getTasks, getTaskById } = require("../controllers/taskController");
const { protect } = require("../middleware/authmiddleware");
router.use(protect);
router.post("/newtask", createTask);
router.get("/alltasks", getTasks);
router.get('/gettask/:id', getTaskById);
module.exports = router;
