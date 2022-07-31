import { check } from "express-validator";
import validateResult from "../utils/handleValidator.js";

const validateLogin = [
  check("email").exists().notEmpty(),
  check("password").exists().notEmpty(),
  (req, res, next) => {
    validateResult(req, res, next);
  },
];

const validateRegister = [
  check("first_name").exists().notEmpty(),
  check("last_name").exists().notEmpty(),
  check("email").exists().notEmpty().isEmail(),
  check("phone").exists().notEmpty().isNumeric({ min: 10, max: 10 }),
  check("password").exists().notEmpty().isLength({ min: 8, max: 15 }),
  check("role").exists().notEmpty(),
  (req, res, next) => {
    validateResult(req, res, next);
  },
];
const validateId = [
  check("id").exists().isMongoId(),
  (req, res, next) => {
    validateResult(req, res, next);
  },
];
export { validateLogin, validateRegister, validateId };
