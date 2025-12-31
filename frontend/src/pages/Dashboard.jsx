import { useState } from "react"
import { Link } from "react-router-dom"
import Sidebar from "../components/dashboard/Sidebar"
import DashboardHeader from "../components/dashboard/DashboardHeader"
import HabitCard from "../components/dashboard/HabitCard"
import { Footprints, BookOpen, Diamond, Droplets, Flame, Edit, Plus, TrendingUp } from "lucide-react"
import Modal from "../components/Modal"
import AddHabitForm from "../components/AddHabitForm"
import HabitDetail from "../components/HabitDetail"

const Dashboard = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [selectedHabit, setSelectedHabit] = useState(null)
    const [isEditing, setIsEditing] = useState(false)

    // Mock Habits Data
    // Mock Habits Data
    const [habits, setHabits] = useState([
        {
            id: 1,
            title: "Morning Run",
            subtitle: "Start the day with energy",
            icon: Footprints,
            streak: 12,
            frequency: "Daily",
            target: "5 km run",
            isCompleted: true
        },
        {
            id: 2,
            title: "Review Goals",
            subtitle: "Stay aligned with vision",
            icon: BookOpen,
            streak: 4,
            frequency: "Weekly",
            target: "30 Minutes",
            isCompleted: false
        },
        {
            id: 3,
            title: "No Sugar",
            subtitle: "Stay healthy and focused",
            icon: Diamond,
            streak: 5,
            frequency: "Daily",
            target: "0g Added Sugar",
            isCompleted: false
        },
        {
            id: 4,
            title: "Budget Review",
            subtitle: "Financial health check",
            icon: Droplets,
            streak: 2,
            frequency: "Monthly",
            target: "Review Expenses",
            isCompleted: false
        },
        {
            id: 5,
            title: "Meditation",
            subtitle: "Mindfulness session",
            icon: Flame,
            streak: 21,
            frequency: "Daily",
            target: "15 Minutes",
            isCompleted: true
        },
        {
            id: 6,
            title: "Journaling",
            subtitle: "Reflect on your day",
            icon: Edit,
            streak: 3,
            frequency: "Daily",
            target: "1 Page",
            isCompleted: false
        }
    ])

    const handleAddHabit = (newHabitData) => {
        // Simple icon picker for now - would be better with a real picker
        const icons = [Footprints, BookOpen, Diamond, Droplets, Flame, Edit, Bike, TrendingUp]
        const randomIcon = icons[Math.floor(Math.random() * icons.length)]

        const newHabit = {
            id: Date.now(),
            title: newHabitData.habitName,
            subtitle: newHabitData.identity,
            icon: randomIcon, // Placeholder icon logic
            streak: 0,
            frequency: newHabitData.frequency,
            target: newHabitData.target,
            isCompleted: false,
            ...newHabitData
        }

        setHabits([...habits, newHabit])
    }

    const handleUpdateHabit = (updatedHabitData) => {
        const updatedHabits = habits.map(habit => {
            if (habit.id === selectedHabit.id) {
                return {
                    ...habit,
                    title: updatedHabitData.habitName,
                    subtitle: updatedHabitData.identity,
                    frequency: updatedHabitData.frequency,
                    target: updatedHabitData.target,
                    ...updatedHabitData
                }
            }
            return habit
        })

        setHabits(updatedHabits)
        setIsEditing(false)
        setSelectedHabit(null)
        setIsModalOpen(false)
    }

    // Mock Daily Goal Data
    const dailyGoal = { current: 3, total: 6 } // Adjusted total based on habits count
    const progressPercentage = (dailyGoal.current / dailyGoal.total) * 100

    return (
        <div className="flex h-screen w-full bg-gray-50 overflow-hidden font-manrope">
            {/* Sidebar */}
            <Sidebar
                isOpen={isMobileMenuOpen}
                onClose={() => setIsMobileMenuOpen(false)}
                onOpenHabitModal={() => setIsModalOpen(true)}
            />

            {/* Main Content */}
            <main className="flex-1 flex flex-col h-full overflow-y-auto relative scroll-smooth p-4 md:p-8 lg:p-10 pb-24">

                <DashboardHeader onMenuClick={() => setIsMobileMenuOpen(true)} />

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">

                    {/* Left Column: Habits List (2/3 width) */}
                    <div className="lg:col-span-2 space-y-6">
                        <div className="flex items-center justify-between">
                            <h2 className="text-xl font-bold text-gray-900">Your Habits</h2>
                            <button className="text-sm font-medium text-primary hover:underline">View All</button>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {habits.map((habit) => (
                                <HabitCard
                                    key={habit.id}
                                    habit={habit}
                                    onClick={() => setSelectedHabit(habit)}
                                />
                            ))}

                            {/* Add New Habit Card */}
                            {/* Add New Habit Card */}
                            <div
                                onClick={() => setIsModalOpen(true)}
                                className="group flex flex-col items-center justify-center h-64 p-6 rounded-2xl border-2 border-dashed border-gray-200 hover:border-primary hover:bg-orange-50/50 transition-all cursor-pointer"
                            >
                                <div className="size-14 rounded-full bg-gray-100 group-hover:bg-primary/20 flex items-center justify-center transition-colors mb-3">
                                    <Plus size={28} className="text-gray-400 group-hover:text-primary transition-colors" />
                                </div>
                                <h3 className="text-base font-bold text-gray-400 group-hover:text-primary transition-colors">Add New Habit</h3>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Daily Goal & Stats (1/3 width) */}
                    <div className="lg:col-span-1 space-y-6 sticky top-0">
                        {/* Daily Goal Card */}
                        <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
                            <div className="flex justify-between items-center mb-4">
                                <span className="text-base font-bold text-gray-900">Daily Goal</span>
                                <span className="text-xs font-bold px-2 py-1 rounded bg-orange-50 text-primary border border-orange-100">
                                    {dailyGoal.current}/{dailyGoal.total} Done
                                </span>
                            </div>

                            <div className="relative pt-1">
                                <div className="h-4 w-full bg-gray-100 rounded-full overflow-hidden">
                                    <div
                                        className="h-full bg-primary rounded-full transition-all duration-1000 ease-out relative"
                                        style={{ width: `${progressPercentage}%` }}
                                    >
                                        <div className="absolute top-0 right-0 bottom-0 w-full bg-white/20 animate-pulse"></div>
                                    </div>
                                </div>
                            </div>

                            <p className="mt-4 text-sm text-gray-500 flex items-center gap-2 font-medium">
                                <span className="p-1 rounded bg-orange-100 text-primary">
                                    <TrendingUp size={14} />
                                </span>
                                Keep pedaling! You're doing great.
                            </p>
                        </div>

                        {/* Motivational Quote Placeholder */}
                        <div className="bg-primary/5 p-6 rounded-2xl border border-primary/10">
                            <p className="text-sm font-medium text-gray-600 italic">
                                "It does not matter how slowly you go as long as you do not stop."
                            </p>
                            <p className="text-xs font-bold text-primary mt-2">- Confucius</p>
                        </div>
                    </div>

                </div>

                {/* Floating Action Button (Mobile Only) */}
                <div className="fixed bottom-6 right-6 lg:hidden z-50">
                    <button
                        onClick={() => setIsModalOpen(true)}
                        className="flex items-center justify-center size-14 bg-primary text-white rounded-full shadow-xl shadow-primary/30 hover:scale-105 transition-all duration-300"
                    >
                        <Plus size={24} />
                    </button>
                </div>

                <Modal isOpen={isModalOpen || !!selectedHabit} onClose={() => { setIsModalOpen(false); setSelectedHabit(null); setIsEditing(false) }}>
                    {isEditing ? (
                        <AddHabitForm
                            initialData={selectedHabit}
                            onClose={() => { setIsEditing(false); setSelectedHabit(null); setIsModalOpen(false) }}
                            onAddHabit={handleUpdateHabit}
                        />
                    ) : selectedHabit ? (
                        <HabitDetail
                            habit={selectedHabit}
                            onClose={() => setSelectedHabit(null)}
                            onEdit={() => setIsEditing(true)}
                        />
                    ) : (
                        <AddHabitForm onClose={() => setIsModalOpen(false)} onAddHabit={handleAddHabit} />
                    )}
                </Modal>

            </main>
        </div>
    )
}

export default Dashboard
