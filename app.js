const express = require("express");
const connectDB = require('./config/db');
const mongoose = require('mongoose');



const app = express();

//Connect Database
connectDB();


app.get('/', (req, res) => {
   res.send("hello world");
})



const port = process.env.PORT || 8082;

app.listen(port, () => {
   console.log(`Server is running on port ${port}`);
})
