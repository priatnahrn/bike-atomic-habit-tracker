import { Bike, Twitter, Instagram, Mail } from "lucide-react";

const Footer = () => {
    return (
        <footer className="bg-background-light dark:bg-primary/3 pt-8 pb-12 font-manrope">
            <div className="layout-container px-4 md:px-10">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12 mb-12">
                    {/* Brand Section */}
                    <div className="col-span-1 md:col-span-1">
                        <div className="flex items-center gap-2 mb-4">
                            <Bike className="text-primary" />
                            <span className="font-bold text-[#1c1917] dark:text-white text-xl">BIKE</span>
                        </div>
                        <p className="text-sm text-gray-500 leading-relaxed">
                            Building better habits, one pedal at a time. Join our community and transform your daily routine into a journey of growth.
                        </p>
                    </div>

                    {/* About Section */}
                    <div className="col-span-1 md:col-span-1">
                        <h3 className="font-bold text-gray-900 mb-4">About BIKE</h3>
                        <ul className="space-y-3">
                            <li><a href="#" className="text-sm text-gray-500 hover:text-primary transition-colors">Our Story</a></li>
                            <li><a href="#" className="text-sm text-gray-500 hover:text-primary transition-colors">Features</a></li>
                            <li><a href="#" className="text-sm text-gray-500 hover:text-primary transition-colors">Pricing</a></li>
                            <li><a href="#" className="text-sm text-gray-500 hover:text-primary transition-colors">Blog</a></li>
                        </ul>
                    </div>

                    {/* Legal Section */}
                    <div className="col-span-1 md:col-span-1">
                        <h3 className="font-bold text-gray-900 mb-4">Legal</h3>
                        <ul className="space-y-3">
                            <li><a href="#" className="text-sm text-gray-500 hover:text-primary transition-colors">Privacy Policy</a></li>
                            <li><a href="#" className="text-sm text-gray-500 hover:text-primary transition-colors">Terms of Service</a></li>
                            <li><a href="#" className="text-sm text-gray-500 hover:text-primary transition-colors">Cookie Policy</a></li>
                        </ul>
                    </div>


                    {/* Socials Section */}
                    <div className="col-span-1 md:col-span-1">
                        <h3 className="font-bold text-gray-900 mb-4">Connect</h3>
                        <div className="flex gap-4">
                            <a href="#" className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-500 hover:bg-primary hover:text-white transition-all">
                                <Twitter size={18} />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-500 hover:bg-primary hover:text-white transition-all">
                                <Instagram size={18} />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-500 hover:bg-primary hover:text-white transition-all">
                                <Mail size={18} />
                            </a>
                        </div>
                    </div>
                </div>

                <div className=" flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-sm text-gray-400">© 2025 BIKE by Herlin Priatna. All rights reserved.</p>
                    <div className="flex gap-6">
                        <span className="text-xs text-gray-300">Made with ❤️ for habit builders</span>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
