const express = require('express');
const connectToMongo = require('./db');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

connectToMongo();
let items = mongoose.model('Item', new mongoose.Schema({name: String, cost: Number}), 'Items');

const app = express();
app.use(cors());
const port = process.env.PORT || 5555;

app.get('/', (req, res) => {
    res.send("Hello World");
})

app.get('/fetch_data', (req, res) => {
    items.find({}, function(err, data) {res.send(data);});  
})

app.listen(port, ()=>{
    console.log(`Backend server up and running on port ${port}`);
})