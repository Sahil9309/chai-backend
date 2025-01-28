// Load environment variables
import dotenv from "dotenv";
// dotenv.config({ path: './.env' }); // Ensure .env is properly configured

// Import database connection
import connectDB from "./db/index.js";

// Import Express (if used)
import express from "express";
const app = express();

// Connect to the database and start the server
connectDB()
  .then(() => {
    const port = process.env.PORT || 8000; // Use the PORT from .env or default to 8000
    app.listen(port, () => {
      console.log(`⚙️ Server is running on port: ${port}`);
    });
  })
  .catch((err) => {
    console.error("❌ MongoDB connection failed!", err);
    process.exit(1); // Exit if database connection fails
  });
