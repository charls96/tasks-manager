import express from "express";
import {
  register,
  authenticate,
  verify,
  resetPassword,
  verifyToken,
} from "../controllers/userController.js";

const router = express.Router();

//Authentication, registration and confirmation of Users
router.post("/", register);
router.post("/login", authenticate);
router.get("/verify/:token", verify);
router.post("/reset-password", resetPassword);
router.get("/reset-password/:token", verifyToken)

export default router;
