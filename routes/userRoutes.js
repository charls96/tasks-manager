import express from "express";
import {
  register,
  authenticate,
  verify,
  resetPassword,
  verifyToken,
  newPassword,
  profile,
} from "../controllers/userController.js";
import checkAuth from "../middleware/checkAuth.js";

const router = express.Router();

//Authentication, registration and confirmation of Users
router.post("/", register);
router.post("/login", authenticate);
router.get("/verify/:token", verify);
router.post("/reset-password", resetPassword);
router.route("/reset-password/:token").get(verifyToken).post(newPassword);

router.get('/profile', checkAuth, profile)

export default router;
