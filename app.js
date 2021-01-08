const express = require('express');
const connectDB = require('./config/db');
const cors = require('cors');
const todolistapi = require('./routes/api/todolistapi');
//const bodyParser = require('body-parser');
//const mongoose = require('mongoose');



// server app
const app = express();
// connect database
connectDB();
// cors
app.use(cors({ origin: true, credentials: true }));
//midleware
app.use(express.json({ extended: false }));

app.get('/', (req, res) => {
    res.send('Welcome Todo List Application.')
})
// Api Connected
app.use('/api/todolistapi', todolistapi);
{/*
// coonect mongodb database
mongoose.connect('mongodb://127.0.0.1:27017/todos', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
const connection = mongoose.connection;
connection.once('open', function () {
    console.log("Mongodb Database connection established successfully!")
})
*/}



// server start port
const PORT = process.env.PORT || 8082;
app.listen(PORT, () => {
    console.log(`Server is running on Port ${PORT}...`);
})