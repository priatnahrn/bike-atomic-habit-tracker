import prisma from "../lib/prisma.js";

export const createFeedback = async (req, res) => {
    const { category, subject, message } = req.body;

    try {
        const feedback = await prisma.feedback.create({
            data: {
                userId: req.user.id,
                category,
                subject,
                message
            }
        });
        res.status(201).json(feedback);
    } catch (error) {
        console.error("Create feedback error:", error);
        res.status(500).json({ message: "Internal server error" });
    }
};
