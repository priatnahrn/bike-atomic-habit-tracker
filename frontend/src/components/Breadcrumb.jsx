import { ChevronRight, Home } from "lucide-react"
import { Link } from "react-router-dom"

const Breadcrumb = ({ items }) => {
    return (
        <nav className="flex items-center gap-2" aria-label="Breadcrumb">
            {items.map((item, index) => {
                const isLast = index === items.length - 1

                return (
                    <div key={index} className="flex items-center gap-2">
                        {/* Render Separator (unless it's the first item) */}
                        {index > 0 && (
                            <ChevronRight size={14} className="text-gray-400" />
                        )}

                        {isLast ? (
                            <span className="text-sm font-bold text-gray-900 capitalize" aria-current="page">
                                {item.label}
                            </span>
                        ) : (
                            item.href ? (
                                <Link
                                    to={item.href}
                                    className="text-sm font-medium text-gray-500 hover:text-primary hover:underline transition-colors flex items-center gap-1"
                                >
                                    {index === 0 && item.label.toLowerCase() === 'home' && <Home size={14} />}
                                    {item.label}
                                </Link>
                            ) : (
                                <span
                                    onClick={item.onClick}
                                    className={`text-sm font-medium text-gray-500 ${item.onClick ? 'cursor-pointer hover:text-primary hover:underline' : ''} transition-colors`}
                                >
                                    {item.label}
                                </span>
                            )
                        )}
                    </div>
                )
            })}
        </nav>
    )
}

export default Breadcrumb
