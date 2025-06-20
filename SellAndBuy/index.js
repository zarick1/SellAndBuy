const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const cookieParser = require('cookie-parser');
require('dotenv').config({ path: './config.env' });
const path = require('path');
const rateLimit = require('express-rate-limit');
const helmet = require('helmet');
const mongoSanitize = require('express-mongo-sanitize');
const xss = require('xss-clean');

const userRouter = require('./routes/userRoutes');
const adsRouter = require('./routes/adsRoutes');
const globalErrorHandler = require('./controllers/errorController');

const app = express();

//console.log(process.env);

const limiter = rateLimit({
  max: 1000,
  windowMs: 60 * 60 * 1000,
  message: 'Too many req from this IP, try again in an hour',
});

app.use('/api', limiter);
app.use(
  helmet.contentSecurityPolicy({
    directives: {
      defaultSrc: ["'self'"],
      imgSrc: ["'self'", 'data:', 'https:'],
    },
  })
);
app.use(
  cors({
    origin: ['http://localhost:5173', 'https://sellandbuy.onrender.com'],
    credentials: true,
  })
);
app.use(cookieParser());
app.use(express.json());
//app.use(mongoSanitize());
//app.use(xss());
app.use(express.static(path.resolve(__dirname, './public')));

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
// app.get('/*w', (req, res) => {
//   res.sendFile(path.resolve(__dirname, './public', 'index.html'));
// });

app.use(globalErrorHandler);

// START SERVER
const port = process.env.PORT || 5000;
const server = app.listen(port, () => {
  console.log(`App running on ${port}...`);
});
