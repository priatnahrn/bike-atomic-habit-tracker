import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import authRoutes from "./routes/authRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import habitRoutes from "./routes/habitRoutes.js";
import feedbackRoutes from "./routes/feedbackRoutes.js";

const app = express();
dotenv.config();

app.use(
    cors({
        origin: "http://localhost:5173", // Frontend origin
        credentials: true,
    })
);

app.use(express.json());

app.use("/auth", authRoutes);
app.use("/api/user", userRoutes);
app.use("/api/habits", habitRoutes);
app.use("/api/feedback", feedbackRoutes);
app.use("/uploads", express.static("uploads"));

app.get("/", (req, res) => {
    res.send("🚀 API berjalan dengan baik!");
});

export default app;
