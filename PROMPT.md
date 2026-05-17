Read BUILD_SPEC.md completely first. Then build the ENTIRE AKM Real Estate landing page. Create ALL 12 files with complete production code.

FILES TO CREATE (overwrite if exists):
1. src/app/globals.css — Green + white theme, CSS variables, GSAP utilities
2. src/app/layout.tsx — Metadata: "AKM Real Estate | Plots in Chennai", "CMDA-approved plots at best rates"
3. src/app/page.tsx — Compose all sections: Hero, ValueProps, Gallery, CTA, Reviews, About, Contact, Footer
4. src/components/HeroSection.tsx — Full-screen hero, GSAP fade-in animation, "Plot in Chennai Available for Sale", "Contact Now" button
5. src/components/ValuePropsSection.tsx — Paragraph + 4 feature cards in grid (CMDA Approved, Best Rates, Secure Investment, Prime Locations)
6. src/components/GallerySection.tsx — Masonry image gallery, picsum.photos images (seeds: plot1 through plot15), lightbox on click
7. src/components/CTABanner.tsx — Green gradient bg, "Your Dream Plot is Just a Call Away", tel: link
8. src/components/ReviewsSection.tsx — Horizontal auto-scrolling review carousel, 8 mock reviews, pause on hover
9. src/components/AboutAKM.tsx — Company info text + stats grid (7+ Years, 1500+ Plots, 1000+ Customers, 10+ Projects)
10. src/components/ContactSection.tsx — Contact info + Google Maps iframe (12.9249,80.1000) + contact form
11. src/components/Footer.tsx — Dark green bg (#052e16), links, copyright
12. src/components/Lightbox.tsx — Full-screen lightbox with navigation arrows and close button

HARD RULES:
- "use client" on any component with hooks, state, GSAP, or event handlers
- Tailwind v4 classes ONLY (no @apply, no custom CSS except in globals.css)
- GSAP ScrollTrigger for scroll animations (import { gsap } from "gsap"; import { ScrollTrigger } from "gsap/ScrollTrigger"; gsap.registerPlugin(ScrollTrigger))
- framer-motion for UI animations where needed
- Every image: src="https://picsum.photos/seed/{SEED}/800/600"
- All mock data from BUILD_SPEC.md
- Phone: +919876543210, Email: info@akmrealestate.com
- Address: 123, Main Road, Tambaram, Chennai - 600045
- Reviews: Use Indian names (Rajesh K, Priya M, Suresh R, Lakshmi N, Karthik S, Deepa V, Anand B, Meera J) with locations in Chennai
- Components directory: create src/components/ if needed
- Write COMPLETE files — no "...", no "// TODO", no shortcuts
- Every file must be syntactically valid TypeScript/TSX
- Goal: npm run build must pass with zero errors

AFTER ALL FILES ARE WRITTEN, run: npm run build
Report any errors and fix them until build passes.