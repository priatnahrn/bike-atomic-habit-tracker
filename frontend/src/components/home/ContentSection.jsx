import { Sparkles, CheckCircle } from "lucide-react"
const ContentSection = () => {
    return (
        <section className="font-manrope bg-primary/3 py-24">
            <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col md:flex-row gap-12 items-center">
                <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuDFLtj5MK9O73CHTQsgjx3vzlFFzEP0fRshWEtXWKjjFYXjrqxXj5aTKNbmEd4UQtv-xmcFafpZvWPGDSQ7pD-hmE1phLEqavjU5gXHUyK6H67Jt2qbso1zelsd16oVm134DhL_mdtFJXWNjf3HQlC_6kLR1lYFVMQyM9KMPpalQefj8KM9CHOo7KZzFqoigGISDf_IJFE6xLVNG-s03RAuVBylgGH7sybJ8zuPKuAvQfcmFph4o5Hc3dU4u0ZZfCzOsjkMVt5H4xp1" alt="Progress" className="w-full max-w-md rounded-2xl shadow-xl hover:scale-105 transition-transform duration-300" />

                <div className="flex-1">
                    <Sparkles className="text-primary mb-2" size={24} />
                    <h2 className="text-2xl md:text-3xl font-bold mb-6 text-neutral leading-tight">Your Progress at a Glance</h2>
                    <p className="mb-8 text-base text-gray-500 leading-relaxed">The more you bike, the more you grow. See your progress in real-time with our platform. With #Bike, you can track your journey, set goals, and celebrate every milestone.</p>
                    <ul className="space-y-4 text-neutral">
                        <li className="flex items-center gap-3 p-4 border border-gray-100 bg-white rounded-xl hover:shadow-md transition-all duration-300"><CheckCircle className="text-primary flex-shrink-0" size={24} /> <span className="font-semibold">Monthly Heatmaps</span></li>
                        <li className="flex items-center gap-3 p-4 border border-gray-100 bg-white rounded-xl hover:shadow-md transition-all duration-300"><CheckCircle className="text-primary flex-shrink-0" size={24} /> <span className="font-semibold">Streak Protection</span></li>
                        <li className="flex items-center gap-3 p-4 border border-gray-100 bg-white rounded-xl hover:shadow-md transition-all duration-300"><CheckCircle className="text-primary flex-shrink-0" size={24} /> <span className="font-semibold">Shareable Progress</span></li>
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default ContentSection