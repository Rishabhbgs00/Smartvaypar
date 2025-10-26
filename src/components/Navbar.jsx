import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { language, toggleLanguage, t } = useLanguage("english");

  // ✅ Load saved language from localStorage
  useEffect(() => {
    const savedLang = localStorage.getItem("preferredLanguage");
    if (savedLang && savedLang !== language) {
      // directly simulate toggle if language different
      if (savedLang !== language) toggleLanguage();
    }
  }, []);

  // ✅ Save language to localStorage
  useEffect(() => {
    if (language) {
      localStorage.setItem("preferredLanguage", language);
    }
  }, [language]);

  const navItems = [
    { path: "/", label: t("home") },
    { path: "/services", label: t("services") },
    { path: "/about", label: t("about") },
    { path: "/contact", label: t("contact") },
  ];

  return (
    <header className="bg-[#fbd062] text-black border-b border-black shadow-md transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
        <div className="flex items-center justify-between">
          {/* Logo Section */}
          <div className="flex gap-2 items-center">
            <div className="h-[60px] w-[60px]">
              <img
                src="/src/assets/logo.png"
                className="h-[60px] w-[60px] object-contain"
                alt="logo"
              />
            </div>
            <div className="flex-shrink-0">
              <span
                className="text-2xl font-bold"
                style={{ fontFamily: "Poppins, sans-serif" }}
              >
                Smart<span className="text-gray-900">Vyapari</span>
              </span>
            </div>
          </div>

          {/* Desktop Menu */}
          <nav className="hidden md:flex space-x-10 text-lg font-semibold">
            {navItems.map((item) => (
              <a
                key={item.path}
                href={item.path}
                className="hover:text-gray-700 transition-all"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Right Side - Language */}
          <div className="hidden md:flex items-center space-x-4">
            <button
              onClick={toggleLanguage}
              className="bg-gray-900 text-white h-12 w-12 rounded-lg flex items-center justify-center hover:bg-gray-700 font-bold transition-all"
            >
              {language === "english" ? "हिं" : "ENG"}
            </button>
          </div>

          {/* Mobile Menu Icon */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-black focus:outline-none"
            >
              {isOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown */}
        {isOpen && (
          <div className="md:hidden mt-5 space-y-4">
            {navItems.map((item) => (
              <a
                key={item.path}
                href={item.path}
                className="block text-lg hover:text-gray-700 transition-all"
              >
                {item.label}
              </a>
            ))}

            <button
              onClick={toggleLanguage}
              className="block w-full h-12 rounded-lg p-2 hover:bg-gray-100 bg-gray-900 text-white font-semibold text-center transition-all"
            >
              {language === "english"
                ? "हिंदी में बदलें"
                : "Switch to English"}
            </button>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
