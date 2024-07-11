// controllers/tasks.js

const taskModel = require('../models/task')

const getAllTasks = async (req, res) => {
  try {
    const result = await taskModel.find()
    res.status(200).json({ tasks : result})
  }
  catch (error) {
    console.error('Error on getting tasks: ', error)
    res.status(500).json({ message: 'Server Error' })
  }
}

// app.post('/api/v1/task') - Create a new task
const createTask = async (req, res) => {
  try {
    const task = await taskModel.create(req.body)
    res.status(200).json({task})
  }
  catch (error) {
    console.error('Error on creating task: ', error)
    res.status(500).json({ message: 'Server Error' })
  }
}

// app.get('/api/v1/task/:id') - get a single task
const getSingleTask = async (req, res) => {
  // res.json({
    //   id: req.params.id,
    // })

    try {
      const {id: taskId } = req.params
      const task = await taskModel.findById(taskId)
      if (!task) return res.status(404).json({ message: 'No Task found with that Id' })
      res.json({task})  
  }
  catch (error) {
    console.error('Error on getting single task: ', error)
    res.status(404).json({ message: 'Server Error ST' })
  }
}

// app.patch('/api/v1/task/:id') - update a task
const updateTask = (req, res) => {
  console.log(' Update Task ', req.params.id)
  res.send('Update Task')
}

// app.delete('/api/v1/task/:id') - delete a task
const deleteTask = (req, res) => {
  console.log(' delete Task ', req.body)
  res.send('Delete Task')
}

module.exports = {
  getAllTasks,
  createTask,
  getSingleTask,
  updateTask,
  deleteTask,
}