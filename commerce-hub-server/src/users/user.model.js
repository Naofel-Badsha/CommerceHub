const { Schema, model } = require("mongoose");
const bcrypt = require('bcrypt');

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
    profileImage: String,
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

//--------Hash password--------
UserSchema.pre('save', async function () {
    const user = this;
    if (!user.isModified('password'));
    const hashedPassword = await bcrypt.hash(user.password, 10);
    user.password = hashedPassword;
})


//--------Compair password come to user Controler---------
UserSchema.methods.comparePassword = function (candidatePassword){
    return bcrypt.compare(candidatePassword, this.password)
}



const User = model('User', UserSchema);
module.exports = User