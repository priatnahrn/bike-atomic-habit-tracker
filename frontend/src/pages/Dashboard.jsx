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
    const [userData, setUserData] = useState(null)
    const [isLoadingUser, setIsLoadingUser] = useState(true)

    // Load Habits from API
    const [habits, setHabits] = useState([])
    const [isLoadingHabits, setIsLoadingHabits] = useState(true)
    const [showAllHabits, setShowAllHabits] = useState(false)

    const fetchHabits = async () => {
        try {
            const token = localStorage.getItem("token");
            const response = await fetch("http://localhost:2000/api/habits", {
                headers: { "Authorization": `Bearer ${token}` }
            });
            if (response.ok) {
                const data = await response.json();
                setHabits(data);
            }
        } catch (error) {
            console.error("Failed to fetch habits:", error);
        } finally {
            setIsLoadingHabits(false);
        }
    };

    // Filter Logic
    const shouldShowHabit = (habit) => {
        if (showAllHabits) return true;
        if (!habit.frequency || habit.frequency === "Daily") return true;

        const today = new Date();

        if (habit.frequency === "Weekly") {
            const currentDay = today.toLocaleDateString('en-US', { weekday: 'long' });
            return habit.repeatDays?.includes(currentDay);
        }

        if (habit.frequency === "Monthly") {
            const currentDate = today.getDate().toString();
            // Check if today is the last day of the month
            const isLastDay = new Date(today.getFullYear(), today.getMonth() + 1, 0).getDate() === today.getDate();

            if (habit.repeatDays?.includes(currentDate)) return true;
            if (isLastDay && habit.repeatDays?.includes("Last")) return true;
            return false;
        }

        return true;
    }

    const visibleHabits = habits.filter(shouldShowHabit);

    // Fetch User Data and Habits
    useEffect(() => {
        const fetchUser = async () => {
            try {
                const token = localStorage.getItem("token");
                const response = await fetch("http://localhost:2000/api/user/me", {
                    headers: {
                        "Authorization": `Bearer ${token}`
                    }
                });
                if (response.ok) {
                    const data = await response.json();
                    setUserData(data);
                }
            } catch (error) {
                console.error("Failed to fetch user:", error);
            } finally {
                setIsLoadingUser(false);
            }
        };

        fetchUser();
        fetchHabits();
    }, []);

    // Save to LocalStorage removed - using API only

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

    const handleToggleHabit = async (habitId, currentStatus) => {
        // Optimistic Update
        const newStatus = !currentStatus
        setHabits(habits.map(h =>
            h.id === habitId
                ? {
                    ...h,
                    isCompleted: newStatus,
                    streak: newStatus ? h.streak + 1 : Math.max(0, h.streak - 1)
                }
                : h
        ))

        try {
            const token = localStorage.getItem("token");
            const response = await fetch(`http://localhost:2000/api/habits/${habitId}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`
                },
                body: JSON.stringify({ isCompleted: newStatus })
            });

            if (!response.ok) {
                // Revert on failure
                throw new Error("Failed to update")
            }
            // Optionally refresh to get strict server state, but optimistic is smoother
            // await fetchHabits() 
        } catch (error) {
            console.error("Toggle error", error)
            // Revert state if failed
            setHabits(habits.map(h =>
                h.id === habitId ? { ...h, isCompleted: currentStatus, streak: h.streak } : h
            ))
        }
    }

    const handleAddHabit = async (newHabitData) => {
        try {
            const token = localStorage.getItem("token");
            const response = await fetch("http://localhost:2000/api/habits", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`
                },
                body: JSON.stringify(newHabitData)
            });

            if (response.ok) {
                await fetchHabits(); // Refresh list
                setIsModalOpen(false);
            }
        } catch (error) {
            console.error("Failed to create habit:", error);
        }
    }

    const handleUpdateHabit = async (updatedHabitData) => {
        try {
            const token = localStorage.getItem("token");
            // Assuming updatedHabitData contains the full habit object from form, or merged data
            // We need the ID. The form might return just the fields.
            // selectedHabit has the ID.

            const response = await fetch(`http://localhost:2000/api/habits/${selectedHabit.id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`
                },
                body: JSON.stringify(updatedHabitData)
            });

            if (response.ok) {
                await fetchHabits();
                setIsEditing(false)
                setSelectedHabit(null)
                setIsModalOpen(false)
            }
        } catch (error) {
            console.error("Failed to update habit:", error);
        }
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
    const dailyGoal = { current: habits.filter(h => h.isCompleted).length, total: habits.length }
    const progressPercentage = dailyGoal.total > 0 ? (dailyGoal.current / dailyGoal.total) * 100 : 0

    const userName = userData?.name ? userData.name.split(' ')[0] : 'Legend';

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
                            {greeting.text} <span className={greeting.color}>{isLoadingUser ? '...' : userName}!</span>
                        </h1>
                        <p className="text-lg font-medium text-gray-600 max-w-md">
                            {habits.length > 0
                                ? <span>Ready to crush your goals today? You have <span className="font-bold text-gray-900">{habits.filter(h => !h.isCompleted).length} pending habits</span>.</span>
                                : <span>Your journey starts here. Let's build your first habit!</span>
                            }
                        </p>
                    </div>

                    {/* Decorative Elements */}
                    <GreetingIconComponent className={`absolute -bottom-10 -right-10 size-64 opacity-5 pointer-events-none ${greeting.color}`} />
                </div>

                {/* 2. Daily Goal Section (Only show if habits exist or create empty state placeholder) */}
                {habits.length > 0 ? (
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
                ) : null}

                {/* 3. Habits List or Empty State */}
                <div className="space-y-4">
                    <div className="flex justify-between items-center">
                        <div className="flex items-center gap-4">
                            <h2 className="text-xl font-bold text-gray-900">Your Habits</h2>
                            {habits.length > 0 && (
                                <button
                                    onClick={() => setShowAllHabits(!showAllHabits)}
                                    className={`text-xs font-bold px-3 py-1.5 rounded-lg transition-all border ${showAllHabits
                                        ? "bg-gray-900 text-white border-gray-900"
                                        : "bg-white text-gray-500 border-gray-200 hover:border-gray-300"
                                        }`}
                                >
                                    {showAllHabits ? "Showing All" : "Today's Schedule"}
                                </button>
                            )}
                        </div>
                        {habits.length === 0 && (
                            <button
                                onClick={() => setIsModalOpen(true)}
                                className="text-primary font-bold hover:underline"
                            >
                                + Add First Habit
                            </button>
                        )}
                    </div>

                    {habits.length === 0 ? (
                        /* Total Empty State */
                        <div className="flex flex-col items-center justify-center py-16 bg-white rounded-2xl border border-dashed border-gray-300">
                            <div className="bg-gray-50 p-6 rounded-full mb-4">
                                <Footprints size={48} className="text-gray-300" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-2">No habits yet</h3>
                            <p className="text-gray-500 text-center max-w-sm mb-6">
                                Start small. Add a habit you want to commit to, like "Drink Water" or "Read 5 pages".
                            </p>
                            <button
                                onClick={() => setIsModalOpen(true)}
                                className="btn bg-primary text-white px-6 py-3 rounded-lg font-bold hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 flex items-center gap-2"
                            >
                                <Plus size={20} />
                                Create New Habit
                            </button>
                        </div>
                    ) : visibleHabits.length === 0 ? (
                        /* Filtered Empty State */
                        <div className="flex flex-col items-center justify-center py-16 bg-white rounded-2xl border border-dashed border-gray-300">
                            <div className="bg-gray-50 p-6 rounded-full mb-4">
                                <Footprints size={48} className="text-gray-300" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-2">No habits for today</h3>
                            <p className="text-gray-500 text-center max-w-sm mb-6">
                                You're free! Or maybe you want to <button onClick={() => setShowAllHabits(true)} className="text-primary font-bold hover:underline">see all habits</button>?
                            </p>
                        </div>
                    ) : (
                        /* Habits Grid */
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                            {visibleHabits.map((habit) => (
                                <HabitCard
                                    key={habit.id}
                                    habit={{ ...habit, icon: getIcon(habit.iconName) }}
                                    onClick={() => {
                                        setSelectedHabit(habit)
                                        setIsEditing(false)
                                        setIsModalOpen(true)
                                    }}
                                    onToggle={handleToggleHabit}
                                />
                            ))}
                        </div>
                    )}
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
