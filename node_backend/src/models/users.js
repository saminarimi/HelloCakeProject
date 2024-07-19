const { Schema, model, default: mongoose } = require('mongoose');

const userSchema = new mongoose.Schema({

    user_id: {
        type: String,
        required: false
    },
    email: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    nickname: {
        type: String,
        required: true
    },
    dob: {
        type: Date
    },
    logins_count: {
        type: Number
    },
    created_at: {
        type: Date
    },
    updated_at: {
        type: Date
    },
    last_login: {
        type: Date
    },
    email_verified: {
        type: Boolean,
        require: true
    }
})

const userModel = model('users', userSchema);

module.exports = userModel;