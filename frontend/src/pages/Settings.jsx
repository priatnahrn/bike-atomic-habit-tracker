import { useState, useEffect, useRef } from "react"
import DashboardLayout from "../components/dashboard/DashboardLayout" // Assuming relative path
import { User, Bell, CreditCard, Shield, Sliders } from "lucide-react"

const Settings = () => {
    const [activeTab, setActiveTab] = useState("general")
    // Initialize with whatever is in localStorage to avoid flash, but fallback to defaults
    const [user, setUser] = useState(() => {
        const saved = localStorage.getItem("user")
        return saved ? JSON.parse(saved) : { name: "", email: "" }
    })
    const [loading, setLoading] = useState(true)
    const fileInputRef = useRef(null)

    // Fetch latest user data from backend
    useEffect(() => {
        const fetchUser = async () => {
            try {
                const token = localStorage.getItem("token")
                if (!token) return

                const response = await fetch(`${import.meta.env.VITE_API_URL}/api/user/me`, {
                    headers: { "Authorization": `Bearer ${token}` }
                })

                if (response.ok) {
                    const data = await response.json()
                    setUser(prev => ({ ...prev, ...data }))
                    // Update localStorage to keep it fresh
                    localStorage.setItem("user", JSON.stringify(data))
                }
            } catch (error) {
                console.error("Failed to fetch user:", error)
            } finally {
                setLoading(false)
            }
        }

        fetchUser()
    }, [])

    const handlePhotoChange = async (e) => {
        const file = e.target.files[0]
        if (!file) return

        const formData = new FormData()
        formData.append('profilePhoto', file)

        try {
            const token = localStorage.getItem("token")
            const response = await fetch(`${import.meta.env.VITE_API_URL}/api/user/profile-photo`, {
                method: "PUT",
                headers: {
                    "Authorization": `Bearer ${token}`
                },
                body: formData
            })

            if (response.ok) {
                const data = await response.json()
                setUser(prev => ({ ...prev, ...data.user }))
                const updatedUser = { ...user, ...data.user }
                localStorage.setItem("user", JSON.stringify(updatedUser))
                window.dispatchEvent(new Event("user-updated"))
            } else {
                console.error("Failed to upload photo")
            }
        } catch (error) {
            console.error("Error uploading photo:", error)
        }
    }

    const userInitials = user.name ? user.name.split(" ").map(n => n[0]).join("").substring(0, 2).toUpperCase() : "U"

    const tabs = [
        { id: "general", label: "General", icon: User },
        // { id: "notifications", label: "Notifications", icon: Bell },
        // { id: "billing", label: "Billing & Plans", icon: CreditCard },
        // { id: "security", label: "Security", icon: Shield },
    ]

    return (
        <DashboardLayout title="Settings">
            <div className="flex flex-col gap-6">

                {/* Tabs */}
                <div className="flex overflow-x-auto pb-2 border-b border-gray-200 gap-6">
                    {tabs.map((tab) => (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            className={`flex items-center gap-2 pb-3 text-sm font-bold transition-all relative ${activeTab === tab.id
                                ? "text-primary"
                                : "text-gray-500 hover:text-gray-900"
                                }`}
                        >
                            <tab.icon size={18} />
                            {tab.label}
                            {activeTab === tab.id && (
                                <span className="absolute bottom-[-1px] left-0 w-full h-[3px] bg-primary rounded-t-full"></span>
                            )}
                        </button>
                    ))}
                </div>

                {/* Content Area */}
                <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-gray-100 min-h-[400px]">
                    {activeTab === "general" && (
                        <div className="max-w-2xl flex flex-col gap-8">
                            {/* Profile Section */}
                            <div className="flex flex-col gap-4">
                                <h3 className="text-lg font-bold text-gray-900">Profile Information</h3>
                                <div className="flex items-center gap-6">
                                    <div className="size-20 rounded-full bg-gradient-to-br from-primary to-orange-400 text-white flex items-center justify-center text-2xl font-bold shadow-lg shadow-orange-200 overflow-hidden relative">
                                        {user.profilePhoto ? (
                                            <img src={user.profilePhoto} alt="Profile" className="w-full h-full object-cover" />
                                        ) : (
                                            userInitials
                                        )}

                                        {/* Hidden File Input */}
                                        <input
                                            type="file"
                                            ref={fileInputRef}
                                            onChange={handlePhotoChange}
                                            className="hidden"
                                            accept="image/*"
                                        />
                                    </div>
                                    <div className="flex gap-3">
                                        <button
                                            onClick={() => fileInputRef.current?.click()}
                                            className="px-4 py-2 bg-gray-50 text-gray-700 font-bold text-sm rounded-xl hover:bg-gray-100 transition-colors"
                                        >
                                            Change Photo
                                        </button>
                                        <button className="px-4 py-2 text-red-500 font-bold text-sm rounded-xl hover:bg-red-50 transition-colors">
                                            Remove
                                        </button>
                                    </div>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div className="col-span-1 md:col-span-2 flex flex-col gap-2">
                                        <label className="text-xs font-bold text-gray-500 uppercase">Full Name</label>
                                        <input
                                            type="text"
                                            value={user.name || ""}
                                            onChange={(e) => setUser({ ...user, name: e.target.value })}
                                            className="p-3 bg-gray-50 border-none rounded-xl font-bold text-gray-900 focus:ring-2 focus:ring-primary/50 outline-none"
                                        />
                                    </div>
                                    <div className="col-span-1 md:col-span-2 flex flex-col gap-2">
                                        <label className="text-xs font-bold text-gray-500 uppercase">Email Address</label>
                                        <input
                                            type="email"
                                            value={user.email || ""}
                                            className="p-3 bg-gray-50 border-none rounded-xl font-bold text-gray-900 focus:ring-2 focus:ring-primary/50 outline-none opacity-60 cursor-not-allowed"
                                            disabled
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                    {activeTab === "billing" && (
                        <div className="max-w-2xl flex flex-col gap-8">
                            <div className="flex items-center justify-between p-6 bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl shadow-xl text-white relative overflow-hidden">
                                <div className="relative z-10">
                                    <p className="text-gray-400 text-sm font-bold uppercase mb-1">Current Plan</p>
                                    <h2 className="text-3xl font-extrabold mb-2">Pro Plan</h2>
                                    <p className="text-gray-400 text-sm">Valid until <span className="text-white font-bold">Oct 24, 2024</span></p>
                                </div>
                                <button className="relative z-10 px-5 py-2.5 bg-primary text-white font-bold rounded-xl shadow-lg shadow-orange-500/20 hover:bg-orange-500 transition-all">
                                    Manage Subscription
                                </button>

                                <div className="absolute right-[-50px] top-[-50px] size-64 bg-primary/20 rounded-full blur-3xl"></div>
                            </div>

                            <div className="flex flex-col gap-4">
                                <h3 className="text-lg font-bold text-gray-900">Payment Method</h3>
                                <div className="flex items-center justify-between p-4 border border-gray-100 rounded-xl bg-gray-50/50">
                                    <div className="flex items-center gap-4">
                                        <div className="size-10 bg-white rounded-lg flex items-center justify-center border border-gray-100">
                                            <CreditCard size={20} className="text-gray-700" />
                                        </div>
                                        <div>
                                            <p className="font-bold text-gray-900">Visa ending in 4242</p>
                                            <p className="text-xs text-gray-500">Expires 12/25</p>
                                        </div>
                                    </div>
                                    <button className="text-sm font-bold text-primary hover:text-orange-600">Edit</button>
                                </div>
                            </div>
                        </div>
                    )}

                    {(activeTab === "notifications" || activeTab === "security") && (
                        <div className="flex flex-col items-center justify-center h-64 text-center">
                            <Sliders size={48} className="text-gray-200 mb-4" />
                            <h3 className="text-lg font-bold text-gray-900 mb-2">Coming Soon</h3>
                            <p className="text-gray-500 max-w-xs">We are working hard to bring you these settings. Stay tuned!</p>
                        </div>
                    )}
                </div>
            </div>
        </DashboardLayout>
    )
}

export default Settings
