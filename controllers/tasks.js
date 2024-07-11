// controllers/tasks.js

const taskModel = require('../models/task')
const { merge } = require('../routes/tasks')

const asyncwrapper = require('../middleware/async')

const getAllTasks = asyncwrapper(async (req, res, next) => {
    const result = await taskModel.find()
    res.status(200).json({ tasks : result})
})

// app.post('/api/v1/task') - Create a new task
const createTask = asyncwrapper(async (req, res) => {
  const task = await taskModel.create(req.body)
    res.status(200).json({task})
})

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

// app.delete('/api/v1/task/:id') - delete a task
const deleteTask = async (req, res) => {
  console.log(' delete Task ', req.body)

  try {
    const { id: taskId } = req.params
    const task = await taskModel.findByIdAndDelete(taskId)
    
    if (!task) return res.status(404).json({ message: 'No Task found with that Id' })

    res.status(200).json({ message: 'Task deleted successfully' })
  }
  catch (error) {
    console.error('Error on deleting task: ', error)
    res.status(500).json({ message: 'Error deleting task' })
  }
}

// app.patch('/api/v1/task/:id') - update a task
const updateTask = async (req, res) => {
  console.log(' Update Task ', req.params.id)
  
  try {
    const {id: taskId } = req.params
    const task = await taskModel.findByIdAndUpdate(taskId, req.body, { new: true, runValidators: true })
    
    if (!task) return res.status(404).json({ message: 'No Task found with that Id' })
    
    res.status(200).json({
      message: req.body
    })
  }
  
  catch (error) {
    console.error('Error on updating task: ', error)
    res.status(500).json({ message: 'Error updating task' })
  }
}

module.exports = {
  getAllTasks,
  createTask,
  getSingleTask,
  updateTask,
  deleteTask,
}