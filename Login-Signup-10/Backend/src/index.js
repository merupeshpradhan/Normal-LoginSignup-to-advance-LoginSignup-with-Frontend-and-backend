import connectDB from "./database/index.js";
import { app } from "./app.js";
import dotenv from "dotenv";

dotenv.config({ path: "./.env" });

connectDB()
  .then(() => {
    // server runing test
    app.listen(process.env.PORT || 8000, () => {
      console.log(`\n Server is runinig at PORT ${process.env.PORT}`);
    });
  })
  .catch((error) => {
    console.log("MONGODB CONNECTION FAILD", error);
  });