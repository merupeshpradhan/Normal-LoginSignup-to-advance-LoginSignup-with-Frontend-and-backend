import mongoose from "mongoose";

export const dbConnection = () => {
  mongoose
    .connect(process.env.MONGO_URI, {
      dbName: "NORMAL_LOGIN_SIGNUP",
    })
    .then(() => {
      console.log("\n Connected to database!");
    })
    .catch((err) => {
      console.log(`some error occured while connecting to database: ${err}`);
    });
};

