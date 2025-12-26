import { Check } from "lucide-react";

const PricingSection = () => {
    const plans = [
        {
            name: "Cruiser",
            description: "Perfect for getting started.",
            price: "$0",
            period: "/month",
            features: [
                "3 Active Habits",
                "Basic Streak Tracking",
                "7-Day History"
            ],
            buttonText: "Start Free",
            highlight: false,
            buttonStyle: "bg-white text-orange-500 border-2 border-orange-500 hover:bg-orange-50"
        },
        {
            name: "Sprinter",
            description: "For serious habit builders.",
            price: "$4.99",
            period: "/month",
            features: [
                "Unlimited Habits",
                "Advanced Analytics",
                "Unlimited History",
                "Dark Mode"
            ],
            buttonText: "Go Pro",
            highlight: true,
            popular: true,
            buttonStyle: "bg-orange-500 text-white hover:bg-orange-600 border-2 border-orange-500"
        },
        {
            name: "Tour",
            description: "Everything + community access.",
            price: "$9.99",
            period: "/month",
            features: [
                "Everything in Sprinter",
                "Export Data CSV",
                "Priority Support",
                "Beta Features Access"
            ],
            buttonText: "Get Premium",
            highlight: false,
            buttonStyle: "bg-white text-orange-500 border-2 border-orange-500 hover:bg-orange-50"
        }
    ];

    return (
        <section className="py-20 bg-white font-manrope">
            <div className="layout-container px-4 md:px-10">
                <div className="text-center mb-16 space-y-4">
                    <h2 className="text-4xl font-bold text-gray-900">Subscription Packages</h2>
                    <p className="text-gray-500 max-w-2xl mx-auto">
                        Simple plans that grow with your habits. Start for free, upgrade for power.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto items-center">
                    {plans.map((plan) => (
                        <div
                            key={plan.name}
                            className={`relative rounded-2xl p-8 bg-white transition-all duration-300 ${plan.highlight
                                ? 'shadow-xl ring-2 ring-orange-400 scale-105 z-10'
                                : 'border border-gray-200 hover:shadow-lg'
                                }`}
                        >
                            {plan.popular && (
                                <div className="absolute top-0 right-0 bg-orange-500 text-white text-xs font-bold px-3 py-1 rounded-bl-lg rounded-tr-lg uppercase tracking-wider">
                                    Popular
                                </div>
                            )}

                            <div className="mb-8">
                                <h3 className="text-xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                                <p className="text-sm text-gray-500 mb-6">{plan.description}</p>
                                <div className="flex items-baseline">
                                    <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                                    <span className="text-gray-400 ml-2">{plan.period}</span>
                                </div>
                            </div>

                            <ul className="space-y-4 mb-8">
                                {plan.features.map((feature, index) => (
                                    <li key={index} className="flex items-center gap-3">
                                        <div className="flex-shrink-0 w-5 h-5 rounded-full bg-orange-500 flex items-center justify-center">
                                            <Check className="w-3 h-3 text-white" strokeWidth={3} />
                                        </div>
                                        <span className="text-sm text-gray-600">{feature}</span>
                                    </li>
                                ))}
                            </ul>

                            <button className={`w-full py-3 px-6 rounded-lg font-bold transition-colors ${plan.buttonStyle}`}>
                                {plan.buttonText}
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PricingSection;
