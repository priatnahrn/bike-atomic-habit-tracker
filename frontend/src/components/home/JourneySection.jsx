import { FlagIcon, Bike, Mountain, BookOpen, Check, X, TrendingUp } from "lucide-react"

const JourneySection = () => {
    return (
        <div>
            {/* How it works */}
            <section className="flex flex-col justify-center items-center  gap-8 m-12 md:m-24 font-manrope">
                <div className="text-center flex flex-col items-center gap-4">
                    <p className="text-primary text-sm font-medium">HOW IT WORKS</p>
                    <h1 className="text-3xl font-bold text-neutral text-center leading-[1.2]">The Road to Better Habit</h1>
                    <p className="text-gray-500 text-center max-w-xl leading-[1.8]">Building habits is a journey, not a destination. Here BIKE helps you navigate your path to better habits.</p>
                </div>
                <div className="flex flex-col gap-12 max-w-3xl mx-auto">


                    <div className="relative flex items-start gap-4">
                        {/* ICON */}
                        <div className="relative z-10 p-3 bg-secondary rounded-full border border-primary text-primary">
                            <FlagIcon size={20} fill="currentColor" />
                        </div>

                        {/* GARIS */}
                        <div className="absolute left-6 top-12 h-full w-px bg-primary/30"></div>

                        {/* CONTENT */}
                        <div>
                            <h2 className="text-xl font-semibold">Set Your Route</h2>
                            <p className="text-gray-500 mt-2 text-md">
                                Define clear, actionable goals. Choose up to 3 habits to focus on. Less is more when you are starting uphill.
                            </p>

                            <div className="flex flex-row items-center gap-2 text-primary mt-2 text-md p-4 rounded-lg border border-gray-200 hover:border-primary hover:border-2 hover:text-primary hover:shadow-lg transition-all duration-500 transform hover:scale-105 mt-4">
                                <div className="p-2 bg-secondary rounded-lg text-primary">
                                    <BookOpen size={20} fill="currentColor" />
                                </div>
                                <p className="text-gray-500"> Read 15 Pages Book</p>
                            </div>
                        </div>
                    </div>

                    <div className="relative flex items-start gap-4 ">
                        {/* ICON */}
                        <div className="relative z-10 p-3 bg-secondary rounded-full border border-primary text-primary">
                            <Bike fill="currentColor" size={20} />
                        </div>

                        {/* GARIS */}
                        <div className="absolute left-6 top-12 h-full w-px bg-primary/30 "></div>

                        {/* CONTENT */}
                        <div>
                            <h2 className="text-xl font-semibold">Pedal Daily</h2>
                            <p className="text-gray-500 mt-2 text-md">Log you progress with a single tap. The minimalist interface gets out of your way so you can focus on the action.</p>
                            <div className="flex items-center gap-4 mt-5">
                                <div className="p-2 bg-primary rounded-full text-white hover:bg-green-500 hover:text-white transition-all duration-300 transform hover:scale-105">
                                    <Check size={24} stroke="white" strokeWidth={3} />
                                </div>
                                <div className="p-2 bg-gray-100 rounded-full text-gray-500 hover:bg-red-100/80 hover:text-red-500 transition-all duration-300 transform hover:scale-105">
                                    <X size={24} strokeWidth={3} />

                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="relative flex items-start gap-4 ">
                        {/* ICON */}
                        <div className="relative z-10 p-3 bg-secondary rounded-full border border-primary text-primary">
                            <Mountain fill="currentColor" size={20} />
                        </div>



                        {/* CONTENT */}
                        <div>
                            <h2 className="text-xl font-semibold">Visualize Your Climb</h2>
                            <p className="text-gray-500 mt-2 text-md">See your streaks and consistency on a beautiful map. Watch you small daily efforts compound into massive result.</p>
                            <div className="flex flex-wrap justify-center items-center gap-2 mt-5">
                                <div className="p-6 rounded-sm bg-primary/10 hover:bg-primary/20 transition-all duration-300 transform hover:scale-105"></div>
                                <div className="p-6 rounded-sm bg-primary/20 hover:bg-primary/30 transition-all duration-300 transform hover:scale-105"></div>
                                <div className="p-6 rounded-sm bg-primary/30 hover:bg-primary/40 transition-all duration-300 transform hover:scale-105"></div>
                                <div className="p-6 rounded-sm bg-primary/40 hover:bg-primary/50 transition-all duration-300 transform hover:scale-105"></div>
                                <div className="p-6 rounded-sm bg-primary/50 hover:bg-primary/60 transition-all duration-300 transform hover:scale-105"></div>
                                <div className="p-6 rounded-sm bg-primary/60 hover:bg-primary/70 transition-all duration-300 transform hover:scale-105"></div>
                                <div className="p-6 rounded-sm bg-primary/70 hover:bg-primary/80 transition-all duration-300 transform hover:scale-105"></div>
                                <div className="p-6 rounded-sm bg-primary/80 hover:bg-primary/90 transition-all duration-300 transform hover:scale-105"></div>
                                <div className="p-6 rounded-sm bg-primary/90 hover:bg-primary/100 transition-all duration-300 transform hover:scale-105"></div>
                                <div className="p-6 rounded-sm bg-primary/100 hover:bg-primary/100 transition-all duration-300 transform hover:scale-105"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    )
}

export default JourneySection