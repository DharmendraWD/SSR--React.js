import React from 'react'
import { faSun } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const Footer = () => {
  return (
 <footer className="pt-24 pb-12 px-6  border-t border-slate-100 dark:border-slate-800 transition-colors duration-500">
    <div className="max-w-7xl mx-auto">
        <div className="threeGrid gap-12 mb-16">
            
            <div className="space-y-6">
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center text-white shadow-lg">
                      <FontAwesomeIcon icon={faSun} />
                    </div>
                    <span className="text-2xl font-black tracking-tight text-gray-800">Puwakhola</span>
                </div>
                <p className="text-slate-500 dark:text-slate-400 leading-relaxed text-sm">
                    We harness the pure, natural flow of Nepal's rivers to deliver reliable, sustainable and environmentally friendly hydro-electric power. Our mission is to light homes, empower communities, and build a cleaner future for Nepal.
                </p>
                {/* <div className="flex gap-4">
                    <a href="#" className="w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-600 dark:text-slate-400 hover:bg-blue-600 hover:text-white transition-all duration-300">
                        <i className="fa-brands fa-facebook-f"></i>
                    </a>
                    <a href="#" className="w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-600 dark:text-slate-400 hover:bg-blue-400 hover:text-white transition-all duration-300">
                        <i className="fa-brands fa-twitter"></i>
                    </a>
                    <a href="#" className="w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-600 dark:text-slate-400 hover:bg-blue-700 hover:text-white transition-all duration-300">
                        <i className="fa-brands fa-linkedin-in"></i>
                    </a>
                    <a href="#" className="w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-600 dark:text-slate-400 hover:bg-pink-600 hover:text-white transition-all duration-300">
                        <i className="fa-brands fa-instagram"></i>
                    </a>
                </div> */}
            </div>

            <div>
                <h4 className="text-gray-800 font-bold mb-8 uppercase tracking-widest text-sm">Quick Links</h4>
                <ul className="space-y-4">
                    <li><a href="#home" className="text-slate-500 dark:text-slate-400 hover:text-blue-500 transition-colors">Home</a></li>
                    <li><a href="#about" className="text-slate-500 dark:text-slate-400 hover:text-blue-500 transition-colors">About Us</a></li>
                    <li><a href="#projects" className="text-slate-500 dark:text-slate-400 hover:text-blue-500 transition-colors">Projects</a></li>
                    <li><a href="#team" className="text-slate-500 dark:text-slate-400 hover:text-blue-500 transition-colors">Our Team</a></li>
                </ul>
            </div>

            <div>
                <h4 className="text-gray-800 font-bold mb-8 uppercase tracking-widest text-sm">Contact Us</h4>
                <ul className="space-y-6">
                    <li className="flex items-start gap-4">
                        <i className="fa-solid fa-envelope text-blue-500 mt-1"></i>
                        <span className="text-slate-500 dark:text-slate-400 text-sm">puwakholaHydro Power@gmail.com</span>
                    </li>
                    <li className="flex items-start gap-4">
                        <i className="fa-solid fa-phone text-blue-500 mt-1"></i>
                        <span className="text-slate-500 dark:text-slate-400 text-sm">014102710</span>
                    </li>
                    <li className="flex items-start gap-4">
                        <i className="fa-solid fa-location-dot text-blue-500 mt-1"></i>
                        <span className="text-slate-500 dark:text-slate-400 text-sm">Durga bhawan, Anamnagar,<br/>Kathmandu</span>
                    </li>
                </ul>
            </div>

            {/* <div>
                <h4 className="text-gray-800 font-bold mb-8 uppercase tracking-widest text-sm">Newsletter</h4>
                <p className="text-slate-500 dark:text-slate-400 text-sm mb-6">Subscribe to receive the latest updates and news.</p>
                <form className="flex flex-col gap-3">
                    <input type="email" placeholder="Your Email" className="px-6 py-3 rounded-xl bg-slate-100 dark:bg-slate-800 border-none focus:ring-2 focus:ring-blue-500 dark:text-white text-sm outline-none"/>
                    <button className="py-3 bg-blue-600 text-white rounded-xl font-bold hover:bg-blue-700 transition-all text-sm">Subscribe</button>
                </form>
            </div> */}
        </div>

        <div className="pt-8 border-t border-slate-100 dark:border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-center">
            <p className="text-slate-400 text-xs">© 2026 Puwakhola. All rights reserved.</p>
            <p className="text-slate-400 text-xs">Developed by <a href="https://www.aayusofttech.com.np/" target="_blank" className="text-blue-500 font-semibold">Aayu Softtech</a></p>
        </div>
    </div>
</footer>
  )
}

export default Footer