import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import express from 'express';
import helmet from 'helmet';
import dotenv from 'dotenv';
import morgan from 'morgan';
import cors from 'cors';
import path from 'path';

import authRoutes from './routes/Auth.js'
import userRoutes from './routes/User.js'
import User from './models/User.js';
import { register } from './controllers/Auth/js'



// Config
dotenv.config();
const app = express()
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan("common"));
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

// Routes
app.post("/auth/register", register);
app.use('/auth', authRoutes)
app.use('/users', userRoutes)

// Mongoose config
const PORT = process.env.PORT || 6001
const URL = process.env.MONGO_URL

// removes console warning about changes on mongoose 7
mongoose.set('strictQuery', true);
mongoose.connect(URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  app.listen(PORT, () => console.log(`Server running on port: ${PORT}`));
}).catch((error) => console.log(`${error} did not connect`))
