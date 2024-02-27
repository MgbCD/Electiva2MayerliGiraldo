const router = require('express').Router();

router
    .get('/task',taskManagerController.getAllTask)
    .get('/task/:id', taskManagerController.getTaskId)
    .post('/task', taskManagerValidator, createTask)
    .delete('/task/:id', taskManagerController.deleteTask)
    .put('/task', taskManagerController.updateTask);

module.exports = router;