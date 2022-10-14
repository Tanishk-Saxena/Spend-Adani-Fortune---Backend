const mongoose = require('mongoose');
require('dotenv').config();

// const URI = 'mongodb://localhost:27017/spend_adani_money_db';
// const URI = 'mongodb+srv://tanishk:learn_new_things_daily@cluster0.bth5loo.mongodb.net/spend_adani_money_db?retryWrites=true&w=majority';
const URI = process.env.REACT_APP_ATLAS_URI;

const connectToMongo = async () => {
    mongoose.connect(URI, () => {
        console.log("Connected to MongoDB successfully.");
    })
}

module.exports = connectToMongo;