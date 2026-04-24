import React, { useState, useEffect } from "react";
import logo from "../src/image/logo.webp";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(prev => !prev);

  // Load dark mode
  useEffect(() => {
    const saved = localStorage.getItem("darkMode");
    if (saved === "true") {
      setDarkMode(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  // Toggle theme
  const toggleTheme = () => {
    setDarkMode(prev => {
      const newValue = !prev;

      if (newValue) {
        localStorage.setItem("darkMode", "true");
        document.documentElement.classList.add("dark");
      } else {
        localStorage.removeItem("darkMode");
        document.documentElement.classList.remove("dark");
      }

      return newValue;
    });
  };

  // close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (!e.target.closest(".about-wrapper")) {
        setAboutOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  return (
    <>
      <nav className="mx-auto px-6 top-0 bg-blue-50 bg-[#dbeafe] py-[5px] flex justify-between items-center fixed w-full z-50 shadow-lg transition-colors duration-300">

        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="lg:w-20 lg:h-20 w-10 h-10 bg-slate-200 dark:bg-slate-700 rounded-full flex items-center justify-center shadow-md">
            <img className="rounded-full" src={logo} alt="logo" />
          </div>

          <div className="flex flex-col">
            <span className="lg:text-3xl text-xl font-bold text-gray-800">
              Puwakhola
            </span>
            <span className="lg:text-3xl text-xl font-bold text-gray-800">
              One Hydropower Limited
            </span>
          </div>
        </div>

        {/* Desktop Menu */}
        <div className="flex hideInMobile gap-8 items-center font-medium text-slate-700 dark:text-slate-300">

          <a href="#" className="hover:text-blue-600 navLinks transition-colors">Home</a>
          <a href="#projects" className="hover:text-blue-600 navLinks transition-colors">Projects</a>

          {/* ABOUT DROPDOWN */}
          <div className="relative about-wrapper">

            {/* Trigger */}
            <button
              onClick={() => setAboutOpen(prev => !prev)}
              className="flex items-center gap-1 hover:text-blue-600 navLinks transition-colors cursor-pointer"
            >
              About Us

              {/* Animated Arrow */}
              <svg
                className={`w-4 h-4 transition-transform duration-300 ${
                  aboutOpen ? "rotate-180" : "rotate-0"
                }`}
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {/* Dropdown */}
            <div className={`
              absolute left-0 top-full mt-3 w-56
              backdrop-blur-xl bg-white/70 dark:bg-slate-800/60
              border border-white/20 dark:border-slate-700
              shadow-2xl rounded-2xl overflow-hidden
              transition-all duration-300 origin-top
              ${aboutOpen ? "opacity-100 scale-100 visible" : "opacity-0 scale-95 invisible"}
              lg:group-hover:opacity-100 lg:group-hover:visible lg:group-hover:scale-100
            `}>
              <a
                href="#management"
                className="block px-5 py-3 text-sm text-slate-700 dark:text-slate-200 hover:bg-white/40 dark:hover:bg-slate-700/50 transition"
              >
                Management Team
              </a>

              <a
                href="#financials"
                className="block px-5 py-3 text-sm text-slate-700 dark:text-slate-200 hover:bg-white/40 dark:hover:bg-slate-700/50 transition"
              >
                Financials
              </a>
            </div>
          </div>

          <a href="#team" className="hover:text-blue-600 navLinks transition-colors">Our Team</a>
          <a href="#gallery" className="hover:text-blue-600 navLinks transition-colors">Gallery</a>
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-4">

          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="w-10 hideInMobile h-10 rounded-full bg-white dark:bg-slate-700 shadow-md hover:shadow-lg flex items-center justify-center transition-all duration-200 hover:scale-105"
          >
            {darkMode ? "☀️" : "🌙"}
          </button>

          {/* Contact */}
          <a className="hideInMobile bg-blue-600 text-white px-6 py-2 rounded-full font-semibold shadow-lg hover:scale-105 transition">
            Contact
          </a>

          {/* Hamburger */}
          <button onClick={toggleMenu} className="lg:hidden text-slate-700 dark:text-white">
            ☰
          </button>
        </div>
      </nav>

      {/* MOBILE MENU */}
      <div
        className={`fixed inset-0 bg-white mobnav z-40 flex flex-col items-center justify-center gap-8 text-2xl font-bold transform transition-transform duration-500 lg:hidden ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <a href="#" onClick={toggleMenu}>Home</a>
        <a href="#projects" onClick={toggleMenu}>Projects</a>

        <a href="#management" onClick={toggleMenu}>Management Team</a>
        <a href="#financials" onClick={toggleMenu}>Financials</a>

        <a href="#team" onClick={toggleMenu}>Our Team</a>
        <a href="#gallery" onClick={toggleMenu}>Gallery</a>

        <button onClick={
          () => {
            toggleTheme();
            setMenuOpen(false);
          }
        } className="px-6 py-3 rounded-full bg-slate-200 dark:bg-slate-700">
          {darkMode ? "☀️ Light" : "🌙 Dark"}
        </button>

        <button className="bg-blue-600 text-white px-8 py-3 rounded-full">
          Contact Us
        </button>
      </div>
    </>
  );
}