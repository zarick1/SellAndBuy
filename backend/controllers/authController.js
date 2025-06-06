const User = require('../models/userModel');
const jwt = require('jsonwebtoken');
const AppError = require('../utils/appError');

const signToken = id =>
  jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  });

exports.signup = async (req, res, next) => {
  try {
    const newUser = await User.create(req.body);

    const token = signToken(newUser._id);

    res.status(201).json({
      status: 'success',
      token,
      data: {
        user: newUser,
      },
    });
  } catch (err) {
    //console.log(err.message);
    res.status(400).json({
      status: 'error',
      err,
    });
  }
};

exports.login = async (req, res, next) => {
  try {
    const { username, password } = req.body;
    //console.log(username, password);

    // 1) Check if email and password exist
    if (!username || !password)
      return next(new AppError('Please provide username and password', 400));

    // 2) Check if user exists && password is correct
    const user = await User.findOne({ username }).select('+password');

    if (!user || !(await user.correctPassword(password, user.password)))
      return next(new AppError('Incorrect username or password', 401));

    // 3) if everything ok, send token to client

    const token = signToken(user._id);

    res.status(200).json({
      status: 'success',
      token,
    });
  } catch (err) {
    res.status(400).json({
      status: 'error',
      err,
    });
  }
};
