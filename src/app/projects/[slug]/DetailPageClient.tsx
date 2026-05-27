"use client";

import { useState } from "react";
import { Project } from "@/types";
import ProjectHero from "@/components/ProjectHero";
import ProjectSubGallery from "@/components/ProjectSubGallery";
import ProjectDetailsGrid from "@/components/ProjectDetailsGrid";
import ProjectAmenities from "@/components/ProjectAmenities";
import ProjectLocation from "@/components/ProjectLocation";
import ProjectFAQ from "@/components/ProjectFAQ";
import QuickEnquiryDialog from "@/components/QuickEnquiryDialog";
import Footer from "@/components/Footer";

export default function DetailPageClient({
  project,
}: {
  project: Project;
}) {
  const [enquiryOpen, setEnquiryOpen] = useState(false);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: project.title,
    description: project.description,
    image: project.galleryImages.slice(0, 5),
    category: "RealEstateListing",
    offers: {
      "@type": "Offer",
      availability: "https://schema.org/InStock",
      businessFunction: "https://purl.org/goodrelations/v1#Sell",
      category: "Real Estate",
    },
    manufacturer: {
      "@type": "RealEstateAgent",
      name: "AKC Realestate",
      url: "https://akcestates.vercel.app",
    },
    additionalProperty: [
      { "@type": "PropertyValue", name: "Plot Sizes", value: project.plotSizes },
      { "@type": "PropertyValue", name: "Legal Approval", value: project.approval },
      { "@type": "PropertyValue", name: "Status", value: project.developmentStatus },
    ],
  };

  return (
    <div className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ProjectHero
        project={project}
        onEnquire={() => setEnquiryOpen(true)}
      />

      <div className="max-w-7xl mx-auto px-6 py-16 space-y-24">
        {/* Description */}
        <section>
          <h2 className="sr-only">About {project.title}</h2>
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-4xl">
            {project.description}
          </p>
        </section>

        <ProjectSubGallery
          images={project.galleryImages}
          projectTitle={project.title}
        />

        <ProjectDetailsGrid project={project} />

        {/* Long Description */}
        <section>
          <h2 className="text-3xl md:text-4xl font-bold text-green-950 tracking-tight mb-6">
            About This Project
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            {project.longDescription}
          </p>
        </section>

        <ProjectLocation project={project} />

        <ProjectAmenities amenities={project.amenities} />

        <ProjectFAQ faqs={project.faqs} />
      </div>

      <QuickEnquiryDialog
        isOpen={enquiryOpen}
        onClose={() => setEnquiryOpen(false)}
        projectName={project.title}
      />

      <Footer />
    </div>
  );
}
