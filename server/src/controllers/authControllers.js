const authService = require("../services/auth");
const User = require("../models/user");

const login = async (req, res) => {
  try {
    const user = await User.findOne({ username: req.body.username });
    console.log(req.body.password);
    if (req.body.password !== user.password) {
      return res.status(401).json({ message: "Invalid username or password" });
    }
    const token = authService.generateToken(user);
    res.json({ token });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const signup = async (req, res) => {
  try {
    // Check if user already exists
    const existingUser = await User.findOne({ username: req.body.username });
    if (existingUser) {
      return res.status(400).send("Username is already taken.");
    }

    // Create a new user
    const user = new User({
      username: req.body.username,
      password: req.body.password,
    });

    // Save the new user
    const newUser = await user.save();

    // Create a token
    const token = authService.generateToken(newUser);

    res.status(201).json({
      message: "User created successfully!",
      user: {
        username: newUser.username,
      },
      token,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  login,
  signup,
};
