import { useState, useRef, useEffect } from "react"
import { Bike, LogOut, User, Settings as SettingsIcon, CreditCard, ChevronDown, Bell, Menu } from "lucide-react"
import { Link, useNavigate } from "react-router-dom"

const Header = ({ onMenuClick, title, isSidebarCollapsed }) => {
    const [isProfileOpen, setIsProfileOpen] = useState(false)
    const dropdownRef = useRef(null)
    const navigate = useNavigate()

    const handleLogout = () => {
        localStorage.removeItem("token")
        localStorage.removeItem("user")
        navigate("/login")
    }

    // Mock data
    const [user, setUser] = useState({ name: "User", email: "user@example.com" })

    useEffect(() => {
        const loadUser = () => {
            const storedUser = localStorage.getItem("user")
            if (storedUser) {
                try {
                    setUser(JSON.parse(storedUser))
                } catch (e) {
                    console.error("Failed to parse user data", e)
                }
            }
        }

        loadUser()

        // Listen for updates from other components
        window.addEventListener("user-updated", loadUser)
        return () => window.removeEventListener("user-updated", loadUser)
    }, [])

    const userName = user.name || "User"
    const userEmail = user.email || "user@example.com"
    const userInitials = userName.split(" ").map(n => n[0]).join("").substring(0, 2).toUpperCase()
    const userPlan = "Free" // "Free", "Pro", "Premium"

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsProfileOpen(false)
            }
        }
        document.addEventListener("mousedown", handleClickOutside)
        return () => document.removeEventListener("mousedown", handleClickOutside)
    }, [])

    return (
        <header className="sticky top-0 z-30 w-full bg-white border-b border-gray-100 px-4 md:px-8 py-3 transition-all duration-300">
            <div className="max-w-7xl mx-auto flex items-center justify-between">

                {/* Left: Branding & Title */}
                <div className="flex items-center gap-4">
                    {/* Mobile Menu Toggle */}
                    <button
                        onClick={onMenuClick}
                        className="md:hidden p-2 -ml-2 text-gray-500 hover:text-gray-900 rounded-lg hover:bg-gray-100 transition-colors"
                    >
                        <Menu size={24} />
                    </button>

                    {/* Logo (Visible only on mobile or specific states) */}
                    {!isSidebarCollapsed && (
                        <Link to="/dashboard" className="md:hidden flex items-center gap-2 group">
                            <Bike className="w-8 h-8 text-orange-500 flex-none transition-transform duration-300 group-hover:scale-110" />
                            <h1 className="text-2xl font-extrabold bg-gradient-to-r from-primary to-red-500 bg-clip-text text-transparent">
                                BIKE
                            </h1>
                        </Link>
                    )}

                    {/* Page Title */}
                    <div className="hidden md:flex flex-col">
                        <h1 className="text-xl md:text-2xl font-extrabold tracking-tight text-gray-900 font-display leading-tight">
                            {title}
                        </h1>
                    </div>
                </div>

                {/* Right: Actions & Profile */}
                <div className="flex items-center gap-3 md:gap-6">

                    {/* Action Icons */}
                    <div className="flex items-center gap-2">
                        {/* 
                        <button className="flex size-10 items-center justify-center rounded-xl bg-gray-50 text-gray-500 hover:bg-primary/10 hover:text-primary transition-all duration-200">
                            <Bell size={20} />
                        </button>
                        */}
                    </div>

                    {/* Profile Dropdown */}
                    <div className="relative" ref={dropdownRef}>
                        <button
                            onClick={() => setIsProfileOpen(!isProfileOpen)}
                            className="flex items-center gap-3 p-1  bg-white  hover:border-primary/20 transition-all duration-200 group pl-1 pr-1 md:pr-4 md:pl-1.5"
                        >
                            <div className="size-9 rounded-full bg-gradient-to-br from-primary to-orange-400 text-white flex items-center justify-center font-bold text-sm shadow-md shadow-orange-200 overflow-hidden">
                                {user.profilePhoto ? (
                                    <img src={user.profilePhoto} alt="Profile" className="w-full h-full object-cover" />
                                ) : (
                                    userInitials
                                )}
                            </div>

                            <div className="hidden md:flex flex-col text-left">
                                <span className="text-sm font-bold text-gray-900 leading-none">{userName}</span>
                            </div>

                            <ChevronDown size={16} className={`hidden md:block text-gray-400 transition-transform duration-200 ${isProfileOpen ? "rotate-180" : "group-hover:text-primary"}`} />
                        </button>

                        {/* Dropdown Menu */}
                        {isProfileOpen && (
                            <div className="absolute right-0 top-full mt-3 w-72 bg-white rounded-2xl shadow-xl shadow-gray-200/50 border border-gray-100 p-2 z-50 animate-in fade-in slide-in-from-top-2 duration-200 origin-top-right">
                                {/* User Header */}
                                <div className="p-4 mb-2 flex items-center gap-4 border-b border-gray-50 pb-4 bg-gray-50/50 rounded-xl mx-1 mt-1">
                                    <div className="size-12 rounded-full bg-white flex items-center justify-center text-primary font-bold text-lg shadow-sm overflow-hidden border border-gray-100">
                                        {user.profilePhoto ? (
                                            <img src={user.profilePhoto} alt="Profile" className="w-full h-full object-cover" />
                                        ) : (
                                            userInitials
                                        )}
                                    </div>
                                    <div className="flex-1 overflow-hidden">
                                        <h4 className="font-bold text-gray-900 truncate text-lg">{userName}</h4>
                                        <p className="text-sm text-gray-500 truncate font-medium">{userEmail}</p>
                                    </div>
                                </div>

                                {/* Plan Status Banner - HIDDEN */}
                                {/* 
                                <div className="px-3 mb-2">
                                    <div className={`p-3 rounded-xl flex items-center justify-between ${userPlan === 'Pro' ? 'bg-primary/5 border border-primary/20' : 'bg-gray-50'}`}>
                                        <div className="flex flex-col">
                                            <span className="text-xs font-bold text-gray-500 uppercase tracking-wider">Current Plan</span>
                                            <span className={`font-extrabold ${userPlan === 'Pro' ? 'text-primary' : 'text-gray-900'}`}>{userPlan} Membership</span>
                                        </div>
                                        <Link to="/billing" className="px-3 py-1.5 bg-white text-xs font-bold text-gray-900 rounded-lg shadow-sm border border-gray-100 hover:bg-gray-50 transition-colors">
                                            Manage
                                        </Link>
                                    </div>
                                </div>
                                */}

                                {/* Links */}
                                <div className="flex flex-col gap-1 px-1">
                                    <Link to="/profile" className="flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-gray-50 text-gray-600 hover:text-gray-900 hover:font-bold transition-all text-sm group">
                                        <div className="p-1.5 rounded-lg bg-gray-50 text-gray-400 group-hover:text-primary group-hover:bg-white transition-colors">
                                            <User size={18} />
                                        </div>
                                        My Profile
                                    </Link>
                                    <Link to="/settings" className="flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-gray-50 text-gray-600 hover:text-gray-900 hover:font-bold transition-all text-sm group">
                                        <div className="p-1.5 rounded-lg bg-gray-50 text-gray-400 group-hover:text-primary group-hover:bg-white transition-colors">
                                            <SettingsIcon size={18} />
                                        </div>
                                        Settings
                                    </Link>
                                    {/* 
                                    <Link to="/billing" className="flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-gray-50 text-gray-600 hover:text-gray-900 hover:font-bold transition-all text-sm group">
                                        <div className="p-1.5 rounded-lg bg-gray-50 text-gray-400 group-hover:text-primary group-hover:bg-white transition-colors">
                                            <CreditCard size={18} />
                                        </div>
                                        Billing & Subscription
                                    </Link>
                                    */}

                                    <div className="h-px bg-gray-100 my-1 mx-2"></div>

                                    <button
                                        onClick={handleLogout}
                                        className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-red-50 text-gray-500 hover:text-red-500 hover:font-bold transition-all text-sm group text-left"
                                    >
                                        <div className="p-1.5 rounded-lg bg-gray-50 text-gray-400 group-hover:text-red-500 group-hover:bg-white transition-colors">
                                            <LogOut size={18} />
                                        </div>
                                        Sign Out
                                    </button>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header
