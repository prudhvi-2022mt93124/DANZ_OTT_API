// src/server.ts
import express, { Request, Response } from 'express';
import connectDB from './helpers/db';
import userRouter from "./routes/user.route";
import movieRouter from './routes/movie.route';

// Initialize Express app
const app = express();

// Middleware to parse JSON
app.use(express.json());

// Connect to MongoDB
connectDB();

// Define Routes

// Test Route
app.get('/', (req: Request, res: Response) => {
  res.send('Welcome to the API!');
});
// User Route for Testing Purpose
app.use("/api/users", userRouter);

// Movie Route 
app.use("/api/movies", movieRouter);



// Port the server will listen on
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
