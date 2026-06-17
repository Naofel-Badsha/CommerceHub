const { Schema, model } = require("mongoose");


const UserSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    profileImages: String,
    bio: {
        type: String,
        maxLength: 150
    },
    profession: String,
    role: {
        type: String,
        default: 'user'
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
})

const User = model('User', UserSchema);
module.exports = User