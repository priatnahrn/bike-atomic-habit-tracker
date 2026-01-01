import { useState } from "react"
import DashboardLayout from "../components/dashboard/DashboardLayout"
import Breadcrumb from "../components/Breadcrumb"
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
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-2">
                    <div className="flex flex-col gap-4">
                        <Breadcrumb items={[
                            { label: 'Home', href: '/' },
                            { label: 'Reports', href: '#' },
                            { label: `${view} view` }
                        ]} />
                        <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight">Your Progress</h1>
                    </div>

                    {/* Tabs */}
                    <div className="flex gap-8 px-2 border-b border-gray-100 md:border-none w-full md:w-auto overflow-x-auto no-scrollbar">
                        <button
                            onClick={() => setView('overview')}
                            className={`group pb-3 pt-2 text-sm font-bold min-w-[60px] transition-all relative ${view === 'overview' ? 'text-primary' : 'text-gray-400 hover:text-gray-600'}`}
                        >
                            Overview
                            {view === 'overview' && <div className="absolute bottom-0 left-0 w-full h-0.5 bg-primary rounded-full"></div>}
                        </button>
                        <button
                            onClick={() => setView('trends')}
                            className={`group pb-3 pt-2 text-sm font-bold min-w-[60px] transition-all relative ${view === 'trends' ? 'text-primary' : 'text-gray-400 hover:text-gray-600'}`}
                        >
                            Trends
                            {view === 'trends' && <div className="absolute bottom-0 left-0 w-full h-0.5 bg-primary rounded-full"></div>}
                        </button>
                        <button
                            onClick={() => setView('calendar')}
                            className={`group pb-3 pt-2 text-sm font-bold min-w-[60px] transition-all relative ${view === 'calendar' ? 'text-primary' : 'text-gray-400 hover:text-gray-600'}`}
                        >
                            Calendar
                            {view === 'calendar' && <div className="absolute bottom-0 left-0 w-full h-0.5 bg-primary rounded-full"></div>}
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
                                <div key={index} className="bg-white p-6 rounded-2xl border border-gray-100 flex items-center gap-5 transition-transform hover:-translate-y-1">
                                    <div className={`size-14 rounded-2xl ${stat.bg} ${stat.color} flex items-center justify-center shrink-0`}>
                                        <stat.icon size={26} strokeWidth={2.5} />
                                    </div>
                                    <div>
                                        <p className="text-sm font-bold text-gray-400 mb-1">{stat.label}</p>
                                        <h3 className="text-2xl font-extrabold text-gray-900 leading-none">{stat.value}</h3>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Habit Performance List */}
                        <div className="bg-white rounded-2xl border border-gray-100 p-8">
                            <div className="mb-8">
                                <h2 className="text-xl font-bold text-gray-900">Habit Performance</h2>
                            </div>

                            <div className="flex flex-col gap-8">
                                {habitPerformance.map((habit) => (
                                    <div key={habit.id} className="flex flex-col md:flex-row md:items-center gap-6 group">
                                        {/* Icon & Title */}
                                        <div className="flex items-center gap-4 min-w-[240px]">
                                            <div className={`size-14 rounded-2xl ${habit.bgIcon} ${habit.text} flex items-center justify-center shrink-0`}>
                                                <habit.icon size={24} />
                                            </div>
                                            <div>
                                                <h3 className="font-bold text-gray-900 text-lg">{habit.title}</h3>
                                                <p className="text-xs font-bold text-gray-400 uppercase tracking-wider">{habit.target}</p>
                                            </div>
                                        </div>

                                        {/* Progress Bar */}
                                        <div className="flex-1 flex flex-col justify-center gap-2">
                                            <div className="flex justify-between items-center text-sm">
                                                <span className="font-bold text-gray-400">Monthly Goal</span>
                                                <span className="font-bold text-gray-900">{habit.completion}%</span>
                                            </div>
                                            <div className="h-4 w-full bg-gray-50 rounded-full overflow-hidden">
                                                <div
                                                    className={`h-full rounded-full ${habit.color}`}
                                                    style={{ width: `${habit.completion}%` }}
                                                ></div>
                                            </div>
                                        </div>

                                        {/* Streak Stat */}
                                        <div className="flex items-center gap-3 min-w-[140px] md:justify-end">
                                            <div className="flex flex-col md:items-end">
                                                <span className="text-2xl font-extrabold text-gray-900 leading-none">{habit.streak}</span>
                                                <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wide">Current Streak</span>
                                            </div>
                                            <div className="size-10 bg-orange-50 rounded-full flex items-center justify-center text-orange-500 shrink-0">
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
                            <div className="lg:col-span-2 bg-white p-8 rounded-2xl border border-gray-100 flex flex-col justify-between min-h-[320px]">
                                <div className="flex items-center justify-between mb-8">
                                    <h3 className="text-xl font-bold text-gray-900">Weekly Activity</h3>
                                    <select className="bg-gray-50 text-gray-900 border border-gray-100 text-xs font-bold rounded-xl px-4 py-2 outline-none hover:bg-gray-100 transition-colors cursor-pointer">
                                        <option>Last 7 Days</option>
                                        <option>Last 30 Days</option>
                                    </select>
                                </div>

                                <div className="flex items-end justify-between gap-4 h-full px-2">
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
                                            <div className="relative w-full rounded-2xl bg-gray-50 h-40 flex items-end overflow-hidden">
                                                <div
                                                    className={`w-full rounded-t-2xl transition-all duration-500 ${item.color} group-hover:opacity-80`}
                                                    style={{ height: `${item.val}%` }}
                                                >
                                                    <div className="opacity-0 group-hover:opacity-100 absolute -top-10 left-1/2 -translate-x-1/2 bg-gray-900 text-white text-[10px] font-bold py-1 px-2 rounded-lg transition-opacity whitespace-nowrap z-10">
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
                            <div className="bg-gradient-to-br from-primary to-orange-600 rounded-2xl p-8 text-white flex flex-col justify-between relative overflow-hidden">
                                <div className="z-10">
                                    <div className="size-14 bg-white/20 rounded-2xl flex items-center justify-center mb-8 backdrop-blur-sm">
                                        <TrendingUp className="text-white" size={28} />
                                    </div>
                                    <h3 className="text-2xl font-bold mb-3 tracking-tight">You're on fire! 🔥</h3>
                                    <p className="text-orange-50 text-sm font-medium leading-relaxed mb-8 opacity-90">
                                        Your completion rate hits <span className="font-bold text-white">90%</span> at the end of the week. Try to keep this momentum going into the weekend.
                                    </p>
                                </div>
                                <button className="w-full py-4 bg-white text-primary rounded-2xl font-bold text-sm hover:bg-orange-50 transition-colors z-10">
                                    View Full Analysis
                                </button>

                                {/* Decor */}
                                <div className="absolute -right-10 -top-10 size-40 bg-white/10 rounded-full blur-3xl pointer-events-none"></div>
                                <div className="absolute -left-10 bottom-20 size-32 bg-orange-400/20 rounded-full blur-3xl pointer-events-none"></div>
                            </div>
                        </div>

                        {/* Heatmap Section */}
                        <div className="bg-white p-8 rounded-2xl border border-gray-100">
                            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
                                <div className="flex items-center gap-3">
                                    <div className="size-10 bg-orange-50 rounded-xl flex items-center justify-center text-primary">
                                        <CalendarIcon size={20} />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-gray-900">Consistency Heatmap</h3>
                                        <p className="text-sm font-medium text-gray-500">Last 3 Months Activity</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-2 text-xs font-bold text-gray-400">
                                    <span>Less</span>
                                    <div className="size-3 bg-gray-100 rounded-sm"></div>
                                    <div className="size-3 bg-orange-200 rounded-sm"></div>
                                    <div className="size-3 bg-orange-300 rounded-sm"></div>
                                    <div className="size-3 bg-primary rounded-sm"></div>
                                    <span>More</span>
                                </div>
                            </div>

                            {/* Heatmap Grid */}
                            <div className="flex flex-col gap-2 overflow-x-auto pb-2 no-scrollbar">
                                <div className="flex gap-1 min-w-max">
                                    {Array.from({ length: 13 }).map((_, weekIndex) => (
                                        <div key={weekIndex} className="flex flex-col gap-1">
                                            {Array.from({ length: 7 }).map((_, dayIndex) => {
                                                // Mock logic for heatmap intensity
                                                const intensity = Math.random() > 0.7 ? 3 : Math.random() > 0.4 ? 2 : Math.random() > 0.2 ? 1 : 0
                                                const colors = ['bg-gray-100', 'bg-orange-200', 'bg-orange-400', 'bg-primary']

                                                return (
                                                    <div
                                                        key={dayIndex}
                                                        className={`size-3.5 md:size-4 rounded-sm ${colors[intensity]} hover:scale-125 transition-transform cursor-pointer`}
                                                        title={`Week ${weekIndex + 1}, Day ${dayIndex + 1}: ${intensity} Habits`}
                                                    ></div>
                                                )
                                            })}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Performance by Day of Week (Simplified) */}
                        <div className="bg-white p-8 rounded-2xl border border-gray-100">
                            <h3 className="text-xl font-bold text-gray-900 mb-8">Weekly Consistency</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-6">
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
                                        <div className="flex-1 h-3 bg-gray-50 rounded-full overflow-hidden">
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
                            <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4 bg-white p-6 rounded-2xl border border-gray-100">
                                <label className="flex flex-col w-full md:w-auto min-w-[240px]">
                                    <span className="text-gray-400 text-xs font-bold uppercase tracking-wider mb-2 ml-1">Select Habit</span>
                                    <div className="relative">
                                        <select className="appearance-none w-full bg-gray-50 border border-gray-100 text-gray-900 rounded-xl py-3 px-4 pr-10 focus:outline-none hover:bg-gray-100 font-bold cursor-pointer transition-colors">
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
                                    <button className="size-12 flex items-center justify-center rounded-xl bg-gray-50 hover:bg-gray-100 text-gray-900 transition-colors">
                                        <ChevronLeft size={22} />
                                    </button>
                                    <h2 className="text-xl font-bold text-gray-900 min-w-[180px] text-center">September 2023</h2>
                                    <button className="size-12 flex items-center justify-center rounded-xl bg-gray-50 hover:bg-gray-100 text-gray-900 transition-colors">
                                        <ChevronRight size={22} />
                                    </button>
                                </div>
                            </div>

                            {/* Calendar Grid */}
                            <div className="bg-white p-6 md:p-8 rounded-2xl border border-gray-100">
                                <div className="grid grid-cols-7 gap-2 md:gap-4 mb-6">
                                    {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map(day => (
                                        <div key={day} className="text-center text-xs md:text-sm font-bold text-gray-400 uppercase tracking-wide">{day}</div>
                                    ))}
                                </div>

                                <div className="grid grid-cols-7 gap-2 md:gap-4">
                                    {/* Padding Days (Mon-Thu) */}
                                    {Array.from({ length: 4 }).map((_, i) => (
                                        <div key={`pad-${i}`} className="aspect-square md:aspect-[4/3]"></div>
                                    ))}

                                    {/* Week 1 Ends: Fri(1), Sat(2), Sun(3) */}
                                    <div className="aspect-square md:aspect-[4/3] bg-white rounded-xl flex flex-col p-3 border border-gray-100"><span className="text-sm font-bold text-gray-400">1</span></div>
                                    <div className="aspect-square md:aspect-[4/3] bg-white rounded-xl flex flex-col p-3 border border-gray-100"><span className="text-sm font-bold text-gray-400">2</span></div>
                                    <div className="aspect-square md:aspect-[4/3] bg-white rounded-xl flex flex-col p-3 border border-gray-100"><span className="text-sm font-bold text-gray-400">3</span></div>

                                    {/* Week 2: Mon(4) - Sun(10) */}
                                    {/* 4th: Frozen */}
                                    <div className="aspect-square md:aspect-[4/3] bg-blue-50 rounded-xl flex flex-col justify-between p-3 border border-blue-100 hover:bg-blue-100 transition-colors cursor-pointer group relative">
                                        <span className="text-sm font-bold text-blue-500 z-10">4</span>
                                        <div className="self-end text-blue-400 z-10 flex">
                                            <span className="text-lg">❄️</span>
                                        </div>
                                    </div>
                                    <div className="aspect-square md:aspect-[4/3] bg-primary rounded-xl flex flex-col justify-between p-3 border border-primary"><span className="text-sm font-bold text-white">5</span><Check className="self-end text-white w-5 h-5" strokeWidth={3} /></div>
                                    <div className="aspect-square md:aspect-[4/3] bg-primary rounded-xl flex flex-col justify-between p-3 border border-primary"><span className="text-sm font-bold text-white">6</span><Check className="self-end text-white w-5 h-5" strokeWidth={3} /></div>
                                    <div className="aspect-square md:aspect-[4/3] bg-primary rounded-xl flex flex-col justify-between p-3 border border-primary"><span className="text-sm font-bold text-white">7</span><Check className="self-end text-white w-5 h-5" strokeWidth={3} /></div>
                                    <div className="aspect-square md:aspect-[4/3] bg-primary rounded-xl flex flex-col justify-between p-3 border border-primary"><span className="text-sm font-bold text-white">8</span><Check className="self-end text-white w-5 h-5" strokeWidth={3} /></div>
                                    <div className="aspect-square md:aspect-[4/3] bg-primary rounded-xl flex flex-col justify-between p-3 border border-primary"><span className="text-sm font-bold text-white">9</span><Check className="self-end text-white w-5 h-5" strokeWidth={3} /></div>
                                    <div className="aspect-square md:aspect-[4/3] bg-primary rounded-xl flex flex-col justify-between p-3 border border-primary"><span className="text-sm font-bold text-white">10</span><Check className="self-end text-white w-5 h-5" strokeWidth={3} /></div>

                                    {/* Week 3: FULL STREAK (Merged) - Mon(11) to Sun(17) */}
                                    <div className="col-span-7 bg-gradient-to-r from-orange-400 to-red-500 rounded-2xl relative overflow-hidden group hover:scale-[1.01] transition-transform cursor-pointer shadow-lg shadow-orange-500/20">
                                        {/* Decor */}
                                        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
                                        <div className="absolute -left-4 -top-10 z-0 opacity-20 rotate-12">
                                            <Flame size={80} className="fill-white" />
                                        </div>

                                        {/* Day Numbers Rendering */}
                                        <div className="relative z-10 grid grid-cols-7 gap-2 md:gap-4 h-full items-center py-3 px-6 md:p-0 md:aspect-[7/1]">
                                            {[11, 12, 13, 14, 15, 16, 17].map((dayNum) => (
                                                <div key={dayNum} className="flex flex-col items-center justify-center">
                                                    <span className="text-base md:text-lg font-extrabold text-white drop-shadow-sm">{dayNum}</span>
                                                    <div className="size-1 md:size-1.5 bg-white/50 rounded-full mt-1"></div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Week 4: Mixed */}
                                    <div className="aspect-square md:aspect-[4/3] bg-white rounded-xl flex flex-col p-3 border border-gray-100"><span className="text-sm font-bold text-gray-400">18</span></div>

                                    {/* 19: Today */}
                                    <div className="aspect-square md:aspect-[4/3] bg-orange-50 rounded-xl flex flex-col justify-between p-3 border-2 border-primary border-dashed cursor-pointer">
                                        <span className="text-sm font-bold text-primary">19</span>
                                        <span className="text-[10px] md:text-xs font-bold text-primary self-center uppercase tracking-wide">Today</span>
                                    </div>

                                    <div className="aspect-square md:aspect-[4/3] bg-white rounded-xl flex flex-col p-3 border border-gray-100"><span className="text-sm font-bold text-gray-400">20</span></div>
                                    <div className="aspect-square md:aspect-[4/3] bg-white rounded-xl flex flex-col p-3 border border-gray-100"><span className="text-sm font-bold text-gray-400">21</span></div>

                                    {/* Rest of days... */}
                                    {Array.from({ length: 9 }).map((_, i) => (
                                        <div key={`rest-${i}`} className="aspect-square md:aspect-[4/3] bg-white rounded-xl flex flex-col p-3 border border-gray-100"><span className="text-sm font-bold text-gray-400">{22 + i}</span></div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Summary Column */}
                        <div className="lg:col-span-1 flex flex-col gap-6">

                            {/* Weekly Streak Fire Badge (New Feature) */}
                            <div className="bg-gradient-to-br from-orange-500 to-red-600 rounded-2xl p-6 text-white flex flex-col items-center text-center relative overflow-hidden">
                                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
                                <div className="z-10 bg-white/20 p-3 rounded-full mb-3 backdrop-blur-sm animate-pulse">
                                    <Flame size={32} className="fill-white" />
                                </div>
                                <h3 className="text-xl font-extrabold z-10 mb-1">7 Day Streak!</h3>
                                <p className="text-xs font-bold text-orange-100 z-10 uppercase tracking-widest">Wow, on fire!</p>
                            </div>

                            {/* Monthly Summary Card */}
                            <div className="bg-white rounded-2xl p-6 border border-gray-100 flex flex-col gap-6">
                                <h3 className="text-lg font-bold text-gray-900">Monthly Summary</h3>
                                <div className="flex flex-col gap-4">
                                    <div className="flex items-center gap-4 p-4 rounded-xl bg-gray-50 border border-gray-50">
                                        <div className="size-12 rounded-lg bg-white border border-gray-100 text-orange-600 flex items-center justify-center shrink-0">
                                            <Flame size={24} className="fill-current" />
                                        </div>
                                        <div>
                                            <p className="text-xs font-bold text-gray-400 uppercase tracking-wide">Streak</p>
                                            <p className="text-2xl font-extrabold text-gray-900 leading-none">12 Days</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-4 p-4 rounded-xl bg-gray-50 border border-gray-50">
                                        <div className="size-12 rounded-lg bg-white border border-gray-100 text-blue-600 flex items-center justify-center shrink-0">
                                            <CalendarIcon size={24} />
                                        </div>
                                        <div>
                                            <p className="text-xs font-bold text-gray-400 uppercase tracking-wide">Days Done</p>
                                            <p className="text-2xl font-extrabold text-gray-900 leading-none">19/30</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-4 p-4 rounded-xl bg-gray-50 border border-gray-50">
                                        <div className="size-12 rounded-lg bg-white border border-gray-100 text-green-600 flex items-center justify-center shrink-0">
                                            <Percent size={24} />
                                        </div>
                                        <div>
                                            <p className="text-xs font-bold text-gray-400 uppercase tracking-wide">Completion</p>
                                            <p className="text-2xl font-extrabold text-gray-900 leading-none">63%</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="h-px bg-gray-100 w-full my-1"></div>
                                <button className="w-full py-4 bg-primary text-white rounded-xl font-bold hover:bg-orange-600 transition-colors flex items-center justify-center gap-2">
                                    <Share2 size={20} />
                                    Share Report
                                </button>
                            </div>

                            {/* Freezes Left Card */}
                            <div className="bg-blue-50 rounded-2xl p-6 border border-blue-100 flex flex-col gap-3 relative overflow-hidden">
                                <div className="z-10 flex items-center gap-3 mb-1">
                                    <span className="text-2xl">❄️</span>
                                    <h3 className="text-lg font-bold text-gray-900">2 Freezes Left</h3>
                                </div>
                                <p className="text-sm font-medium text-gray-600 leading-relaxed z-10">
                                    You can skip 2 more days without losing your streak. Use them wisely!
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
