const mongoose = require('mongoose');

const adSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Ad must have a title'],
  },
  description: {
    type: String,
    required: [true, 'Ad must have a description'],
  },
  imageUrl: {
    type: String,
    required: [true, 'Ad must have a description'],
  },
  price: {
    type: Number,
    required: [true, 'Ad must have a price'],
    min: [0, 'Price must be a positive number'],
  },
  category: {
    type: String,
    required: [true, 'Ad must have a category'],
    enum: {
      values: [
        'clothing',
        'tools',
        'sports',
        'accessories',
        'furniture',
        'pets',
        'games',
        'books',
        'technology',
      ],
      message: 'Category is not valid',
    },
  },
  city: {
    type: String,
    required: [true, 'Ad must have a city'],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  user: {
    type: mongoose.Schema.ObjectId,
    ref: 'User',
    required: [true, 'Ad must belong to user'],
  },
});

adSchema.pre(/^find/, function (next) {
  this.populate({
    path: 'user',
    select: 'username phone registrationDate',
  });
  next();
});

const Ad = mongoose.model('Ad', adSchema);

module.exports = Ad;
