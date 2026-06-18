const express = require("express");
const { userRegistration } = require("./user.controller");
// const User = require
const router = express.Router()

//----Register endPoint--------
// router.get('/', async (req, res) => {
//     try {
//         res.send('Form users routes!')
//     } catch (error) {
//         console.log("Error: ", error)
//     }
// })
// module.exports = router

router.post('/register', userSingUp)

module.exports = router