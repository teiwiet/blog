const express = require("express");
const {signup} = require("../controller/auth");
const router = express.Router();
const {runValidation} = require("../validators/index");
const {userSignUpValidator} = require("../validators/auth");
router.post("/auth",userSignUpValidator,runValidation,signup);
router.get("/auth",(req,res,next)=>{
    res.send("<h1>Hello World</h1>");
});
module.exports = router;