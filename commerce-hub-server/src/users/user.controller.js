const userRegistration = async (req, res) => {
    try {
        res.send('Form users routes!')
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