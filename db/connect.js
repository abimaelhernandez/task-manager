const mongoose = require('mongoose')

const connectString= 'mongodb+srv://hernandezabimael:M62QkEBbPq9cPFRz@blog-app-node.00eswjc.mongodb.net/Store?retryWrites=true&w=majority&appName=blog-app-node'

mongoose.connect(connectString)
.then(() => console.log('MongoDB Connected...'))
.catch(err => console.log('Error on mongoose', err));
