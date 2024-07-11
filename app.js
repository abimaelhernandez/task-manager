
const express = require('express')
const tasks = require('./routes/tasks')
const app = express()
const { getAllTask } = require('./controllers/tasks')
const connectDB = require('./db/connect')


// console.log('Starting Server...', process.env)
// middleware  must use to see the incoming request as JSON format
app.use(express.json())
app.use(express.static('./public'))

require('dotenv').config()
require('./db/connect')

// set up routes folder & routes
app.get('/', (req, res)=>{
  res.send('Welcome API HOME')
})

app.use('/api/v1/task', tasks)

// app.get('/api/v1/task') - get all tasks
// app.post('/api/v1/task') - Create a new task
// app.get('/api/v1/task/:id') - get a single task
// app.patch('/api/v1/task/:id') - update a task
// app.delete('/api/v1/task/:id') - delete a task

const port = process.env.PORT || 3000

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI)
    app.listen(port, console.log(`Server running on port ${port}...`))
  } 
  catch (error) {
    console.error(`Error on starting server: ${error}`)
  }
  // connectDB()
  // .then(() => {
  //   app.listen(port, console.log(`Server running on port ${port}...`))
  // })
  // .catch(error => console.error(`Error on starting server: ${error}`))
}

start()
// app.listen(port,  console.log(`Server running on port ${port} ...`))