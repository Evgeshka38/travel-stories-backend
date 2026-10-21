import mongoose from 'mongoose';
import dns from 'node:dns';

dns.setServers(['1.1.1.1', '1.0.0.1']);

export const connectMongoDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log('MongoDB connection successfully established!');
  } catch (error) {
    console.error('MongoDB connection failed:', error.message);
    process.exit(1);
  }
};
