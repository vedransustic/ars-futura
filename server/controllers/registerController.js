const User = require("../models/User");
const bcrypt = require("bcrypt");

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
      .json({ message: "Username or Email are already in use" });
  }

  const hashedPassword = await bcrypt.hash(password, 8);
  try {
    const newUser = new User({
      username,
      password: hashedPassword,
      email,
    });

    const response = await newUser.save();

    if (!response) {
      res
        .status(500)
        .json({ message: "Error while creating user. Check mongoDB." });
    }
    res.status(200).json({ message: "Created new user." });
  } catch (e) {
    console.error("ERROR: ", e);
  }
};

module.exports = { handleNewUser };
