const User = require("../users/user.model");
const jwt = require('jsonwebtoken');
const JWT_SECRET = process.env.JWT_SECRET_KEY

//----------Make Tokon Here----------------
const generateTokon = async (userId) => {
    try {
        const user = await User.findById(userId)
        if (!user) {
            throw new Error(" User not found")
        }
        const tokon = jwt.sign({ userId: user._id, role: user.role }, JWT_SECRET, { expiresIn: '1h' });
        return tokon;

    } catch (error) {
        throw error;
    }
}

module.exports = generateTokon
