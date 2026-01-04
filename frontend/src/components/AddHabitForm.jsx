import { useState } from "react"
import { ArrowRight, Check, Bike, Layers, Clock, MapPin, Zap, Activity, Dumbbell, Footprints, BookOpen, PenTool, Briefcase, Code, Moon, Sun, Coffee, Music, Heart, Apple, Droplets, BedDouble, Utensils, Smile } from "lucide-react"
import { HABIT_COLORS } from "../utils/colors"

const iconOptions = [
    { name: "Zap", icon: Zap },
    { name: "Activity", icon: Activity },
    { name: "Dumbbell", icon: Dumbbell },
    { name: "Footprints", icon: Footprints },
    { name: "BookOpen", icon: BookOpen },
    { name: "PenTool", icon: PenTool },
    { name: "Briefcase", icon: Briefcase },
    { name: "Code", icon: Code },
    { name: "Moon", icon: Moon },
    { name: "Sun", icon: Sun },
    { name: "Coffee", icon: Coffee },
    { name: "Music", icon: Music },
    { name: "Heart", icon: Heart },
    { name: "Apple", icon: Apple },
    { name: "Droplets", icon: Droplets },
    { name: "BedDouble", icon: BedDouble },
    { name: "Utensils", icon: Utensils },
    { name: "Smile", icon: Smile },
]

