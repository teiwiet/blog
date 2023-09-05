const User = require("../model/user");
const shortId = require("shortid");

exports.signup = (req, res, next) => {
    User.findOne({ email: req.body.email }).then((err, user) => {
        if (user) {
            return res.status(400).json({
                err: 'Email is taken'
            })
        }
        const { name, email, password } = req.body;
        let username = shortId.generate();
        let profile = `${process.env.CLIENT_URL}/profile/${username}`
        let newUser = new User({ name, email, password, profile, username });
        // Assuming newUser is a Mongoose model instance

        newUser.save()
            .then(success => {
                // Handle the success case here
                res.status(200).json(success);
            })
            .catch(err => {
                // Handle the error case here
                res.status(400).json({
                    error: err.message, // You can use err.message to get the error message
                });
            });

        // newUser.save((err,success)=>{
        //     if(err){
        //         return res.status(400).json({
        //             error : err,
        //         })
        //     }
        //     res.json({
        //         user : success
        //     })
        //     // res.json({
        //     //     message : "Signup successfully"
        //     // })
        // }
        // )
    })
    // const {name,email,password} = req.body;
    // let id = 1;
    // res.json({user : id,name,email,password});
}