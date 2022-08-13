import express from "express";
import { register } from "../controllers/userController.js"

const router = express.Router();

//Authentication, registration and confirmation of Users
router.post('/', register)


export default router;