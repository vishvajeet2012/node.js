const express = require('express');
const mongoose = require('mongoose'); // ✅ Import mongoose
const app = express();
const bookRoutes = require('./routes/book-routes')
const authRoutes = require('./routes/authroutes')
const uploadImageRoutes =require('./routes/imageRotes')
const connectDB = async () => {
  try {
    await mongoose.connect("mongodb+srv://vishu:0zWuZ4jUBvQMUUE8@cluster0.xirmxjd.mongodb.net/");
    console.log("Database connected successfully");
  } catch (e) {
    console.error("Database connection failed:", e);
    process.exit(1);
  }
};
app.use('/api',authRoutes)
  app.use("/api/books",bookRoutes)
app.use("/images",uploadImageRoutes)
connectDB(); // Call the DB connection function
// Middleware to parse JSON
app.use(express.json());

// Start the server
app.listen(5050, () => {
  console.log("Server is running on port 5050");
});
