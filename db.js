const mongoose = require('mongoose');
require('dotenv').config();

const URI = process.env.ATLAS_URI_PUBLIC;

const connectToMongo = async () => {
    mongoose.connect(URI, () => {
        console.log("Connected to MongoDB successfully.");
    })
}

module.exports = connectToMongo;