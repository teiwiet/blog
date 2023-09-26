const {check} = require("express-validator");

exports.userSignUpValidator = [
    check("name")
    .not()
    .isEmpty()
    .withMessage("Name is require"),
    check("email")
    .isEmail()
    .withMessage("Must be a valid address"),
    check("password")
    .isLength({min : 6})
    .withMessage("password must longer than 6 characters")
]