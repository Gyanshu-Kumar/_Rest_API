const mongoose = require("mongoose");

const connectDB = async (uri) => {
  try {
    // No need for useNewUrlParser and useUnifiedTopology options
    await mongoose.connect(uri);
    console.log("MongoDB connected successfully");
  } catch (error) {
    console.error("MongoDB connection error:", error);
    throw error; // Rethrow for external handling
  }
};

module.exports = connectDB;
