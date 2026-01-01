import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import DashboardLayout from "../components/dashboard/DashboardLayout"
import HabitCard from "../components/dashboard/HabitCard"
import { Footprints, BookOpen, Diamond, Droplets, Flame, Edit, Plus, TrendingUp, Bike, Zap, Activity, Dumbbell, PenTool, Briefcase, Code, Moon, Sun, CloudSun, Coffee, Music, Heart, Apple, BedDouble, Utensils, Smile } from "lucide-react"
import Modal from "../components/Modal"
import AddHabitForm from "../components/AddHabitForm"
import HabitDetail from "../components/HabitDetail"
import Breadcrumb from "../components/Breadcrumb"

const Dashboard = () => {
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [selectedHabit, setSelectedHabit] = useState(null)
    const [isEditing, setIsEditing] = useState(false)

    // Load Habits from LocalStorage or use Mock Data
    const [habits, setHabits] = useState(() => {
        const defaultHabits = [
            {
                id: 1,
                title: "Morning Run",
                subtitle: "Identity: A Runner",
                iconName: "Zap",
                streak: 12,
                frequency: "Daily",
                target: "5 km",
                isCompleted: false,
                color: "orange"
            },
            {
                id: 2,
                title: "Read Books",
                subtitle: "Identity: A Scholar",
                iconName: "BookOpen",
                streak: 45,
                frequency: "Daily",
                target: "20 mins",
                isCompleted: true,
                color: "blue"
            },
            {
                id: 3,
                title: "Drink Water",
                subtitle: "Identity: Healthy Person",
                iconName: "Droplets",
                streak: 8,
                frequency: "Daily",
                target: "2L",
                isCompleted: false,
                color: "teal"
            },
            {
                id: 4,
                title: "Code Practice",
                subtitle: "Identity: A Developer",
                iconName: "Code",
                streak: 20,
                frequency: "Daily",
                target: "1 hour",
                isCompleted: false,
                color: "purple"
            },
            {
                id: 5,
                title: "Meditation",
                subtitle: "Identity: Calm Mind",
                iconName: "Moon",
                streak: 5,
                frequency: "Daily",
                target: "10 mins",
                isCompleted: false,
                color: "indigo"
            },
            {
                id: 6,
                title: "Journaling",
                subtitle: "Reflect on your day",
                iconName: "Edit",
                streak: 3,
                frequency: "Daily",
                target: "1 Page",
                isCompleted: false
            }
        ]

        const savedHabits = localStorage.getItem("habits")
        if (savedHabits) {
            try {
                const parsed = JSON.parse(savedHabits)
                // Ensure it's a valid array
                if (Array.isArray(parsed) && parsed.length > 0) {
                    return parsed
                }
            } catch (e) {
                console.error("Failed to parse habits", e)
            }
        }
        return defaultHabits
    })

    // Save to LocalStorage whenever habits change
    useEffect(() => {
        localStorage.setItem("habits", JSON.stringify(habits))
    }, [habits])

    // Helper to get Icon component (runtime mapping)
    const getIcon = (name) => {
        const icons = {
            Footprints, BookOpen, Diamond, Droplets, Flame, Edit, Bike, TrendingUp, Plus,
            Zap, Activity, Dumbbell, PenTool, Briefcase, Code,
            Moon, Sun, CloudSun, Coffee, Music, Heart, Apple,
            BedDouble, Utensils, Smile
        }
        return icons[name] || Footprints
    }

    const handleAddHabit = (newHabitData) => {
        const newHabit = {
            id: Date.now(),
            title: newHabitData.habitName,
            subtitle: newHabitData.identity,
            iconName: newHabitData.iconName || "Zap",
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
                    iconName: updatedHabitData.iconName,
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

    // --- Dynamic Greeting Logic ---
    const getGreeting = () => {
        const hour = new Date().getHours()
        if (hour < 12) return { text: "Good Morning,", icon: CloudSun, color: "text-orange-500", bg: "bg-orange-50" }
        if (hour < 18) return { text: "Good Afternoon,", icon: Sun, color: "text-blue-500", bg: "bg-blue-50" }
        return { text: "Good Evening,", icon: Moon, color: "text-indigo-500", bg: "bg-indigo-50" }
    }
    const greeting = getGreeting()
    // Explicitly rename the component variable to avoid conflict
    const GreetingIconComponent = greeting.icon

    // Mock Daily Goal Data
    const dailyGoal = { current: 3, total: 6 } // Adjusted total based on habits count
    const progressPercentage = (dailyGoal.current / dailyGoal.total) * 100

    return (
        <DashboardLayout onOpenHabitModal={() => setIsModalOpen(true)}>
            <div className="flex flex-col gap-8">
                {/* Breadcrumb */}
                <div className="px-1">
                    <Breadcrumb items={[{ label: 'Home', href: '/' }, { label: 'Dashboard' }]} />
                </div>

                {/* Greeting Section */}
                <div className={`relative p-8 rounded-2xl ${greeting.bg} overflow-hidden transition-colors duration-500`}>
                    <div className="relative z-10">
                        <div className="flex items-center gap-3 mb-2">
                            <span className={`text-sm font-bold tracking-wider uppercase ${greeting.color} opacity-80`}>
                                {new Date().toLocaleDateString('en-US', { weekday: 'long', day: 'numeric', month: 'long' })}
                            </span>
                        </div>
                        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight mb-2">
                            {greeting.text} <span className={greeting.color}>Alex!</span>
                        </h1>
                        <p className="text-lg font-medium text-gray-600 max-w-md">
                            Ready to crush your goals today? You have <span className="font-bold text-gray-900">{habits.filter(h => !h.isCompleted).length} pending habits</span>.
                        </p>
                    </div>

                    {/* Decorative Elements */}
                    <GreetingIconComponent className={`absolute -bottom-10 -right-10 size-64 opacity-5 pointer-events-none ${greeting.color}`} />
                </div>

                {/* 2. Daily Goal Section */}
                <div className="bg-white p-6 rounded-2xl border border-gray-100">
                    <div className="flex justify-between items-center mb-4">
                        <div className="flex items-center gap-3">
                            <div className="p-2 bg-orange-100 rounded-lg text-primary">
                                <TrendingUp size={20} />
                            </div>
                            <span className="text-lg font-bold text-gray-900">Daily Goal</span>
                        </div>
                        <span className="text-sm font-bold px-3 py-1.5 rounded-lg bg-orange-50 text-primary border border-orange-100">
                            {dailyGoal.current}/{dailyGoal.total} Done
                        </span>
                    </div>

                    <div className="relative pt-2">
                        <div className="h-5 w-full bg-gray-100 rounded-full overflow-hidden">
                            <div
                                className="h-full bg-primary rounded-full transition-all duration-1000 ease-out relative"
                                style={{ width: `${progressPercentage}%` }}
                            ></div>
                        </div>
                    </div>

                    <p className="mt-4 text-sm text-gray-500 font-medium">
                        "It does not matter how slowly you go as long as you do not stop."
                    </p>
                </div>

                {/* 3. Habits List */}
                <div className="space-y-4">
                    <h2 className="text-xl font-bold text-gray-900">Your Habits</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                        {habits.map((habit) => (
                            <HabitCard
                                key={habit.id}
                                habit={{ ...habit, icon: getIcon(habit.iconName || "Footprints") }}
                                onClick={() => setSelectedHabit({ ...habit, icon: getIcon(habit.iconName || "Footprints") })}
                            />
                        ))}
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
            </div>
        </DashboardLayout>
    )
}

export default Dashboard
