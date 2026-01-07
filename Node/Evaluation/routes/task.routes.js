const express = require("express");
const router = express.Router();
const verifyApiKey = require("../middleware/verifyApiKey");
const taskController = require("../controllers/task.controller");

router.use(verifyApiKey);

router.get("/", taskController.getAllTasks);
router.get("/:id", taskController.getTask);




module.exports = router;