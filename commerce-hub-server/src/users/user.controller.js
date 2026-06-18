const User = require("./user.model");

const userRegistration = async (req, res) => {
    try {
        const { username, email, password } = req.body;
        const user = new User({ username, email, password })
        await user.save()
        res.status(200).send({
            message: "User Registation Successfull!"
        })
    } catch (error) {
        console.log("Error registering a user : ", error);
        res.status(500).send({
            message: "Registation Faild"
        })
    }
}



module.exports = {
    userRegistration
}