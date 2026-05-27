export interface ConnectivityPoint {
  icon: string;
  label: string;
  detail: string;
}

export interface FAQ {
  question: string;
  answer: string;
}

export type ProjectStatus = "active" | "completed" | "upcoming";

export interface Project {
  id: string;
  slug: string;
  title: string;
  subtitle?: string;
  location: string;
  refNumber: string;
  status: ProjectStatus;
  plotSizes: string;
  units?: string;
  approval: string;
  developmentStatus: string;
  description: string;
  longDescription: string;
  mainImage: string;
  galleryImages: string[];
  amenities: string[];
  connectivity: ConnectivityPoint[];
  faqs: FAQ[];
  createdAt: string;
  mapUrl?: string;
}
