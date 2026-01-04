import { useEffect } from "react";
import { CheckCircle, AlertTriangle, X } from "lucide-react";

/**
 * Toast Component
 * @param {string} message - The message to display
 * @param {string} type - 'success' or 'error'
 * @param {function} onClose - Function to call when closing the toast
 */
const Toast = ({ message, type = "success", onClose }) => {
    useEffect(() => {
        const timer = setTimeout(() => {
            onClose();
        }, 3000); // Auto close after 3 seconds

        return () => clearTimeout(timer);
    }, [onClose]);

    if (!message) return null;

    const bgColor = type === "success" ? "bg-green-50 border-green-200 text-green-800" : "bg-red-50 border-red-200 text-red-800";
    const icon = type === "success" ? <CheckCircle size={20} className="text-green-600" /> : <AlertTriangle size={20} className="text-red-600" />;

    return (
        <div className={`fixed top-4 right-4 z-50 flex items-center gap-3 px-4 py-3 rounded-lg border shadow-lg animate-in slide-in-from-top-5 duration-300 ${bgColor}`}>
            {icon}
            <p className="font-medium text-sm">{message}</p>
            <button onClick={onClose} className="ml-2 hover:opacity-70 transition-opacity">
                <X size={16} />
            </button>
        </div>
    );
};

export default Toast;
