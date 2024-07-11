
// routes will use cotrollers
const express = require('express')

const {
  getAllTasks, 
  createTask, 
  getSingleTask, 
  updateTask, 
  deleteTask
} =  require('../controllers/tasks')


// set up router
const router = express.Router()

// app.post('/api/v1/task') - Create a new task
router.route('/').get(getAllTasks).post(createTask)

/* 
  app.get('/api/v1/task/:id') - get a single task
  notice how you can chain CRUD methods together such as 
  `.get().patch().delete()`
  this available since using same enpoint for different HTTP methods
  */ 
  
  // app.patch('/api/v1/task/:id') - update a task
  // app.delete('/api/v1/task/:id') - delete a task

router.route('/:id').get(getSingleTask).patch(updateTask).delete(deleteTask)

module.exports = router
