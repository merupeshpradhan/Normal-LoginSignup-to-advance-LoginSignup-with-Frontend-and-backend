import express from "express";

import dotenv from "dotenv";

const app = express();

app.get("/", (req, res) => {
  res.send("server is ready");
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server at http://localhost:${port}`);
});
