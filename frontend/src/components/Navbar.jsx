import { useState } from "react";
import { Bike, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";
import LanguageSwitcher from "./common/LanguageSwitcher";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const { t } = useLanguage();

    return (
        <div className="font-manrope bg-white text-neutral border-gray-200 text-sm fixed top-0 left-0 right-0 z-50">
            <header className="mx-auto py-4 px-6 md:px-24 flex justify-between items-center border-b border-gray-200 relative">
                <div className="logo flex flex-col items-start">
                    <Link to="/">
                        <h1 className="flex items-center gap-2 text-2xl font-extrabold 
                 bg-gradient-to-r from-primary to-red-500 
                 bg-clip-text text-transparent">
                            <Bike className="w-8 h-8 text-orange-500" />
                            BIKE
                        </h1>
                    </Link>

                    <p className="hidden md:block text-sm text-gray-500">Ride your habits</p>
                </div>

                {/* Mobile Menu Toggle */}
                <button
                    className="md:hidden p-2 text-gray-500 hover:text-primary transition-colors"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>

                {/* Desktop Nav */}
                <nav className="hidden md:flex justify-between items-center gap-8">
                    <ul className="nav-list flex items-center gap-8">
                        <li className="nav-item font-medium text-gray-500 hover:text-primary cursor-pointer">{t('landing.features')}</li>
                        <li className="nav-item font-medium text-gray-500 hover:text-primary cursor-pointer">{t('landing.journey')}</li>
                        <li className="nav-item font-medium text-gray-500 hover:text-primary cursor-pointer">{t('landing.pricing')}</li>

                    </ul>
                    <div className="nav-btns flex items-center gap-4">
                        <LanguageSwitcher />
                        <button className="btn text-gray-500 hover:text-primary cursor-pointer"><Link to="/login">{t('landing.login')}</Link></button>
                        <button className="btn px-6 py-2 bg-primary text-white rounded-full font-bold hover:bg-primary/80 cursor-pointer transition-all duration-300 transform hover:scale-105"><Link to="/register">{t('landing.signup')}</Link></button>
                    </div>
                </nav>

                {/* Mobile Nav Overlay */}
                {isOpen && (
                    <div className="absolute top-full left-0 right-0 bg-white border-b border-gray-200 p-6 md:hidden flex flex-col gap-6 shadow-lg animate-in fade-in slide-in-from-top-5 duration-200">
                        <ul className="flex flex-col gap-4">
                            <li className="font-medium text-lg text-gray-500 hover:text-primary cursor-pointer">{t('landing.features')}</li>
                            <li className="font-medium text-lg text-gray-500 hover:text-primary cursor-pointer">{t('landing.journey')}</li>
                            <li className="font-medium text-lg text-gray-500 hover:text-primary cursor-pointer">{t('landing.pricing')}</li>
                        </ul>
                        <div className="flex flex-col gap-3">
                            <div className="flex justify-center mb-2">
                                <LanguageSwitcher />
                            </div>
                            <button className="btn w-full py-2.5 text-gray-500 border border-gray-200 rounded-full hover:text-primary hover:border-primary transition-all"><Link to="/login">{t('landing.login')}</Link></button>
                            <button className="btn w-full py-2.5 bg-primary text-white rounded-full font-bold hover:bg-primary/80 transition-all shadow-md"><Link to="/register">{t('landing.signup')}</Link></button>
                        </div>
                    </div>
                )}
            </header>

        </div>
    )
}

export default Navbar