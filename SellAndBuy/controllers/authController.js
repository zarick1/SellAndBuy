const { promisify } = require('util');
const User = require('../models/userModel');
const jwt = require('jsonwebtoken');
const AppError = require('../utils/appError');

const signToken = id =>
  jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  });

const createSendToken = (user, statusCode, res) => {
  const token = signToken(user._id);

  const cookieOptions = {
    expires: new Date(
      Date.now() + process.env.JWT_COOKIE_EXPIRES_IN * 24 * 60 * 60 * 1000
    ),
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
  };

  res.cookie('jwToken', token, cookieOptions);

  user.password = undefined;

  res.status(statusCode).json({
    status: 'success',
    msg: 'user logged in',
    data: {
      user,
    },
  });
};

exports.signup = async (req, res, next) => {
  try {
    const newUser = await User.create(req.body);

    createSendToken(newUser, 201, res);
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

    createSendToken(user, 200, res);
  } catch (err) {
    res.status(400).json({
      status: 'error',
      err,
    });
  }
};

exports.protect = async (req, res, next) => {
  try {
    // 1) Getting token and check if it exists
    const { jwToken } = req.cookies;

    if (!jwToken)
      return next(
        new AppError('Authentication invalid, please provide jwt token', 401)
      );

    // 2) Validate token
    const decoded = await promisify(jwt.verify)(
      jwToken,
      process.env.JWT_SECRET
    );

    // 3) Check if user still exists
    const freshUser = await User.findById(decoded.id);
    if (!freshUser)
      return next(
        new AppError(
          'The user belonging to this token does no longer exist',
          401
        )
      );

    req.user = freshUser;
    next();
  } catch (err) {
    console.log('nesto');
    res.status(400).json({
      status: 'error',
      message: err.message,
      name: err.name,
    });
  }
};

exports.logout = (req, res, next) => {
  const cookieOptions = {
    expires: new Date(Date.now()),
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
  };

  res.cookie('jwToken', 'logout', cookieOptions);

  res.status(200).json({ msg: 'user logged out' });
};
