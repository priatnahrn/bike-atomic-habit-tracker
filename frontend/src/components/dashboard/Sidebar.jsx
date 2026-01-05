import { Link, useLocation } from "react-router-dom"
import { LayoutDashboard, BarChart2, Users, Settings, Bike, Plus, ChevronLeft, ChevronRight, Sparkles } from "lucide-react"

const Sidebar = ({ isOpen, onClose, isCollapsed, toggleCollapse, onOpenHabitModal }) => {
    const location = useLocation()

    const navItems = [
        { icon: LayoutDashboard, label: "Dashboard", path: "/dashboard" },
        { icon: BarChart2, label: "Reports", path: "/reports" },
        // { icon: Users, label: "Community", path: "/community" }, // Hidden for now
        { icon: Settings, label: "Settings", path: "/settings" },
    ]

    return (
        <>
            {/* Mobile Overlay */}
            {isOpen && (
                <div
                    className="fixed inset-0 bg-black/50 z-40 md:hidden transition-opacity"
                    onClick={onClose}
                ></div>
            )}

            {/* Sidebar */}
            <aside className={`
                fixed md:static inset-y-0 left-0 z-50
                flex flex-col h-full bg-white border-r border-gray-100 
                transition-all duration-300 ease-in-out
                ${isOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"}
                ${isCollapsed ? "w-20" : "w-72"}
            `}>
                <div className="flex flex-col h-full py-6">
                    {/* Brand */}
                    <Link to="/dashboard" className={`flex items-center gap-2 px-6 mb-8 transition-all duration-300 group ${isCollapsed ? "justify-center" : ""}`}>
                        <Bike className="w-8 h-8 text-orange-500 flex-none transition-transform duration-300 group-hover:scale-110" />
                        <h1 className={`text-2xl font-extrabold bg-gradient-to-r from-primary to-red-500 bg-clip-text text-transparent transition-all duration-300 whitespace-nowrap ${isCollapsed ? "opacity-0 w-0 hidden" : "opacity-100"}`}>
                            BIKE
                        </h1>
                    </Link>

                    {/* Navigation */}
                    <nav className="flex flex-col gap-2 flex-1 px-3">
                        {navItems.map((item) => {
                            const isActive = location.pathname === item.path

                            return (
                                <Link
                                    key={item.path}
                                    to={item.path}
                                    title={isCollapsed ? item.label : ""}
                                    className={`
                                        flex items-center gap-3 px-3 py-3 rounded-xl transition-all duration-200 group
                                        ${isActive
                                            ? "bg-orange-50 text-primary font-bold"
                                            : "text-gray-500 hover:bg-gray-50 hover:text-gray-900 font-medium"
                                        }
                                        ${isCollapsed ? "justify-center" : ""}
                                    `}
                                >
                                    <item.icon
                                        size={22}
                                        className={`flex-none transition-colors ${isActive ? "text-primary" : "text-gray-400 group-hover:text-primary"}`}
                                    />
                                    <span className={`text-sm whitespace-nowrap transition-all duration-300 ${isCollapsed ? "opacity-0 w-0 hidden" : "opacity-100"}`}>
                                        {item.label}
                                    </span>
                                </Link>
                            )
                        })}

                        {/* Create Habit Button */}
                        <div className="mt-6 px-1">
                            <button
                                onClick={onOpenHabitModal}
                                title="Create New Habit"
                                className={`
                                    flex items-center justify-center gap-2 w-full bg-primary text-white rounded-xl font-bold hover:bg-orange-600 hover:scale-[1.02] transition-all duration-200 group
                                    ${isCollapsed ? "aspect-square py-0" : "py-3.5"}
                                `}
                            >
                                <Plus size={20} className={`transition-transform duration-300 ${isCollapsed ? "" : "group-hover:rotate-90"}`} />
                                <span className={`text-sm whitespace-nowrap transition-all duration-300 ${isCollapsed ? "opacity-0 w-0 hidden" : "opacity-100"}`}>
                                    Create New Habit
                                </span>
                            </button>
                        </div>
                    </nav>

                    {/* Footer / Premium & Toggle */}
                    <div className="mt-auto px-3 flex flex-col gap-4">

                        {/* Feedback Link */}
                        <Link
                            to="/feedback"
                            title={isCollapsed ? "Feedback" : ""}
                            className={`flex items-center gap-3 px-3 py-3 rounded-xl transition-all duration-200 group text-gray-500 hover:bg-gray-50 hover:text-gray-900 font-medium ${isCollapsed ? "justify-center" : ""}`}
                        >
                            <div className="text-gray-400 group-hover:text-primary transition-colors">
                                <Sparkles size={22} className="hidden" /> {/* Placeholder to match alignment if needed, or just use Message icon */}
                                <Users size={22} className="hidden" />
                                <span className="block">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-message-square"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" /></svg>
                                </span>
                            </div>
                            <span className={`text-sm whitespace-nowrap transition-all duration-300 ${isCollapsed ? "opacity-0 w-0 hidden" : "opacity-100"}`}>
                                Give Feedback
                            </span>
                        </Link>

                        {/* Premium Card - HIDDEN */}
                        {/* 
                        <div className={`
                            relative overflow-hidden transition-all duration-300 group cursor-pointer
                            ${isCollapsed
                                ? "bg-primary/5 text-primary w-full aspect-square rounded-xl flex items-center justify-center hover:bg-primary hover:text-white"
                                : "bg-gradient-to-br from-orange-50 to-white border border-orange-100/50 rounded-2xl p-5"
                            }
                        `}>
                            {isCollapsed ? (
                                <Sparkles size={24} className="fill-current" />
                            ) : (
                                <>
                                    <div className="flex items-center gap-3 mb-3">
                                        <div className="p-2 bg-white rounded-lg text-orange-500 border border-orange-100">
                                            <Sparkles size={20} className="fill-current" />
                                        </div>
                                        <div>
                                            <h3 className="text-gray-900 font-bold text-sm leading-tight">Go Premium</h3>
                                            <p className="text-gray-500 text-xs font-medium">Unlock all features</p>
                                        </div>
                                    </div>
                                    <button className="w-full py-2.5 bg-primary hover:bg-orange-600 text-white text-xs font-bold rounded-xl transition-colors">
                                        Upgrade Now
                                    </button>
                                </>
                            )}
                        </div>
                         */}
                    </div>
                </div>
            </aside>
        </>
    )
}

export default Sidebar
