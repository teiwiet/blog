const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
require("dotenv").config();

//custom routes
const blogRoutes = require("./routes/blog");
const authRoutes = require("./routes/auth");


const app = express();

//db 
mongoose.connect(process.env.DATABASE_CLOUD,{useNewUrlParser : true})
.then(()=>console.log(`db is connected at ${process.env.DATABASE_CLOUD}`))
.catch(err=>console.log(err));
//middlewares 
app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(cookieParser());



app.use(blogRoutes);
app.use(authRoutes);
app.use((req,res,next)=>{
    res.send("<h1>Oops! We can't find the page you're looking for</h1>");
})
const port = process.env.PORT || 80

app.listen(port,()=>{
    console.log(`server is open at ${port}`);
})