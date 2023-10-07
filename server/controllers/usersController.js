const User = require('../models/User');

const getAllUsers = async (req, res) => {
  const users = await User.find();
  res.json(users);
};

const createUser = async (req, res) => {
  const user = new User({
    name: req.body.name,
    email: req.body.email,
  });

  await user.save();

  res.json(user);
};

module.exports = {
  getAllUsers,
  createUser,
};
