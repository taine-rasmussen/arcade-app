import { verifyToken } from '../Middleware/Auth.js';
import { getUser } from '../controllers/User.js';
import express from 'express';

const router = express.Router();

// Read routes
router.get('/:id', verifyToken, getUser);

export default router
