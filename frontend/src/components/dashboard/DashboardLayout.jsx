import { useState, useEffect } from "react"
import Sidebar from "./Sidebar"
import Header from "./Header"

const DashboardLayout = ({ children, onOpenHabitModal, title }) => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
    const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false)

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

    return (
        <div className="flex h-screen w-full bg-gray-50 overflow-hidden font-manrope">
            {/* Sidebar */}
            <Sidebar
                isOpen={isMobileMenuOpen}
                onClose={() => setIsMobileMenuOpen(false)}
                isCollapsed={isSidebarCollapsed}
                toggleCollapse={toggleSidebar}
                onOpenHabitModal={onOpenHabitModal}
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
        </div>
    )
}

export default DashboardLayout
