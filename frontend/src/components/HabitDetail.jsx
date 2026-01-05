import { useState } from "react"
import { Flame, Calendar, Trophy, MapPin, Clock, Edit, Trash2, X, CheckCircle } from "lucide-react"
import { getColorClass } from "../utils/colors"

const HabitDetail = ({ habit, onClose, onEdit, onDelete }) => {
    if (!habit) return null

    const Icon = habit.icon
    const theme = getColorClass(habit.color)

    return (
        <div className="flex flex-col">
            {/* Header */}
            <div className={`relative p-8 pb-6 ${theme.light} bg-opacity-50 flex flex-row items-center gap-6`}>
                <button
                    onClick={onClose}
                    className="absolute right-4 top-4 p-2 rounded-full hover:bg-black/5 text-gray-400 hover:text-gray-600 transition-colors"
                >
                    <X size={20} />
                </button>

                <div className={`size-20 rounded-2xl bg-white ${theme.border} flex items-center justify-center transition-transform hover:scale-105 duration-300 shadow-sm`}>
                    <Icon size={40} className={theme.text} />
                </div>

                <div className="flex flex-col items-start text-left">
                    <h2 className="text-2xl font-extrabold text-gray-900 mb-1">{habit.title}</h2>
                    <p className="text-base font-medium text-gray-500">{habit.subtitle}</p>
                </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-3 gap-px bg-gray-100 border-y border-gray-100">
                <div className={`bg-white p-4 lg:p-6 flex flex-col items-center justify-center gap-2 group hover:${theme.light} hover:bg-opacity-30 transition-colors`}>
                    <div className={`p-2 rounded-full ${theme.light} ${theme.text}`}>
                        <Flame size={20} className="fill-current" />
                    </div>
                    <div className="text-center">
                        <span className="block text-xl font-extrabold text-gray-900">{habit.streak}</span>
                        <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">Streak</span>
                    </div>
                </div>
                <div className={`bg-white p-4 lg:p-6 flex flex-col items-center justify-center gap-2 group hover:${theme.light} hover:bg-opacity-30 transition-colors`}>
                    <div className="p-2 rounded-full bg-green-100 text-green-600">
                        <CheckCircle size={20} />
                    </div>
                    <div className="text-center">
                        <span className="block text-xl font-extrabold text-gray-900">{habit.totalCompletions || 0}</span>
                        <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">Total</span>
                    </div>
                </div>
                <div className={`bg-white p-4 lg:p-6 flex flex-col items-center justify-center gap-2 group hover:${theme.light} hover:bg-opacity-30 transition-colors`}>
                    <div className="p-2 rounded-full bg-yellow-100 text-yellow-600">
                        <Trophy size={20} />
                    </div>
                    <div className="text-center">
                        <span className="block text-xl font-extrabold text-gray-900">{habit.bestStreak || 0}</span>
                        <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">Best</span>
                    </div>
                </div>
            </div>

            {/* Details List */}
            <div className="p-8 space-y-6">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                    <div className="space-y-1">
                        <span className="text-xs font-bold text-gray-400 uppercase tracking-wider block mb-1">Frequency</span>
                        <div className="flex items-center gap-2 text-gray-900 font-bold">
                            <Calendar size={18} className={theme.text} />
                            {(() => {
                                if (habit.frequency === "Weekly" && habit.repeatDays?.length > 0) {
                                    return (
                                        <div className="flex flex-col">
                                            <span>{habit.repeatDays.length}x / week</span>
                                            <span className="text-xs text-gray-500 font-normal leading-tight mt-0.5">
                                                {habit.repeatDays.map(d => d.slice(0, 3)).join(", ")}
                                            </span>
                                        </div>
                                    )
                                }
                                if (habit.frequency === "Monthly" && habit.repeatDays?.length > 0) {
                                    return (
                                        <div className="flex flex-col">
                                            <span>{habit.repeatDays.length}x / month</span>
                                            <span className="text-xs text-gray-500 font-normal leading-tight mt-0.5">
                                                {habit.repeatDays.map(d => {
                                                    if (d === "Last") return "Last"
                                                    const num = parseInt(d)
                                                    if ([1, 21, 31].includes(num)) return `${d}st`
                                                    if ([2, 22].includes(num)) return `${d}nd`
                                                    if ([3, 23].includes(num)) return `${d}rd`
                                                    return `${d}th`
                                                }).join(", ")}
                                            </span>
                                        </div>
                                    )
                                }
                                return <span>{habit.frequency}</span>
                            })()}
                        </div>
                    </div>
                    <div className="space-y-1">
                        <span className="text-xs font-bold text-gray-400 uppercase tracking-wider block mb-1">Target</span>
                        <div className="flex items-center gap-2 text-gray-900 font-bold">
                            <Trophy size={18} className={theme.text} />
                            {habit.target || "No specific target"}
                        </div>
                    </div>
                    <div className="space-y-1">
                        <span className="text-xs font-bold text-gray-400 uppercase tracking-wider block mb-1">Time</span>
                        <div className="flex items-center gap-2 text-gray-900 font-bold">
                            <Clock size={18} className={theme.text} />
                            {habit.time || "Any time"}
                        </div>
                    </div>
                    <div className="space-y-1">
                        <span className="text-xs font-bold text-gray-400 uppercase tracking-wider block mb-1">Location</span>
                        <div className="flex items-center gap-2 text-gray-900 font-bold">
                            <MapPin size={18} className={theme.text} />
                            {habit.location || "Anywhere"}
                        </div>
                    </div>
                </div>

                {habit.stackingCue && (
                    <div className="bg-gray-50 p-4 rounded-xl border border-gray-100">
                        <span className="text-xs font-bold text-gray-400 uppercase tracking-wider block mb-2">Habit Stack</span>
                        <p className="font-medium text-gray-800">
                            "After I <span className="font-bold text-gray-900">{habit.stackingCue}</span>, I will <span className={`${theme.text} font-bold`}>{habit.title}</span>."
                        </p>
                    </div>
                )}
            </div>

            {/* Actions Footer */}
            <div className="p-6 border-t border-gray-100 flex gap-4 bg-gray-50/50">
                <button
                    onClick={onEdit}
                    className="flex-1 h-12 flex items-center justify-center gap-2 bg-white border border-gray-200 text-gray-700 font-bold rounded-xl hover:bg-gray-50 hover:border-gray-300 transition-all"
                >
                    <Edit size={18} />
                    Edit Habit
                </button>
                <button
                    onClick={onDelete}
                    className="h-12 w-12 flex items-center justify-center bg-red-50 text-red-500 rounded-xl hover:bg-red-100 transition-all"
                >
                    <Trash2 size={20} />
                </button>
            </div>
        </div>
    )
}

export default HabitDetail
