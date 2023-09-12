const express = require("express");
const router = express.Router();

router.get("/blog",(req,res,next)=>{
    res.send("<h1>This is the main blog</h1>");
})

module.exports = router;
