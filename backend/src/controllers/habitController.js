import prisma from "../lib/prisma.js";

export const getHabits = async (req, res) => {
    try {
        let habits = await prisma.habit.findMany({
            where: { userId: req.user.id },
            include: { logs: true },
            orderBy: { createdAt: 'desc' }
        });

        // Lazy Reset Logic & Stats Calculation
        const now = new Date();
        const updates = [];

        // Helper for Best Streak
        const calculateBestStreak = (logs, frequency) => {
            if (!logs || logs.length === 0) return 0;
            const sorted = logs
                .filter(l => l.isCompleted)
                .map(l => new Date(l.date).getTime())
                .sort((a, b) => a - b);

            const unique = [...new Set(sorted)]; // timestamp dedup
            if (unique.length === 0) return 0;

            let max = 1;
            let current = 1;

            for (let i = 1; i < unique.length; i++) {
                const prev = new Date(unique[i - 1]);
                const curr = new Date(unique[i]);

                let isConsecutive = false;

                if (frequency === 'Weekly') {
                    // Simple week diff
                    const oneWeek = 7 * 24 * 60 * 60 * 1000;
                    const diff = curr - prev;
                    // Allow roughly 1 week gap (some slack for different days in week?)
                    // Actually, if I do a habit on Mon Wk1 and Sun Wk2, that's consecutive weeks.
                    // Logic: Check ISO Week diff == 1.
                    const getWeek = d => {
                        d = new Date(Date.UTC(d.getFullYear(), d.getMonth(), d.getDate()));
                        d.setUTCDate(d.getUTCDate() + 4 - (d.getUTCDay() || 7));
                        var yearStart = new Date(Date.UTC(d.getUTCFullYear(), 0, 1));
                        return Math.ceil((((d - yearStart) / 86400000) + 1) / 7);
                    }
                    // Check Year diff too
                    // Simplifying: if diff is between 1 and 13 days? 
                    // Let's stick to Daily logic for now for stability, or basic day diff.
                    // Most accurate for "Weekly" is just strict "Period" check, but complex.
                    // Fallback: Just day diff <= 7?
                    const dayDiff = (curr - prev) / (1000 * 60 * 60 * 24);
                    isConsecutive = dayDiff <= 8 && dayDiff >= 1; // Loose weekly
                } else {
                    // Daily
                    const dayDiff = Math.abs((curr - prev) / (1000 * 60 * 60 * 24));
                    isConsecutive = Math.round(dayDiff) === 1;
                }

                if (isConsecutive) {
                    current++;
                } else {
                    max = Math.max(max, current);
                    current = 1;
                }
            }
            return Math.max(max, current);
        };

        habits = habits.map(habit => {
            // Stats
            const totalCompletions = habit.logs.filter(l => l.isCompleted).length;
            const bestStreak = calculateBestStreak(habit.logs, habit.frequency);

            // Append stats to habit object (virtual fields)
            habit = { ...habit, totalCompletions, bestStreak };

            // Reset Logic (Existing)
            if (!habit.isCompleted || !habit.lastCompletedDate) return habit;

            const last = new Date(habit.lastCompletedDate);
            let shouldReset = false;

            if (habit.frequency === 'Daily') {
                shouldReset = last.toDateString() !== now.toDateString();
            } else if (habit.frequency === 'Weekly') {
                const getWeek = (d) => {
                    const date = new Date(d.getTime());
                    date.setHours(0, 0, 0, 0);
                    date.setDate(date.getDate() + 3 - (date.getDay() + 6) % 7);
                    const week1 = new Date(date.getFullYear(), 0, 4);
                    return 1 + Math.round(((date.getTime() - week1.getTime()) / 86400000 - 3 + (week1.getDay() + 6) % 7) / 7);
                }
                shouldReset = getWeek(last) !== getWeek(now) || last.getFullYear() !== now.getFullYear();
            } else if (habit.frequency === 'Monthly') {
                shouldReset = last.getMonth() !== now.getMonth() || last.getFullYear() !== now.getFullYear();
            }

            if (shouldReset) {
                updates.push(prisma.habit.update({
                    where: { id: habit.id },
                    data: { isCompleted: false }
                }));
                return { ...habit, isCompleted: false };
            }

            return habit;
        });

        if (updates.length > 0) {
            await Promise.all(updates);
        }

        // Remove logs from response to keep payload light? User didn't ask, but good practice. 
        // But Detail might need them for calendar later? 
        // For now, let's keep it simple and just return the Enhanced Habit.
        // We can strip 'logs' if we want, but frontend doesn't use it yet. 
        // Let's strip it to be clean.
        const cleanedHabits = habits.map(({ logs, ...h }) => h);

        res.json(cleanedHabits);
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
            const now = new Date();

            if (isCompleted) {
                data.streak = existingHabit.streak + 1;
                data.lastCompletedDate = new Date();

                // Create or ensure HabitLog for today
                const startOfDay = new Date(now.setHours(0, 0, 0, 0));

                // We use findFirst to check if log exists then create
                // Ideally this should be a transaction or upsert if unique constraint existed
                const existingLog = await prisma.habitLog.findFirst({
                    where: {
                        habitId: id,
                        date: startOfDay
                    }
                });

                if (!existingLog) {
                    await prisma.habitLog.create({
                        data: {
                            habitId: id,
                            date: startOfDay,
                            isCompleted: true
                        }
                    });
                } else {
                    // If it exists but was false (unlikely case of toggle off then on same day), set true
                    if (!existingLog.isCompleted) {
                        await prisma.habitLog.update({
                            where: { id: existingLog.id },
                            data: { isCompleted: true }
                        });
                    }
                }

            } else {
                data.streak = Math.max(0, existingHabit.streak - 1);
                // We keep lastCompletedDate if we uncheck today? 
                // Usually if I uncheck, I shouldn't lose the record that I *did* it last time?
                // But for "lazy reset" logic to work, lastCompletedDate should probably revert?
                // Actually, if I uncheck today, lastCompletedDate should probably revert to yesterday?
                // Simplifying: If uncheck, we just decrement streak. We might not change lastCompletedDate strictly or we set it to null if it was today.
                // Let's leave lastCompletedDate logic simple for now or implement "undo" better later.

                // Remove/Update Log
                const startOfDay = new Date(now.setHours(0, 0, 0, 0));
                const existingLog = await prisma.habitLog.findFirst({
                    where: {
                        habitId: id,
                        date: startOfDay
                    }
                });

                if (existingLog) {
                    await prisma.habitLog.delete({ where: { id: existingLog.id } });
                }
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

export const getReportStats = async (req, res) => {
    try {
        const userId = req.user.id;
        const { range = 'last7' } = req.query;

        // 1. Fetch all habits
        const habits = await prisma.habit.findMany({
            where: { userId },
            include: { logs: true } // Fetches history
        });

        // 2. High-level Metrics
        const totalHabits = habits.length;
        const streaks = habits.map(h => h.streak);
        const bestStreak = streaks.length > 0 ? Math.max(...streaks) : 0;

        // 3. Perfect Days & Heatmap Data
        // Simple approximation: Count unique dates in logs where count equals active habits? 
        // Or simpler: Just get all logs and visualize intensity.

        const logs = await prisma.habitLog.findMany({
            where: {
                habit: { userId: userId },
                isCompleted: true
            }
        });

        // Aggregate logs by date for Heatmap
        const historyMap = {};
        logs.forEach(log => {
            // Use local date string YYYY-MM-DD
            const date = new Date(log.date);
            // offset to local
            const offset = date.getTimezoneOffset() * 60000;
            const localDate = new Date(date.getTime() - offset);
            const dateKey = localDate.toISOString().split('T')[0];
            historyMap[dateKey] = (historyMap[dateKey] || 0) + 1;
        });

        // Perfect Days: dates where completions >= total active habits (heuristic)
        // Note: Real "perfect day" is harder if habits vary by day (weekly/monthly). 
        // For now, let's say > 0 is "active", and e.g. >= 3 is "great". 
        // Or simply return the 'Perfect Days' count as days with 100% of *scheduled* habits done. 
        // That requires re-running frequency logic historically. Too expensive?
        // Let's use simpler metric: Days with > 50% completion.

        let perfectDays = 0;
        Object.values(historyMap).forEach(count => {
            if (totalHabits > 0 && count >= totalHabits) perfectDays++;
        });

        // 4. completion Rate (Average)
        // Rate = (streak / (days active))? Or just average of habits?
        // Let's iterate habits and calculate individual rates simplistically
        // Logic: (Logs count / Days since creation (or last 30 days)) * 100

        // 4. completion Rate (Average)
        let totalCompletion = 0;
        const habitPerformance = habits.map(h => {
            // Heuristic: Last 30 days expected vs actual
            const daysSinceCreation = Math.ceil((new Date() - new Date(h.createdAt)) / (1000 * 60 * 60 * 24));
            const denom = Math.min(daysSinceCreation, 30) || 1;
            const recentLogs = h.logs.filter(l => new Date(l.date) > new Date(Date.now() - 30 * 24 * 60 * 60 * 1000)).length;

            // Adjust denominator based on frequency
            let expected = denom;
            if (h.frequency === "Weekly") expected = Math.round(denom / 7) || 1;
            if (h.frequency === "Monthly") expected = Math.round(denom / 30) || 1;

            const rate = Math.min(100, Math.round((recentLogs / (expected || 1)) * 100));
            totalCompletion += rate;

            return {
                id: h.id,
                title: h.title,
                streak: h.streak,
                completion: rate,
                icon: h.iconName,
                color: h.color,
                target: h.target || "Daily",
                completedDates: h.logs.filter(l => l.isCompleted).map(l => l.date)
            };
        });

        const avgCompletion = totalHabits > 0 ? Math.round(totalCompletion / totalHabits) : 0;

        // 5. Trends Calculation
        // Wrapper for determining if a habit was due on a specific date
        const isHabitDue = (habit, date) => {
            const hDate = new Date(habit.createdAt);
            // Ignore time for comparison (start of day)
            hDate.setHours(0, 0, 0, 0);
            if (hDate > date) return false;

            if (habit.frequency === 'Daily') return true;
            if (habit.frequency === 'Weekly') {
                const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
                const dayName = days[date.getDay()];
                // Note: repeatDays is stored as string array e.g. ["Monday", "Friday"]
                return habit.repeatDays && habit.repeatDays.includes(dayName);
            }
            return false;
        };

        // A. Activity Trends
        // Determine start date and number of days based on range
        let daysToProcess = 7;
        let startDate = new Date();
        startDate.setHours(0, 0, 0, 0);

        if (range === 'last7') {
            daysToProcess = 7;
            startDate.setDate(startDate.getDate() - 6);
        } else if (range === 'last30') {
            daysToProcess = 30;
            startDate.setDate(startDate.getDate() - 29);
        } else if (range === 'thisWeek') {
            // Start from last Monday (or Sunday if you prefer US locale?)
            // ISO 8601: Week starts Monday.
            const day = startDate.getDay(); // 0 (Sun) - 6 (Sat)
            const diff = startDate.getDate() - day + (day === 0 ? -6 : 1); // adjust when day is sunday
            startDate.setDate(diff);
            // Limit to today? Or show full week including future (empty)?
            // Usually show full week?
            daysToProcess = 7;
        } else if (range === 'thisMonth') {
            startDate.setDate(1); // 1st of month
            // days in month
            const nextMonth = new Date(startDate);
            nextMonth.setMonth(nextMonth.getMonth() + 1);
            nextMonth.setDate(0);
            daysToProcess = nextMonth.getDate(); // 28, 30, 31...
        }

        const activityTrends = [];
        const dayLabels = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

        for (let i = 0; i < daysToProcess; i++) {
            const d = new Date(startDate);
            d.setDate(d.getDate() + i);
            d.setHours(0, 0, 0, 0);

            let dueCount = 0;
            let completedCount = 0;

            habits.forEach(h => {
                if (isHabitDue(h, d)) {
                    dueCount++;
                    const hasLog = logs.some(l => {
                        const lDate = new Date(l.date);
                        lDate.setHours(0, 0, 0, 0);
                        return l.habitId === h.id && lDate.getTime() === d.getTime();
                    });
                    if (hasLog) completedCount++;
                }
            });

            const val = dueCount > 0 ? Math.round((completedCount / dueCount) * 100) : 0;

            // Format Day Label
            // For 30 days, just date number?
            let label = dayLabels[d.getDay()];
            if (['last30', 'thisMonth'].includes(range)) {
                label = d.getDate().toString();
            }

            activityTrends.push({
                day: label,
                val,
                fullDate: d.toISOString()
            });
        }

        // B. Weekly Consistency (Day of Week Performance - Last 90 Days)
        const dayStats = {
            'Monday': { expected: 0, actual: 0 },
            'Tuesday': { expected: 0, actual: 0 },
            'Wednesday': { expected: 0, actual: 0 },
            'Thursday': { expected: 0, actual: 0 },
            'Friday': { expected: 0, actual: 0 },
            'Saturday': { expected: 0, actual: 0 },
            'Sunday': { expected: 0, actual: 0 }
        };

        // Iterate last 90 days
        for (let i = 0; i < 90; i++) {
            const d = new Date();
            d.setDate(d.getDate() - i);
            d.setHours(0, 0, 0, 0);
            const fullDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
            const dayName = fullDays[d.getDay()];

            habits.forEach(h => {
                if (isHabitDue(h, d)) {
                    dayStats[dayName].expected++;
                    const hasLog = logs.some(l => {
                        const lDate = new Date(l.date);
                        lDate.setHours(0, 0, 0, 0);
                        return l.habitId === h.id && lDate.getTime() === d.getTime();
                    });
                    if (hasLog) dayStats[dayName].actual++;
                }
            });
        }

        const weeklyConsistency = Object.keys(dayStats).map(day => {
            const { expected, actual } = dayStats[day];
            return {
                label: day,
                pct: expected > 0 ? Math.round((actual / expected) * 100) : 0
            };
        });
        // Sort to Monday first for UI?
        const sorter = { 'Monday': 1, 'Tuesday': 2, 'Wednesday': 3, 'Thursday': 4, 'Friday': 5, 'Saturday': 6, 'Sunday': 7 };
        weeklyConsistency.sort((a, b) => sorter[a.label] - sorter[b.label]);


        res.json({
            overview: {
                totalHabits,
                avgCompletion,
                bestStreak,
                perfectDays
            },
            habitPerformance,
            trends: {
                activity: activityTrends,
                weeklyConsistency
            },
            history: historyMap
        });

    } catch (error) {
        console.error("Report stats error:", error);
        res.status(500).json({ message: "Internal server error" });
    }
}
