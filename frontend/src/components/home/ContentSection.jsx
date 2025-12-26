import { Sparkles, CheckCircle } from "lucide-react"
const ContentSection = () => {
    return (
        <section className="font-manrope bg-primary/3 mt-24">
            <div className=" m-12 md:m-24 p-8 flex flex-col md:flex-row gap-8 items-center justify-center">

                <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuDFLtj5MK9O73CHTQsgjx3vzlFFzEP0fRshWEtXWKjjFYXjrqxXj5aTKNbmEd4UQtv-xmcFafpZvWPGDSQ7pD-hmE1phLEqavjU5gXHUyK6H67Jt2qbso1zelsd16oVm134DhL_mdtFJXWNjf3HQlC_6kLR1lYFVMQyM9KMPpalQefj8KM9CHOo7KZzFqoigGISDf_IJFE6xLVNG-s03RAuVBylgGH7sybJ8zuPKuAvQfcmFph4o5Hc3dU4u0ZZfCzOsjkMVt5H4xp1" alt="" className="max-w-[400px] rounded-2xl shadow-lg hover:scale-105 transition-all duration-300" />
                <div className="w-full">
                    <Sparkles className="text-primary mb-2" size={24} />
                    <h2 className="text-2xl md:text-3xl font-bold md:font-extrabold mb-4 text-neutral">Your Progress at a Glance</h2>
                    <p className="mb-4 text-base text-gray-500">The more you bike, the more you grow. See your progress in real-time with our platform. With #Bike, you can track your journey, set goals, and celebrate every milestone.</p>
                    <ul className="space-y-2 text-neutral">
                        <li className="flex items-center gap-2 p-4 border border-gray-200 rounded-lg hover:scale-120 hover:rotate-2 bg-transparent backdrop-blur-sm transition-all duration-300"><CheckCircle className="text-primary" size={20} /> Monthly Heatmaps</li>
                        <li className="flex items-center gap-2 p-4 border border-gray-200 rounded-lg hover:scale-120 hover:rotate-2 bg-transparent backdrop-blur-sm transition-all duration-300"><CheckCircle className="text-primary" size={20} /> Streak Protection</li>
                        <li className="flex items-center gap-2 p-4 border border-gray-200 rounded-lg hover:scale-120 hover:rotate-2 bg-transparent backdrop-blur-sm transition-all duration-300"><CheckCircle className="text-primary" size={20} /> Shareable Progress</li>
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default ContentSection