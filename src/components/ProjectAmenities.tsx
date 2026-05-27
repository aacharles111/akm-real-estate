"use client";

import { motion } from "framer-motion";
import {
  FaShieldHalved,
  FaRoad,
  FaLightbulb,
  FaDroplet,
  FaChild,
  FaVideo,
  FaSun,
  FaFileShield,
  FaLock,
  FaTree,
  FaWater,
} from "react-icons/fa6";
import { HiHomeModern } from "react-icons/hi2";

const amenityIconMap: Record<string, React.ReactNode> = {
  "Gated Community": <FaLock className="w-5 h-5" />,
  "Fully Compounded Gated Community": <FaLock className="w-5 h-5" />,
  "Concrete Roads": <FaRoad className="w-5 h-5" />,
  "Blacktop Roads": <FaRoad className="w-5 h-5" />,
  "Black Top Internal Roads (30 ft & 24 ft)": <FaRoad className="w-5 h-5" />,
  "40 ft Main Access Road": <FaRoad className="w-5 h-5" />,
  "Street Lights": <FaLightbulb className="w-5 h-5" />,
  "Street Lighting": <FaLightbulb className="w-5 h-5" />,
  "Solar LED Street Lights": <FaSun className="w-5 h-5" />,
  "Bore Water": <FaDroplet className="w-5 h-5" />,
  "Play Area": <FaChild className="w-5 h-5" />,
  "Children's Play Area": <FaChild className="w-5 h-5" />,
  "24×7 Security": <FaShieldHalved className="w-5 h-5" />,
  "Grand Arch": <HiHomeModern className="w-5 h-5" />,
  "100% Clear Title": <FaFileShield className="w-5 h-5" />,
  "CCTV Surveillance": <FaVideo className="w-5 h-5" />,
  "Underground Utilities": <FaDroplet className="w-5 h-5" />,
  "Landscaped Gardens": <FaTree className="w-5 h-5" />,
  "Ready for Future Development": <FaShieldHalved className="w-5 h-5" />,
  "Water Access": <FaWater className="w-5 h-5" />,
  "Green Surroundings": <FaTree className="w-5 h-5" />,
  "Clear Plot Demarcation": <FaFileShield className="w-5 h-5" />,
};

function getAmenityIcon(amenity: string): React.ReactNode {
  return amenityIconMap[amenity] || <FaShieldHalved className="w-5 h-5" />;
}

export default function ProjectAmenities({
  amenities,
}: {
  amenities: string[];
}) {
  return (
    <section>
      <h2 className="text-3xl md:text-4xl font-bold text-green-950 tracking-tight mb-8">
        Amenities
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {amenities.map((amenity, i) => (
          <motion.div
            key={amenity}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.4, delay: i * 0.08, ease: "easeOut" }}
            className="flex flex-col items-center gap-3 p-5 bg-green-50/30 border border-green-50/50 rounded-2xl text-center hover:shadow-md hover:-translate-y-1 transition-all duration-200"
          >
            <div className="w-10 h-10 rounded-xl bg-green-100 flex items-center justify-center text-green-700">
              {getAmenityIcon(amenity)}
            </div>
            <span className="text-sm font-medium text-green-950 leading-snug">
              {amenity}
            </span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
