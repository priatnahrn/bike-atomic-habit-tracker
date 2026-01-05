import prisma from "../lib/prisma.js";

export const saveOnboarding = async (req, res) => {
    const { goal, focusAreas } = req.body;
    const userId = req.user.id;

    try {
        const onboarding = await prisma.onboarding.create({
            data: {
                userId,
                goal,
                focusAreas,
            },
        });

        res.status(201).json({
            message: "Onboarding data saved successfully",
            onboarding,
        });
    } catch (error) {
        console.error("Save onboarding error:", error);
        if (error.code === 'P2002') {
            return res.status(400).json({ message: "Onboarding data already exists for this user" });
        }
        res.status(500).json({ message: "Internal server error" });
    }
};

export const getMe = async (req, res) => {
    try {
        const user = await prisma.user.findUnique({
            where: { id: req.user.id },
            include: {
                onboarding: true
            }
        });

        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        const { password: _, ...userWithoutPassword } = user;
        res.json(userWithoutPassword);
    } catch (error) {
        console.error("Get user error:", error);
        res.status(500).json({ message: "Internal server error" });
    }
};

export const updateProfilePhoto = async (req, res) => {
    if (!req.file) {
        return res.status(400).json({ message: "No file uploaded" });
    }

    try {
        const photoUrl = `http://localhost:2000/uploads/${req.file.filename}`;

        const user = await prisma.user.update({
            where: { id: req.user.id },
            data: { profilePhoto: photoUrl }
        });

        const { password: _, ...userWithoutPassword } = user;
        res.json({
            message: "Profile photo updated",
            user: userWithoutPassword
        });

    } catch (error) {
        console.error("Update profile photo error:", error);
        res.status(500).json({ message: "Internal server error" });
    }
};
