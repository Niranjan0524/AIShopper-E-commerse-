const expressValidator = require("express-validator");
export const firstNameValidator = expressValidator
  .check("name")
  .notEmpty()
  .withMessage("First Name is required")
  .trim()
  .isLength({ min: 2 })
  .withMessage("First Name should be at least 2 characters long")
  .matches(/^[A-Za-z\s]+$/)
  .withMessage("First Name should contain only alphabets");

export const emailValidator = expressValidator
  .check("email")
  .notEmpty()
  .withMessage("Email is required")
  .isEmail()
  .withMessage("Please enter a valid email address")
  .normalizeEmail();

export const passwordValidator = expressValidator
  .check("password")
  .notEmpty()
  .withMessage("Password is required")
  .isLength({ min: 6 })
  .withMessage("Password should be at least 6 characters long")
  .matches(/\d/)
  .withMessage("Password should contain at least one number");

export const userTypeValidator = expressValidator
  .check("userType")
  .trim()
  .notEmpty()
  .withMessage("User Type is required")
  .isIn(["customer", "seller"])
  .withMessage("Invalid User Type");
