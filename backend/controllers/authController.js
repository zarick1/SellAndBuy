const User = require('../models/userModel');

exports.signup = async (req, res, next) => {
  try {
    const newUser = await User.create(req.body);

    res.status(201).json({
      status: 'success',
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
