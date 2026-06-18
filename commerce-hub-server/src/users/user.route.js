const express = require("express");
// const User = require
const router = express.Router()


router.get('/', async (req, res) => {
    try {
        res.send('Form users routes!')
    } catch (error) {
        console.log("Error: ", error)
    }
})

module.exports = router