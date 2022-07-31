import { check } from "express-validator";
import validateResult from "../utils/handleValidator.js";

const validateClientCreateData = [
  check("first_name").exists().notEmpty(),
  check("last_name").exists().notEmpty(),
  check("phone").exists().notEmpty().isNumeric({ min: 10, max: 10 }),
  (req, res, next) => {
    validateResult(req, res, next);
  },
];

const validateClientUpdateData = [
  check("first_name").exists().notEmpty(),
  check("last_name").exists().notEmpty(),
  check("phone").exists().notEmpty().isNumeric({ min: 10, max: 10 }),
  (req, res, next) => {
    validateResult(req, res, next);
  },
];

export { validateClientCreateData, validateClientUpdateData };
