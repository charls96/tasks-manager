import User from "../models/User.js";

const register = async (req, res) => {
  try {
    const user = new User(req.body);
    const insertUser = await user.save();
    res.json(insertUser);
  } catch (error) {
    console.log(error);
  }
};

export { register };
