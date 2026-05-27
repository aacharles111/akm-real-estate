"use client";

import { useState, useMemo } from "react";
import { PROJECTS } from "@/data/projects";
import ProjectFilters from "@/components/ProjectFilters";
import ProjectCard from "@/components/ProjectCard";
import Footer from "@/components/Footer";

export default function ProjectsPage() {
  const [search, setSearch] = useState("");
  const [propertyType, setPropertyType] = useState("All Types");

  const filtered = useMemo(() => {
    return PROJECTS.filter((project) => {
      const matchesSearch =
        !search ||
        project.title.toLowerCase().includes(search.toLowerCase()) ||
        project.location.toLowerCase().includes(search.toLowerCase());

      const matchesType =
        propertyType === "All Types" ||
        (propertyType === "Residential Plots" &&
          (project.units?.includes("Residential") ||
            project.approval.includes("DTCP") ||
            project.approval.includes("RERA"))) ||
        (propertyType === "Multi-Phase Development" &&
          project.units?.includes("Multi-Phase")) ||
        (propertyType === "Township" &&
          project.title.toLowerCase().includes("township")) ||
        (propertyType === "Beach Resort Plots" &&
          project.title.toLowerCase().includes("beach"));

      return matchesSearch && matchesType;
    });
  }, [search, propertyType]);

  return (
    <div className="min-h-screen bg-white pt-24">
      {/* Page Header */}
      <div className="bg-gradient-to-b from-green-50 to-white">
        <div className="max-w-7xl mx-auto px-6 py-8 md:py-16 text-center">
          <h1 className="text-3xl md:text-5xl font-bold text-green-950 tracking-tight">
            Our Projects
          </h1>
          <div className="w-16 h-1 bg-green-500 mx-auto mt-4 rounded-full" />
          <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Explore our portfolio of CMDA and DTCP approved residential plotted
            developments across Chennai&apos;s most promising corridors.
          </p>
        </div>
      </div>

      {/* Filters */}
      <ProjectFilters
        totalCount={PROJECTS.length}
        filteredCount={filtered.length}
        search={search}
        propertyType={propertyType}
        onSearchChange={setSearch}
        onPropertyTypeChange={setPropertyType}
      />

      {/* Project Cards Grid */}
      <div className="max-w-7xl mx-auto px-6 pb-20">
        {filtered.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <p className="text-gray-500 text-lg">
              No projects match your search. Try adjusting your filters.
            </p>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
}
