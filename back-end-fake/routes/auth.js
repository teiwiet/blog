const express = require("express");
const router = express.Router();
const {signup} = require("../controller/auth");
router.post("/auth",signup)

module.exports = router;
