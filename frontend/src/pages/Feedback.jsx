import React, { useState } from "react"
import { MessageSquare, Send, CheckCircle, AlertCircle } from "lucide-react"
import DashboardLayout from "../components/dashboard/DashboardLayout"
import Breadcrumb from "../components/Breadcrumb"

const Feedback = () => {
    const [formData, setFormData] = useState({
        category: "Idea",
        subject: "",
        message: ""
    })
    const [status, setStatus] = useState("idle") // idle, submitting, success, error

    const handleSubmit = async (e) => {
        e.preventDefault()
        setStatus("submitting")

        try {
            const token = localStorage.getItem("token")
            const response = await fetch(`${import.meta.env.VITE_API_URL}/api/feedback`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`
                },
                body: JSON.stringify(formData)
            })

            if (response.ok) {
                setStatus("success")
                setFormData({ category: "Idea", subject: "", message: "" })
                // Reset success message after 3 seconds
                setTimeout(() => setStatus("idle"), 3000)
            } else {
                setStatus("error")
            }
        } catch (error) {
            console.error(error)
            setStatus("error")
        }
    }

    return (
        <DashboardLayout title="Feedback">
            <div className="flex flex-col gap-8 max-w-2xl mx-auto">
                <Breadcrumb items={[{ label: 'Home', href: '/' }, { label: 'Feedback' }]} />

                <div className="bg-white rounded-2xl border border-gray-100 p-8 shadow-sm">
                    <div className="flex items-center gap-4 mb-6">
                        <div className="p-3 bg-primary/10 text-primary rounded-xl">
                            <MessageSquare size={32} />
                        </div>
                        <div>
                            <h2 className="text-2xl font-extrabold text-gray-900">We value your voice</h2>
                            <p className="text-gray-500 font-medium">Help us improve Bicker for everyone.</p>
                        </div>
                    </div>

                    {status === "success" ? (
                        <div className="bg-green-50 text-green-700 p-6 rounded-xl flex flex-col items-center text-center animate-in fade-in duration-300">
                            <CheckCircle size={48} className="mb-2" />
                            <h3 className="font-bold text-lg">Thank you!</h3>
                            <p>Your feedback has been submitted successfully.</p>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label className="block text-sm font-bold text-gray-900 mb-2">Category</label>
                                <div className="flex gap-2">
                                    {["Idea", "Bug", "Other"].map(cat => (
                                        <button
                                            key={cat}
                                            type="button"
                                            onClick={() => setFormData({ ...formData, category: cat })}
                                            className={`flex-1 py-3 rounded-xl font-bold text-sm border-2 transition-all ${formData.category === cat ? "border-primary bg-primary/5 text-primary" : "border-gray-100 text-gray-500 hover:border-gray-200"}`}
                                        >
                                            {cat}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-bold text-gray-900 mb-2">Subject</label>
                                <input
                                    type="text"
                                    required
                                    value={formData.subject}
                                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                                    placeholder="Brief summary of your feedback"
                                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-100 focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none transition-all font-medium"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-bold text-gray-900 mb-2">Message</label>
                                <textarea
                                    required
                                    value={formData.message}
                                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                    placeholder="Tell us more details..."
                                    rows={5}
                                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-100 focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none transition-all font-medium resize-none"
                                />
                            </div>

                            {status === "error" && (
                                <div className="flex items-center gap-2 text-red-500 text-sm font-bold bg-red-50 p-3 rounded-xl">
                                    <AlertCircle size={18} />
                                    Failed to submit. Please try again.
                                </div>
                            )}

                            <button
                                type="submit"
                                disabled={status === "submitting"}
                                className="w-full py-4 bg-gray-900 text-white rounded-xl font-bold hover:bg-gray-800 transition-all flex items-center justify-center gap-2 disabled:opacity-50"
                            >
                                {status === "submitting" ? "Sending..." : "Submit Feedback"}
                                <Send size={18} />
                            </button>
                        </form>
                    )}
                </div>
            </div>
        </DashboardLayout>
    )
}

export default Feedback
