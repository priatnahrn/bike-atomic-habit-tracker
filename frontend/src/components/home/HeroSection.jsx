const HeroSection = () => {
    return (
        <div>
            {/* Hero */}
            <section className="flex flex-col items-center gap-5 font-manrope">
                <div className="label flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10">
                    <span className="text-primary">We are <span className="text-orange-600 font-semibold">#BIKERS</span></span>

                </div>
                <h1 className="text-4xl md:text-6xl font-bold md:font-extrabold text-neutral text-center leading-[1.2]">Dont Just Set Goals. <br /> <span className="bg-gradient-to-r from-primary to-orange-600 bg-clip-text text-transparent text-4xl md:text-6xl md:font-extrabold">Ride them out.</span></h1>
                <p className="text-gray-500 text-center max-w-xl md:text-lg leading-[1.8]">The minimalist habit tracker designed to keep your momentum going. Simple, visual, and built for the long haul.</p>
                <div className="flex flex-col md:flex-row items-center gap-4">
                    <button className="btn px-6 py-3 min-w-[200px] bg-primary text-white rounded-full font-bold hover:bg-primary/80 cursor-pointer transition-all duration-300 transform hover:scale-105">Ride Now</button>
                    <button className="btn px-6 py-3 min-w-[200px] bg-secondary text-primary rounded-full font-medium border border-primary hover:bg-secondary/80 cursor-pointer transition-all duration-300 transform hover:scale-105">Explore First</button>
                </div>
                <div className="flex justify-center items-center gap-4 mt-4">
                    <div className="flex items-center">
                        <img
                            alt="User avatar 1"
                            className="w-12 h-12 rounded-full border-4 border-gray-100 z-30"
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAfX__ctFOlntw1ZCcSsjnqQSUGtF14_0RSLIOtk5FvCjHBrpDNXlZohe5P7QL3VONjzO3uv6dAItIkhWVnMlEwA7Tf9HrqRrBFhJd1-huCnLI8iuuKF11ojbzg4tOkETJJaSO_FuO7p5W9DfmtpdZmWSsPSp3q0bNPwgMQo5rhEvl8JsvkU7BJ6lSQx7q1CR--mQocWCRPf9rNrQGTaIdKC2opECKcJbUYqXSogG5vJhvNsJ3ewgd53uQ3vmBvQiwmyUdv-pxKjWg"
                        />

                        <img
                            alt="User avatar 2"
                            className="-ml-4 w-12 h-12 rounded-full border-4 border-gray-100 z-20"
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAGsM7xQ2ucmLN1lLcTLUBbbOGRA8oFTevvxiupPfZc_pfOXHoO7yrUaPmCXYdgZ-gDtCtBpgIp6She-9mJ0YBTVgM_AEDOjXpK9pkxBkvB2eAqkMciui-Q38-GixvNRDFA_0CE4cwxknOgRMdCSH6NZ4-YtZdKolQcz_988i0W3pE0X8fqmm5K_tRBuLsMR0WQUnERxGztDNW3j5pkpm6x26nGcvKfCnhoU8Jt30M7TUlF5tThgcYcR6pXXWR6xTDHpaYqUWHn5mM"
                        />

                        <img
                            alt="User avatar 3"
                            className="-ml-4 w-12 h-12 rounded-full border-4 border-gray-100 z-10"
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDoEc24Q8JvF6cVQywTY3vhV8RhbzleBjWtvimOFUBRSpfiIdUblbLugjYIol0voVARyB9KZ96eWDjQI7iBavBGCSWpQXThRlBydcf1HeAEJbwOy0US0BPWYNzyTRDokFwkVdxzKN21B2I0lnbZvZWfI-GhmFiuE7JhNjhJLRiWZh2a0sCJ3YsxEs2ughR0d16e4rHzBMRBmgUAdIRA4nS8UnfCdvGKvJQI6rDp-GXFS8JRz2TfMsqgvw1Wh0SqHuowUMMMSyyBxNo"
                        />
                    </div>

                    <span className="text-sm text-gray-600">
                        1k+ riders has joined BIKE
                    </span>
                </div>
            </section>
        </div>
    )
}

export default HeroSection
