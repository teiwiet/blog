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

userSchema.virtual("password")
.set(function (password){
    this._password = password;

    this.salt = this.makeSalt();
    this.hash_password = this.encryptPassword(password);
})
.get(function(){
    return this._password;
})

userSchema.methods = {
    encryptPassword : function(password){
        if(!password) return '';
        try{
            return crypto.createHmac("sha1",this.salt).
            update(password).digest("hex");
        }
        catch(err){
            return '';j
        }
    },
    makeSalt : function(){
        return Math.round(new Date().valueOf()*Math.random() + '');
    }
}

module.exports = mongoose.model("User",userSchema)