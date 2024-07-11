const mongoose = require('mongoose')

// const connectString = process.env.MONGODB_URI ||'mongodb+srv://hernandezabimael:M62QkEBbPq9cPFRz@blog-app-node.00eswjc.mongodb.net/Store?retryWrites=true&w=majority&appName=blog-app-node'

const connectDB = (id) => {
  mongoose.connect(id)
}
// .then(() => console.log('MongoDB Connected...'))
// .catch(err => console.log('Error on mongoose', err));


module.exports = connectDB;