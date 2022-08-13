import User from "../models/User.js";
import generateId from "../helpers/generateId.js"

const register = async (req, res) => {
  //Reject duplicated registrations
  const { email } = req.body;
  const existsUser = await User.findOne({ email })

  if(existsUser){
    const error = new Error("Email alredy exists")
    return res.status(400).json({msg: error.message})
  }

  try {
    const user = new User(req.body);
    user.token = generateId();
    const insertUser = await user.save();
    res.json(insertUser);
  } catch (error) {
    console.log(error);
  }
};

export { register };
