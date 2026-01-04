import express from "express";
import { saveOnboarding, getMe } from "../controllers/userController.js";
import { authenticateToken } from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/onboarding", authenticateToken, saveOnboarding);
router.get("/me", authenticateToken, getMe);

export default router;
