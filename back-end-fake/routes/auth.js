const express = require("express");
const {signup} = require("../controller/auth");
const router = express.Router();
const {runValidation} = require("../validators/index");
const {userSignUpValidator} = require("../validators/auth")
router.post("/auth",userSignUpValidator,runValidation,signup)

module.exports = router;