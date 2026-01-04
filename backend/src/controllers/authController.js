import "dotenv/config";
import prisma from "../lib/prisma.js";
import bcrypt from "bcryptjs";

export const register = async (req, res) => {
    const { email, password, name } = req.body;

    try {
        const existingUser = await prisma.user.findUnique({
            where: { email },
        });

        if (existingUser) {
            return res.status(400).json({ message: "User already exists" });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const user = await prisma.user.create({
            data: {
                email,
                password: hashedPassword,
                name,
            },
        });

        const { password: _, ...userWithoutPassword } = user;

        const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET || "fallback_secret", {
            expiresIn: "1d",
        });

        res.status(201).json({
            message: "User registered successfully",
            token,
            user: userWithoutPassword,
        });
    } catch (error) {
        console.error("Registration error:", error);
        res.status(500).json({ message: "Internal server error" });
    }
};

import jwt from "jsonwebtoken";

export const login = async (req, res) => {
    const { email, password } = req.body;

    try {
        // 1. Find user
        const user = await prisma.user.findUnique({
            where: { email },
        });

        if (!user) {
            return res.status(400).json({ message: "Invalid credentials" });
        }

        // 2. Compare password
        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) {
            return res.status(400).json({ message: "Invalid credentials" });
        }

        // 3. Generate Token
        const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET || "fallback_secret", {
            expiresIn: "1d",
        });

        // 4. Return success
        const { password: _, ...userWithoutPassword } = user;

        res.status(200).json({
            message: "Login successful",
            token,
            user: userWithoutPassword,
        });
    } catch (error) {
        console.error("Login error:", error);
        res.status(500).json({ message: "Internal server error" });
    }
};
