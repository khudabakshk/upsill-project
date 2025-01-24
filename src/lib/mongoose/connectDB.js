
import mongoose from 'mongoose';

let initialized = false;

export const connect = async () => {
  mongoose.set('strictQuery', true);
  if (initialized) {
    console.log('Already connected to MongoDB');
    return;
  }

  try {
    await mongoose.connect(process.env.MONGO_URI, {
      dbName: 'BAKHS_DEBUG',
    
    });
    console.log('Connected to MongoDB');
    initialized = true;
  } catch (error) {
    console.log('Error connecting to MongoDB:', error);
  }
};