import { Link, useNavigate } from "react-router-dom"
import { useState } from "react"
import { Eye, EyeOff, Check, X, ArrowRight, Bike, TrendingUp, Shield, ArrowLeft } from "lucide-react"
import Slider from "../components/auth/Slider"

const Register = () => {
    const [fullName, setFullName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [showPassword, setShowPassword] = useState(false)
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        // In a real app, you would register the user here
        navigate("/onboarding")
    }

    const slides = [
        {
            icon: Bike,
            title: "Join the Movement",
            description: "Be part of a community dedicated to building better habits. Start your journey with us today.",
            step: 1
        },
        {
            icon: TrendingUp,
            title: "Visualize Success",
            description: "Watch your progress grow day by day. Our tools help you see the bigger picture of your achievements.",
            step: 2
        },
        {
            icon: Shield,
            title: "Commit to Yourself",
            description: "Make a promise to yourself and keep it. We provide the structure you need to stay consistent.",
            step: 3
        }
    ]

    const validations = [
        { label: "At least 8 characters", valid: password.length >= 8 },
        { label: "Contains a number", valid: /\d/.test(password) },
        { label: "Contains at least one special char", valid: /[@$!%*?&]/.test(password) },
        { label: "Contains uppercase letter", valid: /[A-Z]/.test(password) },
    ]

    const isNameValid = fullName.trim().length > 2;
    const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    const isPasswordValid = validations.every(v => v.valid);
    const isFormValid = isNameValid && isEmailValid && isPasswordValid;

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
                        <h1 className="text-3xl font-bold text-neutral">Create Account</h1>
                        <p className="text-gray-500 mt-2">Start your journey to a better you.</p>
                    </div>

                    <form className="flex flex-col gap-4" autoComplete="off" onSubmit={handleSubmit}>
                        <div className="flex flex-col gap-2">
                            <label htmlFor="fullName" className="font-medium text-neutral">Full Name</label>
                            <input
                                type="text"
                                id="fullName"
                                value={fullName}
                                onChange={(e) => setFullName(e.target.value)}
                                className={`border rounded-lg px-4 py-3 focus:outline-none focus:ring-1 transition-all duration-300 w-full ${fullName && !isNameValid ? 'border-red-300 focus:border-red-500 focus:ring-red-500' : 'border-gray-200 focus:border-primary focus:ring-primary'
                                    }`}
                                placeholder="Enter your full name"
                            />
                            {fullName && !isNameValid && <span className="text-xs text-red-500">Name must be at least 3 characters</span>}
                        </div>

                        <div className="flex flex-col gap-2">
                            <label htmlFor="email" className="font-medium text-neutral">Email</label>
                            <input
                                type="email"
                                id="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className={`border rounded-lg px-4 py-3 focus:outline-none focus:ring-1 transition-all duration-300 w-full ${email && !isEmailValid ? 'border-red-300 focus:border-red-500 focus:ring-red-500' : 'border-gray-200 focus:border-primary focus:ring-primary'
                                    }`}
                                placeholder="Enter your email"
                                autoComplete="off"
                            />
                            {email && !isEmailValid && <span className="text-xs text-red-500">Please enter a valid email address</span>}
                        </div>

                        <div className="flex flex-col gap-2">
                            <div className="flex justify-between items-center">
                                <label htmlFor="password" className="font-medium text-neutral">Password</label>
                            </div>
                            <div className="relative">
                                <input
                                    type={showPassword ? "text" : "password"}
                                    id="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className="border border-gray-200 rounded-lg pl-4 pr-12 py-3 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all duration-300 w-full"
                                    placeholder="Create a password"
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

                        <button
                            disabled={!isFormValid}
                            className="btn w-full py-3 bg-primary text-white rounded-lg font-bold text-lg hover:bg-primary/90 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 transform mt-2 disabled:bg-gray-300 disabled:cursor-not-allowed disabled:hover:translate-y-0 disabled:hover:shadow-none"
                        >
                            Sign Up
                        </button>

                        <div className="text-center text-sm text-gray-500 mt-2">
                            Already have an account? <Link to="/login" className="text-primary font-bold hover:underline">Sign In</Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Register