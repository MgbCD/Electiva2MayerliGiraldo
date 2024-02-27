const taskManagerService = require("../services/taskManagerService");



const getAllTask = (req, res) => {
    const allTask = taskManagerService.getAllTask ();
    res.status(200).send({status: "ok", data : allTask} )
};


const getTaskId = (req, res ) => {
    const idTask = taskManagerService.getTaskId (req.params.taskID);
    res.send (`Get task ${req.params.taskID}`)
}

const createTask = (req, res ) => {
    const { id, name, description, createdDate, dueDate, status } = req.body;

  if (!name || !description || !createdDate || !dueDate || !status) {
    return res.status(400).json({ error: "All field are mandatory" });
  }

   const newTask = {
    name: body.name,
    description: body.description,
    createdDate : body.createdDate,
    dueDate: body.dueDate,
    status: body.status
   };

    
    const createdTask =  taskManagerService.createTask(newTask);
    res.status(201).send({ status:"OK",data:createdTask});
};



const updateTask = (req, res ) => {
    res.send (`Update task ${req.params.taskID}`)
}

const deleteTask = (req, res ) => {
    res.send (`Get task ${req.params.taskID}`)
}

module.exports = {
    createTask,
    getAllTask,
    deleteTask,
    updateTask,
    getTaskId

};