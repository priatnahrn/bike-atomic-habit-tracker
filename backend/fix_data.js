
import prisma from './src/lib/prisma.js'

async function main() {
    try {
        const habitId = "da8d5fdf-b3cd-4dbb-9f19-5ae065308395"

        // Create log for Yesterday (Jan 4)
        const yesterday = new Date()
        yesterday.setDate(yesterday.getDate() - 1)
        yesterday.setHours(0, 0, 0, 0) // Local midnight

        console.log(`Creating log for ${yesterday.toISOString()}...`)

        await prisma.habitLog.create({
            data: {
                habitId: habitId,
                date: yesterday,
                isCompleted: true
            }
        })

        console.log("Log created successfully.")
    } catch (error) {
        console.error("Error creating log:", error)
    }
}

main()
    .finally(async () => {
        await prisma.$disconnect()
    })
