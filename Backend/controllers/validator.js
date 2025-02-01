const expressValidator = require("express-validator");
exports.firstNameValidator = expressValidator
  .check("name")
  .notEmpty()
  .withMessage("First Name is required")
  .trim()
  .isLength({ min: 2 })
  .withMessage("First Name should be at least 2 characters long")
  .matches(/^[A-Za-z\s]+$/)
  .withMessage("First Name should contain only alphabets");

exports.emailValidator = expressValidator
  .check("email")
  .notEmpty()
  .withMessage("Email is required")
  .isEmail()
  .withMessage("Please enter a valid email address")
  .normalizeEmail();

exports.passwordValidator = expressValidator
  .check("password")
  .notEmpty()
  .withMessage("Password is required")
  .isLength({ min: 6 })
  .withMessage("Password should be at least 6 characters long")
  .matches(/\d/)
  .withMessage("Password should contain at least one number");

exports.userTypeValidator = expressValidator
  .check("type")
  .trim()
  .notEmpty()
  .withMessage("User Type is required")
  .isIn(["customer", "seller"])
  .withMessage("Invalid User Type");
