const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect("mongodb+srv://vishu:0zWuZ4jUBvQMUUE8@cluster0.xirmxjd.mongodb.net/");
    console.log("Database connected successfully");
  } catch (e) {
    console.error("Database connection failed:", e);
    process.exit(1);
  }
};

module.exports = connectDB;
