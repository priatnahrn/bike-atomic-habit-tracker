import { useState, useEffect } from "react"
import Modal from "../Modal"
import AddHabitForm from "../AddHabitForm"
import Sidebar from "./Sidebar"
import Header from "./Header"

const DashboardLayout = ({ children, onOpenHabitModal, title }) => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
    const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false)

    const [isAddHabitOpen, setIsAddHabitOpen] = useState(false)

    // Check for saved preference on mount
    useEffect(() => {
        const savedState = localStorage.getItem("sidebarCollapsed")
        if (savedState) {
            setIsSidebarCollapsed(JSON.parse(savedState))
        }
    }, [])

    const toggleSidebar = () => {
        const newState = !isSidebarCollapsed
        setIsSidebarCollapsed(newState)
        localStorage.setItem("sidebarCollapsed", JSON.stringify(newState))
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
                // If onOpenHabitModal was passed (like in Dashboard), it might handle refresh.
                // But here we are handling the creation. 
                // We might need to dispatch an event or refresh page if simple.
                // For now, let's close modal and maybe notify user.
                setIsAddHabitOpen(false);
                window.location.reload(); // Simple refresh to ensure data is seen everywhere
            }
        } catch (error) {
            console.error("Failed to create habit:", error);
        }
    }

    // Use passed handler if available (Dashboard), otherwise use internal state
    const handleOpenModal = onOpenHabitModal || (() => setIsAddHabitOpen(true))

    return (
        <div className="flex h-screen w-full bg-gray-50 overflow-hidden font-manrope">
            {/* Sidebar */}
            <Sidebar
                isOpen={isMobileMenuOpen}
                onClose={() => setIsMobileMenuOpen(false)}
                isCollapsed={isSidebarCollapsed}
                toggleCollapse={toggleSidebar}
                onOpenHabitModal={handleOpenModal}
            />

            {/* Main Content */}
            <main className="flex-1 flex flex-col h-full overflow-y-auto relative scroll-smooth transition-all duration-300">
                <Header
                    onMenuClick={() => setIsMobileMenuOpen(true)}
                    title={title}
                    isSidebarCollapsed={isSidebarCollapsed}
                />

                <div className="p-4 md:p-8 lg:p-10 pb-24 max-w-7xl mx-auto w-full">
                    {children}
                </div>
            </main>

            {/* Global Add Habit Modal (Only if not provided by parent, or handled internally) */}
            {/* If onOpenHabitModal is passed, parent handles the modal. If NOT passed, we use local state. */}
            {!onOpenHabitModal && (
                <Modal
                    isOpen={isAddHabitOpen}
                    onClose={() => setIsAddHabitOpen(false)}
                    title="Create New Habit"
                >
                    <AddHabitForm onClose={() => setIsAddHabitOpen(false)} onAddHabit={handleAddHabit} />
                </Modal>
            )}
        </div>
    )
}

export default DashboardLayout
