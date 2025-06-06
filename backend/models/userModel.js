const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

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
    select: false,
  },
  passwordConfirm: {
    type: String,
    required: [true, 'Please confirm your password'],
    validate: {
      // Workd only on create and save !!!
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

// Pre-save middleware to hash the password before saving
userSchema.pre('save', async function (next) {
  if (!this.isModified('password')) return next();

  this.password = await bcrypt.hash(this.password, 12);
  this.passwordConfirm = undefined;

  next();
});

userSchema.methods.correctPassword = async function (
  candidatePassword,
  userPassword
) {
  return await bcrypt.compare(candidatePassword, userPassword);
};

const User = mongoose.model('User', userSchema);

module.exports = User;
