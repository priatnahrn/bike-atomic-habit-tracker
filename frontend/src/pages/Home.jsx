import Navbar from "../components/Navbar";
import HeroSection from "../components/home/HeroSection";
import FeatureSection from "../components/home/FeatureSection";
import JourneySection from "../components/home/JourneySection";
import ContentSection from "../components/home/ContentSection";
import PricingSection from "../components/home/PricingSection";

import { FlagIcon, Bike, Mountain, BookOpen, Check, X, TrendingUp, Sparkles, CheckCircle } from "lucide-react"



const Home = () => {
    return (
        <div className="mt-36">
            <Navbar />
            <main>

                <HeroSection />

                <FeatureSection />

                <JourneySection />

                <ContentSection />

                <PricingSection />

                <section className="py-20 bg-white">
                    <div className="layout-container px-4 md:px-10 flex justify-center">
                        <div className="flex flex-col items-center text-center max-w-2xl">
                            <h2 className="text-4xl font-bold tracking-tight text-neutral mb-6 tracking-tight">
                                Ready to ride your <span className="text-primary">#BIKE?</span>
                            </h2>
                            <p className="text-md text-gray-500 mb-8">
                                Join thousands of others who are building better habits, one pedal at a time. No credit card required to start.
                            </p>
                            <form className="flex flex-col sm:flex-row gap-3 w-full max-w-md">
                                <input className="flex-1 h-12 rounded-lg border border-gray-300 bg-background-light px-4 focus:outline-none focus:ring-2 focus:ring-primary text-gray-900" placeholder="Enter your email" type="email" />
                                <button className="h-12 px-6 rounded-lg bg-primary hover:bg-primary/90 text-white font-bold text-base transition-colors whitespace-nowrap" type="submit">
                                    Track Your Path
                                </button>
                            </form>
                            <p className="mt-4 text-xs text-gray-400">By signing up, you agree to our Terms and Privacy Policy.</p>
                        </div>
                    </div>
                </section>
                <footer className="bg-background-light dark:bg-background-dark py-10 ">
                    <div className="layout-container px-4 md:px-10">
                        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                            <div className="flex items-center gap-2">
                                <Bike className="text-primary" />
                                <span className="font-bold text-[#1c1917] dark:text-white text-lg">BIKE</span>
                            </div>
                            <div className="flex gap-8">
                                <a className="text-sm text-gray-500 hover:text-primary transition-colors" href="#">Twitter</a>
                                <a className="text-sm text-gray-500 hover:text-primary transition-colors" href="#">Instagram</a>
                                <a className="text-sm text-gray-500 hover:text-primary transition-colors" href="#">Contact</a>
                            </div>
                            <p className="text-sm text-gray-400">© 2023 BIKE Habits. All rights reserved.</p>
                        </div>
                    </div>
                </footer>
            </main>
        </div>
    )
}

export default Home
