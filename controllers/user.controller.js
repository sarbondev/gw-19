import { User } from "../models/user.js";

export const getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    return res.status(201).json(users);
  } catch (error) {
    return res.status(500).json({ messsage: error.messsage });
  }
};
