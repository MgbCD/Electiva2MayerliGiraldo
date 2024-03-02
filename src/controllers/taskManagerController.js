const taskManagerService = require("../services/taskManagerService");


/**
 * Retrieves all tasks with pagination and filtering by status.
 * @param {object} req - The request object.
 * @param {object} res - The response object.
 */

// Pagination and filtering by status are achieved using the following query parameters: api/v1/tasks?pageNum=1&pageSize=1&taskStatus=inactive

const getAllTask = (req, res) => {
    const page = parseInt(req.query.page) || 1; 
    const limit = parseInt(req.query.limit) || 10; 
    const offset = (page - 1) * limit; 
    const status = req.query.status; // Obtener el estado de la consulta

    let allTask = taskManagerService.getAllTask();

   
    if (status) {
        allTask = allTask.filter(task => task.status === status);
    }

    const paginatedTasks = allTask.slice(offset, offset + limit);

    const totalPages = Math.ceil(allTask.length / limit); 

    const response = {
        status: "OK",
        data: paginatedTasks,
        totalPages,
        currentPage: page
    };
    
    res.status(200).json(response);
};
/**
 * Retrieves a task by ID.
 * @param {object} req - The request object containing the task ID in req.params.
 * @param {object} res - The response object.
 */
const getTaskById = (req, res) => {
    const taskId = req.params.id;
    const task = taskManagerService.getTaskById(taskId);
    if (!task) {
        return res.status(404).json({ status: 'error', message: 'Task not found' });
    }
    res.status(200).json({ status: 'OK', data: task });
};

/**
 * Creates a new task.
 * @param {object} req - The request object containing the new task data in req.body.
 * @param {object} res - The response object.
 */
const createTask = (req, res) => {
    const newTask = req.body;
    const createdTask = taskManagerService.createTask(newTask);
    res.status(201).send({ status: "OK", data: createdTask });
};

/**
 * Updates a task by ID.
 * @param {object} req - The request object containing the task ID in req.params and the updated task data in req.body.
 * @param {object} res - The response object.
 */
const updateTask = (req, res) => {
    const { body, params: { id } } = req;
    if (!id) {
        return res.status(400).json({ error: "Invalid or missing task ID" });
    }
    const updatedTask = taskManagerService.updateTask(id, body);
    if (updatedTask) {
        return res.status(200).json({ status: "OK", data: updatedTask });
    } else {
        return res.status(404).json({ error: "Task not found" });
    }
};

/**
 * Deletes a task by ID.
 * @param {object} req - The request object containing the task ID in req.params.
 * @param {object} res - The response object.
 */
const deleteTask = (req, res) => {
    const { id } = req.params;
    if (!id) {
        return res.status(400).json({ error: "Invalid or missing task ID" });
    }
    taskManagerService.deleteTask(id);
    return res.status(204).send({ status: "OK" });
};

module.exports = {
    createTask,
    getAllTask,
    deleteTask,
    updateTask,
    getTaskById
};