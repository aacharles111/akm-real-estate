"use client";

import { Project } from "@/types";
import {
  FaTrain,
  FaBus,
  FaRoad,
  FaIndustry,
  FaGraduationCap,
  FaHospital,
  FaUmbrellaBeach,
  FaChartLine,
} from "react-icons/fa6";
import { HiMapPin } from "react-icons/hi2";

const connectivityIcons: Record<string, React.ReactNode> = {
  railway: <FaTrain className="w-5 h-5" />,
  bus: <FaBus className="w-5 h-5" />,
  road: <FaRoad className="w-5 h-5" />,
  industry: <FaIndustry className="w-5 h-5" />,
  education: <FaGraduationCap className="w-5 h-5" />,
  health: <FaHospital className="w-5 h-5" />,
  beach: <FaUmbrellaBeach className="w-5 h-5" />,
  growth: <FaChartLine className="w-5 h-5" />,
};

export default function ProjectLocation({ project }: { project: Project }) {
  return (
    <section>
      <h2 className="text-3xl md:text-4xl font-bold text-green-950 tracking-tight mb-4">
        Location & Connectivity
      </h2>
      <p className="text-lg text-gray-600 mb-8">
        Explore the surroundings of {project.title} with nearby connectivity
        details.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
        {project.connectivity.map((point) => (
          <div
            key={point.label}
            className="flex items-start gap-4 p-5 bg-green-50/20 border border-green-50/50 rounded-2xl hover:shadow-md transition-all duration-200"
          >
            <div className="w-10 h-10 rounded-xl bg-green-100 flex items-center justify-center flex-shrink-0 text-green-700">
              {connectivityIcons[point.icon] || (
                <HiMapPin className="w-5 h-5" />
              )}
            </div>
            <div>
              <h4 className="font-bold text-green-950 text-sm">{point.label}</h4>
              <p className="text-gray-600 text-sm mt-0.5 leading-relaxed">
                {point.detail}
              </p>
            </div>
          </div>
        ))}
      </div>

      {project.mapUrl && (
        <a
          href={project.mapUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-green-200 bg-white text-green-700 font-semibold hover:bg-green-50 hover:border-green-300 transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-500"
        >
          <HiMapPin className="w-5 h-5" />
          View on Google Maps
        </a>
      )}
    </section>
  );
}
