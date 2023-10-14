const User = require("../model/user.model");
const shortId = require("shortid")


exports.signup = (req, res, next)=>{
    User.findOne({email : req.body.email}).then((err,user)=>{
        if(user){
            return res.status(400).json({errors : "email is taken"});
        }

        const {email,name,password} = req.body;
        let userName = shortId.generate();
        let profile = `${process.env.CLIENT_URL}/profile/${userName}`;
        let newUser = new User({name,email,password,profile,userName});
        newUser.save().then((err,success)=>{
            if(err){
                return res.status(400).json({
                    error : err
                })
            };
            res.json({
                user : success
            })
        }) 
    })
}