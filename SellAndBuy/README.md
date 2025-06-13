# SellAndBuy

## **Overview**

**SellAndBuy** is a full-stack web application for online ads, inspired by platforms like kupujemprodajem.com. It enables users to **register**, **post ads**, **browse listings**, and **manage their ads** securely. The application features a **custom-built, responsive frontend**, a robust backend, and a MongoDB database, with support for **advanced filtering**, **pagination**, and **user authentication**.

## **Features**

- **User Authentication**: Secure registration and login with password hashing.
- **Ad Management**: Create, edit, and delete ads with fields for **title**, **description**, **image URL**, **price**, **category**, **city**, and **posting date**.
- **Ad Listings**: Display of ads sorted by posting date, with **pagination** (21 ads per page).
- **Filtering**: Filter ads by **category** (dropdown), **name** (case-insensitive search), **price range**, and a **"Show mine only"** option for logged-in users.
- **Detailed Ad View**: Displays all ad details, including user information (excluding sensitive data), with **edit/delete** options for the ad owner.
- **Responsive Design**: Fixed navbar with dynamic content based on user login status, styled with **custom HTML and CSS**.
- **Database Seeding**: Script to populate the database with ~10 users and ~100 ads for testing.

## **Technologies Used**

- **Frontend**: React, HTML, CSS (custom-built, no UI frameworks)
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Other Tools**: Git, npm, MongoDB Atlas (optional for cloud database)

## **Prerequisites**

- **Node.js** (v16 or higher)
- **MongoDB** (local installation or MongoDB Atlas account)
- **Git**

## **Installation**

1. **Clone the repository**:

   ```bash
   git clone https://github.com/zarick1/SellAndBuy.git
   cd SellAndBuy

   ```

2. **Create config.env file**

   ```bash
   NODE_ENV=development
   PORT=5000
   DATABASE= your_MongoDB_connection_string
   DATABASE_PASSWORD= your_database_password

   JWT_SECRET=your_jwt_secret_key
   JWT_EXPIRES_IN=1d
   JWT_COOKIE_EXPIRES_IN=1

   ```

3. **Seed the database(optional)**

   ```node seed.js

   ```

4. **Set up and run application**:

   ```bash
   npm install
   node index

   ```

5. **Open brower at** http://localhost:5000

## **Usage**

- **Register/Login**: Create an account or log in to access personalized features.
- **Browse Ads**: View ads on the homepage, sorted by date, with filters for category, name, price, or user-specific ads.
- **Post Ads**: Logged-in users can add new ads via the "Add Ad" button in the navbar.
- **Manage Ads**: Edit or delete your ads from the homepage or detailed ad view.
- **Responsive Navbar**: Displays username and options (Sign Out, Add Ad) for logged-in users, or Login/Signup for guests.

## **Security**

- Passwords are hashed using bcrypt.
- JWT-based authentication for secure user sessions.
- Input validation to prevent common vulnerabilities.
- Role-based access control for ad editing and deletion.
