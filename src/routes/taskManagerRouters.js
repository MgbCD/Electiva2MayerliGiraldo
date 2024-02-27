const router = require('express').Router();
const taskManagerController = require("../controllers/taskManagerController");


router
    .get('/',taskManagerController.getAllTask)
    .get('/:taskID', taskManagerController.getTaskId)
    .post('/:taskID', taskManagerController.createTask)
    .delete('/:taskID', taskManagerController.deleteTask)
    .put('/:taskID', taskManagerController.updateTask);

module.exports = router;