const express = require("express");

const router = express.Router();

router.get("/blog", (req, res, next)=>{
    // res.send("<h1>This is the main page</h1>");
    res.json({time : Date().toString()});
})

module.exports = router;