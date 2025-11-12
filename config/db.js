import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    console.log("🔍 Render MONGO_URI:", process.env.MONGO_URI ? "Loaded ✅" : "Missing ❌");
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      ssl: true, // Required for Render and MongoDB Atlas
    });
    console.log(`✅ MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error("❌ MongoDB connection failed:", error.message);
    process.exit(1);
  }
};
