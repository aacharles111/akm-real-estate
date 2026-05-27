"use client";

import { motion } from "framer-motion";
import { Project } from "@/types";
import {
  HiArrowsPointingOut,
  HiBuildingOffice2,
  HiShieldCheck,
  HiClock,
} from "react-icons/hi2";

const detailIcons: Record<string, React.ReactNode> = {
  plotSizes: <HiArrowsPointingOut className="w-6 h-6" />,
  scale: <HiBuildingOffice2 className="w-6 h-6" />,
  approval: <HiShieldCheck className="w-6 h-6" />,
  status: <HiClock className="w-6 h-6" />,
};

const details = (project: Project) => [
  { key: "plotSizes", label: "Plot Sizes", value: project.plotSizes },
  { key: "scale", label: "Project Scale", value: project.units || "—" },
  { key: "approval", label: "Legal Approvals", value: project.approval },
  { key: "status", label: "Development Status", value: project.developmentStatus },
];

export default function ProjectDetailsGrid({ project }: { project: Project }) {
  return (
    <section>
      <h2 className="text-3xl md:text-4xl font-bold text-green-950 tracking-tight mb-8">
        Key Details
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {details(project).map((detail, i) => (
          <motion.div
            key={detail.key}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: i * 0.1, ease: "easeOut" }}
            className="bg-green-50/30 border border-green-50/50 rounded-2xl p-6 text-center hover:shadow-lg hover:-translate-y-1 transition-all duration-200"
          >
            <div className="w-12 h-12 bg-green-600 rounded-2xl flex items-center justify-center mx-auto mb-4 text-white shadow-lg shadow-green-600/25">
              {detailIcons[detail.key]}
            </div>
            <p className="text-xs font-semibold uppercase tracking-wider text-gray-500 mb-2">
              {detail.label}
            </p>
            <p className="text-green-950 font-bold leading-snug">
              {detail.value}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
