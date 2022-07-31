import { Router } from "express";
import {
  createDebt,
  getAllDebts,
  getDebtsByUserId,
  updateDebt,
} from "../controllers/debt.controller.js";

const router = Router();

router.get("/", getAllDebts);
router.get("/users/:userId", getDebtsByUserId);
router.post("/", createDebt);
router.put("/", updateDebt);

export { router };
