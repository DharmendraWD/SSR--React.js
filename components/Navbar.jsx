import React, { useState, useEffect } from "react";
import logo from "../src/image/logo.webp"

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const toggleMenu = () => setMenuOpen(prev => !prev);

  // Load dark mode from localStorage
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

  return (
    <>
      <nav className="mx-auto px-6 top-0 nav  py-[5px] flex justify-between items-center fixed w-full z-50">
        
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="lg:w-20 lg:h-20 w-10 h-10 bg-slate-200 dark:bg-slate-700 rounded-full flex items-center justify-center">
            <img className="rounded-full" src={logo} alt="logo" />
          </div>

          <div className="flex flex-col">
            <span className="lg:text-3xl text-xl font-bold">Puwakhola</span>
            <span className="lg:text-3xl text-xl font-bold">
              One Hydropower Limited
            </span>
          </div>
        </div>

        {/* Desktop Menu */}
        <div className="flex hideInMobile gap-8 items-center font-medium text-slate-600 dark:text-white">
          <a href="#">Home</a>
          <a href="#projects">Projects</a>
          <a href="#projects">About Us</a>
          <a href="#team">Our Team</a>
          <a href="#gallery">Gallery</a>
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-4">
          
          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="w-10 hideInMobile h-10 rounded-full bg-white dark:bg-slate-800 flex items-center justify-center"
          >
            {darkMode ? "☀️" : "🌙"}
          </button>

          {/* Contact */}
          <a className="hideInMobile bg-blue-600 text-white px-6 py-2 rounded-full">
            Contact
          </a>

          {/* Hamburger */}
          <button onClick={toggleMenu} className="lg:hidden">
            ☰
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 bg-white dark:bg-slate-900 z-40 flex flex-col items-center justify-center gap-8 text-2xl font-bold transform transition-transform duration-500 lg:hidden ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <a href="#" onClick={toggleMenu}>Home</a>
        <a href="#projects" onClick={toggleMenu}>Projects</a>
        <a href="#team" onClick={toggleMenu}>Our Team</a>
        <a href="#gallery" onClick={toggleMenu}>Gallery</a>

        <button onClick={toggleTheme}>
          {darkMode ? "☀️ Light" : "🌙 Dark"}
        </button>

        <button className="bg-blue-600 text-white px-8 py-3 rounded-full">
          Contact Us
        </button>
      </div>
    </>
  );
}