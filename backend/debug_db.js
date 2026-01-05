
import fs from 'fs'
import prisma from './src/lib/prisma.js'

async function main() {
    try {
        const habits = await prisma.habit.findMany({
            where: { streak: { gt: 0 } },
            include: { logs: true }
        })

        let output = "=== Habits with Streak > 0 ===\n"
        const now = new Date()
        output += `Current Server Time: ${now.toISOString()}\n`

        habits.forEach(h => {
            output += `Habit: ${h.title} (ID: ${h.id})\n`
            output += `  Streak: ${h.streak}\n`
            output += `  Created At: ${h.createdAt.toISOString()}\n`
            output += `  Frequency: ${h.frequency}\n`
            output += "  Logs:\n"
            h.logs.forEach(l => {
                output += `    - ID: ${l.id}, Date: ${l.date.toISOString()}, Completed: ${l.isCompleted}\n`
            })

            const yesterday = new Date()
            yesterday.setDate(yesterday.getDate() - 1)
            yesterday.setHours(0, 0, 0, 0)

            const hDate = new Date(h.createdAt)
            hDate.setHours(0, 0, 0, 0)

            output += `  Debug Yesterday (${yesterday.toISOString()}):\n`
            output += `    - Habit Created Normalized: ${hDate.toISOString()}\n`
            output += `    - Created <= Yesterday? ${hDate <= yesterday}\n`

            const matches = h.logs.filter(l => {
                const lDate = new Date(l.date)
                lDate.setHours(0, 0, 0, 0)
                return lDate.getTime() === yesterday.getTime()
            })
            output += `    - Found Logs for Yesterday: ${matches.length}\n`
            output += "------------------------------------------------\n"
        })

        fs.writeFileSync('debug_output.txt', output)
        console.log("Written to debug_output.txt")

    } catch (error) {
        console.error("Error fetching data:", error)
    }
}

main()
    .finally(async () => {
        await prisma.$disconnect()
    })
