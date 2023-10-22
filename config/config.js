import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
const CONNECTION = process.env.CONNECTION_URL;

const connectDB = async () => {
  try {
    const connection = mongoose.connect(CONNECTION, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("db is connected");
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

export default connectDB;
