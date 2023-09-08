const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();
const blogRoutes = require("./routes/blog");
const authRoutes = require("./routes/auth");


const app = express();

//db 
mongoose.connect()


//middlewares 
app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(cookieParser())
// app.use(cors());
app.use(blogRoutes);
app.use(authRoutes);

const port = process.env.PORT || 80;
app.listen(port,()=>{
    console.log(`Server is running at ${port}`)
})