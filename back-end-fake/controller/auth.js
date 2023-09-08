exports.sign_up = (req,res,nest)=>{
    const {name,email,password}  = req.body
    res.json({user : name,email,password});
}