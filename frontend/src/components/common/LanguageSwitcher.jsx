import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { Globe } from 'lucide-react';

const LanguageSwitcher = () => {
    const { language, toggleLanguage } = useLanguage();

    return (
        <button
            onClick={toggleLanguage}
            className="flex items-center gap-2 px-3 py-2 rounded-lg bg-slate-50 hover:bg-slate-100 transition-colors text-slate-600 font-medium text-sm"
            title={language === 'en' ? 'Switch to Indonesian' : 'Switch to English'}
        >
            <Globe className="w-4 h-4" />
            <span>{language === 'en' ? 'EN' : 'ID'}</span>
        </button>
    );
};

export default LanguageSwitcher;
