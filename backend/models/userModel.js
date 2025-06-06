const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
  username: {
    type: String,
    unique: true,
    required: [true, 'User must have name'],
  },
  password: {
    type: String,
    required: [true, 'User must have password'],
    minLength: [8, 'Password must have at least 8 characters'],
  },
  passwordConfirm: {
    type: String,
    required: [true, 'Please confirm your password'],
    validate: {
      // Workd only on save !!!
      validator: function (val) {
        return this.password === val;
      },
      message: 'Passwords are not same',
    },
  },
  phone: {
    type: String,
    required: [true, 'User must have phone number'],
  },
  registrationDate: {
    type: Date,
    default: Date.now,
  },
});

const User = mongoose.model('User', userSchema);

module.exports = User;
