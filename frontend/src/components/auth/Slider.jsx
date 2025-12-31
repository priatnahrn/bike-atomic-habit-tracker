import { useState, useEffect } from "react"

const Slider = ({ slides }) => {
    const [currentSlide, setCurrentSlide] = useState(0)

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % slides.length)
    }

    useEffect(() => {
        const interval = setInterval(nextSlide, 5000)
        return () => clearInterval(interval)
    }, [slides.length])

    return (
        <div className="relative z-10 w-full max-w-lg transition-all duration-500 ease-in-out">
            {slides.map((slide, index) => (
                <div
                    key={index}
                    className={`flex flex-col items-start gap-8 transition-opacity duration-500 absolute w-full top-1/2 -translate-y-1/2 ${index === currentSlide ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
                        }`}
                >
                    {/* Stacked Card Effect */}
                    <div className="relative w-full">
                        {/* Back Layer 2 */}
                        <div className="absolute inset-0 bg-primary/10 rounded-3xl transform rotate-6 translate-y-4 scale-95 z-0"></div>
                        {/* Back Layer 1 */}
                        <div className="absolute inset-0 bg-primary/20 rounded-3xl transform -rotate-3 translate-y-2 z-0"></div>

                        {/* Main Card */}
                        <div className="relative z-10 bg-white p-12 rounded-3xl border border-gray-100">
                            <div className="size-16 bg-orange-50 rounded-2xl flex items-center justify-center mb-8 text-primary">
                                <slide.icon size={32} />
                            </div>
                            <h1 className="text-3xl lg:text-4xl font-extrabold text-neutral leading-[1.1] tracking-tight mb-4">
                                {slide.title === "Welcome to BIKE" ? (
                                    <>Welcome to <span className="text-primary">BIKE</span></>
                                ) : (
                                    slide.title
                                )}
                            </h1>
                            <p className="text-lg text-gray-500 leading-relaxed font-medium">
                                {slide.description}
                            </p>
                        </div>
                    </div>

                    <div className="flex items-center gap-3 pt-4 pl-2">
                        {slides.map((_, i) => (
                            <div
                                key={i}
                                className={`h-2 rounded-full transition-all duration-300 ${i === currentSlide ? "w-8 bg-primary" : "w-2 bg-gray-300"
                                    }`}
                            ></div>
                        ))}
                    </div>
                </div>
            ))}

            {/* Placeholder div to maintain height as slides are absolute */}
            <div className="invisible opacity-0 pointer-events-none flex flex-col items-start gap-8">
                <div className="space-y-4">
                    <div className="h-4 w-20"></div> {/* Spacer for where "Step X" button might have been */}
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
    )
}

export default Slider