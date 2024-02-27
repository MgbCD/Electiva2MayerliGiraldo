const DB = require("./db.json");
const {saveToDb} = require("./utils")

const getAllTask = () => {
    return DB.tasks;
};
const createNewTask = (newTask) => {
    const isAlreadyAdd = DB.tasks.findIndex((task)=> task.name === newTask.name);

    if(isAlreadyAdd){
        return;
    }

    DB.tasks.push(newTask);
    saveToDb(DB);
};

module.exports = { getAllTask, createNewTask};
