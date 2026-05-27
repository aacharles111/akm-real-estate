"use client";

import { HiMagnifyingGlass } from "react-icons/hi2";

interface ProjectFiltersProps {
  totalCount: number;
  filteredCount: number;
  search: string;
  propertyType: string;
  onSearchChange: (value: string) => void;
  onPropertyTypeChange: (value: string) => void;
}

const propertyTypes = [
  "All Types",
  "Residential Plots",
  "Multi-Phase Development",
  "Township",
  "Beach Resort Plots",
];

export default function ProjectFilters({
  totalCount,
  filteredCount,
  search,
  propertyType,
  onSearchChange,
  onPropertyTypeChange,
}: ProjectFiltersProps) {
  return (
    <div className="max-w-7xl mx-auto px-6 py-8">
      <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
        {/* Search Input */}
        <div className="relative flex-1 max-w-md">
          <HiMagnifyingGlass className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            type="text"
            value={search}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder="Search properties..."
            className="w-full pl-12 pr-4 py-3 rounded-2xl border border-green-200/60 bg-white text-green-950 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200 shadow-sm"
          />
        </div>

        {/* Property Type Dropdown */}
        <select
          value={propertyType}
          onChange={(e) => onPropertyTypeChange(e.target.value)}
          className="px-5 py-3 rounded-2xl border border-green-200/60 bg-white text-green-950 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200 shadow-sm cursor-pointer"
        >
          {propertyTypes.map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </select>
      </div>

      {/* Results Count */}
      <div className="mt-6">
        <h2 className="text-lg font-semibold text-green-950">
          {filteredCount} {filteredCount === 1 ? "Property" : "Properties"}{" "}
          Found
        </h2>
      </div>
    </div>
  );
}
