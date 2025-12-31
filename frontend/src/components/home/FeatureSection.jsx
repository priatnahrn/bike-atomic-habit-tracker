import Gear from "../../assets/images/gear-icon.png"
import Stang from "../../assets/images/stang-icon.png"
import Ban from "../../assets/images/ban-icon.png"

const features = [
    {
        icon: Gear,
        title: "Atomic Principles",
        description: "Rooted in the core laws of behavior change: Make it obvious, attractive, easy, and satisfying. We turn small actions into big results.",
    },
    {
        icon: Stang,
        title: "S.M.A.R.T Goals",
        description:
            "Designed to help you set Specific, Measurable, Achievable, Relevant, and Time-bound goals so you always know your target.",
    },
    {
        icon: Ban,
        title: "Frictionless Flow",
        description: "Tracking should be effortless, not a chore. Log habits in seconds and get instant visual motivation to keep your streak alive",
    },
]
const FeatureSection = () => {
    return (
        <div>
            {/* Features */}
            <section className="flex flex-col justify-center items-center mt-12 gap-8 font-manrope p-6 md:p-24 bg-primary/3">
                {/* Why it bike */}
                <div className="text-center flex flex-col items-center gap-4 mt-12">
                    <p className="text-primary text-sm font-medium">WHY IT BIKE</p>
                    <h1 className="text-3xl font-bold text-neutral text-center leading-[1.2]">The Power of Habit</h1>
                    <p className="text-gray-500 text-center max-w-xl leading-[1.8]">BIKE is not just a habit tracker. It's your personal habit coach, designed to help you build sustainable habits that last a lifetime.</p>
                </div>

                <div className="flex md:flex-row flex-col justify-center items-center  gap-8">
                    {features.map((feature, index) => (
                        <article key={index} className="border border-gray-200 p-6 bg-white rounded-lg md:w-1/3 w-full hover:border-primary hover:border-2 hover:text-primary hover:shadow-lg transition-all duration-500 transform hover:scale-105">
                            <img src={feature.icon} alt="Gear" className="w-12 h-12" />
                            <h2 className="text-lg md:text-2xl font-semibold">{feature.title}</h2>
                            <p className="text-gray-500 mt-2 text-base"> {feature.description}</p>
                        </article>
                    ))}
                </div>
            </section>
        </div>
    )
}

export default FeatureSection