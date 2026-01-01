export const HABIT_COLORS = [
    { name: "orange", label: "Sunset", primary: "bg-orange-500", light: "bg-orange-50", text: "text-orange-500", border: "border-orange-100", borderCompleted: "border-orange-200", hoverBorder: "hover:border-orange-200", button: "bg-orange-500" },
    { name: "blue", label: "Ocean", primary: "bg-blue-500", light: "bg-blue-50", text: "text-blue-500", border: "border-blue-100", borderCompleted: "border-blue-200", hoverBorder: "hover:border-blue-200", button: "bg-blue-500" },
    { name: "green", label: "Nature", primary: "bg-green-500", light: "bg-green-50", text: "text-green-600", border: "border-green-100", borderCompleted: "border-green-200", hoverBorder: "hover:border-green-200", button: "bg-green-600" },
    { name: "purple", label: "Royal", primary: "bg-purple-500", light: "bg-purple-50", text: "text-purple-600", border: "border-purple-100", borderCompleted: "border-purple-200", hoverBorder: "hover:border-purple-200", button: "bg-purple-600" },
    { name: "pink", label: "Rose", primary: "bg-pink-500", light: "bg-pink-50", text: "text-pink-500", border: "border-pink-100", borderCompleted: "border-pink-200", hoverBorder: "hover:border-pink-200", button: "bg-pink-500" },
    { name: "red", label: "Passion", primary: "bg-red-500", light: "bg-red-50", text: "text-red-500", border: "border-red-100", borderCompleted: "border-red-200", hoverBorder: "hover:border-red-200", button: "bg-red-500" },
    { name: "teal", label: "Fresh", primary: "bg-teal-500", light: "bg-teal-50", text: "text-teal-600", border: "border-teal-100", borderCompleted: "border-teal-200", hoverBorder: "hover:border-teal-200", button: "bg-teal-600" },
    { name: "indigo", label: "Deep", primary: "bg-indigo-500", light: "bg-indigo-50", text: "text-indigo-500", border: "border-indigo-100", borderCompleted: "border-indigo-200", hoverBorder: "hover:border-indigo-200", button: "bg-indigo-500" },
]

export const getColorClass = (colorName) => {
    return HABIT_COLORS.find(c => c.name === colorName) || HABIT_COLORS[0]
}
