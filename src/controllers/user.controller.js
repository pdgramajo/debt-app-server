import { matchedData } from "express-validator";

import User from "../models/User.model.js";
import UsersMock from "../mocks/Users.mock.js";

const getAllUser = async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    console.log(error);
  }
};

const getUser = async (req, res) => {
  req = matchedData(req);
  const id = req.id;
  try {
    const user = await User.findById(id);
    res.json(user);
  } catch (error) {
    console.log(error);
  }
};

const createUser = async (req, res) => {
  const userData = matchedData(req);
  console.log('createUser | userData', userData);

  try {
    const newUser = await User.create(userData);
    res.json(newUser);
  } catch (error) {
    console.log(error);
  }
};

const updateUser = async (req, res) => {
  const { firstName, lastName, phone, email, password } = req.body;
  try {
    const data = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: password,
      phone: phone,
    };
    // const userEdited = await UserSchema.findByIdAndUpdate(req.params.id, data);

    // res.json(userEdited);
    res.json("user was edited");
  } catch (error) {
    console.log(error);
  }
};

export { getAllUser, getUser, createUser, updateUser };
