const User = require("../models/User");
const bcrypt = require("bcrypt");

const handleNewUser = async (req, res) => {
  const { username, password, email } = req.body;
  const todoLists = [];
  //Is everything here?
  if (!username || !password || !email) {
    return res
      .status(400)
      .json({ message: "Username, Password and Email are required." });
  }

  //Does it already exist
  const duplicateUser = await User.findOne({ username }).exec();
  if (duplicateUser) {
    return res.status(408);
  }

  const duplicateEmail = await User.findOne({ email }).exec();
  if (duplicateEmail) {
    return res.status(409);
  }

  try {
    const hashedPassword = await bcrypt.hash(password, 8);
    const result = await User.create({
      username,
      password: hashedPassword,
      email,
      todoLists,
    });

    res.status(201).json({ success: `New user ${username} has been created!` });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { handleNewUser };
