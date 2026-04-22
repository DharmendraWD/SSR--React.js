import React from 'react'
import kiranmalla from "../src/image/team/kiranmalla.jpeg"
import kadam from "../src/image/team/kadamkc.jpeg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons';


const MessageFrom = () => {
  return (
<section class="py-20 px-6 bg-gray-50 dark:bg-slate-900 transition-colors duration-300">
    <div class="max-w-7xl mx-auto">
        <div class="relative mb-6 text-center">
            <h2 class="text-4xl md:text-5xl font-black text-slate-800 dark:text-white uppercase tracking-tighter">
                 <span class="text-[#2563eb]">Message </span> From
            </h2>
             <p class="text-slate-500 dark:text-slate-400 mt-2 font-medium">Voices driving the future of renewable energy</p> 
        </div>

        <div class="grid lg:grid-cols-2 gap-16 lg:gap-8">
            
            <div class="relative group">
                <div class="flex flex-col md:flex-row items-center">
                    <div class="relative z-10 w-64 h-80 flex-shrink-0">
                        <div class="absolute inset-0 bg-[#2563eb] translate-x-4 translate-y-4 rounded-2xl transition-transform group-hover:translate-x-2 group-hover:translate-y-2"></div>
                        <img src={kiranmalla} alt="Chairperson" class="relative z-10 w-full h-full object-top object-cover rounded-2xl shadow-2xl transition-all duration-500"/>
                    </div>
                    
                    <div class="mt-8 md:mt-0 md:-ml-12 relative z-20 bg-white/80 dark:bg-slate-800/80 backdrop-blur-md p-8 md:pl-20 rounded-3xl shadow-xl border border-white/20 dark:border-slate-700">
                        <div class="inline-flex items-center justify-center w-12 h-12 bg-[#2563eb] text-white rounded-full mb-4 shadow-lg shadow-orange-500/30">
                       <FontAwesomeIcon icon={faQuoteLeft} />
                        </div>
                        <h4 class="text-[#2563eb] font-bold tracking-widest text-xs uppercase mb-1">Chairperson</h4>
                        <h3 class="text-2xl font-extrabold text-slate-900 dark:text-white mb-4">Mr. Kiran Malla</h3>
                        <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm mb-6 line-clamp-4 group-hover:line-clamp-none transition-all duration-500">
                          Mr. Kiran Malla, founder chairman of High Himalaya Hydro Construction Pvt. Ltd., has over 37 years in the hydropower sector. He has led the development of several projects, including Puwa Khola-One (21 MW), Union Mewa (23 MW), Hongu Hydroelectric (28.9 MW), and Upper Tamor A (60 MW). With contributions to over 50 projects, his company has completed more than 35, making it Nepal's top private hydropower construction firm. He holds a civil engineering degree from IIT Roorkee and a master's in hydropower from Norway.
                        </p>
          
                    </div>
                </div>
            </div>

            <div class="relative group">
                <div class="flex flex-col md:flex-row items-center">
                    <div class="relative z-10 w-64 h-80 flex-shrink-0">
                        <div class="absolute inset-0 bg-[#2563eb] -translate-x-4 translate-y-4 rounded-2xl transition-transform group-hover:-translate-x-2 group-hover:translate-y-2"></div>
                        <img src={kadam} alt="MD" class="relative z-10 w-full h-full object-top object-cover rounded-2xl shadow-2xl transition-all duration-500"/>
                    </div>
                    
                    <div class="mt-8 md:mt-0 md:-ml-12 relative z-20 bg-white/80 dark:bg-slate-800/80 backdrop-blur-md p-8 md:pl-20 rounded-3xl shadow-xl border border-white/20 dark:border-slate-700">
                        <div class="inline-flex items-center justify-center w-12 h-12 bg-[#2563eb] text-white rounded-full mb-4 shadow-lg shadow-orange-500/30">
                                                                              <FontAwesomeIcon icon={faQuoteLeft} />


                        </div>
                        <h4 class="text-[#2563eb] font-bold tracking-widest text-xs uppercase mb-1">Managing Director</h4>
                        <h3 class="text-2xl font-extrabold text-slate-900 dark:text-white mb-4">Mr. Kadam KC</h3>
                        <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm mb-6 line-clamp-4 group-hover:line-clamp-none transition-all duration-500">
                          Kadam KC, an entrepreneur with a master's in environmental science and geotechnical engineering from UK universities, has over 15 years in business. While in the UK, he was active in both business and social work. After returning to Nepal, he focused on hydropower, successfully completing Puwa Khola-1 Hydropower (4 MW). He chairs Aayu Entertainments Pvt. Ltd. and is launching Fishtail Dream Park in Pokhara. He also founded Dhaulagiri Construction and Development Pvt. Ltd. and serves on the board of High Himalaya Hydro Construction Pvt. Ltd.
                        </p>
                  
                    </div>
                </div>
            </div>

        </div>
    </div>
</section>
  )
}

export default MessageFrom