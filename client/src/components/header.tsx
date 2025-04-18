import { useState } from "react";
import { Logo } from "./ui/logo";
import { useLanguage } from "@/context/language-context";
import { Menu, X, ChevronDown } from "lucide-react";

export function Header() {
  const { t, language, changeLanguage } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [languageDropdownOpen, setLanguageDropdownOpen] = useState(false);

  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);
  const toggleLanguageDropdown = (e: React.MouseEvent) => {
    e.stopPropagation();
    setLanguageDropdownOpen(!languageDropdownOpen);
  };

  const handleLanguageChange = (lang: string) => {
    changeLanguage(lang);
    setLanguageDropdownOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 glass shadow-glass">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center">
          {/* Logo */}
          <a href="#" className="flex items-center mr-8">
            <Logo />
          </a>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6">
            <a href="#features" className="text-dark-300 hover:text-white transition-colors">{t("nav.features")}</a>
            <a href="#pricing" className="text-dark-300 hover:text-white transition-colors">{t("nav.pricing")}</a>
            <a href="#faq" className="text-dark-300 hover:text-white transition-colors">{t("nav.faq")}</a>
          </nav>
        </div>
        
        {/* Right Side Menu */}
        <div className="flex items-center space-x-4">
          {/* Language Selector */}
          <div className="relative">
            <button 
              className="flex items-center text-dark-300 hover:text-white transition-colors"
              onClick={toggleLanguageDropdown}
            >
              <span className="mr-1">{language.toUpperCase()}</span>
              <ChevronDown className="w-4 h-4" />
            </button>
            
            {languageDropdownOpen && (
              <div className="absolute right-0 mt-2 py-1 w-24 glass rounded-md shadow-lg z-50">
                <a 
                  href="#" 
                  className="block px-4 py-2 text-sm text-dark-300 hover:text-white hover:bg-dark-800"
                  onClick={() => handleLanguageChange("en")}
                >
                  English
                </a>
                <a 
                  href="#" 
                  className="block px-4 py-2 text-sm text-dark-300 hover:text-white hover:bg-dark-800"
                  onClick={() => handleLanguageChange("pt")}
                >
                  Português
                </a>
              </div>
            )}
          </div>
          
          {/* Login / Get Started */}
          <div className="hidden md:flex items-center space-x-3">
            <a href="#" className="text-dark-300 hover:text-white transition-colors">{t("nav.login")}</a>
            <a href="#" className="bg-gradient-to-r from-secondary-400 to-secondary-600 text-white rounded-full px-5 py-2 hover:opacity-90 transition-opacity">
              {t("nav.getStarted")}
            </a>
          </div>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white"
            onClick={toggleMobileMenu}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-dark-800 px-4 py-3">
          <nav className="flex flex-col space-y-3">
            <a href="#features" className="text-dark-300 hover:text-white transition-colors">{t("nav.features")}</a>
            <a href="#pricing" className="text-dark-300 hover:text-white transition-colors">{t("nav.pricing")}</a>
            <a href="#faq" className="text-dark-300 hover:text-white transition-colors">{t("nav.faq")}</a>
            <a href="#" className="text-dark-300 hover:text-white transition-colors">{t("nav.login")}</a>
            <a href="#" className="bg-gradient-to-r from-secondary-400 to-secondary-600 text-white rounded-full px-5 py-2 text-center hover:opacity-90 transition-opacity">
              {t("nav.getStarted")}
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
