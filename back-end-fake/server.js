const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();

//middlewares 
app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(cookieParser())
// app.use(cors());


app.use("/",(req,res,next)=>{
    res.send("<h1>Hello this is my nodejs server</h1> <p>Hello World</p>");
})

app.listen(8080);