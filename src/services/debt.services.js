import Debt from "../models/Debt.model.js";

const getAllDebts = async () => {
  const debts = await Debt.find();
  return debts;
};
const getDebtById = async (id) => {
  const debt = await Debt.findById(id);
  return debt;
};

const createDebt = async (newDebt) => {
  const newDebtCreated = Debt.create(newDebt);
  return newDebtCreated;
};

const DebtServices = {
  getAllDebts,
  getDebtById,
  createDebt,
};

export default DebtServices;
