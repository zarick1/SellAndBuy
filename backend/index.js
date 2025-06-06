const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config({ path: './config.env' });

const app = express();

app.use(cors());
app.use(express.json());

const DB = process.env.DATABASE.replace(
  '<PASSWORD>',
  process.env.DATABASE_PASSWORD
);

mongoose.connect(DB).then(() => console.log('Data Base Successfuly connected'));

// // Test
// app.get('/', (req, res) => {
//   res.json({ message: 'ADSSSSSS' });
// });

const port = process.env.PORT || 5000;
const server = app.listen(port, () => {
  console.log(`App running on ${port}...`);
});
