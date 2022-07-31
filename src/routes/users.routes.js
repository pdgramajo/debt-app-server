import { Router } from "express";
import { getDebtsByUserId } from "../controllers/debt.controller.js";
import {
  createUser,
  getAllUser,
  getUser,
  updateUser,
} from "../controllers/user.controller.js";
import { validateId, validateRegister } from "../validators/user.validator.js";

const router = Router();

router.get("/", getAllUser);
router.get("/:id", validateId, getUser);
router.get("/:id/debts", getDebtsByUserId);
router.post("/", validateRegister, createUser);
router.put("/", updateUser);

export { router };
