import { Link, useNavigate } from "react-router-dom"
import { useState } from "react"
import { Eye, EyeOff } from "lucide-react"
import Slider from "../components/auth/Slider"
import pedalIcon from "../assets/images/pedal.png"
import trackIcon from "../assets/images/track.png"
import visualizeIcon from "../assets/images/visualize.png"
import Toast from "../components/ui/Toast"

const Login = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [isLoading, setIsLoading] = useState(false)
    const [showPassword, setShowPassword] = useState(false)
    const [toast, setToast] = useState({ message: "", type: "" })
    const navigate = useNavigate()

    const slides = [
        {
            icon: pedalIcon,
            title: "Welcome to BIKE",
            description: "Your journey to better habits starts with a single pedal. Track your progress, build momentum, and enjoy the ride.",
            step: 1
        },
        {
            icon: trackIcon,
            title: "Track Your Progress",
            description: "Visualize your daily improvements with intuitive charts and streaks. See how far you've come at a glance.",
            step: 2
        },
        {
            icon: visualizeIcon,
            title: "Stay Consistent",
            description: "Build an unbreakable habit loop. Our tools help you stay accountable and motivated every single day.",
            step: 3
        }
    ]

    const isFormValid = email.trim() !== "" && password.trim() !== "";

    const handleSubmit = async (e) => {
        e.preventDefault();
        setToast({ message: "", type: "" });
        setIsLoading(true);

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            setToast({ message: "Please enter a valid email address", type: "error" });
            setIsLoading(false);
            return;
        }

        try {
            const response = await fetch(`${import.meta.env.VITE_API_URL}/auth/login`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    email,
                    password,
                }),
            })

            const data = await response.json()

            if (!response.ok) {
                throw new Error(data.message || data.error || "Login failed")
            }

            // Successful login
            localStorage.setItem("token", data.token)
            localStorage.setItem("user", JSON.stringify(data.user))

            setToast({ message: "Welcome back!", type: "success" });

            // Delay navigation slightly to show success toast
            setTimeout(() => {
                navigate("/dashboard")
            }, 1000);

        } catch (err) {
            setToast({ message: err.message, type: "error" });
        } finally {
            setIsLoading(false)
        }
    }

    return (
        <div className="grid md:grid-cols-2 min-h-screen font-manrope">
            {toast.message && <Toast message={toast.message} type={toast.type} onClose={() => setToast({ message: "", type: "" })} />}

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
                                    setToast({ message: "", type: "" });
                                }}
                                className={`border rounded-lg px-4 py-3 focus:outline-none focus:ring-1 transition-all duration-300 w-full ${toast.type === 'error' && toast.message.toLowerCase().includes('email') ? "border-red-300 focus:border-red-500 focus:ring-red-500" : "border-gray-200 focus:border-primary focus:ring-primary"
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
                                        setToast({ message: "", type: "" });
                                    }}
                                    className={`border rounded-lg pl-4 pr-12 py-3 focus:outline-none focus:ring-1 transition-all duration-300 w-full ${toast.type === 'error' && toast.message.toLowerCase().includes('credentials') ? "border-red-300 focus:border-red-500 focus:ring-red-500" : "border-gray-200 focus:border-primary focus:ring-primary"
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

                        <button
                            disabled={!isFormValid || isLoading}
                            className="btn w-full py-3 bg-primary text-white rounded-lg font-bold text-lg hover:bg-primary/90 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 transform mt-2 disabled:bg-gray-300 disabled:cursor-not-allowed disabled:hover:translate-y-0 disabled:hover:shadow-none flex justify-center items-center"
                        >
                            {isLoading ? "Signing In..." : "Sign In"}
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
