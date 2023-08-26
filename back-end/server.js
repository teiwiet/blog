const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const cors = require("cors");
require("dotenv").config();


const app = express();

app.use("/lmao",(req,res,next)=>{
    res.write("<h1>lmao</h1>");
})

app.listen()