const taskManagerService = require("../services/taskManagerService");



const getAllTask = (req, res) => {
    const allTask = taskManagerService.getAllTask ();
    res.status(200).send({status: "ok", data : allTask} )
};





const getTaskById = (req, res) => {
    const taskId = req.params.id;
    const task = taskManagerService.getTaskById(taskId);
    if (!task) {
        return res.status(404).json({ status: 'error', message: 'Task not found' });
    }
    res.status(200).json({ status: 'OK', data: task });
};

const createTask = (req, res ) => {
    
    

   const newTask =  req.body
   
    
    const createdTask =  taskManagerService.createTask(newTask);
    console.log(createdTask)
    res.status(201).send({ status:"OK",data:createdTask});
};



const updateTask = (req, res ) => {
    res.send (`Update task ${req.params.taskID}`)
}

const deleteTask = (req, res) => {
    const {
        params: { id },
    } = req;

    if (!id || isNaN(id)) {
        return res.status(400).json({ error: "Invalid or missing task ID" });
    }
}

module.exports = {
    createTask,
    getAllTask,
    deleteTask,
    updateTask,
    getTaskById 

};