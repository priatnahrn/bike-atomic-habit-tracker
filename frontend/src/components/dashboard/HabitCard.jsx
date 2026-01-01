import { CheckCircle, Flame, Calendar, Trophy, Check } from "lucide-react"
import { useState } from "react"
import { getColorClass } from "../../utils/colors"

const HabitCard = ({ habit, onClick }) => {
    const { title, subtitle, icon: Icon, streak, frequency, target, isCompleted = false, color } = habit
    const [completed, setCompleted] = useState(isCompleted)

    // Get color theme based on habit.color
    const theme = getColorClass(color)

    const handleCheckIn = () => {
        setCompleted(!completed)
    }

    return (
        <div
            onClick={onClick}
            className={`group flex flex-col justify-between h-64 p-6 rounded-3xl border transition-all duration-300 ease-in-out relative overflow-hidden cursor-pointer ${completed
                ? `${theme.light} ${theme.borderCompleted || "border-gray-200"}` // Light bg + light border when completed
                : `bg-white border-gray-100 ${theme.hoverBorder} hover:bg-gray-50/50`
                }`}>
            {/* Background Icon Effect */}
            <Icon
                strokeWidth={1}
                className={`absolute -right-4 -bottom-4 transition-colors duration-500 select-none ${completed ? `${theme.text} opacity-10` : `text-gray-50 group-hover:${theme.text} group-hover:opacity-5`
                    }`}
                size={140}
            />

            {/* Header */}
            <div className="flex justify-between items-start z-10">
                <div className={`p-3 rounded-2xl transition-colors duration-300 ${completed ? `${theme.primary} text-white` : `bg-gray-50 text-gray-900 group-hover:${theme.light} group-hover:${theme.text}`
                    }`}>
                    <Icon size={24} />
                </div>

                <div className="flex items-center gap-1 px-3 py-1 bg-white/60 rounded-full border border-gray-100 backdrop-blur-sm">
                    <Flame size={14} className={`${theme.text} fill-current animate-pulse`} />
                    <span className="text-xs font-bold text-gray-900">{streak} Streak</span>
                </div>
            </div>

            {/* Title & Info */}
            <div className="mt-4 z-10">
                <div className="flex items-center justify-between">
                    <h2 className={`text-xl font-extrabold leading-tight transition-colors duration-300 ${completed ? theme.text : `text-gray-900 group-hover:${theme.text}`
                        }`}>
                        {title}
                    </h2>
                </div>

                <div className="flex flex-col gap-1 mt-2">
                    <div className="flex items-center gap-2 text-xs font-medium text-gray-500">
                        <Calendar size={12} />
                        <span className="uppercase tracking-wider">{frequency}</span>
                    </div>
                    {target && (
                        <div className="flex items-center gap-2 text-sm font-medium text-gray-600">
                            <Trophy size={14} className={theme.text} />
                            <span>{target}</span>
                        </div>
                    )}
                </div>
            </div>

            {/* Action Footer */}
            <div className="mt-auto z-10">
                <button
                    onClick={(e) => {
                        e.stopPropagation()
                        handleCheckIn()
                    }}
                    className={`w-full h-12 flex items-center justify-center gap-2 rounded-2xl font-bold transition-all duration-300 ${completed
                        ? `${theme.button} text-white hover:opacity-90`
                        : `bg-gray-100 text-gray-900 hover:${theme.button} hover:text-white`
                        }`}
                >
                    {completed ? (
                        <>
                            <CheckCircle size={20} />
                            Completed
                        </>
                    ) : (
                        <>
                            <Check size={20} />
                            Check In
                        </>
                    )}
                </button>
            </div>
        </div>
    )
}

export default HabitCard
