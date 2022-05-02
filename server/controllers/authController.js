const User = require("../models/User");
const bcrypt = require("bcrypt");
require("dotenv").config();

const handleLogin = async (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res
      .status(400)
      .json({ message: "Username and password are required." });
  }

  const user = await User.findOne({ username }).exec();

  if (!user) {
    return res.status(404).json({ message: "User not found." });
  }

  const match = await bcrypt.compare(password, user.password);

  if (match) {
    return res.status(200).json({ user });
  } else {
    return res.status(401).json({ message: "Wrong password. Try again." });
  }
};

module.exports = { handleLogin };
