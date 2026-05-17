# AKM Real Estate — Complete Build Specification

## PROJECT OVERVIEW
Landing page for AKM Real Estate selling CMDA-approved plots in Chennai.
Modern, premium, white + green theme. Built with Next.js 16, TypeScript, Tailwind v4, GSAP, framer-motion.

## TECH STACK
- Next.js 16 (App Router, src directory)
- TypeScript 5, Tailwind CSS v4, React 19
- GSAP (greensock) for scroll animations
- framer-motion for UI animations
- All components: "use client" where animations/state needed

## DESIGN SYSTEM
### Colors
- Primary Green: #166534 (dark green), #16a34a (mid green), #22c55e (accent green)
- White: #ffffff
- Off-white/BG: #f0fdf4 (very light green tint)
- Text Dark: #052e16 (deep green-black)
- Text Body: #374151 (gray-700)
- Text Muted: #6b7280 (gray-500)
- Border: #dcfce7 (light green border)
- CTA accent: #16a34a with hover #15803d

### Typography
- Font: Geist Sans (already imported) for headings & body
- Hero heading: 4xl–6xl, font-bold, tracking-tight
- Section headings: 3xl, font-bold
- Body: text-lg, leading-relaxed

### Spacing
- Sections: py-20 md:py-28
- Container: max-w-7xl mx-auto px-6

### Borders & Shadows
- Cards: rounded-2xl, shadow-lg, border border-green-100
- Buttons: rounded-full

## SITE SECTIONS (top to bottom)

### 1. HERO SECTION
- Full viewport height (min-h-screen)
- Background: gradient from green-50 to white
- Large headline: "Plot in Chennai Available for Sale"
- Subheadline: "CMDA Approved | Prime Location | Best Rates"
- "Contact Now" button → scrolls to contact or opens phone dial
- Floating subtle animation on the headline with GSAP
- Subtle particle or geometric decoration in background

### 2. VALUE PROPOSITION SECTION
- Section heading: "Why Invest With AKM Real Estate?"
- Paragraph text:
  "At AKM Real Estate, we specialize in offering CMDA-approved plots at the most competitive rates in Chennai. Every plot we sell is legally vetted, properly maintained, and secured with clear titles — giving you complete peace of mind. Whether you're buying for your dream home or as a long-term investment, our plots are located in fast-appreciating corridors with excellent connectivity. With transparent transactions, zero hidden charges, and dedicated post-sale support, we ensure your investment grows safely and steadily. Secure your future with a plot that's truly yours."
- 4 feature cards in a grid below:
  1. CMDA Approved — All our plots are CMDA-approved with clear documentation
  2. Best Rates — Competitive pricing with flexible payment options
  3. Secure Investment — Legally vetted plots with clear titles
  4. Prime Locations — Well-connected areas with high appreciation potential

### 3. GALLERY SECTION
- Section heading: "Explore the Plot"
- Grid gallery of images & videos (masonry-style, responsive)
- Images: Use placeholder images from unsplash or picsum — 12-15 placeholder images
- Use picsum.photos with different seeds for variety: https://picsum.photos/seed/plot1/800/600, etc.
- Include at least 2 video placeholders (use a thumbnail with play button overlay)
- Grid: 3 cols on desktop, 2 on tablet, 1 on mobile
- Lightbox on click: clicking any image opens a full-screen lightbox with navigation
- GSAP scroll-triggered reveal animation as images come into view

### 4. CTA BANNER SECTION
- Full-width green gradient background (from green-600 to green-800)
- Punchy tagline: "Your Dream Plot is Just a Call Away"
- Subtext: "Don't wait. Premium plots are selling fast. Secure yours today."
- Large "Contact Us" button → href="tel:+919876543210" (placeholder number)
- White text on green bg, button is white bg with green text
- GSAP parallax or scale animation on scroll

### 5. CUSTOMER REVIEWS SECTION
- Section heading: "What Our Customers Say"
- Scrollable horizontal carousel of review cards
- Each card: rounded-2xl, white bg, shadow, padding
- Card content: star rating (5 stars), review text, customer name, location
- Auto-scroll animation with GSAP — cards slide left continuously
- Pause on hover
- 8 mock reviews with varied Indian names and Chennai locations
- Framer-motion for card entrance animations

### 6. ABOUT AKM REAL ESTATE SECTION
- Section heading: "About AKM Real Estate"
- Left: info text, Right: stats grid
- Text:
  "With over 7 years of excellence in Chennai's real estate market, AKM Real Estate has established itself as a trusted name in plotted development. From Tambaram to New Manli, we have multiple projects spanning Chennai's most promising corridors. Whether you're looking for a plot near schools, IT hubs, or upcoming infrastructure projects — we have options in every prime location. Our commitment to quality, transparency, and customer satisfaction has made us the preferred choice for over 1,000+ happy families."
- Stats grid (4 cards):
  - 7+ Years Experience
  - 1,500+ Plots Sold
  - 1,000+ Happy Customers
  - 10+ Ongoing Projects
- Below stats: locations served — "Tambaram | New Manli | Medavakkam | Chromepet | Pallavaram | OMR"

### 7. CONTACT SECTION
- Section heading: "Get In Touch"
- Phone: +91 98765 43210 (placeholder)
- Email: info@akmrealestate.com
- Address: 123, Main Road, Tambaram, Chennai - 600045
- Google Maps embed: placeholder iframe with Chennai coordinates (12.9249, 80.1000)
- Contact form: name, phone, email, message → shows success toast

### 8. FOOTER
- Dark green bg (#052e16), white text
- Logo/name: AKM Real Estate
- Quick links: Home, About, Gallery, Contact
- Services: Plot Sales, CMDA Approved Plots, Investment Advisory, Site Visits
- Bottom bar: © 2026 AKM Real Estate. All rights reserved.
- Social media icons (placeholder links)

## ANIMATION REQUIREMENTS
- Use GSAP ScrollTrigger for scroll-based reveal animations
- Hero section: headline fades in and slides up on load
- Gallery: images reveal with staggered animation as they enter viewport
- CTA banner: subtle scale/parallax on scroll
- Reviews: auto-scrolling carousel with smooth infinite scroll
- Stats: count-up animation when section comes into view
- All animations: respect prefers-reduced-motion

## RESPONSIVE DESIGN
- 5 breakpoints working:
  - sm: 640px (mobile)
  - md: 768px (tablet)
  - lg: 1024px (small desktop)
  - xl: 1280px (desktop)
  - 2xl: 1536px (large desktop)
- Mobile: single column, stacked sections
- Touch-friendly: 44px minimum hit targets

## MOCK DATA TO USE
- Phone: +91 98765 43210
- Email: info@akmrealestate.com
- Address: 123, Main Road, Tambaram, Chennai - 600045
- Map: Google Maps link https://maps.google.com/?q=12.9249,80.1000

## FILES TO CREATE/MODIFY
- src/app/layout.tsx — update metadata
- src/app/globals.css — add green theme, animations
- src/app/page.tsx — compose all sections
- src/components/HeroSection.tsx
- src/components/ValuePropsSection.tsx
- src/components/GallerySection.tsx
- src/components/CTABanner.tsx
- src/components/ReviewsSection.tsx
- src/components/AboutAKM.tsx
- src/components/ContactSection.tsx
- src/components/Footer.tsx
- src/components/Lightbox.tsx

## BUILD COMMANDS
- Dev: npm run dev
- Build: npm run build
- Must pass `npm run build` with NO errors and NO warnings
