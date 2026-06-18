const express = require("express");
const { userRegistration } = require("./user.controller");

//----------This router come form express----------
const router = express.Router()


//----Register endPoint--------
router.post('/register', userRegistration)

module.exports = router