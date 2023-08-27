const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();


// custom routes
const blogRoutes = require("./routes/blog");
const authRoutes = require("./routes/auth");

// app
const app = express();

//db
mongoose.connect(process.env.DATABASE_CLOUD,{useNewUrlParser:true})
.then(() =>console.log("DB is connected")).catch((err) => {
    console.log(`OH NO! MONGO CONNECTION ERROR!`);
    console.log(err);
});
//middlewares
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(cookieParser());

//cors 
if (process.env.NODE_ENV == "development") {

    app.use(cors({origin : `${process.env.CLIENT_URL}`}));
}

app.use(blogRoutes);
app.use(authRoutes);
// routes
// app.get("/api", (req, res, next) => {
//     res.json({ time: Date().toString() });
// })

app.use((req,res,next)=>{
    res.write("<p>Error 404 not found!</p>");
})



const port = process.env.PORT || 80
app.listen(port, () => {
    console.log(`Server is running ${port}`);
})