import express from "express";
const userRouter = express.Router();
import UserController from "../controllers/user.controller";

// Create a new user
userRouter.post('/', UserController.createUser);

// Get all users
userRouter.get('/', UserController.getUsers);

export default userRouter;