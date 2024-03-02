/**
 * Middleware function to validate task data.
 * @param {object} req - The request object.
 * @param {object} res - The response object.
 * @param {function} next - The next middleware function.
 * @returns {object} JSON response if validation fails, otherwise calls the next middleware function.
 */
function taskValidator(req, res, next) {
  const { id, name, description, createdDate, dueDate, status } = req.body;

  // Check if any required field is missing
  if (!id || !name || !description || !createdDate || !dueDate || !status) {
      return res.status(400).json({ error: "All fields are mandatory" });
  }

  // Call the next middleware function
  next();
}

module.exports = {
  taskValidator
};