import { X } from "lucide-react"

const Modal = ({ isOpen, onClose, children, size = "4xl" }) => {
    if (!isOpen) return null

    const sizeClasses = {
        sm: "max-w-sm",
        md: "max-w-md",
        lg: "max-w-lg",
        xl: "max-w-xl",
        "2xl": "max-w-2xl",
        "3xl": "max-w-3xl",
        "4xl": "max-w-4xl",
        "5xl": "max-w-5xl",
        full: "max-w-full m-4"
    }

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-gray-900/20 backdrop-blur-[2px] transition-opacity"
                onClick={onClose}
            ></div>

            {/* Modal Content */}
            <div className={`relative w-full ${sizeClasses[size] || "max-w-4xl"} bg-white rounded-2xl border border-gray-100 transform transition-all animate-in fade-in zoom-in-95 duration-300`}>
                <button
                    onClick={onClose}
                    className="absolute right-4 top-4 p-2 rounded-full hover:bg-gray-100 text-gray-400 hover:text-gray-600 transition-colors z-10"
                >
                    <X size={20} />
                </button>

                {children}
            </div>
        </div>
    )
}

export default Modal
