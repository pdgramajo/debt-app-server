import mongoose from "mongoose";

const connectDB = () => {
  try {
    const MONGODB_URI = `mongodb://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@database:27017/${process.env.MONGO_BD}?authSource=admin`
    mongoose.connect(MONGODB_URI, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });
  } catch (error) {
    console.error(error);
  }
};

export default connectDB;
