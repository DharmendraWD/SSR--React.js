import React from 'react'
import img1 from "../src/image/Mission/1768985339793-508132409.jpeg"
import img2 from "../src/image/Mission/1768985329138-881098881.jpg"

const Mission = () => {
  return (
    <section className="py-24 px-6  transition-colors duration-500 overflow-hidden">
    <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        
        <div className="relative ">
            <div className="rounded-[2rem] overflow-hidden shadow-2xl w-[90%] h-[300px] md:h-[400px]">
                <img src={img2} alt="Landscape" className="w-full h-full object-cover"/>
            </div>
            
            <div className="absolute -bottom-10 -right-2 md:right-0 w-[70%] rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white dark:border-slate-800">
                <img src={img1} alt="Dam" className="w-full h-full object-cover"/>
            </div>

            <div className="absolute -bottom-6 -left-4 md:left-10 bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-xl border border-slate-100 dark:border-slate-700  delay-300">
                <h4 className="text-3xl font-bold text-blue-600">99.9%</h4>
                <p className="text-xs text-slate-400 font-bold uppercase tracking-widest">Uptime Reliability</p>
            </div>
        </div>

        <div className="space-y-12delay-150">
            
            <div className="flex gap-6 group">
                <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-blue-500 flex items-center justify-center text-white shadow-lg shadow-blue-500/20 group-hover:scale-110 transition-transform">
                    <i className="fa-solid fa-bullseye text-2xl"></i>
                </div>
                <div>
                    <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-3">Our Mission</h3>
                    <p className="text-slate-500 dark:text-slate-400 leading-relaxed">
                        Puwa Khola-One Hydropower Limited promotes sustainable Hydropower in Nepal through innovation, expertise, and responsible development. We are committed to harnessing nature's power for a brighter future.
                    </p>
                </div>
            </div>

          <div className="flex gap-6 group">
                <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-purple-500 flex items-center justify-center text-white shadow-lg shadow-purple-500/20 group-hover:scale-110 transition-transform">
                    <i className="fa-solid fa-eye text-2xl"></i>
                </div>
                <div>
                    <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-3">Our Values</h3>
                    <ul className="text-slate-500 dark:text-slate-400 space-y-3">
                        <li className="flex items-start gap-2">
                            <span className="text-purple-500 font-bold">•</span>
                            <span><strong>Innovation:</strong> We strive for continuous improvement and embrace innovation to meet evolving needs.</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="text-purple-500 font-bold">•</span>
                            <span><strong>Reliability:</strong> We uphold the highest standards of quality, safety, and reliability in all operations.</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="text-purple-500 font-bold">•</span>
                            <span><strong>Sustainability:</strong> We are committed to minimizing our ecological footprint.</span>
                        </li>
                    </ul>
                </div>
            </div> 

            <div className="flex gap-6 group">
                <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-emerald-500 flex items-center justify-center text-white shadow-lg shadow-emerald-500/20 group-hover:scale-110 transition-transform">
                    <i className="fa-solid fa-heart text-2xl"></i>
                </div>
                <div>
                    <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-3">Our Vision</h3>
                    <p className="text-slate-500 dark:text-slate-400 leading-relaxed">
                        Become an innovative and key Hydropower developer in Nepal, fostering community prosperity and contributing to a greener world.
                    </p>
                </div>
            </div>

        </div>
    </div>
</section>
  )
}

export default Mission