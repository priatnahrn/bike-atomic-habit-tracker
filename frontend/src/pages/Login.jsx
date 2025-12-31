import { Link } from "react-router-dom"
import { useState } from "react"
import { Eye, EyeOff, Bike, TrendingUp, Shield, ArrowLeft } from "lucide-react"
import Slider from "../components/auth/Slider"

const Login = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")
    const [showPassword, setShowPassword] = useState(false)

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

    const isFormValid = email.trim() !== "" && password.trim() !== "";

    const handleSubmit = (e) => {
        e.preventDefault();

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            setError("Please enter a valid email address");
            return;
        }

        setError("Invalid email or password");
    }

    return (
        <div className="grid md:grid-cols-2 min-h-screen font-manrope">
            {/* Left Side - Onboarding Slider */}
            <div className="hidden md:flex flex-col justify-center items-center bg-gray-50 p-12 relative overflow-hidden">
                <div className="absolute inset-0 bg-primary/5"></div>
                <Slider slides={slides} />
            </div>

            <div className="p-6 md:p-12 flex flex-col bg-white h-full min-h-screen md:min-h-0">
                <div className="flex-grow flex flex-col justify-center gap-6">
                    <div>
                        <h1 className="text-3xl font-bold text-neutral">Welcome Back!</h1>
                        <p className="text-gray-500 mt-2">We missed you. Let's get you back on track.</p>
                    </div>

                    <form className="flex flex-col gap-5" autoComplete="off" onSubmit={handleSubmit} noValidate>
                        <div className="flex flex-col gap-2">
                            <label htmlFor="email" className="font-medium text-neutral">Email</label>
                            <input
                                type="email"
                                id="email"
                                value={email}
                                onChange={(e) => {
                                    setEmail(e.target.value);
                                    setError("");
                                }}
                                className={`border rounded-lg px-4 py-3 focus:outline-none focus:ring-1 transition-all duration-300 w-full ${error ? "border-red-300 focus:border-red-500 focus:ring-red-500" : "border-gray-200 focus:border-primary focus:ring-primary"
                                    }`}
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
                                    onChange={(e) => {
                                        setPassword(e.target.value);
                                        setError("");
                                    }}
                                    className={`border rounded-lg pl-4 pr-12 py-3 focus:outline-none focus:ring-1 transition-all duration-300 w-full ${error ? "border-red-300 focus:border-red-500 focus:ring-red-500" : "border-gray-200 focus:border-primary focus:ring-primary"
                                        }`}
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

                        {error && (
                            <div className="p-3 rounded-lg bg-red-50 text-red-500 text-sm font-medium flex items-center gap-2 animate-in fade-in slide-in-from-top-1">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><path d="m15 9-6 6" /><path d="m9 9 6 6" /></svg>
                                {error}
                            </div>
                        )}

                        <button
                            disabled={!isFormValid}
                            className="btn w-full py-3 bg-primary text-white rounded-lg font-bold text-lg hover:bg-primary/90 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 transform mt-2 disabled:bg-gray-300 disabled:cursor-not-allowed disabled:hover:translate-y-0 disabled:hover:shadow-none"
                        >
                            Sign In
                        </button>

                        <div className="text-center text-sm text-gray-500 mt-2">
                            Don't have an account? <Link to="/register" className="text-primary font-bold hover:underline">Sign Up</Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login
