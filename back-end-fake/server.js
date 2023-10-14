const express = require("express");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser")
const morgan = require("morgan")
const mongoose = require("mongoose");
require("dotenv").config()
//routes
const blogRoutes = require("./routes/blog");
const authRoutes = require("./routes/auth");


// connect db
mongoose.connect("mongodb://0.0.0.0:27017/blog").then(()=> console.log("connected to cloud database"))
.catch((err) => console.log(err));


const app = express();

//middlewares
app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(cookieParser());

app.use(blogRoutes);
app.use(authRoutes);

app.use((req,response,next)=>{
    response.send("<h1>Oops! We can't find the page you're looking for</h1>");
});

const port = process.env.PORT || 80;

app.listen(port,()=>{
    console.log(`Server is running at ${port}`);
})