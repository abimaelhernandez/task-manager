// controllers/tasks.js

const getAllTasks = (req, res) => {
  res.send('All tasks Get')
}

// app.post('/api/v1/task') - Create a new task
const createTask = (req, res) => {
  console.log('create Task ', req.body)
}

// app.get('/api/v1/task/:id') - get a single task
const getSingleTask = (req, res) => {
  console.log(' GEt single Task ', req.body)
}

// app.patch('/api/v1/task/:id') - update a task
const updateTask = (req, res) => {
  console.log(' Update Task ', req.body)
}

// app.delete('/api/v1/task/:id') - delete a task
const deleteTask = (req, res) => {
  console.log(' delete Task ', req.body)
}
module.exports = {
  getAllTasks,
  createTask,
  getSingleTask,
  updateTask,
  deleteTask,
}