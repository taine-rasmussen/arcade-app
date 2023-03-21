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

// Login
export const login = async (req, res) => {
  try {
    const {
      email,
      password
    } = req.body;

    const user = await User.findOne({ email: email });
    if (!user) return res.status(400).json({ msg: 'User not found' })

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return es.status(400).json({ msg: 'Invalid credentials' });

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
    delete user.password;

    res.status(200).json({ token, user })

  } catch (err) {
    res.status(500).json({ error: err.message })
  }
};