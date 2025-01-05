import { Request, Response } from "express";
import User from "../models/user.model";

class UserController {

    static async createUser(req: Request, res: Response) {
        try {
            const user = new User(req.body);
            await user.save();
            res.status(201).json(user);
        } catch (error) {
            res.status(400).json({ message: 'Error creating user', error });
        }
    }

    static async getUsers(req: Request, res: Response) {
        try {
            const users = await User.find();
            res.status(200).json(users);
        } catch (error) {
            res.status(500).json({ message: 'Error fetching users', error });
        }
    }
}

export default UserController;