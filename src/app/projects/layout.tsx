import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Projects | AKC Realestate",
  description:
    "Browse our portfolio of CMDA and DTCP approved residential plotted developments in Chennai. Premium gated community plots in Tambaram, Ponneri, Minjur, and Tiruvallur with clear titles and legal approvals.",
  openGraph: {
    title: "Our Projects | AKC Realestate",
    description:
      "Browse CMDA & DTCP approved residential plots across Chennai's prime locations. Gated communities with clear titles.",
  },
};

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
