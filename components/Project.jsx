import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBolt,
  faCalendarDays,
  faLocationDot,
  faWater,
  faChartPie,
  faMountain,
} from "@fortawesome/free-solid-svg-icons";

const Project = () => {
  return (
    <section
      className="py-24 px-6  transition-colors duration-500 overflow-hidden"
      id="projects"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className=" inline-block px-4 py-1 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-sm font-bold mb-4">
            Projects
          </span>
          <h2 className=" text-4xl md:text-5xl font-bold text-gray-800">
            Our Major <span className="text-blue-500">Projects</span>
          </h2>
        </div>

        <div className="projParent gap-8">
          {/* Project 1 */}
          <div className=" group projectDivCard relative p-8 md:p-10 rounded-[2rem] bg-white dark:bg-[#0f172a] border border-slate-200 dark:border-blue-500/30 shadow-xl transition-all duration-500 hover:shadow-blue-500/20">
            <div className="hidden dark:block absolute inset-0 rounded-[2rem] bg-gradient-to-br from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>

            <div className="relative z-10">
              <div className="flex justify-between items-start mb-8">
                <h3 className="text-2xl md:text-3xl font-bold text-slate-800 dark:text-white max-w-[80%] leading-tight">
                  Puwa Khola One Hydropower Project
                </h3>
              </div>

              <p className="text-slate-500 dark:text-slate-400 mb-8 pb-8 border-b border-slate-100 dark:border-slate-700 leading-relaxed text-sm md:text-base">
                Successfully commissioned a 4MW Hydropower plant in the Ilam
                District, representing the company's first major achievement in
                power generation.
              </p>

              <div className="space-y-5">
                <InfoItem icon={faBolt} label="Capacity:" value="4 MW" color="text-blue-500" />
                <InfoItem icon={faCalendarDays} label="Commissioned Date:" value="Ashoj 23, 2074 BS" color="text-blue-500" />
                <InfoItem icon={faLocationDot} label="Location:" value="Ilam District" color="text-blue-500" />
                <InfoItem icon={faWater} label="Net Head:" value="117 m" color="text-blue-500" />
                <InfoItem icon={faWater} label="Design Discharge:" value="2.5 m³/s" color="text-blue-500" />
                <InfoItem icon={faWater} label="Annual Energy:" value="24.11 GWh" color="text-blue-500" />
              </div>
            </div>
          </div>

          {/* Project 2 */}
          <div className=" projectDivCard group relative p-8 md:p-10 rounded-[2rem] bg-white dark:bg-[#0f172a] border border-slate-200 dark:border-emerald-500/30 shadow-xl transition-all duration-500 hover:shadow-emerald-500/20 delay-150">
            <div className="hidden dark:block absolute inset-0 rounded-[2rem] bg-gradient-to-br from-emerald-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>

            <div className="relative z-10">
              <div className="flex justify-between items-start mb-8">
                <h3 className="text-2xl md:text-3xl font-bold text-slate-800 dark:text-white max-w-[80%] leading-tight">
                  Aayu Malun Khola Hydropower Project (AMKHP)
                </h3>
              </div>

              <p className="text-slate-500 dark:text-slate-400 mb-8 pb-8 border-b border-slate-100 dark:border-slate-700 leading-relaxed text-sm md:text-base">
                A significant expansion project in the Higher Himalayan region,
                with the company undertaking a majority stake for development.
              </p>

              <div className="space-y-5">
                <InfoItem icon={faBolt} label="Capacity:" value="21 MW" color="text-emerald-500" />
                <InfoItem icon={faChartPie} label="Status & Stake:" value="Under Development (51%)" color="text-emerald-500" />
                <InfoItem icon={faLocationDot} label="Location:" value="Ilam District" color="text-emerald-500" />
                <InfoItem icon={faMountain} label="Altitude Range:" value="925m amsl to 1500m amsl" color="text-emerald-500" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Reusable component
const InfoItem = ({ icon, label, value, color }) => (
  <div className="flex items-start gap-4">
    <FontAwesomeIcon icon={icon} className={`${color} mt-1`} />
    <div>
      <p className="text-xs text-slate-400 uppercase tracking-wider font-bold">
        {label}
      </p>
      <p className="text-slate-700 dark:text-slate-200 font-semibold">
        {value}
      </p>
    </div>
  </div>
);

export default Project;