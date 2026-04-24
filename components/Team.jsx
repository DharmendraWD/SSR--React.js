import React from 'react'
import Kiran from "../src/image/team/kiranmalla.jpeg"
import kadam from "../src/image/team/kadamkc.jpeg"
import abhigya from "../src/image/team/abhigyamalla.jpeg"
import madhu from "../src/image/team/madhukar.jpeg"
import utam from "../src/image/team/UttamKumarThapa.jpeg"
import ram from "../src/image/team/ramchandrabharati.jpeg"


const Team = () => {
  return (

 <section id="team" className="py-24 px-6  transition-colors duration-500 overflow-hidden">
    <div className="max-w-7xl mx-auto">
        
        <div className="text-center mb-16">
            <span className=" inline-block mx-auto px-4 py-1 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-sm font-bold mb-4">
                Meet Our Team
            </span>
            <h2 className=" text-4xl md:text-5xl mx-auto font-bold text-slate-900 dark:text-white leading-tight">
                <span className="text-blue-500 block">Team</span>
            </h2>
            <p className=" text-slate-500 dark:text-slate-400 mt-4 max-w-2xl mx-auto">
                Our experienced leadership team brings together decades of expertise in renewable energy, engineering, and sustainable development.
            </p>
        </div>

        <div className="teamParent gap-6">
            
            <div className=" group bg-[#1e293bcc] rounded-[2rem] overflow-hidden shadow-lg border border-slate-100 dark:border-slate-800 transition-all duration-300 hover:-translate-y-2">
                <div className="h-72 overflow-hidden">
                    <img src={Kiran} alt="Kiran Malla" className="w-full h-full object-cover   group-hover: -0 transition-all duration-500 object-top"/>
                </div>
                <div className="p-6">
                    <h3 className="text-xl font-bold text-slate-800 dark:text-white">Kiran Malla</h3>
                    <p className="text-blue-600 dark:text-blue-400 text-sm font-semibold mb-4">Chairman</p>
                    <p className="text-slate-500 dark:text-slate-400 text-xs leading-relaxed line-clamp-4 group-hover:line-clamp-none transition-all">
                     Mr. Kiran Malla, founder chairman of High Himalaya Hydro Construction Pvt. Ltd., has over 37 years in the hydropower sector. He has led the development of several projects, including Puwa Khola-One (21 MW), Union Mewa (23 MW), Hongu Hydroelectric (28.9 MW), and Upper Tamor A (60 MW). With contributions to over 50 projects, his company has completed more than 35, making it Nepal's top private hydropower construction firm. He holds a civil engineering degree from IIT Roorkee and a master's in hydropower from Norway.
                    </p>
                </div>
            </div>

            <div className=" delay-100 group bg-[#1e293bcc] rounded-[2rem] overflow-hidden shadow-lg border border-slate-100 dark:border-slate-800 transition-all duration-300 hover:-translate-y-2">
                <div className="h-72 overflow-hidden">
                    <img src={kadam} alt="Kadam KC" className="w-full h-full object-cover   group-hover: -0 transition-all duration-500 object-top"/>
                </div>
                <div className="p-6">
                    <h3 className="text-xl font-bold text-slate-800 dark:text-white">Kadam KC</h3>
                    <p className="text-blue-600 dark:text-blue-400 text-sm font-semibold mb-4">Managing Director</p>
                    <p className="text-slate-500 dark:text-slate-400 text-xs leading-relaxed line-clamp-4 group-hover:line-clamp-none transition-all">
                        Kadam KC, an entrepreneur with a master's in environmental science and geotechnical engineering from UK universities, has over 15 years in business. While in the UK, he was active in both business and social work. After returning to Nepal.
                    </p>
                </div>
            </div>

            <div className=" delay-200 group bg-[#1e293bcc] rounded-[2rem] overflow-hidden shadow-lg border border-slate-100 dark:border-slate-800 transition-all duration-300 hover:-translate-y-2">
                <div className="h-72 overflow-hidden">
                    <img src={abhigya} alt="Abhigya Malla" className="w-full h-full object-cover   group-hover: -0 transition-all duration-500 object-top"/>
                </div>
                <div className="p-6">
                    <h3 className="text-xl font-bold text-slate-800 dark:text-white">Abhigya Malla</h3>
                    <p className="text-blue-600 dark:text-blue-400 text-sm font-semibold mb-4">Board of Director</p>
                    <p className="text-slate-500 dark:text-slate-400 text-xs leading-relaxed line-clamp-4 group-hover:line-clamp-none transition-all">
            Ms. Abhigya Malla, with a master's in professional accountancy and a Master of Commerce in Finance from Macquarie University, Australia, is a project developer and youth contractor in hydropower. She is involved in projects like Union Mewa (24 MW), Puwa Khola (4 MW), and Upper Tamor A (60 MW). As Vice President/Finance Controller at High Himalaya Hydro Construction Pvt. Ltd. and Managing Director at Union Hydropower Public Ltd., she works to improve Nepal's hydropower sector and infrastructure.
                    </p>
                </div>
            </div>

            <div className=" delay-300 group bg-[#1e293bcc] rounded-[2rem] overflow-hidden shadow-lg border border-slate-100 dark:border-slate-800 transition-all duration-300 hover:-translate-y-2">
                <div className="h-72 overflow-hidden">
                    <img src={madhu} alt="Madhukar Garg" className="w-full h-full object-cover   group-hover: -0 transition-all duration-500 object-top"/>
                </div>
                <div className="p-6">
                    <h3 className="text-xl font-bold text-slate-800 dark:text-white">Madhukar Garg</h3>
                    <p className="text-blue-600 dark:text-blue-400 text-sm font-semibold mb-4">Board of Director</p>
                    <p className="text-slate-500 dark:text-slate-400 text-xs leading-relaxed line-clamp-4 group-hover:line-clamp-none transition-all">
                     Madhukar Garg, an entrepreneur with a master's in Electrical Power Engineering from NTNU (NORAD) and Kathmandu University, has extensive experience with reputed organizations like Hulas Steel Industries. He is skilled in the technical aspects of hydropower, with expertise in electro-mechanical equipment and transmission lines. Currently, he has successfully completed the Puwa Khola-1 Hydropower (4 MW) project and is focused on the hydropower sector. He is involved in several ongoing and upcoming hydropower projects.
                    </p>
                </div>
            </div>
            <div className=" delay-300 group bg-[#1e293bcc] rounded-[2rem] overflow-hidden shadow-lg border border-slate-100 dark:border-slate-800 transition-all duration-300 hover:-translate-y-2">
                <div className="h-72 overflow-hidden">
                    <img src={ram} alt="Ram Chandra Bharati" className="w-full h-full object-cover   group-hover: -0 transition-all duration-500 object-top"/>
                </div>
                <div className="p-6">
                    <h3 className="text-xl font-bold text-slate-800 dark:text-white">Ram Chandra Bharati</h3>
                    <p className="text-blue-600 dark:text-blue-400 text-sm font-semibold mb-4">Independent Director of Puwa Khola</p>
                    <p className="text-slate-500 dark:text-slate-400 text-xs leading-relaxed line-clamp-4 group-hover:line-clamp-none transition-all">
                     Er. Ram Chandra Bharati is a highly experienced Civil and Structural Design Engineer with over 10 years of expertise in Hydropower project design and management. Currently serving as a Project Coordinator at Dudhkoshi Hydropower Nepal Limited, he specializes in the planning, coordination, and detailed design of hydraulic structures including headworks, tunnels, surge tanks, and powerhouses.
                    </p>
                </div>
            </div>
            <div className=" delay-300 group bg-[#1e293bcc] rounded-[2rem] overflow-hidden shadow-lg border border-slate-100 dark:border-slate-800 transition-all duration-300 hover:-translate-y-2">
                <div className="h-72 overflow-hidden">
                    <img src={utam} alt="Uttam Kumar Thapa" className="w-full h-full object-cover   group-hover: -0 transition-all duration-500 object-top"/>
                </div>
                <div className="p-6">
                    <h3 className="text-xl font-bold text-slate-800 dark:text-white">Uttam Kumar Thapa</h3>
                    <p className="text-blue-600 dark:text-blue-400 text-sm font-semibold mb-4">Board of Director</p>
                    <p className="text-slate-500 dark:text-slate-400 text-xs leading-relaxed line-clamp-4 group-hover:line-clamp-none transition-all">
                    Over 20 years of experience in Hydropower and infrastructure. Former Project Manager at Upper Madi HEP (25 MW). Led EPC design for Upper Modi-A (42 MW), feasibility and design for Lower Barun Khola (132 MW), and DPR/design leadership for Aayu Malun Khola (21 MW). Holds a Bachelor’s in Civil Engineering and Master’s in Construction Management.
                    </p>
                </div>
            </div>

        </div>
    </div>
</section>
  )
}

export default Team