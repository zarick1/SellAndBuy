const mongoose = require('mongoose');
const dotenv = require('dotenv');
const bcrypt = require('bcryptjs');
dotenv.config({ path: './config.env' });

const User = require('./models/userModel');
const Ad = require('./models/adsModel');

const DB = process.env.DATABASE.replace(
  '<PASSWORD>',
  process.env.DATABASE_PASSWORD
);

mongoose
  .connect(DB)
  .then(() => console.log('Database connected for seeding!'))
  .catch(err => console.log('DB connection error:', err));

const categories = [
  'clothing',
  'tools',
  'sports',
  'accessories',
  'furniture',
  'pets',
  'games',
  'books',
  'technology',
];

const cities = [
  'Belgrade',
  'Novi Sad',
  'Niš',
  'Kragujevac',
  'Subotica',
  'Zrenjanin',
];

const generateRandom = arr => arr[Math.floor(Math.random() * arr.length)];

const usersData = [];

for (let i = 1; i <= 10; i++) {
  usersData.push({
    username: `user${i}`,
    password: 'Password123',
    passwordConfirm: 'Password123',
    phone: `06000000${i.toString().padStart(2, '0')}`,
  });
}

const adsData = [];

for (let i = 1; i <= 100; i++) {
  adsData.push({
    title: `Awesome product ${i}`,
    description: `Description for product number ${i}. This is a great item to have.`,
    imageUrl: `https://picsum.photos/seed/${i}/200/200`,
    price: Math.floor(Math.random() * 10000) / 100,
    category: generateRandom(categories),
    city: generateRandom(cities),
  });
}

const seedDB = async () => {
  try {
    console.log('Deleting existing users and ads...');
    await User.deleteMany();
    await Ad.deleteMany();

    console.log('Creating users...');
    const createdUsers = [];
    for (const userData of usersData) {
      const user = new User(userData);
      await user.save();
      createdUsers.push(user);
    }

    adsData.forEach((ad, index) => {
      const userIndex = index % createdUsers.length;
      ad.user = createdUsers[userIndex]._id;
    });

    console.log('Creating ads...');
    await Ad.insertMany(adsData);

    console.log('Database seeded successfully!');
    process.exit();
  } catch (err) {
    console.error('Seeding error:', err);
    process.exit(1);
  }
};

seedDB();
