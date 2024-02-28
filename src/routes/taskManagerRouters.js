const router = require('express').Router();
const taskManagerController = require("../controllers/taskManagerController");
const taskManagerValidate = require("../middleware/taskManagerValidate");

router
    .get('/task',taskManagerController.getAllTask)
    .get('/task/:id', taskManagerController.getTaskById)
    .post('/task',taskManagerValidate.taskValidator,taskManagerController.createTask)
    .delete('/task/:id', taskManagerController.deleteTask)
    .put('/task', taskManagerController.updateTask);

module.exports = router;