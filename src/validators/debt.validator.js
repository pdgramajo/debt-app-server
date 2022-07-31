import { check } from "express-validator";
import validateResult from "../utils/handleValidator.js";

const validateDebtCreateData = [
  check("title").exists().notEmpty(),
  check("description").exists().isString(),
  check("paided").exists().isBoolean(),
  check("amount").exists().isNumeric(),
  check("client").exists().notEmpty().isMongoId(),
  (req, res, next) => {
    validateResult(req, res, next);
  },
];

const validateDebtUpdateData = [
  check("title").exists().isString(),
  check("description").exists().isString(),
  check("paided").exists().exists().notEmpty().isBoolean(),
  check("amount").exists().isNumeric(),
  check("client").exists().notEmpty().isMongoId(),
  (req, res, next) => {
    validateResult(req, res, next);
  },
];

export { validateDebtCreateData, validateDebtUpdateData };
