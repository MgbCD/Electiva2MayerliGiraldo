const {v4: uuid} = require ('uuid');
const task = require ("../data/task")

const createTask = (newTask) => {
    
   
   const createdTask = task.createNewTask(newTask);
   return createdTask;
};
const getAllTask= () => {
    const allTask = task.getAllTask();
    return allTask;
};
const deleteTask= (id) => {
   task.deleteTask(id);
};
const updateTask= () => {
    return;
};


const getTaskById = (id) => {
    return task.getTaskById(id);
};

module.exports = {
    getAllTask,
    createTask,
    deleteTask,
    getTaskById,
    updateTask
};