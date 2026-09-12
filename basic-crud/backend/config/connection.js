import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const mongoUri = process.env.MONGODB_URI || process.env.MONGO_URI;
    if (!mongoUri) {
      throw new Error("MONGO_URI is not defined.");
    }

    const conn = await mongoose.connect(mongoUri);

    console.log(` MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error("X MongoDB Connection failed");
    console.error(error.message);
    process.exit(1);
  }
};


export default connectDB;  //test