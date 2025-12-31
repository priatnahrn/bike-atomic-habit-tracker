const CTASection = () => {
    return (
        <section className="py-16 md:py-24 font-manrope">
            <div className="layout-container px-12 md:px-24">
                <div className="relative rounded-[2.5rem] bg-gradient-to-br from-orange-400 to-orange-600 px-6 py-16 md:px-16 md:py-24 overflow-hidden text-center shadow-2xl">

                    {/* Background decorations */}
                    <div className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-white/20 rounded-full blur-3xl" />
                    <div className="absolute bottom-0 right-0 translate-x-1/2 translate-y-1/2 w-64 h-64 bg-yellow-300/20 rounded-full blur-3xl" />

                    <div className="relative z-10 max-w-2xl mx-auto">
                        <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-6">
                            Ready to ride your <span className="text-white italic">#BIKE?</span>
                        </h2>

                        <p className="text-lg md:text-xl text-orange-50 mb-10 max-w-lg mx-auto leading-relaxed">
                            Join thousands of others who are building better habits, one pedal at a time.
                        </p>

                        <form className="flex flex-col sm:flex-row gap-4 w-full max-w-lg mx-auto bg-white/10 p-2 rounded-2xl backdrop-blur-sm border border-white/20">
                            <input
                                className="flex-1 h-14 bg-transparent px-6 focus:outline-none text-white placeholder:text-orange-100/70 w-full text-lg focus:ring-0 border-none"
                                placeholder="Enter your email address"
                                type="email"
                            />
                            <button
                                className="h-14 px-8 rounded-xl bg-white hover:bg-orange-50 text-orange-600 font-bold text-lg transition-all shadow-lg hover:shadow-xl whitespace-nowrap w-full sm:w-auto cursor-pointer"
                                type="submit"
                            >
                                Get Started
                            </button>
                        </form>

                        <p className="mt-6 text-sm text-orange-100/80">
                            No credit card required · Free 14-day trial
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default CTASection