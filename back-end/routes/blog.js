const express = require("express");
const router = express.Router();
const {time} = require("../controller/blog");
router.get("/api",time);


module.exports = router;