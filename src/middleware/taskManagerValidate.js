function taskValidator (req, res, next) {
    const { id, name, description, createdDate, dueDate, status } = req.body;

  if (!id || !name || !description || !createdDate || !dueDate || !status) {
    return res.status(400).json({ error: "All field are mandatory" });
  }

  next();
}
module.exports= {taskValidator};