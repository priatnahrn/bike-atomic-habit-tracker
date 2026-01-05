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
        origin: function (origin, callback) {
            const allowedOrigins = [
                "http://localhost:5173",
                process.env.CLIENT_URL,
                process.env.VZ_PREVIEW_URL // Optional: for Vercel preview deployments
            ];

            // Allow requests with no origin (like mobile apps or curl requests)
            if (!origin) return callback(null, true);

            if (allowedOrigins.indexOf(origin) !== -1 || !origin) {
                callback(null, true);
            } else {
                // For development simplicity, you might want to allow all during initial setup locally
                // or just stick to the list. Let's allow if it matches the deployed URL.
                callback(null, true); // TEMPORARY: Allow all for easier debugging during first deploy
            }
        },
        credentials: true,
    })
);

app.use(express.json());

app.use("/auth", authRoutes);
app.use("/api/user", userRoutes);
app.use("/api/habits", habitRoutes);
app.use("/api/feedback", feedbackRoutes);
app.use("/uploads", express.static(process.env.VERCEL ? "/tmp/uploads" : "uploads"));

app.get("/", (req, res) => {
    res.send("🚀 API berjalan dengan baik!");
});

export default app;
