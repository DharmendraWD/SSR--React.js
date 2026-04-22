import React from 'react'
import img1 from '../src/image/hero/1.webp'
import img2 from '../src/image/hero/2.jpeg'
import img3 from '../src/image/hero/3.jpeg'
import img4 from '../src/image/hero/4.jpeg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';



const Hero = () => {
  return (
  <>

    <section class="max-w-7xl mx-auto px-6 py-12 lg:py-20 grid lg:grid-cols-2 gap-12 items-center">
        <div class="">
            <div class="inline-flex items-center w-fit gap-2 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 px-4 py-1 rounded-full lg:text-lg text-xs font-bold mb-6">
                ⚡ Powering Nepal's Future
            </div>
            <h1 class=" font-bold leading-[1.1] mb-6">
                <span class="text-blue-500 text-5xl lg:text-7xl">Welcome to</span> <span class="whitespace-nowrap text-3xl lg:text-5xl">Puwakhola One </span><br/> <span class="text-4xl lg:text-5xl">Hydropower</span> <br/> 
            </h1>
            <p class="text-slate-500 dark:text-slate-400 text-lg max-w-lg mb-10">
                Located in the Ilam District of Koshi Province, Nepal, near Shanti Danda and Barbote, the 4 MW Puwa Khola-1 Hydropower Project is a run-of-river development harnessing the natural flow of the Puwa Khola to generate clean and reliable energy.
Puwakhola One Hydropower Limited stands among the leading hydropower companies, committed to delivering world-class renewable energy solutions. Backed by strong expertise, innovation, and operational excellence, we develop and operate high-performance projects that meet international standards.
            </p>
            
            <div class="flex flex-wrap gap-4 mb-16">
                <a href="#about" class="bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-8 py-4 rounded-full font-bold flex items-center gap-2 hover:scale-105 transition">
                    About Us <i class="fa-solid fa-arrow-right"></i>
                        </a>
                <button/>
                <a href="#gallery" class="bg-gradient-to-r from-purple-600 to-blue-500 text-white px-8 py-4 rounded-full font-bold flex items-center gap-2 hover:scale-105 transition">
                    Gallery <i class="fa-solid fa-arrow-right"></i>
                </a>
            </div>

            <div class="flex gap-10">
                <div><h4 class="text-3xl font-bold text-blue-600">4MW</h4><p class="text-xs text-slate-400">MW Capacity</p></div>
                <div><h4 class="text-3xl font-bold text-blue-600">10k+</h4><p class="text-xs text-slate-400">Homes Powered</p></div>
                <div><h4 class="text-3xl font-bold text-blue-600">15+</h4><p class="text-xs text-slate-400">Years Experience</p></div>
            </div>
        <div/>
        </div>

        <div class="relative" style={{transitionDelay: '0.2s'}}>
            <div class="grid grid-cols-2 gap-4">
                <div class="space-y-4">
                    <div class="rounded-3xl overflow-hidden h-80 shadow-2xl">
                        <img src={img1} class="w-full h-full object-cover"/>
                    </div>
                    <div class="rounded-3xl overflow-hidden h-44 shadow-2xl">
                        <img src={img2} class="w-full h-full object-cover"/>
                    </div>
                </div>
                <div class="space-y-4 pt-12">
                    <div class="rounded-3xl overflow-hidden h-44 shadow-2xl">
                        <img src={img3} class="w-full h-full object-cover"/>
                    </div>
                    <div class="rounded-3xl overflow-hidden h-80 shadow-2xl">
                        <img src={img4} class="w-full h-full object-cover"/>
                    </div>
                </div>
            </div>

            <div class="absolute -bottom-6 left-1/2 -translate-x-1/2 lg:left-0 lg:translate-x-0 glass p-4 rounded-2xl shadow-2xl border border-white/20 flex items-center gap-4 min-w-[250px]">
                <div class="w-12 h-12 bg-emerald-500 rounded-full flex items-center justify-center text-white text-xl">
                 <FontAwesomeIcon icon={faCheck} />
                </div>
                <div>
                    <p class="font-bold text-sm">100% Clean Energy</p>
                    <p class="text-xs text-emerald-600 dark:text-emerald-400 font-semibold">Zero Emissions</p>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default Hero