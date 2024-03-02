const task = require ("../data/task")

/**
 * Creates a new task.
 * @param {object} newTask - The new task object to be created.
 * @returns {object} The created task.
 */
const createTask = (newTask) => {
    const createdTask = task.createNewTask(newTask);
    return createdTask;
};

/**
 * Retrieves all tasks.
 * @returns {array} An array containing all tasks.
 */
const getAllTask = () => {
    const allTask = task.getAllTask();
    return allTask;
};

/**
 * Deletes a task by ID.
 * @param {string} id - The ID of the task to delete.
 */
const deleteTask = (id) => {
    task.deleteTask(id);
};

/**
 * Updates a task by ID.
 * @param {string} id - The ID of the task to update.
 * @param {object} changes - An object containing the changes to be applied to the task.
 * @returns {object|null} The updated task if successful, otherwise null.
 */
const updateTask = (id, changes) => {
    const updatedTask = task.updateTask(id, changes);
    return updatedTask;
};

/**
 * Retrieves a task by ID.
 * @param {string} id - The ID of the task to retrieve.
 * @returns {object|null} The task with the specified ID if found, otherwise null.
 */
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