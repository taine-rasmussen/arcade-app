import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import User from '../Models/User.js'


// Register User
export const register = async (req, res) => {
  try {
    const {
      username,
      password,
      stats
    } = req.body;

    const salt = await bcrypt.genSalt();
    const passwordhash = await bcrypt.hash(password, salt);

    const newUser = new User({
      username,
      password: passwordhash,
      stats
    });

    const savedUser = await newUser.save();
    res.status(201).json(savedUser)
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
};