const mongoose = require('mongoose');
require('dotenv').config();

const URI = process.env.ATLAS_URI;

const connectToMongo = async () => {
    mongoose.connect(URI, () => {
        console.log("Connected to MongoDB successfully.");
    })
}

module.exports = connectToMongo;