Read REBUILD_V2.md first. Then execute all tasks below IN ORDER.

TASK 1: Run: npm install react-icons

TASK 2: Create src/components/Navbar.tsx
- "use client" directive
- Sticky top navbar with backdrop-blur glassmorphism (bg-white/70 backdrop-blur-md)
- Left: "AKC" in bold text-2xl font-bold text-green-600 as typography logo
- Right: Home, About, Gallery, Reviews, Contact links that smooth-scroll to section IDs
- Mobile hamburger menu button (use react-icons/hi2 HiBars3) that toggles a slide-in drawer
- Scroll listener: when window.scrollY > 50, add shadow-lg and bg-white/90
- Use framer-motion AnimatePresence for mobile menu animation
- Install needed package: npm install react-icons

TASK 3: Rewrite src/components/HeroSection.tsx COMPLETELY
- "use client"
- Full viewport height: min-h-screen flex items-center justify-center
- Background: large image from https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=1920 with dark overlay (bg-black/50)
- Centered content:
  * h1: "Plot in Chennai Available for Sale" -- text-5xl md:text-7xl font-bold text-white
  * p: "CMDA Approved | Prime Location | Best Rates" -- text-xl text-white/80 mt-4
  * a: "Contact Now" -- rounded-full bg-green-500 hover:bg-green-600 text-white px-8 py-4 text-lg mt-8, href="#contact"
- Floating scroll indicator at bottom: animated bouncing chevron-down icon
- GSAP timeline: heading fades up from y:60, subtitle follows, button scales in
- Register ScrollTrigger plugin
- Wrap animations in matchMedia with prefers-reduced-motion check

TASK 4: Update src/app/layout.tsx
- Change metadata: title="AKC Real Estate | Plots in Chennai", description="AKC Real Estate - CMDA-approved plots at best rates in Chennai"

TASK 5: Update src/app/page.tsx
- Import Navbar component
- Add <Navbar /> at the very top (before HeroSection)
- Change import from AboutAKM to AboutAKC

TASK 6: Rename src/components/AboutAKM.tsx to src/components/AboutAKC.tsx
- Use the write tool to read AboutAKM.tsx, then write it to AboutAKC.tsx with all "AKM" replaced by "AKC"

TASK 7: Search and replace "AKM" to "AKC" in ALL component files:
- src/components/ValuePropsSection.tsx
- src/components/CTABanner.tsx  
- src/components/ContactSection.tsx
- src/components/Footer.tsx
- src/components/ReviewsSection.tsx
- src/components/GallerySection.tsx
- src/components/HeroSection.tsx

TASK 8: Run npm run build and fix ALL errors until it passes with zero errors.