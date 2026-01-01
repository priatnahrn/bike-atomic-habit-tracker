import { Link, useNavigate } from "react-router-dom"
import { useState } from "react"
import { ArrowLeft, Check, Mail } from "lucide-react"

const ForgotPassword = () => {
    const [email, setEmail] = useState("")
    const [isSubmitted, setIsSubmitted] = useState(false)
    const [error, setError] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            setError("Please enter a valid email address");
            return;
        }

        // Simulate API call
        setTimeout(() => {
            setIsSubmitted(true)
        }, 1000)
    }

    return (
        <div className="min-h-screen font-manrope flex justify-center bg-gray-50 p-6 pt-24">
            <div className="w-full max-w-md">
                <div className="mb-8">
                    <Link to="/login" className="text-gray-500 hover:text-primary transition-colors flex items-center gap-2 font-medium w-fit">
                        <ArrowLeft size={20} />
                        Back to Login
                    </Link>
                </div>

                {!isSubmitted ? (
                    <>
                        <div className="mb-6">
                            <h1 className="text-3xl font-bold text-neutral">Forgot Password?</h1>
                            <p className="text-gray-500 mt-2">Enter your email address to reset your password.</p>
                        </div>

                        <form className="flex flex-col gap-5" autoComplete="off" onSubmit={handleSubmit} noValidate>
                            <div className="flex flex-col gap-2">
                                <label htmlFor="email" className="font-medium text-neutral">Email</label>
                                <div className="relative">
                                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                                    <input
                                        type="email"
                                        id="email"
                                        value={email}
                                        onChange={(e) => {
                                            setEmail(e.target.value);
                                            setError("");
                                        }}
                                        className={`border rounded-lg pl-12 pr-4 py-3 focus:outline-none focus:ring-1 transition-all duration-300 w-full bg-white ${error ? "border-red-300 focus:border-red-500 focus:ring-red-500" : "border-gray-200 focus:border-primary focus:ring-primary"
                                            }`}
                                        placeholder="Enter your email"
                                        autoComplete="off"
                                    />
                                </div>
                                {error && <span className="text-xs text-red-500">{error}</span>}
                            </div>

                            <button
                                className="btn w-full py-3 bg-primary text-white rounded-lg font-bold text-lg hover:bg-primary/90 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 transform mt-2 shadow-sm"
                            >
                                Send Reset Link
                            </button>
                        </form>
                    </>
                ) : (
                    <div className="text-center space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500 pt-8">
                        <div className="size-20 bg-green-100 rounded-full flex items-center justify-center mx-auto text-green-600">
                            <Check size={40} />
                        </div>
                        <div className="space-y-2">
                            <h2 className="text-2xl font-bold text-neutral">Check Your Email</h2>
                            <p className="text-gray-500">
                                We have sent a password reset link to <br />
                                <span className="font-semibold text-neutral">{email}</span>
                            </p>
                        </div>
                        <button
                            onClick={() => setIsSubmitted(false)}
                            className="text-primary font-bold hover:underline"
                        >
                            Try another email
                        </button>
                    </div>
                )}
            </div>
        </div>
    )
}

export default ForgotPassword
