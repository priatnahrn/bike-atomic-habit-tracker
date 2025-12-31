import { Link, useLocation } from "react-router-dom"
import { LayoutDashboard, BarChart2, Users, Settings, Bike, Plus } from "lucide-react"

const Sidebar = ({ isOpen, onClose, onOpenHabitModal }) => {
    const location = useLocation()

    const navItems = [
        { icon: LayoutDashboard, label: "Dashboard", path: "/dashboard" },
        { icon: BarChart2, label: "Reports", path: "/reports" },
        { icon: Users, label: "Community", path: "/community" },
        { icon: Settings, label: "Settings", path: "/settings" },
    ]

    return (
        <>
            {/* Mobile Overlay */}
            {isOpen && (
                <div
                    className="fixed inset-0 bg-black/50 z-20 md:hidden transition-opacity"
                    onClick={onClose}
                ></div>
            )}

            {/* Sidebar */}
            <aside className={`
                fixed md:static inset-y-0 left-0 z-30
                flex flex-col w-72 h-full bg-white border-r border-gray-100 p-6
                transition-transform duration-300 ease-in-out md:translate-x-0
                ${isOpen ? "translate-x-0" : "-translate-x-full"}
            `}>
                <div className="flex flex-col gap-8 h-full">
                    {/* Brand */}
                    <div className="flex items-center gap-3">
                        <div className="relative flex items-center justify-center size-10 rounded-xl bg-primary text-white shadow-lg shadow-orange-500/20 overflow-hidden group">
                            <Bike className="size-6 text-white group-hover:scale-110 transition-transform duration-300" />
                        </div>
                        <h1 className="text-xl font-extrabold tracking-tight text-gray-900 font-display">BIKE</h1>
                    </div>

                    {/* Navigation */}
                    <nav className="flex flex-col gap-2 flex-1">
                        {navItems.map((item) => {
                            const isActive = location.pathname === item.path

                            return (
                                <Link
                                    key={item.path}
                                    to={item.path}
                                    className={`
                                        flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 group
                                        ${isActive
                                            ? "bg-orange-50 text-primary font-bold"
                                            : "text-gray-500 hover:bg-gray-50 hover:text-gray-900 font-medium"
                                        }
                                    `}
                                >
                                    <item.icon
                                        size={20}
                                        className={`transition-colors ${isActive ? "text-primary" : "text-gray-400 group-hover:text-primary"}`}
                                    />
                                    <span className="text-sm">{item.label}</span>
                                </Link>
                            )
                        })}

                        {/* Create Habit Button */}
                        <button
                            onClick={onOpenHabitModal}
                            className="mt-6 flex items-center justify-center gap-2 w-full py-3.5 bg-primary text-white rounded-xl font-bold shadow-lg shadow-primary/25 hover:bg-orange-600 hover:scale-[1.02] transition-all duration-200 group"
                        >
                            <Plus size={20} className="group-hover:rotate-90 transition-transform duration-300" />
                            <span className="text-sm">Create New Habit</span>
                        </button>
                    </nav>
                </div>
            </aside>
        </>
    )
}

export default Sidebar
