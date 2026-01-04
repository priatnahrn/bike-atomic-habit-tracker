import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import authRoutes from "./routes/authRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import habitRoutes from "./routes/habitRoutes.js";

const app = express();
dotenv.config();

app.use(
    cors({
        origin: "http://localhost:5174", // Frontend origin
        credentials: true,
    })
);

app.use(express.json());

app.use("/auth", authRoutes);
app.use("/api/user", userRoutes);
app.use("/api/habits", habitRoutes);

app.get("/", (req, res) => {
    res.send("🚀 API berjalan dengan baik!");
});

export default app;
