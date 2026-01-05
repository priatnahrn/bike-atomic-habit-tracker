import express from 'express';
import { createFeedback } from '../controllers/feedbackController.js';
import { authenticateToken } from '../middleware/authMiddleware.js';

const router = express.Router();

router.post('/', authenticateToken, createFeedback);

export default router;
