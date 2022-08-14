import express from "express";
import {
  register,
  authenticate,
  verify,
  resetPassword,
  verifyToken,
  newPassword,
} from "../controllers/userController.js";

const router = express.Router();

//Authentication, registration and confirmation of Users
router.post("/", register);
router.post("/login", authenticate);
router.get("/verify/:token", verify);
router.post("/reset-password", resetPassword);
router.route("/reset-password/:token").get(verifyToken).post(newPassword);

export default router;
