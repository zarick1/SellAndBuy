const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const cookieParser = require('cookie-parser');
require('dotenv').config({ path: './config.env' });
const path = require('path');

const userRouter = require('./routes/userRoutes');
const adsRouter = require('./routes/adsRoutes');
const globalErrorHandler = require('./controllers/errorController');

const app = express();

//console.log(process.env);

app.use(cors());
app.use(express.static(path.resolve(__dirname, './public')));
app.use(cookieParser());
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

// ROUTES
app.use('/api/v1/users', userRouter);
app.use('/api/v1/ads', adsRouter);

// For deployment
// app.get('/{*any}', (req, res) => {
//   res.sendFile(path.resolve(__dirname, './public', 'index.html'));
// });

app.use(globalErrorHandler);

// START SERVER
const port = process.env.PORT || 5000;
const server = app.listen(port, () => {
  console.log(`App running on ${port}...`);
});
