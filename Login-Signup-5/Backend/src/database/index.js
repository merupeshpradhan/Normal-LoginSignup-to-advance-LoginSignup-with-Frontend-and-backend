import mongoose from "mongoose";
import { DB_NAME } from "../constant.js";

const connectDB = async () => {
  try {
    const connectionInstace = await mongoose.connect(
      `${process.env.MONGODB_URL}/${DB_NAME}`
    );

    console.log(
      `\n Monoogdb connected !! DB HOST : ${connectionInstace.connection.host}`
    );
  } catch (error) {
    console.log("MONGODB CONNECTION FAILD", error);
    process.exit(1);
  }
};

export default connectDB;
