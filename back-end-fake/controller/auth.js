exports.signup = (req,res,next)=>{
    const {email,name,password} = req.body;
    res.json({user : email,name,password});
}