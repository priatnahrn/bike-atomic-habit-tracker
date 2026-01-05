import { useState, useEffect } from "react"
import DashboardLayout from "../components/dashboard/DashboardLayout"
import Breadcrumb from "../components/Breadcrumb"
import {
    ChevronDown, ChevronLeft, ChevronRight, Check,
    Flame, Calendar as CalendarIcon, Percent, Share2,
    BarChart3, Trophy, TrendingUp, Footprints, BookOpen, Droplets, Moon,
    Diamond, Edit, Bike, Plus, Zap, Activity, Dumbbell, PenTool, Briefcase, Code,
    Sun, CloudSun, Coffee, Music, Heart, Apple, BedDouble, Utensils, Smile, X, Rocket
} from "lucide-react"

const Reports = () => {
    const [view, setView] = useState('overview') // 'overview', 'trends', 'calendar'
    const [stats, setStats] = useState(null)
    const [loading, setLoading] = useState(true)
    const [range, setRange] = useState('last7')

    // Calendar State
    const [currentMonth, setCurrentMonth] = useState(new Date())
    const [selectedHabitId, setSelectedHabitId] = useState('')
    const [showComingSoon, setShowComingSoon] = useState(false)

    // Fetch Stats
    useEffect(() => {
        const fetchStats = async () => {
            try {
                const token = localStorage.getItem("token")
                const response = await fetch(`${import.meta.env.VITE_API_URL}/api/habits/stats?range=${range}`, {
                    headers: { "Authorization": `Bearer ${token}` }
                })
                if (response.ok) {
                    const data = await response.json()
                    setStats(data)
                    // Set default selected habit if not set
                    if (data.habitPerformance && data.habitPerformance.length > 0 && !selectedHabitId) {
                        setSelectedHabitId(data.habitPerformance[0].id)
                    }
                }
            } catch (error) {
                console.error("Failed to fetch reports:", error)
            } finally {
                setLoading(false)
            }
        }
        fetchStats()
    }, [range])

    // Update selected habit if stats change/load and we haven't selected one
    useEffect(() => {
        if (stats?.habitPerformance?.length > 0 && !selectedHabitId) {
            setSelectedHabitId(stats.habitPerformance[0].id)
        }
    }, [stats, selectedHabitId])


    if (loading) return <DashboardLayout><div className="flex h-screen items-center justify-center">Loading reports...</div></DashboardLayout>

    // --- Data Preparation ---
    const overviewStats = stats ? [
        { label: "Total Habits", value: stats.overview.totalHabits.toString(), icon: BarChart3, color: "text-blue-600", bg: "bg-blue-100" },
        { label: "Avg. Completion", value: `${stats.overview.avgCompletion}%`, icon: Percent, color: "text-green-600", bg: "bg-green-100" },
        { label: "Best Streak", value: `${stats.overview.bestStreak} Days`, icon: Flame, color: "text-orange-600", bg: "bg-orange-100" },
        { label: "Perfect Days", value: stats.overview.perfectDays.toString(), icon: Trophy, color: "text-yellow-600", bg: "bg-yellow-100" },
    ] : []

    const habitPerformance = stats?.habitPerformance || []

    const getIcon = (name) => {
        const icons = {
            Footprints, BookOpen, Diamond, Droplets, Flame, Edit, Bike, TrendingUp, Plus,
            Zap, Activity, Dumbbell, PenTool, Briefcase, Code,
            Moon, Sun, CloudSun, Coffee, Music, Heart, Apple,
            BedDouble, Utensils, Smile
        }
        return icons[name] || Footprints
    }

    // --- Calendar Logic ---
    const getDaysInMonth = (date) => {
        const year = date.getFullYear()
        const month = date.getMonth()
        const daysInMonth = new Date(year, month + 1, 0).getDate()
        const firstDayOfMonth = new Date(year, month, 1).getDay() // 0 = Sun, 1 = Mon...

        // Adjust for Monday start? Let's stick to Mon-Sun grid as per design usually
        // Design had "Mon, Tue...". If firstDay is Sun(0), that's index 6 in Mon-start. 
        // If Mon(1), index 0. 
        // Logic: (day + 6) % 7 
        const startDayOffset = (firstDayOfMonth + 6) % 7

        return { daysInMonth, startDayOffset, year, month }
    }

    const { daysInMonth, startDayOffset, year, month } = getDaysInMonth(currentMonth)

    const selectedHabit = habitPerformance.find(h => h.id === selectedHabitId)
    const completedDates = selectedHabit?.completedDates || [] // Array of ISO strings YYYY-MM-DD

    const isDateCompleted = (day) => {
        // Create date string for comparison
        // Note: 'month' is 0-indexed. 
        // Format: YYYY-MM-DD
        const d = new Date(year, month, day)
        // Adjust timezone offset to get local YYYY-MM-DD that matches backend storage usually
        // Actually backend sends YYYY-MM-DD based on log creation
        // Safer: compare simple ISO string parts
        const checkStr = d.toLocaleDateString('en-CA') // YYYY-MM-DD in local time

        // Backend 'date' in HabitLog is DateTime. Controller maps it to l.date which is Date obj usually?
        // Wait, controller: h.logs.filter...map(l => l.date). l.date from Prisma is Date object.
        // Date object to JSON becomes ISO string "2023-01-01T00:00:00.000Z"
        // If I compare just the date part, be careful of T00:00:00Z vs local.
        // It's best if backend sent YYYY-MM-DD strings. 
        // Assuming backend sends ISO strings now.

        return completedDates.some(isoDate => {
            return isoDate.split('T')[0] === checkStr
        })
    }

    const handlePrevMonth = () => {
        setCurrentMonth(new Date(year, month - 1, 1))
    }

    const handleNextMonth = () => {
        setCurrentMonth(new Date(year, month + 1, 1))
    }

    const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

    // Stats for the selected month/habit
    // Calculate streak, days done, completion for the *current view* (month)
    let monthCompletedCount = 0
    // Rough calc
    for (let i = 1; i <= daysInMonth; i++) {
        if (isDateCompleted(i)) monthCompletedCount++
    }
    const monthCompletionRate = Math.round((monthCompletedCount / daysInMonth) * 100)

    // Check if today is in this view
    const today = new Date()
    const isCurrentMonthView = today.getMonth() === month && today.getFullYear() === year


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
                                {habitPerformance.map((habit) => {
                                    const IconComponent = getIcon(habit.icon)
                                    return (
                                        <div key={habit.id} className="flex flex-col md:flex-row md:items-center gap-6 group">
                                            {/* Icon & Title */}
                                            <div className="flex items-center gap-4 min-w-[240px]">
                                                <div className={`size-14 rounded-2xl bg-orange-100 text-orange-600 flex items-center justify-center shrink-0`}>
                                                    <IconComponent size={24} />
                                                </div>
                                                <div>
                                                    <h3 className="font-bold text-gray-900 text-lg">{habit.title}</h3>
                                                    <p className="text-xs font-bold text-gray-400 uppercase tracking-wider">{habit.target}</p>
                                                </div>
                                            </div>

                                            {/* Progress Bar */}
                                            <div className="flex-1 flex flex-col justify-center gap-2">
                                                <div className="flex justify-between items-center text-sm">
                                                    <span className="font-bold text-gray-400">Completion Rate</span>
                                                    <span className="font-bold text-gray-900">{habit.completion}%</span>
                                                </div>
                                                <div className="h-4 w-full bg-gray-50 rounded-full overflow-hidden">
                                                    <div
                                                        className={`h-full rounded-full bg-orange-500`}
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
                                    )
                                })}
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
                                    <h3 className="text-xl font-bold text-gray-900">Activity Trends</h3>
                                    <select
                                        value={range}
                                        onChange={(e) => setRange(e.target.value)}
                                        className="bg-gray-50 text-gray-900 border border-gray-100 text-xs font-bold rounded-xl px-4 py-2 outline-none hover:bg-gray-100 transition-colors cursor-pointer"
                                    >
                                        <option value="last7">Last 7 Days</option>
                                        <option value="thisWeek">This Week</option>
                                        <option value="last30">Last 30 Days</option>
                                        <option value="thisMonth">This Month</option>
                                    </select>
                                </div>

                                <div className="flex items-end justify-between gap-2 h-full px-2 overflow-x-auto">
                                    {(stats?.trends?.activity || []).map((item, idx) => {
                                        let barColor = 'bg-gray-200';
                                        if (item.val >= 80) barColor = 'bg-primary';
                                        else if (item.val >= 40) barColor = 'bg-orange-200';

                                        return (
                                            <div key={idx} className="flex flex-col items-center gap-3 flex-1 min-w-[30px] group cursor-pointer">
                                                <div className="relative w-full rounded-2xl bg-gray-50 h-40 flex items-end overflow-hidden">
                                                    <div
                                                        className={`w-full rounded-t-2xl transition-all duration-500 ${barColor} group-hover:opacity-80`}
                                                        style={{ height: `${item.val}%` }}
                                                    >
                                                        <div className="opacity-0 group-hover:opacity-100 absolute -top-10 left-1/2 -translate-x-1/2 bg-gray-900 text-white text-[10px] font-bold py-1 px-2 rounded-lg transition-opacity whitespace-nowrap z-10">
                                                            {item.val}%
                                                        </div>
                                                    </div>
                                                </div>
                                                <span className={`text-[10px] sm:text-xs font-bold ${item.day === 'Wed' || item.day === 'Fri' ? 'text-primary' : 'text-gray-400'}`}>{item.day}</span>
                                            </div>
                                        )
                                    })}
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
                                        Your completion rate hits <span className="font-bold text-white">{(stats?.overview?.avgCompletion || 0)}%</span> this week. Keep this momentum going!
                                    </p>
                                </div>
                                <button
                                    onClick={() => setShowComingSoon(true)}
                                    className="w-full py-4 bg-white text-primary rounded-2xl font-bold text-sm hover:bg-orange-50 transition-colors z-10"
                                >
                                    View Full Analysis
                                </button>
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
                            <div className="flex flex-col gap-2 overflow-x-auto pb-2 no-scrollbar">
                                <div className="flex gap-1 min-w-max">
                                    {stats && Array.from({ length: 13 }).map((_, weekIndex) => (
                                        <div key={weekIndex} className="flex flex-col gap-1">
                                            {Array.from({ length: 7 }).map((_, dayIndex) => {
                                                const totalDays = 13 * 7;
                                                const dayOffset = (weekIndex * 7) + dayIndex;
                                                const targetDate = new Date();
                                                targetDate.setDate(targetDate.getDate() - (totalDays - 1) + dayOffset);
                                                const dateKey = targetDate.toISOString().split('T')[0];
                                                const count = stats.history ? (stats.history[dateKey] || 0) : 0;
                                                let intensity = 0;
                                                if (count > 0) intensity = 1;
                                                if (count > 2) intensity = 2;
                                                if (count > 4) intensity = 3;
                                                const colors = ['bg-gray-100', 'bg-orange-200', 'bg-orange-400', 'bg-primary'];
                                                return (
                                                    <div
                                                        key={dayIndex}
                                                        className={`size-3.5 md:size-4 rounded-sm ${colors[intensity]} hover:scale-125 transition-transform cursor-pointer`}
                                                        title={`${dateKey}: ${count} Habits`}
                                                    ></div>
                                                )
                                            })}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Performance by Day of Week */}
                        <div className="bg-white p-8 rounded-2xl border border-gray-100">
                            <h3 className="text-xl font-bold text-gray-900 mb-8">Weekly Consistency</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-6">
                                {(stats?.trends?.weeklyConsistency || []).map((day, idx) => (
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
                                        <select
                                            value={selectedHabitId}
                                            onChange={(e) => setSelectedHabitId(e.target.value)}
                                            className="appearance-none w-full bg-gray-50 border border-gray-100 text-gray-900 rounded-xl py-3 px-4 pr-10 focus:outline-none hover:bg-gray-100 font-bold cursor-pointer transition-colors"
                                        >
                                            {habitPerformance.map(h => (
                                                <option key={h.id} value={h.id}>{h.title}</option>
                                            ))}
                                        </select>
                                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-primary">
                                            <ChevronDown size={20} />
                                        </div>
                                    </div>
                                </label>
                                <div className="flex items-center justify-between w-full md:w-auto gap-4">
                                    <button
                                        onClick={handlePrevMonth}
                                        className="size-12 flex items-center justify-center rounded-xl bg-gray-50 hover:bg-gray-100 text-gray-900 transition-colors"
                                    >
                                        <ChevronLeft size={22} />
                                    </button>
                                    <h2 className="text-xl font-bold text-gray-900 min-w-[180px] text-center">{monthNames[month]} {year}</h2>
                                    <button
                                        onClick={handleNextMonth}
                                        className="size-12 flex items-center justify-center rounded-xl bg-gray-50 hover:bg-gray-100 text-gray-900 transition-colors"
                                    >
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
                                    {/* Padding Days */}
                                    {Array.from({ length: startDayOffset }).map((_, i) => (
                                        <div key={`pad-${i}`} className="aspect-square md:aspect-[4/3]"></div>
                                    ))}

                                    {/* Actual Days */}
                                    {Array.from({ length: daysInMonth }).map((_, i) => {
                                        const dayNum = i + 1;
                                        const completed = isDateCompleted(dayNum);
                                        const isToday = isCurrentMonthView && (dayNum === today.getDate());
                                        const isFuture = (year > today.getFullYear()) || (year === today.getFullYear() && month > today.getMonth()) || (year === today.getFullYear() && month === today.getMonth() && dayNum > today.getDate());

                                        return (
                                            <div
                                                key={`day-${dayNum}`}
                                                className={`aspect-square md:aspect-[4/3] rounded-xl flex flex-col justify-between p-3 border transition-colors 
                                                    ${completed
                                                        ? 'bg-primary border-primary text-white'
                                                        : isToday
                                                            ? 'bg-orange-50 border-2 border-primary border-dashed text-primary'
                                                            : 'bg-white border-gray-100 text-gray-900'
                                                    }
                                                    ${!completed && !isFuture && !isToday ? 'bg-gray-50' : ''}
                                                `}
                                            >
                                                <span className={`text-sm font-bold ${completed ? 'text-white' : 'text-gray-500'}`}>{dayNum}</span>
                                                {completed && <Check className="self-end text-white w-5 h-5" strokeWidth={3} />}
                                                {isToday && !completed && <span className="text-[10px] md:text-xs font-bold text-primary self-center uppercase tracking-wide">Today</span>}
                                            </div>
                                        )
                                    })}
                                </div>
                            </div>
                        </div>

                        {/* Summary Column */}
                        <div className="lg:col-span-1 flex flex-col gap-6">

                            {/* Weekly Streak Fire Badge (Using selected habit streak) */}
                            {selectedHabit && (
                                <div className="bg-gradient-to-br from-orange-500 to-red-600 rounded-2xl p-6 text-white flex flex-col items-center text-center relative overflow-hidden">
                                    <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
                                    <div className="z-10 bg-white/20 p-3 rounded-full mb-3 backdrop-blur-sm animate-pulse">
                                        <Flame size={32} className="fill-white" />
                                    </div>
                                    <h3 className="text-xl font-extrabold z-10 mb-1">{selectedHabit.streak} Day Streak!</h3>
                                    <p className="text-xs font-bold text-orange-100 z-10 uppercase tracking-widest">Keep it up!</p>
                                </div>
                            )}

                            {/* Monthly Summary Card */}
                            <div className="bg-white rounded-2xl p-6 border border-gray-100 flex flex-col gap-6">
                                <h3 className="text-lg font-bold text-gray-900">Monthly Summary</h3>
                                <div className="flex flex-col gap-4">
                                    {/* Streak */}
                                    <div className="flex items-center gap-4 p-4 rounded-xl bg-gray-50 border border-gray-50">
                                        <div className="size-12 rounded-lg bg-white border border-gray-100 text-orange-600 flex items-center justify-center shrink-0">
                                            <Flame size={24} className="fill-current" />
                                        </div>
                                        <div>
                                            <p className="text-xs font-bold text-gray-400 uppercase tracking-wide">Current Streak</p>
                                            <p className="text-2xl font-extrabold text-gray-900 leading-none">{selectedHabit?.streak || 0}</p>
                                        </div>
                                    </div>

                                    {/* Days Done */}
                                    <div className="flex items-center gap-4 p-4 rounded-xl bg-gray-50 border border-gray-50">
                                        <div className="size-12 rounded-lg bg-white border border-gray-100 text-blue-600 flex items-center justify-center shrink-0">
                                            <CalendarIcon size={24} />
                                        </div>
                                        <div>
                                            <p className="text-xs font-bold text-gray-400 uppercase tracking-wide">Days Done</p>
                                            <p className="text-2xl font-extrabold text-gray-900 leading-none">{monthCompletedCount}/{daysInMonth}</p>
                                        </div>
                                    </div>

                                    {/* Completion */}
                                    <div className="flex items-center gap-4 p-4 rounded-xl bg-gray-50 border border-gray-50">
                                        <div className="size-12 rounded-lg bg-white border border-gray-100 text-green-600 flex items-center justify-center shrink-0">
                                            <Percent size={24} />
                                        </div>
                                        <div>
                                            <p className="text-xs font-bold text-gray-400 uppercase tracking-wide">Completion</p>
                                            <p className="text-2xl font-extrabold text-gray-900 leading-none">{monthCompletionRate}%</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="h-px bg-gray-100 w-full my-1"></div>
                                <button className="w-full py-4 bg-primary text-white rounded-xl font-bold hover:bg-orange-600 transition-colors flex items-center justify-center gap-2">
                                    <Share2 size={20} />
                                    Share Report
                                </button>
                            </div>
                        </div>
                    </div>
                )}

            </div>

            {/* Coming Soon Modal */}
            {showComingSoon && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-gray-900/50 backdrop-blur-sm animate-in fade-in duration-200">
                    <div className="bg-white rounded-3xl p-8 max-w-sm w-full text-center shadow-xl relative animate-in zoom-in-95 duration-200">
                        <button
                            onClick={() => setShowComingSoon(false)}
                            className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
                        >
                            <X size={24} />
                        </button>
                        <div className="size-20 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
                            <Rocket size={40} className="text-primary animate-bounce" />
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">Coming Soon!</h3>
                        <p className="text-gray-500 font-medium">We're working hard to bring you detailed analysis and deeper insights. Stay tuned for updates!</p>
                        <button
                            onClick={() => setShowComingSoon(false)}
                            className="mt-8 w-full py-3 bg-primary text-white rounded-xl font-bold hover:bg-orange-600 transition-colors"
                        >
                            Got it
                        </button>
                    </div>
                </div>
            )}

        </DashboardLayout >
    )
}


export default Reports
