import { app } from "./app.js";
import connectDB from "./database/index.js";
import dotenv from "dotenv";

dotenv.config({ path: "./.env" });

connectDB()
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log(`\n Server is running at port ${process.env.PORT}`);
    });
  })
  .catch((error) => {
    console.log("Mongoodb connection FAILED !!!", error);
  });
