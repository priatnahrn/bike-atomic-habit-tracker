import express from "express";
import { createHabit, getHabits, updateHabit, deleteHabit, getReportStats } from "../controllers/habitController.js";
import { authenticateToken } from "../middleware/authMiddleware.js";

const router = express.Router();

router.use(authenticateToken); // Protect all routes

router.get("/stats", getReportStats); // Must be before /:id
router.get("/", getHabits);
router.post("/", createHabit);
router.put("/:id", updateHabit);
router.delete("/:id", deleteHabit);

export default router;
