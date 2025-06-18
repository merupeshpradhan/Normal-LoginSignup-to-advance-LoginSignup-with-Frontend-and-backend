import express from 'express';
import dotenv from 'dotenv';
import uploadRouter from './uploadRoute.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use('/api/upload', uploadRouter);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});