import express from "express";
import { register, authenticate } from "../controllers/userController.js"

const router = express.Router();

//Authentication, registration and confirmation of Users
router.post('/', register)
router.post('/login', authenticate);


export default router;