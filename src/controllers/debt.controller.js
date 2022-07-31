import User from "../models/User.model.js";
import DebtsMock from "../mocks/Debts.mock.js";

const getAllDebts = async (req, res) => {
  try {
    // const users = await User.find();
    const users = DebtsMock;
    res.json(users);
  } catch (error) {
    console.log(error);
  }
};

const getDebtsByUserId = async (req, res) => {
  console.log("getUser | req.params.userId", req.params.id);
  try {
    // const user = await User.findById(req.params.id);
    const userDebts = await DebtsMock.filter(
      (d) => d.userId === parseInt(req.params.id)
    );
    res.json(userDebts);
  } catch (error) {
    console.log(error);
  }
};

const createDebt = async (req, res) => {
  console.log(req);
  const { firstName, lastName, phone, email, password } = req.body;
  try {
    // const foundUser = await User.findOne({
    //   email: email,
    //   isBloqued: false,
    //   isEnabled: true,
    // });

    // if (foundUser) return res.sendStatus(409); //Conflict

    // const data = {
    //   firstName: firstName,
    //   lastName: lastName,
    //   email: email,
    //   password: await bcrypt.hash(password, 10),
    //   phone: phone,
    // };
    // const newUser = await User.create(data);

    // res.json(newUser);
    res.json("new debt created");
  } catch (error) {
    console.log(error);
  }
};

const updateDebt = async (req, res) => {
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
    res.json("debt was edited");
  } catch (error) {
    console.log(error);
  }
};

export { getAllDebts, getDebtsByUserId, createDebt, updateDebt };
