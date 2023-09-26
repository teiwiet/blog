const mongoose = require("mongoose");
const crypto = require("crypto");
const { Timestamp } = require("mongodb");

const userSchema = mongoose.Schema({
    username: {
        type: String,
        require: true,
        trim: true,
        max: 32,
        unique: true,
        index: true,
        lowercase: true,
    },

    name: {
        type: String,
        require: true,
        trim: true,
        max : 32,
        lowercase: true,
    },

    email: {
        type: String,
        trim : true,
        require : true,
        unique : true,
        lowercase : true,
    },
    profile : {
        type : String,
        require : true,
    }

},{Timestamp : true});
userSchema
module.exports = mongoose.model("User",userSchema)