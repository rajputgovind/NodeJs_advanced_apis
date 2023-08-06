import { body,check,param, query } from "express-validator";

export const userRegistrationValidation = [
    check('name')
    .notEmpty()
    .withMessage("name is required")
    .isString()
    .withMessage("Name must be of string type")
    .isLength({min:3})
    .withMessage("Name must be contain at least 3 char"),

    check('phone')
    .notEmpty()
    .withMessage("phone number is required")
    .isNumeric()
    .withMessage("phone number must be numeric")
    .isLength({min:10, max:10})
    .withMessage("phone number must be 10 digit"),
    
    check('gender')
    .notEmpty()
    .withMessage("gender is required")
    .isString()
    .withMessage("Gender must be  of string type"),

    check('age')
    .notEmpty()
    .withMessage("age is required")
    .isNumeric()
    .withMessage("age must be of type numeric"),

    check('city')
    .isString()
    .withMessage("city must be of string type")
    .notEmpty()
    .withMessage("city is required")
]

