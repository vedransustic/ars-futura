const User = require("../models/User");
const bcrypt = require("bcrypt");

const handleLogin = async (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res
      .status(400)
      .json({ message: "Username and password are required." });
  }

  const user = await User.findOne({ username }).exec();

  if (!user) {
    return res.sendStatus(401);
  }

  const match = await bcrypt.compare(password, user.password);

  if (match) {
    return res.json({ user });
  } else {
    return res.sendStatus(401);
  }
};

module.exports = { handleLogin };
