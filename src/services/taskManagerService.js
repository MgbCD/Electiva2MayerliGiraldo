const {v4: uuid} = require ('uuid');
const task = require ("../data/task")

const createTask = () => {
    return;
};
const getAllTask= () => {
    const allTask = task.getAllTask();
    return allTask;
};
const deleteTask= () => {
    return;
};
const updateTask= () => {
    return;
};
const getTaskId =  () => {
    return;
};

module.exports = {
    getAllTask,
    createTask,
    deleteTask, 
    getTaskId,
    updateTask
}