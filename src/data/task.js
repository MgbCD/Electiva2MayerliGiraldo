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
       // console.log("Entre al if")
        return;
    }

    DB.tasks.push(newTask);
    return DB.tasks;
};



const updateTask = (id, changes) => {
    const indexUpdate = DB.tasks.findIndex(task => task.id.toString() === id.toString());

    if (indexUpdate !== -1) {
        DB.tasks[indexUpdate] = { ...DB.tasks[indexUpdate], ...changes };
        saveToDb(DB);
        return DB.tasks[indexUpdate];
    } else {
        return null; 
    }
};

const deleteTask = (id) => {
   
    const indexDelete = DB.tasks.findIndex(task => task.id.toString() === id.toString());
    
    if (indexDelete !== -1) {
        
        const deletedTask = DB.tasks.splice(indexDelete, 1);
        saveToDb(DB);
        return deletedTask[0]; 
    } else {
        return null; 
    }
}

module.exports = { getAllTask, createNewTask, getTaskById, deleteTask, updateTask};
