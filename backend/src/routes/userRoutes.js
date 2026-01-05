import express from "express";
import { saveOnboarding, getMe, updateProfilePhoto } from "../controllers/userController.js";
import { authenticateToken } from "../middleware/authMiddleware.js";
import multer from "multer";
import path from "path";
import fs from "fs";

// Ensure uploads directory exists
const uploadDir = 'uploads';
if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir);
}

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, uploadDir)
    },
    filename: (req, file, cb) => {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
        cb(null, 'user-' + req.user.id + '-' + uniqueSuffix + path.extname(file.originalname))
    }
})

const upload = multer({ storage: storage });

const router = express.Router();

router.post("/onboarding", authenticateToken, saveOnboarding);
router.get("/me", authenticateToken, getMe);
router.put("/profile-photo", authenticateToken, upload.single('profilePhoto'), updateProfilePhoto);

export default router;
