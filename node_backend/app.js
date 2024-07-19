const express = require('express');
const mongoose = require('mongoose');
const DB_URL = require('./src/config/const');
const userModel = require('./src/models/users.js')
const app = express();
//mongodb connection
try {
    mongoose.connect(DB_URL, {
        dbName: 'hellocake_db'
    })
    console.log('Database connected successfully');
} catch (err) {
    console.log(err)
}


app.get('/users', async (req, res) => {
    const users = await userModel.find();
    res.send(users);
})
app.listen(3000)