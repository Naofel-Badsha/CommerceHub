const express = require("express");
const { userRegistration, userLoggendIn } = require("./user.controller");

//----------This router come form express----------
const router = express.Router()


//------Register endPoint----------
router.post('/register', userRegistration)

//-------Login------endPoint---------
router.post('/login', userLoggendIn)





module.exports = router