import mongoose from "mongoose";
import IUser from "../interfaces/user"

const User = mongoose.model<IUser>('User', new mongoose.Schema<IUser>({
    name: { type: String, required: true },
    email: { type: String, required: true },
}));

export default User;