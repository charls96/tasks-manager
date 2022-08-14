import express from "express";
import { register, authenticate, verify } from "../controllers/userController.js";

const router = express.Router();

//Authentication, registration and confirmation of Users
router.post("/", register);
router.post("/login", authenticate);
router.get("/verify/:token", verify);

export default router;
