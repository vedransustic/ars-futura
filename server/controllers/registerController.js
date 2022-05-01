const User = require("../models/User");
const bcrypt = require("bcrypt");
const { LOGIN_ROUTE } = require("../const/routes");

const handleNewUser = async (req, res) => {
  const { username, password, email } = req.body;

  if (!username || !password || !email) {
    return res
      .status(400)
      .json({ message: "Username, Password and Email are required." });
  }

  const duplicateUser = await User.findOne({ username }).exec();
  const duplicateEmail = await User.findOne({ email }).exec();

  if (duplicateUser || duplicateEmail) {
    return res
      .status(409)
      .json({ message: "Username or Password are already in use" });
  }

  try {
    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(password, salt);
    const result = await User.create({
      username,
      password: hashedPassword,
      email,
      todoLists: [],
    });

    if (!result) {
      res
        .status(500)
        .json({ message: "Error while creating user. Check mongoDB." });
    }

    res.sendStatus(201).redirect(LOGIN_ROUTE);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { handleNewUser };
