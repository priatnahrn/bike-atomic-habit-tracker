import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { ArrowRight, Check, Target, Zap, Heart, BookOpen, Briefcase, Smile, Star, TrendingUp } from "lucide-react"

const Onboarding = () => {
    const navigate = useNavigate()
    const [step, setStep] = useState(1)
    const [goal, setGoal] = useState("")
    const [focusAreas, setFocusAreas] = useState([])

    const totalSteps = 3

    const handleGoalSelect = (selectedGoal) => {
        setGoal(selectedGoal)
    }

    const handleFocusToggle = (area) => {
        if (focusAreas.includes(area)) {
            setFocusAreas(focusAreas.filter(a => a !== area))
        } else {
            setFocusAreas([...focusAreas, area])
        }
    }

    const nextStep = async () => {
        if (step < totalSteps) {
            setStep(step + 1)
        } else {
            try {
                const token = localStorage.getItem("token");
                const response = await fetch(`${import.meta.env.VITE_API_URL}/api/user/onboarding`, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": `Bearer ${token}`
                    },
                    body: JSON.stringify({
                        goal,
                        focusAreas
                    })
                });

                if (!response.ok) {
                    throw new Error("Failed to save preferences");
                }

                navigate("/dashboard")
            } catch (error) {
                console.error("Onboarding error:", error);
                // Optionally show error toast here, but for now just navigate or alert
                navigate("/dashboard"); // Fallback to dashboard even if save fails, or handle differently
            }
        }
    }

    const prevStep = () => {
        if (step > 1) {
            setStep(step - 1)
        }
    }

    const isStep1Valid = goal !== ""
    const isStep2Valid = focusAreas.length > 0

    return (
        <div className="min-h-screen bg-gray-50 flex flex-col font-manrope">
            {/* Progress Bar */}
            <div className="w-full h-2 bg-gray-200">
                <div
                    className="h-full bg-primary transition-all duration-500 ease-out"
                    style={{ width: `${(step / totalSteps) * 100}%` }}
                ></div>
            </div>

            <div className="flex-grow flex flex-col items-center justify-center p-6 md:p-12">
                <div className="w-full max-w-2xl bg-white rounded-2xl shadow-xl p-8 md:p-12 transition-all duration-300">

                    {/* Header */}
                    <div className="mb-8 text-center">
                        <span className="inline-block px-3 py-1 bg-orange-100 text-primary rounded-full text-xs font-bold tracking-wider uppercase mb-4">
                            Step {step} of {totalSteps}
                        </span>
                    </div>

                    {/* Step 1: Primary Goal */}
                    {step === 1 && (
                        <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 text-center mb-4">
                                What's your main focus?
                            </h2>
                            <p className="text-gray-500 text-center mb-10 text-lg">
                                Let's personalize your experience to help you achieve more.
                            </p>

                            <div className="grid md:grid-cols-2 gap-4">
                                <button
                                    onClick={() => handleGoalSelect("build")}
                                    className={`p-6 rounded-xl border-2 text-left transition-all duration-300 flex flex-col gap-4 group ${goal === "build"
                                        ? "border-primary bg-orange-50 ring-2 ring-primary ring-offset-2"
                                        : "border-gray-100 hover:border-primary/50 hover:shadow-md bg-white"
                                        }`}
                                >
                                    <div className={`p-3 rounded-full w-fit ${goal === "build" ? "bg-primary text-white" : "bg-gray-100 text-gray-500 group-hover:text-primary group-hover:bg-orange-100"}`}>
                                        <TrendingUp size={24} />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-lg text-gray-900">Build New Habits</h3>
                                        <p className="text-sm text-gray-500 mt-1">I want to start doing something good for myself consistently.</p>
                                    </div>
                                </button>

                                <button
                                    onClick={() => handleGoalSelect("break")}
                                    className={`p-6 rounded-xl border-2 text-left transition-all duration-300 flex flex-col gap-4 group ${goal === "break"
                                        ? "border-primary bg-orange-50 ring-2 ring-primary ring-offset-2"
                                        : "border-gray-100 hover:border-primary/50 hover:shadow-md bg-white"
                                        }`}
                                >
                                    <div className={`p-3 rounded-full w-fit ${goal === "break" ? "bg-primary text-white" : "bg-gray-100 text-gray-500 group-hover:text-primary group-hover:bg-orange-100"}`}>
                                        <Zap size={24} />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-lg text-gray-900">Break Bad Habits</h3>
                                        <p className="text-sm text-gray-500 mt-1">I want to stop doing things that hold me back.</p>
                                    </div>
                                </button>
                            </div>
                        </div>
                    )}

                    {/* Step 2: Focus Areas */}
                    {step === 2 && (
                        <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 text-center mb-4">
                                Choose your areas
                            </h2>
                            <p className="text-gray-500 text-center mb-10 text-lg">
                                Select all that apply to you. This helps us suggest relevant habits.
                            </p>

                            <div className="flex flex-wrap justify-center gap-3">
                                {[
                                    { id: "health", label: "Health & Fitness", icon: Heart },
                                    { id: "productivity", label: "Productivity", icon: Target },
                                    { id: "learning", label: "Learning", icon: BookOpen },
                                    { id: "mindfulness", label: "Mindfulness", icon: Smile },
                                    { id: "finance", label: "Finance", icon: Star },
                                    { id: "work", label: "Career & Work", icon: Briefcase },
                                ].map((area) => (
                                    <button
                                        key={area.id}
                                        onClick={() => handleFocusToggle(area.id)}
                                        className={`px-4 py-3 rounded-full border transition-all duration-200 flex items-center gap-2 ${focusAreas.includes(area.id)
                                            ? "bg-primary text-white border-primary shadow-lg scale-105"
                                            : "bg-white text-gray-600 border-gray-200 hover:border-primary/50 hover:bg-orange-50"
                                            }`}
                                    >
                                        <area.icon size={16} />
                                        <span className="font-medium">{area.label}</span>
                                        {focusAreas.includes(area.id) && <Check size={14} strokeWidth={3} />}
                                    </button>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Step 3: Commitment */}
                    {step === 3 && (
                        <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 text-center">
                            <div className="inline-flex justify-center items-center w-20 h-20 bg-green-100 text-green-600 rounded-full mb-6">
                                <Star size={40} fill="currentColor" />
                            </div>
                            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
                                You're All Set!
                            </h2>
                            <p className="text-gray-500 text-lg mb-8 max-w-md mx-auto">
                                You've taken the first step towards a better you. Your dashboard is ready to help you track your journey.
                            </p>

                            <div className="bg-gray-50 rounded-xl p-6 mb-8 text-left max-w-md mx-auto border border-gray-100">
                                <h4 className="font-bold text-gray-900 mb-2">Your Plan:</h4>
                                <ul className="space-y-2">
                                    <li className="flex items-center gap-2 text-gray-700">
                                        <Check size={16} className="text-primary" />
                                        Main Goal: <span className="font-medium">{goal === "build" ? "Build New Habits" : "Break Bad Habits"}</span>
                                    </li>
                                    <li className="flex items-start gap-2 text-gray-700">
                                        <Check size={16} className="text-primary mt-1" />
                                        <div>
                                            Focus Areas: <span className="font-medium capitalize">{focusAreas.join(", ")}</span>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    )}

                    {/* Footer / Navigation */}
                    <div className="mt-12 flex items-center justify-between pt-6 border-t border-gray-100">
                        <button
                            onClick={prevStep}
                            className={`text-gray-500 font-medium hover:text-gray-900 transition-colors ${step === 1 ? "invisible" : ""}`}
                        >
                            Back
                        </button>

                        <button
                            onClick={nextStep}
                            disabled={(step === 1 && !isStep1Valid) || (step === 2 && !isStep2Valid)}
                            className="btn bg-primary text-white px-8 py-3 rounded-lg font-bold shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none disabled:shadow-none flex items-center gap-2"
                        >
                            {step === 3 ? "Go to Dashboard" : "Continue"}
                            {step !== 3 && <ArrowRight size={18} />}
                        </button>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Onboarding
