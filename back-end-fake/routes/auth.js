const express = require("express");
const router = express.Router();
const {signup} = require("../controller/auth");
const {runValidation} = require("../validators/index");
const {userSignupValidator} = require("../validators/auth");
router.post("/auth",userSignupValidator,runValidation,signup)



module.exports = router;