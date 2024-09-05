const express = require('express');
const mongoose = require('mongoose');
const DB_URL = require('./src/config/const');
const userModel = require('./src/models/users.js')
const app = express();
app.use(express.json())
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

app.post('/register', async (req, res) => {
    const { email, name, nickname, password, dob } = req.body;
    if (!(email && name && nickname && password && dob)) {
        res.status(400).send({ message: "All the fields are manadatory." })
    } else {
        const newUser = new userModel({
            email: req.body.email,
            name: req.body.name,
            nickname: req.body.nickname,
            password: req.body.password,
            dob: req.body.dob,
            created_at: new Date(),
            updated_at: new Date(),
            last_login: new Date(),
            email_verified: true,
            logins_count: 1
        })
        newUser.save();
        res.status(201).send(newUser);
    }

})
app.listen(3000)