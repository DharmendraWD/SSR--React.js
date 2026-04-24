import React from 'react'

const BottomSlogan = () => {
  return (
    <section className="py-24 px-6  text-center transition-colors duration-500">
    <div className="max-w-4xl mx-auto ">
        <h2 className="text-4xl md:text-6xl font-black text-amber-700 dark:text-amber-500 mb-8 tracking-tight uppercase leading-none">
            Sustainable Energy For<br/>A Brighter Tomorrow.
        </h2>
        <p className="text-slate-500 dark:text-slate-400 text-lg mb-12 max-w-2xl mx-auto leading-relaxed">
            We harness the pure, natural flow of Nepal's rivers to deliver reliable, sustainable and environmentally friendly hydro-electric power. Our mission is to light homes, empower communities, and build a cleaner future for Nepal.
        </p>
        
        <button onClick={function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        }} className="inline-flex items-center justify-center px-10 py-4 bg-amber-700 hover:bg-amber-800 text-white rounded-full font-bold shadow-xl transition-all hover:-translate-y-1 active:scale-95">
            Go to Up
        </button>
    </div>
</section>
  )
}

export default BottomSlogan