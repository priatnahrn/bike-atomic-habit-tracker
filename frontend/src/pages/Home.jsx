import Navbar from "../components/Navbar";
import HeroSection from "../components/home/HeroSection";
import FeatureSection from "../components/home/FeatureSection";
import JourneySection from "../components/home/JourneySection";
import ContentSection from "../components/home/ContentSection";
import PricingSection from "../components/home/PricingSection";
import CTASection from "../components/home/CTASection";

import { FlagIcon, Bike, Mountain, BookOpen, Check, X, TrendingUp, Sparkles, CheckCircle } from "lucide-react"


import Footer from "../components/Footer";

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

                <CTASection />


                <Footer />
            </main>
        </div>
    )
}

export default Home
