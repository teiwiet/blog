const {check} = require("express-validator");

exports.userSignupValidator = [
    check("name")
        .not()
        .isEmpty()
        .withMessage("Name is require"),
    check("email")
        .isEmail()
        .withMessage("Must be a valid email"),
    check("password")
        .isLength({min : 6})
        .withMessage("Password must be longer than 6 characters")
]
