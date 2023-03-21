import express from 'express';
import {
  getUser
} from '../Controllers/Users.js';
import { verifyToken } from '../Middleware/Auth.js'

const router = express.Router();

// Read routes
router.get('/:id', verifyToken, getUser);