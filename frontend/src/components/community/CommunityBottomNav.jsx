import { Home, Search, Users, User, Bell } from "lucide-react"

const CommunityBottomNav = ({ activeTab, onTabChange }) => {
    const navItems = [
        { id: 'feed', icon: Home, label: 'Home' },
        { id: 'explore', icon: Search, label: 'Explore' },
        { id: 'tribes', icon: Users, label: 'Tribes' },
        { id: 'profile', icon: User, label: 'Profile' },
    ]

    return (
        <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-100 px-6 py-2 lg:hidden z-50 safe-area-bottom">
            <div className="flex items-center justify-between max-w-md mx-auto">
                {navItems.map((item) => {
                    const isActive = activeTab === item.id
                    return (
                        <button
                            key={item.id}
                            onClick={() => onTabChange(item.id)}
                            className={`flex flex-col items-center gap-1 p-2 rounded-xl transition-all duration-200 relative ${isActive ? "text-primary" : "text-gray-400 hover:text-gray-600"
                                }`}
                        >
                            <item.icon
                                size={24}
                                className={isActive ? "fill-current" : ""}
                                strokeWidth={isActive ? 2.5 : 2}
                            />
                            {isActive && (
                                <span className="absolute -bottom-1 size-1 bg-primary rounded-full"></span>
                            )}
                        </button>
                    )
                })}
            </div>
        </div>
    )
}

export default CommunityBottomNav
