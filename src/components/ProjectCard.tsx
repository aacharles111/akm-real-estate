"use client";

import Image from "next/image";
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";
import { HiMapPin, HiCalendarDays } from "react-icons/hi2";
import { Project } from "@/types";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="bg-white rounded-2xl shadow-md hover:shadow-2xl border border-green-50/50 overflow-hidden transition-all duration-200 group flex flex-col">
      {/* Image with Status Badge */}
      <div className="relative aspect-[4/3] overflow-hidden bg-gray-100">
        <Image
          src={project.mainImage}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        <span className="absolute top-4 left-4 bg-green-600 text-white text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-full shadow-lg">
          ACTIVE
        </span>
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-1">
        <h3 className="text-lg font-bold text-green-950 leading-snug mb-3 line-clamp-2">
          {project.title}
        </h3>

        {/* Key Details */}
        <div className="grid grid-cols-2 gap-3 mb-4 text-sm">
          <div>
            <p className="text-gray-400 text-xs uppercase tracking-wider font-semibold">
              Plot Sizes
            </p>
            <p className="text-green-950 font-semibold">{project.plotSizes}</p>
          </div>
          <div>
            <p className="text-gray-400 text-xs uppercase tracking-wider font-semibold">
              Scale
            </p>
            <p className="text-green-950 font-semibold">{project.units}</p>
          </div>
          <div>
            <p className="text-gray-400 text-xs uppercase tracking-wider font-semibold">
              Approval
            </p>
            <p className="text-green-950 font-semibold">{project.approval}</p>
          </div>
          <div>
            <p className="text-gray-400 text-xs uppercase tracking-wider font-semibold">
              Status
            </p>
            <p className="text-green-950 font-semibold">
              {project.developmentStatus}
            </p>
          </div>
        </div>

        {/* Amenities Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.amenities.slice(0, 4).map((amenity) => (
            <span
              key={amenity}
              className="text-xs font-medium text-green-700 bg-green-50 px-2.5 py-1 rounded-full"
            >
              {amenity}
            </span>
          ))}
        </div>

        {/* Meta: Date + Map */}
        <div className="flex items-center justify-between text-xs text-gray-500 mb-5 mt-auto">
          <span className="flex items-center gap-1.5">
            <HiCalendarDays className="w-3.5 h-3.5" />
            Created: {project.createdAt}
          </span>
          {project.mapUrl && (
            <a
              href={project.mapUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-green-600 hover:text-green-700 font-medium"
            >
              <HiMapPin className="w-3.5 h-3.5" />
              Google Maps
            </a>
          )}
        </div>

        {/* Buttons */}
        <div className="flex gap-3">
          <Link
            href={`/projects/${project.slug}`}
            className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full font-semibold text-sm text-white bg-green-600 hover:bg-green-700 transition-colors duration-200 shadow-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-500"
          >
            Details
          </Link>
          <a
            href="https://wa.me/919941318518"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full font-semibold text-sm text-green-700 border border-green-200 hover:bg-green-50 transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-500"
          >
            <FaWhatsapp className="w-4 h-4" />
            Contact
          </a>
        </div>
      </div>
    </div>
  );
}
