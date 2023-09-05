const express = require("express");
const router = express.Router();

router.get("/blog",(req,res,next)=>{
    res.send("<h1>Hello this is my nodejs server</h1>");
})

// router.


module.exports = router;