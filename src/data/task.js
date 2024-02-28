const DB = require("./db.json");
const {saveToDb} = require("./utils")

const getAllTask = () => {
    return DB.tasks;
};


const getTaskById = (id) => {
    if (!id) {
        return null;
    }
    const task = DB.tasks.find((task) => task.id.toString() === id.toString());
    return task;
};
const createNewTask = (newTask) => {
    
    const isAlreadyAdd = DB.tasks.findIndex((task)=> task.name === newTask.name);
    console.log(isAlreadyAdd)
    if(isAlreadyAdd!==-1){
        console.log("Entre al if")
        return;
    }

    DB.tasks.push(newTask);
    return DB.tasks;
};

const deleteTask = (id) => {
    task.deleteTask
}

module.exports = { getAllTask, createNewTask, getTaskById};
