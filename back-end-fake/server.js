const express = require("express")
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const morgan = require("morgan");
const mongoose = require("mongoose");
require("dotenv").config();
//router include
const blog_routes = require("./routes/blog");
const auth_routes = require("./routes/auth");

mongoose.connect(process.env.DATABASE_CLOUD,{useNewUrlParser:true})
.then(() =>console.log("DB is connected"))
.catch((err) => {
    console.log(`OH NO! MONGO CONNECTION ERROR!`);
    console.log(err);
});
// app
const app = express();
// middlewares
app.use(morgan("dev"));
app.use(bodyParser.json())
app.use(cookieParser());
//routes
app.use(blog_routes);
app.use(auth_routes);
// error page
app.use((req,res,next)=>{
    res.send("<h1>Oops! We can't find the page you're looking for.");
})

const port = process.env.PORT || 80
app.listen(port,()=>{
    console.log(`Server is running at ${port}`);
})