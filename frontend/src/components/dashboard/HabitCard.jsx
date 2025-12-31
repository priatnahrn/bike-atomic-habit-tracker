import { CheckCircle, Flame, Calendar, Trophy, Check } from "lucide-react"
import { useState } from "react"

const HabitCard = ({ habit, onClick }) => {
    const { title, subtitle, icon: Icon, streak, frequency, target, isCompleted = false } = habit
    const [completed, setCompleted] = useState(isCompleted)

    const handleCheckIn = () => {
        setCompleted(!completed)
    }

    return (
        <div
            onClick={onClick}
            className={`group flex flex-col justify-between h-64 p-6 rounded-2xl border transition-all duration-300 relative overflow-hidden cursor-pointer ${completed
                ? "bg-primary/5 border-primary shadow-md"
                : "bg-white border-gray-100 shadow-sm hover:shadow-md hover:-translate-y-1 hover:border-primary/50"
                }`}>
            {/* Background Icon Effect */}
            <Icon
                strokeWidth={1}
                className={`absolute -right-4 -bottom-4 transition-colors duration-300 select-none ${completed ? "text-primary/10" : "text-gray-50 group-hover:text-primary/5"
                    }`}
                size={140}
            />

            {/* Header */}
            <div className="flex justify-between items-start z-10">
                <div className={`p-3 rounded-xl transition-colors duration-300 ${completed ? "bg-primary text-white" : "bg-gray-50 text-gray-900 group-hover:bg-primary/10 group-hover:text-primary"
                    }`}>
                    <Icon size={24} />
                </div>

                <div className="flex items-center gap-1 px-2 py-1 bg-white/80 rounded-lg border border-gray-100 backdrop-blur-sm">
                    <Flame size={14} className="text-primary fill-current animate-pulse" />
                    <span className="text-xs font-bold text-gray-900">{streak} Streak</span>
                </div>
            </div>

            {/* Title & Info */}
            <div className="mt-4 z-10">
                <div className="flex items-center justify-between">
                    <h2 className={`text-xl font-extrabold leading-tight transition-colors duration-300 ${completed ? "text-primary" : "text-gray-900 group-hover:text-primary"
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
                            <Trophy size={14} className="text-primary" />
                            <span>target: {target}</span>
                        </div>
                    )}
                    <p className="text-xs text-gray-400 mt-1 italic">
                        {subtitle}
                    </p>
                </div>
            </div>

            {/* Action Footer */}
            <div className="mt-auto z-10">
                <button
                    onClick={(e) => {
                        e.stopPropagation()
                        handleCheckIn()
                    }}
                    className={`w-full h-12 flex items-center justify-center gap-2 rounded-xl font-bold transition-all duration-300 ${completed
                        ? "bg-primary text-white shadow-lg shadow-primary/20 hover:bg-primary/90"
                        : "bg-gray-100 text-gray-900 hover:bg-primary hover:text-white"
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
