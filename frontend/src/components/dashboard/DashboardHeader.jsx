import { Bike, LogOut } from "lucide-react"

const DashboardHeader = ({ onMenuClick }) => {
    // Mock data
    const userName = "Alex"
    const date = new Date()
    const currentDate = date.toLocaleDateString('en-US', { weekday: 'long', month: 'short', day: 'numeric' })
    const hour = date.getHours()

    let greeting = "Good Morning"
    if (hour >= 12 && hour < 18) greeting = "Good Afternoon"
    if (hour >= 18) greeting = "Good Evening"

    return (
        <header className="flex flex-wrap items-center justify-between gap-4 mb-8">
            {/* Left: Branding & Greeting */}
            <div className="flex flex-col gap-1">
                <div className="flex items-center gap-3 md:hidden mb-2">
                    <button onClick={onMenuClick} className="p-2 -ml-2 text-gray-500 hover:text-gray-900">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="4" x2="20" y1="12" y2="12" /><line x1="4" x2="20" y1="6" y2="6" /><line x1="4" x2="20" y1="18" y2="18" /></svg>
                    </button>
                    <div className="flex items-center gap-2">
                        <div className="size-8 rounded-lg bg-primary text-white flex items-center justify-center">
                            <Bike size={18} />
                        </div>
                        <h1 className="font-bold text-lg font-display text-gray-900">BIKE</h1>
                    </div>
                </div>

                <h1 className="text-2xl md:text-3xl font-extrabold tracking-tight text-gray-900 font-display">
                    {greeting}, {userName}!
                </h1>
                <p className="text-gray-500 text-sm md:text-base font-medium">{currentDate}</p>
            </div>

            {/* Right: Profile */}
            <div className="flex items-center gap-3 pl-4 border-l-0 md:border-l border-gray-100">
                <div className="flex flex-col text-right hidden sm:block">
                    <p className="text-sm font-bold leading-tight text-gray-900">Alex M.</p>
                    <p className="text-xs text-gray-500">Pro Member</p>
                </div>
                <div className="size-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold border-2 border-primary cursor-pointer hover:bg-primary/20 transition-colors">
                    AM
                </div>
                <button className="p-2 text-gray-400 hover:text-red-500 transition-colors rounded-full hover:bg-red-50">
                    <LogOut size={20} />
                </button>
            </div>
        </header>
    )
}

export default DashboardHeader
