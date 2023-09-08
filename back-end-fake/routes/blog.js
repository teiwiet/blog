const express = require("express");
const router = express.Router();
router.use("/blog",(req,res,next)=>{
    res.send("<h1>Hello this is my blog </h1>");
})


module.exports = router;