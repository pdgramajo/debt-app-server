import User from "../models/User.model.js";
import { isObjectEmpty } from "../utils/common.js";

const getAllUsers = async () => {
  const users = await User.find();
  return users;
};
const getUserById = async (id) => {
  const user = await User.findById(id);
  return user;
};

const createUser = async (userData) => {
  // const emailExists = await User.findOne({ email: "test@test.com" });
  // if (!isObjectEmpty(emailExists)) {
  //   throw new Error("email taken");
  // }

  const newUser = User.create(userData);
  return newUser;
};

const UserServices = {
  getAllUsers,
  getUserById,
  createUser,
};

export default UserServices;
