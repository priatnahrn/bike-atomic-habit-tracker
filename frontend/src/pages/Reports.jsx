import { useState } from "react"
import DashboardLayout from "../components/dashboard/DashboardLayout"
import {
    ChevronDown, ChevronLeft, ChevronRight, Check,
    Flame, Calendar as CalendarIcon, Percent, Share2,
    BarChart3, Trophy, TrendingUp, Footprints, BookOpen, Droplets, Moon
} from "lucide-react"

const Reports = () => {
    const [view, setView] = useState('overview') // 'overview', 'trends', 'calendar'

    // --- Mock Data for Overview ---
    const overviewStats = [
        { label: "Total Habits", value: "4", icon: BarChart3, color: "text-blue-600", bg: "bg-blue-100" },
        { label: "Avg. Completion", value: "87%", icon: Percent, color: "text-green-600", bg: "bg-green-100" },
        { label: "Best Streak", value: "12 Days", icon: Flame, color: "text-orange-600", bg: "bg-orange-100" },
        { label: "Perfect Days", value: "8", icon: Trophy, color: "text-yellow-600", bg: "bg-yellow-100" },
    ]

    const habitPerformance = [
        { id: 1, title: "Morning Run", streak: 12, completion: 92, icon: Footprints, color: "bg-orange-500", text: "text-orange-600", bgIcon: "bg-orange-100", target: "5 km" },
        { id: 2, title: "Read 30 mins", streak: 5, completion: 78, icon: BookOpen, color: "bg-blue-500", text: "text-blue-600", bgIcon: "bg-blue-100", target: "30 mins" },
        { id: 3, title: "Drink Water", streak: 21, completion: 95, icon: Droplets, color: "bg-cyan-500", text: "text-cyan-600", bgIcon: "bg-cyan-100", target: "3 Liters" },
        { id: 4, title: "Early Sleep", streak: 3, completion: 60, icon: Moon, color: "bg-purple-500", text: "text-purple-600", bgIcon: "bg-purple-100", target: "By 10 PM" },
    ]

    // --- Mock Data for Calendar ---
    const daysInMonth = 30
    const startDayOffset = 3 // Wednesday
    const days = []

    // Padding days
    for (let i = 0; i < startDayOffset; i++) {
        days.push({ id: `pad-${i}`, type: 'padding' })
    }

    // Actual days
    for (let i = 1; i <= daysInMonth; i++) {
        // Pattern: 2,3,4 | 7,8,9,10,11 | 15,16,17 | 21,22,23,24,25 | 28,29
        const completedDays = [2, 3, 4, 7, 8, 9, 10, 11, 15, 16, 17, 21, 22, 23, 24, 25, 28, 29]
        const isCompleted = completedDays.includes(i)

        days.push({
            id: `day-${i}`,
            day: i,
            type: 'day',
            isCompleted,
            isToday: i === 30
        })
    }

    return (
        <DashboardLayout>
            <div className="flex flex-col gap-6">
                {/* Page Header */}
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-gray-200 pb-0">
                    <div className="flex flex-col gap-4">
                        <div className="flex flex-wrap items-center gap-2">
                            <a href="#" className="text-gray-500 text-sm font-medium hover:underline">Reports</a>
                            <span className="text-gray-400 text-sm font-medium">/</span>
                            <span className="text-gray-900 text-sm font-bold capitalize">{view} View</span>
                        </div>
                        <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight">Your Progress</h1>
                    </div>

                    {/* Tabs */}
                    <div className="flex gap-8 px-2 overflow-x-auto no-scrollbar">
                        <button
                            onClick={() => setView('overview')}
                            className={`group flex flex-col items-center justify-center border-b-[3px] pb-3 pt-2 min-w-[80px] transition-colors ${view === 'overview' ? 'border-primary' : 'border-transparent'}`}
                        >
                            <span className={`text-sm font-bold ${view === 'overview' ? 'text-primary' : 'text-gray-400 group-hover:text-primary'}`}>Overview</span>
                        </button>
                        <button
                            onClick={() => setView('trends')}
                            className={`group flex flex-col items-center justify-center border-b-[3px] pb-3 pt-2 min-w-[80px] transition-colors ${view === 'trends' ? 'border-primary' : 'border-transparent'}`}
                        >
                            <span className={`text-sm font-bold ${view === 'trends' ? 'text-primary' : 'text-gray-400 group-hover:text-primary'}`}>Trends</span>
                        </button>
                        <button
                            onClick={() => setView('calendar')}
                            className={`group flex flex-col items-center justify-center border-b-[3px] pb-3 pt-2 min-w-[80px] transition-colors ${view === 'calendar' ? 'border-primary' : 'border-transparent'}`}
                        >
                            <span className={`text-sm font-bold ${view === 'calendar' ? 'text-primary' : 'text-gray-400 group-hover:text-primary'}`}>Calendar</span>
                        </button>
                    </div>
                </div>

                {/* --- Content Views --- */}

                {/* 1. OVERVIEW VIEW */}
                {view === 'overview' && (
                    <div className="space-y-8 mt-4 animate-in fade-in duration-300">
                        {/* Stats Grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                            {overviewStats.map((stat, index) => (
                                <div key={index} className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex items-center gap-4 hover:-translate-y-1 transition-transform">
                                    <div className={`p-3 rounded-xl ${stat.bg} ${stat.color}`}>
                                        <stat.icon size={24} />
                                    </div>
                                    <div>
                                        <p className="text-sm font-medium text-gray-500">{stat.label}</p>
                                        <h3 className="text-2xl font-extrabold text-gray-900">{stat.value}</h3>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Habit Performance List */}
                        <div className="bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden">
                            <div className="p-8 pb-4 border-b border-gray-100 flex justify-between items-center">
                                <h2 className="text-xl font-bold text-gray-900">Habit Performance</h2>
                                <button className="text-sm font-bold text-primary hover:text-orange-600 transition-colors">View All</button>
                            </div>
                            <div className="divide-y divide-gray-50">
                                {habitPerformance.map((habit) => (
                                    <div key={habit.id} className="p-6 md:px-8 hover:bg-gray-50 transition-colors flex flex-col md:flex-row md:items-center gap-6">
                                        <div className="flex items-center gap-4 min-w-[200px]">
                                            <div className={`size-12 rounded-2xl ${habit.bgIcon} ${habit.text} flex items-center justify-center`}>
                                                <habit.icon size={24} />
                                            </div>
                                            <div>
                                                <h3 className="font-bold text-gray-900">{habit.title}</h3>
                                                <p className="text-xs font-bold text-gray-400 uppercase tracking-wider">{habit.target}</p>
                                            </div>
                                        </div>

                                        <div className="flex-1 flex flex-col justify-center gap-2">
                                            <div className="flex justify-between text-sm font-medium">
                                                <span className="text-gray-500">Monthly Goal</span>
                                                <span className="text-gray-900 font-bold">{habit.completion}%</span>
                                            </div>
                                            <div className="h-3 w-full bg-gray-100 rounded-full overflow-hidden">
                                                <div
                                                    className={`h-full rounded-full ${habit.color}`}
                                                    style={{ width: `${habit.completion}%` }}
                                                ></div>
                                            </div>
                                        </div>

                                        <div className="flex items-center gap-4 md:border-l md:border-gray-100 md:pl-6 min-w-[140px]">
                                            <div className="flex flex-col">
                                                <span className="text-2xl font-extrabold text-gray-900">{habit.streak}</span>
                                                <span className="text-xs font-bold text-gray-400 uppercase">Current Streak</span>
                                            </div>
                                            <div className="p-2 bg-orange-50 rounded-full text-orange-500">
                                                <Flame size={20} className="fill-current" />
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                )}

                {/* 2. TRENDS VIEW */}
                {view === 'trends' && (
                    <div className="space-y-6 mt-4 animate-in fade-in duration-300">
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                            {/* Weekly Activity Chart */}
                            <div className="lg:col-span-2 bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex flex-col justify-between min-h-[300px]">
                                <div className="flex items-center justify-between mb-8">
                                    <h3 className="text-lg font-bold text-gray-900">Weekly Activity</h3>
                                    <select className="bg-gray-50 border border-gray-200 text-xs font-bold rounded-lg px-3 py-2 outline-none">
                                        <option>Last 7 Days</option>
                                        <option>Last 30 Days</option>
                                    </select>
                                </div>

                                <div className="flex items-end justify-between gap-2 h-full px-2">
                                    {[
                                        { day: 'Mon', val: 65, color: 'bg-orange-200' },
                                        { day: 'Tue', val: 40, color: 'bg-orange-200' },
                                        { day: 'Wed', val: 85, color: 'bg-primary' },
                                        { day: 'Thu', val: 55, color: 'bg-orange-200' },
                                        { day: 'Fri', val: 90, color: 'bg-primary' },
                                        { day: 'Sat', val: 30, color: 'bg-gray-200' },
                                        { day: 'Sun', val: 45, color: 'bg-orange-200' },
                                    ].map((item, idx) => (
                                        <div key={idx} className="flex flex-col items-center gap-3 flex-1 group cursor-pointer">
                                            <div className="relative w-full rounded-xl bg-gray-50 h-40 flex items-end overflow-hidden">
                                                <div
                                                    className={`w-full rounded-t-xl transition-all duration-500 ${item.color} group-hover:opacity-80`}
                                                    style={{ height: `${item.val}%` }}
                                                >
                                                    <div className="opacity-0 group-hover:opacity-100 absolute -top-8 left-1/2 -translate-x-1/2 bg-gray-900 text-white text-[10px] font-bold py-1 px-2 rounded shadow-lg transition-opacity">
                                                        {item.val}%
                                                    </div>
                                                </div>
                                            </div>
                                            <span className={`text-xs font-bold ${item.day === 'Wed' || item.day === 'Fri' ? 'text-primary' : 'text-gray-400'}`}>{item.day}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Insights Card */}
                            <div className="bg-gradient-to-br from-primary to-orange-600 rounded-2xl p-6 text-white shadow-lg shadow-orange-500/20 flex flex-col justify-between">
                                <div>
                                    <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mb-6">
                                        <TrendingUp className="text-white" size={24} />
                                    </div>
                                    <h3 className="text-xl font-bold mb-2">You're most active on Fridays!</h3>
                                    <p className="text-orange-50 text-sm leading-relaxed mb-6">
                                        Your completion rate hits <span className="font-bold text-white">90%</span> at the end of the week. Try to keep this momentum going into the weekend.
                                    </p>
                                </div>
                                <button className="w-full py-3 bg-white text-primary rounded-xl font-bold text-sm hover:bg-orange-50 transition-colors">
                                    View Full Analysis
                                </button>
                            </div>
                        </div>

                        {/* Performance by Day of Week */}
                        <div className="bg-white p-6 md:p-8 rounded-2xl border border-gray-100 shadow-sm">
                            <h3 className="text-lg font-bold text-gray-900 mb-6">Weekly Consistency</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
                                {[
                                    { label: 'Monday', pct: 65 },
                                    { label: 'Tuesday', pct: 40 },
                                    { label: 'Wednesday', pct: 85 },
                                    { label: 'Thursday', pct: 55 },
                                    { label: 'Friday', pct: 90 },
                                    { label: 'Saturday', pct: 30 },
                                    { label: 'Sunday', pct: 45 },
                                ].map((day, idx) => (
                                    <div key={idx} className="flex items-center gap-4">
                                        <span className="w-24 text-sm font-bold text-gray-500">{day.label}</span>
                                        <div className="flex-1 h-3 code-gray-100 bg-gray-100 rounded-full overflow-hidden">
                                            <div
                                                className={`h-full rounded-full ${day.pct >= 80 ? 'bg-green-500' : day.pct >= 50 ? 'bg-primary' : 'bg-gray-300'}`}
                                                style={{ width: `${day.pct}%` }}
                                            ></div>
                                        </div>
                                        <span className="w-10 text-sm font-bold text-gray-900 text-right">{day.pct}%</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                )}

                {/* 3. CALENDAR VIEW */}
                {view === 'calendar' && (
                    <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mt-4 animate-in fade-in duration-300">
                        {/* Calendar Column */}
                        <div className="lg:col-span-3 flex flex-col gap-6">

                            {/* Calendar Header Controls */}
                            <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4 bg-white p-4 rounded-2xl shadow-sm border border-gray-100">
                                <label className="flex flex-col w-full md:w-auto min-w-[240px]">
                                    <span className="text-gray-500 text-xs font-bold uppercase tracking-wider mb-2 ml-1">Select Habit</span>
                                    <div className="relative">
                                        <select className="appearance-none w-full bg-gray-50 border border-gray-200 text-gray-900 rounded-xl py-3 px-4 pr-10 focus:outline-none focus:ring-2 focus:ring-primary font-bold cursor-pointer">
                                            <option value="meditation">Morning Meditation</option>
                                            <option value="running">5km Run</option>
                                            <option value="reading">Read 30 mins</option>
                                            <option value="water">Drink 3L Water</option>
                                        </select>
                                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-primary">
                                            <ChevronDown size={20} />
                                        </div>
                                    </div>
                                </label>
                                <div className="flex items-center justify-between w-full md:w-auto gap-4">
                                    <button className="size-10 flex items-center justify-center rounded-full hover:bg-gray-50 text-gray-900 transition-colors">
                                        <ChevronLeft size={24} />
                                    </button>
                                    <h2 className="text-xl font-bold text-gray-900 min-w-[160px] text-center">September 2023</h2>
                                    <button className="size-10 flex items-center justify-center rounded-full hover:bg-gray-50 text-gray-900 transition-colors">
                                        <ChevronRight size={24} />
                                    </button>
                                </div>
                            </div>

                            {/* Calendar Grid */}
                            <div className="bg-white p-4 md:p-6 rounded-2xl shadow-sm border border-gray-100">
                                <div className="grid grid-cols-7 gap-2 md:gap-4 mb-4">
                                    {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map(day => (
                                        <div key={day} className="text-center text-xs md:text-sm font-bold text-gray-400 uppercase">{day}</div>
                                    ))}
                                </div>

                                <div className="grid grid-cols-7 gap-2 md:gap-4">
                                    {days.map((day) => {
                                        if (day.type === 'padding') {
                                            return <div key={day.id} className="aspect-square md:aspect-[4/3] rounded-xl"></div>
                                        }

                                        if (day.isCompleted) {
                                            return (
                                                <div key={day.id} className="aspect-square md:aspect-[4/3] bg-primary rounded-xl flex flex-col justify-between p-2 shadow-sm shadow-primary/20 hover:scale-105 transition-transform cursor-pointer group relative">
                                                    <span className="text-sm font-bold text-white z-10">{day.day}</span>
                                                    <Check className="self-end text-white z-10 w-5 h-5 md:w-6 md:h-6" strokeWidth={3} />
                                                </div>
                                            )
                                        }

                                        if (day.isToday) {
                                            return (
                                                <div key={day.id} className="aspect-square md:aspect-[4/3] bg-gray-50 rounded-xl flex flex-col justify-between p-2 border-2 border-primary border-dashed cursor-pointer hover:bg-primary/5">
                                                    <span className="text-sm font-bold text-primary">{day.day}</span>
                                                    <span className="text-[10px] md:text-xs font-bold text-primary self-center uppercase">Today</span>
                                                </div>
                                            )
                                        }

                                        return (
                                            <div key={day.id} className="aspect-square md:aspect-[4/3] bg-gray-50 rounded-xl flex flex-col p-2 border border-transparent hover:border-gray-200 transition-all cursor-pointer">
                                                <span className="text-sm font-medium text-gray-400">{day.day}</span>
                                            </div>
                                        )
                                    })}
                                </div>
                            </div>
                        </div>

                        {/* Summary Column */}
                        <div className="lg:col-span-1 flex flex-col gap-6">

                            {/* Monthly Summary Card */}
                            <div className="bg-white rounded-2xl p-6 border border-gray-100 flex flex-col gap-6 shadow-sm">
                                <h3 className="text-lg font-bold text-gray-900">Monthly Summary</h3>
                                <div className="flex flex-col gap-4">
                                    <div className="flex items-center gap-4 p-3 rounded-xl bg-gray-50">
                                        <div className="size-10 rounded-lg bg-orange-100 text-orange-600 flex items-center justify-center">
                                            <Flame size={24} className="fill-current" />
                                        </div>
                                        <div>
                                            <p className="text-sm text-gray-500 font-medium">Current Streak</p>
                                            <p className="text-2xl font-extrabold text-gray-900">5 Days</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-4 p-3 rounded-xl bg-gray-50">
                                        <div className="size-10 rounded-lg bg-gray-100 text-orange-600 flex items-center justify-center">
                                            <CalendarIcon size={24} />
                                        </div>
                                        <div>
                                            <p className="text-sm text-gray-500 font-medium">Days Done</p>
                                            <p className="text-2xl font-extrabold text-gray-900">19/30</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-4 p-3 rounded-xl bg-gray-50">
                                        <div className="size-10 rounded-lg bg-gray-100 text-gray-500 flex items-center justify-center">
                                            <Percent size={24} />
                                        </div>
                                        <div>
                                            <p className="text-sm text-gray-500 font-medium">Completion Rate</p>
                                            <p className="text-2xl font-extrabold text-gray-900">63%</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="h-px bg-gray-200 w-full my-1"></div>
                                <button className="w-full py-3 bg-primary text-white rounded-xl font-bold hover:bg-orange-600 transition-colors flex items-center justify-center gap-2 shadow-lg shadow-primary/25">
                                    <Share2 size={20} />
                                    Share Report
                                </button>
                            </div>

                            {/* Motivation Card */}
                            <div className="bg-orange-500/10 rounded-2xl p-6 border border-orange-500/20 flex flex-col gap-3 relative overflow-hidden">
                                <div className="absolute -right-6 -top-6 size-24 bg-orange-500/20 rounded-full blur-2xl"></div>
                                <h3 className="text-lg font-bold text-gray-900 relative z-10">Keep it up! 🎉</h3>
                                <p className="text-sm text-gray-700 leading-relaxed relative z-10">
                                    You've completed your habit <span className="font-bold">5 days in a row</span>. You're building great momentum this month.
                                </p>
                            </div>
                        </div>
                    </div>
                )}

            </div>
        </DashboardLayout >
    )
}

export default Reports
