// lib/db.js
import mongoose from 'mongoose';

const connectDB = async () => {
  try {
    if (mongoose.connection.readyState >= 1) return;

    await mongoose.connect(process.env.MONGODB_URI, {
      dbName: 'finance',
    });

    console.log('MongoDB Connected ✅');
  } catch (error) {
    console.error('MongoDB connection error:', error);
  }
};

export default connectDB;
