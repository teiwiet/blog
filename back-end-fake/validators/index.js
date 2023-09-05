const {validationResult} = require("express-validator");

exports.runValidation = (req,res,next) =>{
    const errors = validationResult(req);
    if (!errors.isEmpty()){
        console.log(errors);
        return res.status(433).json({error : errors.array().map((error)=> error.msg)})
    }
    next();
} 