const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://omegalmao13:111222qq@cluster0.c86avoy.mongodb.net/blog");

const connection = mongoose.connection;

connection.on("connected", () => {
  console.log("Mongo DB connected successfully");
});

connection.on("error", (err) => {
  console.log("Mongo DB connection failed");
});


module.exports = connection;