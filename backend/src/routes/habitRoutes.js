import express from "express";
import { createHabit, getHabits, updateHabit, deleteHabit } from "../controllers/habitController.js";
import { authenticateToken } from "../middleware/authMiddleware.js";

const router = express.Router();

router.use(authenticateToken); // Protect all routes

router.get("/", getHabits);
router.post("/", createHabit);
router.put("/:id", updateHabit);
router.delete("/:id", deleteHabit);

export default router;
