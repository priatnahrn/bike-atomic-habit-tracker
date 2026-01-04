import prisma from "../lib/prisma.js";

export const getHabits = async (req, res) => {
    try {
        const habits = await prisma.habit.findMany({
            where: { userId: req.user.id },
            orderBy: { createdAt: 'desc' }
        });
        res.json(habits);
    } catch (error) {
        console.error("Get habits error:", error);
        res.status(500).json({ message: "Internal server error" });
    }
};

export const createHabit = async (req, res) => {
    const { habitName, identity, iconName, color, frequency, target, time, location, stackingCue, repeatDays } = req.body;

    try {
        const habit = await prisma.habit.create({
            data: {
                userId: req.user.id,
                title: habitName,
                subtitle: identity,
                iconName,
                color,
                frequency,
                target,
                time,
                location,
                stackingCue,
                repeatDays: repeatDays || []
            }
        });
        res.status(201).json(habit);
    } catch (error) {
        console.error("Create habit error:", error);
        res.status(500).json({ message: "Internal server error" });
    }
};

export const updateHabit = async (req, res) => {
    const { id } = req.params;
    const { isCompleted, habitName, identity, iconName, color, frequency, target, time, location, stackingCue, repeatDays } = req.body;

    try {
        // Check ownership
        const existingHabit = await prisma.habit.findUnique({ where: { id } });
        if (!existingHabit || existingHabit.userId !== req.user.id) {
            return res.status(404).json({ message: "Habit not found" });
        }

        const data = {};
        if (habitName !== undefined) data.title = habitName;
        if (identity !== undefined) data.subtitle = identity;
        if (iconName !== undefined) data.iconName = iconName;
        if (color !== undefined) data.color = color;
        if (frequency !== undefined) data.frequency = frequency;
        if (target !== undefined) data.target = target;
        if (time !== undefined) data.time = time;
        if (location !== undefined) data.location = location;
        if (stackingCue !== undefined) data.stackingCue = stackingCue;
        if (repeatDays !== undefined) data.repeatDays = repeatDays;

        // Logic for toggling completion and streak
        if (isCompleted !== undefined) {
            data.isCompleted = isCompleted;
            if (isCompleted) {
                data.streak = existingHabit.streak + 1;
                data.lastCompletedDate = new Date();
            } else {
                data.streak = Math.max(0, existingHabit.streak - 1);
                data.lastCompletedDate = null; // Ideally logic is more complex for previous date
            }
        }

        const updatedHabit = await prisma.habit.update({
            where: { id },
            data
        });

        res.json(updatedHabit);
    } catch (error) {
        console.error("Update habit error:", error);
        res.status(500).json({ message: "Internal server error" });
    }
};

export const deleteHabit = async (req, res) => {
    const { id } = req.params;
    try {
        const existingHabit = await prisma.habit.findUnique({ where: { id } });
        if (!existingHabit || existingHabit.userId !== req.user.id) {
            return res.status(404).json({ message: "Habit not found" });
        }

        await prisma.habit.delete({ where: { id } });
        res.json({ message: "Habit deleted" });
    } catch (error) {
        console.error("Delete habit error:", error);
        res.status(500).json({ message: "Internal server error" });
    }
}
