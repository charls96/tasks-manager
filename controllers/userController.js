import User from "../models/User.js";
import generateId from "../helpers/generateId.js";
import generateJWT from "../helpers/generateJWT.js";

const register = async (req, res) => {
  //Reject duplicated registrations
  const { email } = req.body;
  const existsUser = await User.findOne({ email });

  if (existsUser) {
    const error = new Error("Email alredy exists");
    return res.status(400).json({ msg: error.message });
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

const authenticate = async (req, res) => {
  const { email, password } = req.body;

  // Checks if the email exists in the database
  const user = await User.findOne({ email });
  if (!user) {
    const error = new Error("The Email does not exist");
    return res.status(404).json({ msg: error.message });
  }

  // Checks if a user is validated
  if (!user.validated) {
    const error = new Error("Your account is not verified");
    return res.status(403).json({ msg: error.message });
  }

  // Checks if the password of the user is correct
  if(await user.checkPassword(password)){
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      token: generateJWT(user._id),
    })
  } else {
    const error = new Error("Your password is incorrect");
    return res.status(403).json({ msg: error.message });
  }
};

export { register, authenticate };
