const express = require("express");
const router = express.Router();
const {sign_up}  = require("../controller/auth");
router.post("/auth",sign_up);


module.exports = router;