const AddHabitForm = ({ onClose, onAddHabit, initialData }) => {
    const [step, setStep] = useState(1)
    const [formData, setFormData] = useState(initialData || {
        identity: "",
        habitName: "",
        iconName: "Zap",
        color: "orange",
        frequency: "Daily",
        time: "",
        location: "",
        stackingCue: "",
        target: "",
        repeatDays: [] // Initialize as empty array
    })

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const nextStep = () => setStep(step + 1)
    const prevStep = () => setStep(step - 1)

    const handleSubmit = () => {
        // Create new habit object ensuring all necessary fields are present
        if (onAddHabit) {
            onAddHabit(formData)
        }
        onClose()
    }

    return (
        <div className="flex flex-col h-[90vh] overflow-hidden rounded-2xl bg-white">
            {/* Header (Fixed) */}
            <div className="p-8 pb-0 shrink-0">
                <div className="flex items-center justify-between mb-2">
                    <h2 className="text-2xl font-extrabold text-gray-900">{initialData ? "Edit Habit" : "Create New Habit"}</h2>
                </div>
                <p className="text-gray-500">{initialData ? "Refine your system." : "Let's build a system for success."}</p>

                {/* Progress Bar */}
                <div className="flex gap-2 mt-6 mb-4">
                    {[1, 2, 3].map(i => (
                        <div key={i} className={`h-1.5 flex-1 rounded-full transition-all duration-500 ${i <= step ? "bg-primary" : "bg-gray-100"}`}></div>
                    ))}
                </div>
                <div className="flex justify-between text-xs font-bold text-gray-400 uppercase tracking-wider mb-6">
                    <span className={step >= 1 ? "text-primary" : ""}>Identity</span>
                    <span className={step >= 2 ? "text-primary" : ""}>The Plan</span>
                    <span className={step >= 3 ? "text-primary" : ""}>Stacking</span>
                </div>
            </div>

            {/* Body (Scrollable) */}
            <div className="px-8 pb-8 flex-1 overflow-y-auto custom-scrollbar">
                {/* Step 1: Identity */}
                {step === 1 && (
                    <div className="space-y-6 animate-in slide-in-from-right-8 duration-300 py-2">
                        <div className="space-y-3">
                            <label className="block">
                                <span className="text-lg font-bold text-gray-900 block mb-1">Who do you want to become?</span>
                                <span className="text-sm text-gray-500 block mb-3">True behavior change is identity change.</span>
                                <input
                                    type="text"
                                    name="identity"
                                    value={formData.identity}
                                    onChange={handleChange}
                                    placeholder="e.g. A Runner, A Writer, Healthy Eater"
                                    className="w-full h-12 px-4 rounded-xl border-2 border-gray-100 focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none transition-all text-lg font-medium placeholder:text-gray-300"
                                    autoFocus
                                />
                            </label>
                        </div>

                        <div className="space-y-3">
                            <label className="block">
                                <span className="text-lg font-bold text-gray-900 block mb-1">What is the habit?</span>
                                <span className="text-sm text-gray-500 block mb-3">Make it specific and actionable.</span>
                                <input
                                    type="text"
                                    name="habitName"
                                    value={formData.habitName}
                                    onChange={handleChange}
                                    placeholder="e.g. Run 5km, Read 10 pages"
                                    className="w-full h-12 px-4 rounded-xl border-2 border-gray-100 focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none transition-all text-lg font-medium placeholder:text-gray-300"
                                />
                            </label>
                        </div>

                        <div className="space-y-3">
                            <label className="block">
                                <span className="text-sm font-bold text-gray-900 block mb-3">Choose an Icon</span>
                                <div className="grid grid-cols-8 gap-2">
                                    {iconOptions.map((option) => {
                                        const Icon = option.icon
                                        const isSelected = formData.iconName === option.name
                                        return (
                                            <button
                                                key={option.name}
                                                onClick={() => setFormData({ ...formData, iconName: option.name })}
                                                className={`
                                                    h-10 flex items-center justify-center rounded-lg transition-all duration-200
                                                    ${isSelected
                                                        ? "bg-primary text-white shadow-md shadow-primary/25 scale-105"
                                                        : "bg-gray-50 text-gray-400 hover:bg-gray-100 hover:text-gray-600"
                                                    }
                                                `}
                                                title={option.name}
                                            >
                                                <Icon size={18} />
                                            </button>
                                        )
                                    })}
                                </div>
                            </label>
                        </div>
                    </div>
                )}

                {/* Step 2: Plan */}
                {step === 2 && (
                    <div className="space-y-6 animate-in slide-in-from-right-8 duration-300 py-2">
                        {/* Frequency */}
                        <div>
                            <label className="text-sm font-bold text-gray-900 block mb-3">Frequency</label>
                            <div className="flex bg-gray-50 p-1.5 rounded-xl border border-gray-100">
                                {["Daily", "Weekly", "Monthly"].map((freq) => (
                                    <button
                                        key={freq}
                                        onClick={() => setFormData({ ...formData, frequency: freq, repeatDays: [] })}
                                        className={`flex-1 py-2.5 text-sm font-bold rounded-lg transition-all duration-300 ${formData.frequency === freq
                                            ? "bg-white text-primary shadow-md shadow-gray-200 ring-1 ring-black/5"
                                            : "text-gray-500 hover:text-gray-900 hover:bg-gray-100"
                                            }`}
                                    >
                                        {freq}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Repeat Days Selection (Only for Weekly) */}
                        {formData.frequency === "Weekly" && (
                            <div className="animate-in slide-in-from-top-2 duration-200">
                                <label className="text-sm font-bold text-gray-900 block mb-3">Repeat on</label>
                                <div className="flex justify-between gap-2">
                                    {["S", "M", "T", "W", "T", "F", "S"].map((day, index) => {
                                        const fullDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
                                        const fullDay = fullDays[index]
                                        const isSelected = formData.repeatDays?.includes(fullDay)

                                        return (
                                            <button
                                                key={index}
                                                onClick={() => {
                                                    const currentDays = formData.repeatDays || []
                                                    const newDays = isSelected
                                                        ? currentDays.filter(d => d !== fullDay)
                                                        : [...currentDays, fullDay]
                                                    setFormData({ ...formData, repeatDays: newDays })
                                                }}
                                                className={`
                                                    size-10 rounded-full font-bold text-sm transition-all duration-200
                                                    ${isSelected
                                                        ? "bg-primary text-white shadow-md shadow-primary/25 scale-110"
                                                        : "bg-gray-100 text-gray-400 hover:bg-gray-200"
                                                    }
                                                `}
                                                title={fullDay}
                                            >
                                                {day}
                                            </button>
                                        )
                                    })}
                                </div>
                            </div>
                        )}

                        {/* Monthly Date Selection */}
                        {formData.frequency === "Monthly" && (
                            <div className="animate-in slide-in-from-top-2 duration-200">
                                <label className="text-sm font-bold text-gray-900 block mb-3">Select Dates</label>
                                <div className="grid grid-cols-7 gap-2">
                                    {Array.from({ length: 31 }, (_, i) => (i + 1).toString()).map((date) => {
                                        const isSelected = formData.repeatDays?.includes(date)
                                        return (
                                            <button
                                                key={date}
                                                onClick={() => {
                                                    const currentDays = formData.repeatDays || []
                                                    const newDays = isSelected
                                                        ? currentDays.filter(d => d !== date)
                                                        : [...currentDays, date]
                                                    setFormData({ ...formData, repeatDays: newDays })
                                                }}
                                                className={`
                                                    h-8 rounded-lg font-bold text-xs transition-all duration-200
                                                    ${isSelected
                                                        ? "bg-primary text-white shadow-md shadow-primary/25 scale-105"
                                                        : "bg-gray-50 text-gray-400 hover:bg-gray-100 hover:text-gray-600"
                                                    }
                                                `}
                                            >
                                                {date}
                                            </button>
                                        )
                                    })}
                                    <button
                                        onClick={() => {
                                            const currentDays = formData.repeatDays || []
                                            const isSelected = currentDays.includes("Last")
                                            const newDays = isSelected
                                                ? currentDays.filter(d => d !== "Last")
                                                : [...currentDays, "Last"]
                                            setFormData({ ...formData, repeatDays: newDays })
                                        }}
                                        className={`
                                            col-span-4 h-8 rounded-lg font-bold text-xs transition-all duration-200
                                            ${formData.repeatDays?.includes("Last")
                                                ? "bg-primary text-white shadow-md shadow-primary/25 scale-105"
                                                : "bg-gray-50 text-gray-400 hover:bg-gray-100 hover:text-gray-600"
                                            }
                                        `}
                                    >
                                        Last Day
                                    </button>
                                </div>
                            </div>
                        )}

                        <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <label className="flex items-center gap-2 text-sm font-bold text-gray-900">
                                    <Clock size={16} className="text-primary" />
                                    When?
                                </label>
                                <input
                                    type="text"
                                    name="time"
                                    value={formData.time}
                                    onChange={handleChange}
                                    placeholder="7:00 AM"
                                    className="w-full h-11 px-4 rounded-xl border-2 border-gray-100 focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none transition-all font-medium"
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="flex items-center gap-2 text-sm font-bold text-gray-900">
                                    <MapPin size={16} className="text-primary" />
                                    Where?
                                </label>
                                <input
                                    type="text"
                                    name="location"
                                    value={formData.location}
                                    onChange={handleChange}
                                    placeholder="Bedroom"
                                    className="w-full h-11 px-4 rounded-xl border-2 border-gray-100 focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none transition-all font-medium"
                                />
                            </div>
                        </div>

                        {/* Color Selection */}
                        <div>
                            <label className="text-sm font-bold text-gray-900 block mb-3">Color Theme</label>
                            <div className="flex flex-wrap gap-2">
                                {HABIT_COLORS.map((color) => (
                                    <button
                                        key={color.name}
                                        onClick={() => setFormData({ ...formData, color: color.name })}
                                        className={`size-8 rounded-full transition-all duration-300 ${color.primary} ${formData.color === color.name
                                            ? "ring-4 ring-gray-100 scale-110"
                                            : "hover:scale-110 opacity-70 hover:opacity-100"
                                            }`}
                                        title={color.label}
                                    />
                                ))}
                            </div>
                        </div>

                        {/* Target */}
                        <div className="space-y-2">
                            <label className="text-sm font-bold text-gray-900 block">Daily Target</label>
                            <input
                                type="text"
                                name="target"
                                value={formData.target}
                                onChange={handleChange}
                                placeholder="e.g. 5 km, 10 pages, 30 mins"
                                className="w-full h-11 px-4 rounded-xl border-2 border-gray-100 focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none transition-all font-medium"
                            />
                        </div>

                        <div className="bg-orange-50 p-4 rounded-xl border border-orange-100 flex gap-3 items-start">
                            <div className="mt-1">
                                <div className="size-5 rounded-full bg-orange-100 flex items-center justify-center text-orange-600 font-bold text-[10px]">i</div>
                            </div>
                            <p className="text-sm text-gray-800 font-medium leading-relaxed italic">
                                "{formData.frequency === "Weekly" && formData.repeatDays?.length > 0
                                    ? `Every ${formData.repeatDays.join(", ")}`
                                    : formData.frequency === "Monthly" && formData.repeatDays?.length > 0
                                        ? `On the ${formData.repeatDays.map(d => d === "Last" ? "Last day" : d + (["1", "21", "31"].includes(d) ? "st" : ["2", "22"].includes(d) ? "nd" : ["3", "23"].includes(d) ? "rd" : "th")).join(", ")}`
                                        : formData.frequency === "Daily" ? "Every day" : formData.frequency === "Weekly" ? "Every week" : "Every month"}, I will <span className="text-primary font-bold">{formData.habitName || "..."}</span> at <span className="text-primary font-bold">{formData.time || "..."}</span> in <span className="text-primary font-bold">{formData.location || "..."}</span>."
                            </p>
                        </div>
                    </div>
                )}

                {/* Step 3: Stacking */}
                {step === 3 && (
                    <div className="space-y-6 animate-in slide-in-from-right-8 duration-300 py-2">
                        <div className="bg-primary/5 p-5 rounded-xl border border-primary/10">
                            <div className="flex items-center gap-3 mb-3">
                                <div className="p-1.5 bg-primary/10 rounded-lg text-primary">
                                    <Layers size={20} />
                                </div>
                                <div>
                                    <h3 className="font-bold text-base text-gray-900">Habit Stacking</h3>
                                    <p className="text-xs text-gray-500">Stack onto an existing habit.</p>
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-xs font-bold text-gray-900 uppercase tracking-wide">After I...</label>
                                <input
                                    type="text"
                                    name="stackingCue"
                                    value={formData.stackingCue}
                                    onChange={handleChange}
                                    placeholder="e.g. Pour my morning coffee"
                                    className="w-full h-12 px-4 rounded-xl border-2 border-gray-200 focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none transition-all text-base font-medium bg-white"
                                />
                            </div>
                        </div>

                        <div className="flex flex-col items-center justify-center gap-3 text-center py-4">
                            <p className="text-lg text-gray-400 font-medium">
                                After I <strong className="text-gray-900 border-b-2 border-primary/30">{formData.stackingCue || "..."}</strong>, <br />
                                I will <strong className="text-gray-900 border-b-2 border-primary/30">{formData.habitName || "..."}</strong>.
                            </p>
                        </div>
                    </div>
                )}
            </div>

            {/* Footer Actions (Fixed) */}
            <div className="p-6 border-t border-gray-100 flex justify-between bg-gray-50/50 shrink-0">
                {step > 1 ? (
                    <button
                        onClick={prevStep}
                        className="px-6 h-12 text-sm font-bold text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-xl transition-all"
                    >
                        Back
                    </button>
                ) : (
                    <div></div>
                )}

                {step < 3 ? (
                    <button
                        onClick={nextStep}
                        className="px-8 h-12 bg-gray-900 text-white rounded-xl font-bold text-sm hover:bg-gray-800 hover:translate-x-1 transition-all flex items-center gap-2 shadow-lg shadow-gray-900/20"
                    >
                        Next
                        <ArrowRight size={18} />
                    </button>
                ) : (
                    <button
                        onClick={handleSubmit}
                        className="px-8 h-12 bg-primary text-white rounded-xl font-bold text-sm hover:bg-orange-600 hover:scale-105 transition-all flex items-center gap-2 shadow-xl shadow-primary/30"
                    >
                        {initialData ? "Save Changes" : "Create"}
                        <Check size={18} />
                    </button>
                )}
            </div>
        </div>
    )
}

export default AddHabitForm
