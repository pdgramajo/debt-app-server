import User from "../models/User.model.js";

const getAllUsers = async () => {
    const users = await User.find();
    return users;
}

const UserServices = {
    getAllUsers
}

export default UserServices