import User from "../models/User.model.js";

const getAllUsers = async () => {
  const users = await User.find();
  return users;
};
const getUserById = async (id) => {
  const user = await User.findById(id);
  return user;
};

const createUser = async (userData) => {
  const newUser = User.create(userData);
  return newUser;
}



const UserServices = {
  getAllUsers,
  getUserById,
  createUser
};

export default UserServices;
