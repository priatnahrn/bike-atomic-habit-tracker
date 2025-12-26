import { Link } from "react-router-dom"
import { useState } from "react"
import { Eye, EyeOff, Check, X, ArrowRight, Bike, TrendingUp, Shield } from "lucide-react"

const Login = () => {
    const [password, setPassword] = useState("")
    const [showPassword, setShowPassword] = useState(false)
    const [currentSlide, setCurrentSlide] = useState(0)

    const slides = [
        {
            icon: Bike,
            title: "Welcome to BIKE",
            description: "Your journey to better habits starts with a single pedal. Track your progress, build momentum, and enjoy the ride.",
            step: 1
        },
        {
            icon: TrendingUp,
            title: "Track Your Progress",
            description: "Visualize your daily improvements with intuitive charts and streaks. See how far you've come at a glance.",
            step: 2
        },
        {
            icon: Shield,
            title: "Stay Consistent",
            description: "Build an unbreakable habit loop. Our tools help you stay accountable and motivated every single day.",
            step: 3
        }
    ]

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % slides.length)
    }

    const validations = [
        { label: "At least 8 characters", valid: password.length >= 8 },
        { label: "Contains a number", valid: /\d/.test(password) },
        { label: "Contains subtle special char (@$!%*?&)", valid: /[@$!%*?&]/.test(password) },
        { label: "Contains uppercase letter", valid: /[A-Z]/.test(password) },
    ]

    return (
        <div className="grid md:grid-cols-2 min-h-screen font-manrope">
            {/* Left Side - Onboarding Slider */}
            <div className="hidden md:flex flex-col justify-center items-center bg-gray-50 p-12 relative overflow-hidden">
                <div className="absolute inset-0 bg-primary/5"></div>

                <div className="relative z-10 w-full max-w-lg transition-all duration-500 ease-in-out">
                    {slides.map((slide, index) => (
                        <div
                            key={index}
                            className={`flex flex-col items-start gap-8 transition-opacity duration-500 absolute w-full top-1/2 -translate-y-1/2 ${index === currentSlide ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
                                }`}
                        >
                            <div className="space-y-4">
                                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-100 text-primary text-xs font-bold uppercase tracking-wider">
                                    Step {slide.step} of {slides.length}
                                </div>
                                <h1 className="text-5xl lg:text-6xl font-extrabold leading-[1.1] tracking-tight text-gray-900">
                                    {slide.title === "Welcome to BIKE" ? (
                                        <>Welcome to <span className="text-primary">BIKE</span></>
                                    ) : (
                                        slide.title
                                    )}
                                </h1>
                                <p className="text-xl text-gray-600 font-medium leading-relaxed">
                                    {slide.description}
                                </p>
                            </div>

                            {/* Progress Indicators */}
                            <div className="flex items-center gap-3">
                                {slides.map((_, i) => (
                                    <div
                                        key={i}
                                        className={`h-2 rounded-full transition-all duration-300 ${i === currentSlide ? "w-8 bg-primary" : "w-2 bg-gray-300"
                                            }`}
                                    ></div>
                                ))}
                            </div>

                            {/* Action Buttons */}
                            <div className="flex flex-col sm:flex-row items-center gap-4 w-full pt-4">
                                <button
                                    onClick={nextSlide}
                                    className="group relative flex w-auto min-w-[160px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-14 px-8 bg-primary hover:bg-orange-600 text-white shadow-lg shadow-orange-500/30 transition-all duration-300 active:scale-95"
                                >
                                    <span className="text-lg font-bold mr-2">
                                        {currentSlide === slides.length - 1 ? "Start Now" : "Next Step"}
                                    </span>
                                    <ArrowRight className="transition-transform duration-300 group-hover:translate-x-1" size={24} />
                                </button>
                            </div>
                        </div>
                    ))}

                    {/* Placeholder div to maintain height as slides are absolute */}
                    <div className="invisible opacity-0 pointer-events-none flex flex-col items-start gap-8">
                        <div className="space-y-4">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-100 text-primary text-xs font-bold uppercase tracking-wider">
                                Step 1 of 3
                            </div>
                            <h1 className="text-6xl font-extrabold leading-[1.1] tracking-tight text-gray-900">
                                Placeholder Title
                            </h1>
                            <p className="text-xl text-gray-600 font-medium leading-relaxed">
                                Placeholder description to ensure the container keeps its height and width properly.
                            </p>
                        </div>
                        <div className="h-14"></div>
                    </div>
                </div>
            </div>

            <div className="p-6 md:p-12 flex flex-col justify-center gap-6 bg-white">
                <div>
                    <h1 className="text-3xl font-bold text-neutral">Welcome Back!</h1>
                    <p className="text-gray-500 mt-2">We missed you. Let's get you back on track.</p>
                </div>

                <form className="flex flex-col gap-5" autoComplete="off">
                    <div className="flex flex-col gap-2">
                        <label htmlFor="email" className="font-medium text-neutral">Email</label>
                        <input
                            type="email"
                            id="email"
                            className="border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all duration-300 w-full"
                            placeholder="Enter your email"
                            autoComplete="off"
                        />
                    </div>

                    <div className="flex flex-col gap-2">
                        <div className="flex justify-between items-center">
                            <label htmlFor="password" className="font-medium text-neutral">Password</label>
                            <Link to="/forgot-password" className="text-sm text-primary hover:underline font-medium">Forgot Password?</Link>
                        </div>
                        <div className="relative">
                            <input
                                type={showPassword ? "text" : "password"}
                                id="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="border border-gray-200 rounded-lg pl-4 pr-12 py-3 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all duration-300 w-full"
                                placeholder="Enter your password"
                                autoComplete="new-password"
                            />
                            <button
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-primary transition-colors cursor-pointer"
                            >
                                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                            </button>
                        </div>
                    </div>

                    {/* Password Strength Validation */}
                    {password && (
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 p-4 bg-gray-50 rounded-lg border border-gray-100 animate-in fade-in slide-in-from-top-2 duration-300">
                            {validations.map((item, index) => (
                                <div key={index} className="flex items-center gap-2 text-xs">
                                    {item.valid ? (
                                        <div className="p-0.5 bg-green-100 rounded-full text-green-600">
                                            <Check size={10} strokeWidth={4} />
                                        </div>
                                    ) : (
                                        <div className="p-0.5 bg-gray-200 rounded-full text-gray-400">
                                            <X size={10} strokeWidth={4} />
                                        </div>
                                    )}
                                    <span className={item.valid ? "text-green-700 font-medium" : "text-gray-500"}>
                                        {item.label}
                                    </span>
                                </div>
                            ))}
                        </div>
                    )}

                    <button className="btn w-full py-3 bg-primary text-white rounded-lg font-bold text-lg hover:bg-primary/90 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 transform mt-2">
                        Sign In
                    </button>

                    <div className="text-center text-sm text-gray-500 mt-2">
                        Don't have an account? <Link to="/register" className="text-primary font-bold hover:underline">Sign Up</Link>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login
