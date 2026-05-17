# AKC REAL ESTATE — COMPLETE REBUILD SPEC v2.0

## CRITICAL CHANGES
1. **AKM → AKC everywhere**: All text, metadata, branding
2. **PREMIUM AESTHETIC**: Must look like awwwards/dribbble-quality site
3. **MICRO-INTERACTIONS everywhere**: Smooth animations, hover effects, parallax
4. **REAL ESTATE IMAGERY**: Plots, green lands, property photos (not random picsum)

## NAVBAR (NEW)
- Sticky top navbar with glassmorphism (backdrop-blur)
- Left: "AKC" typography logo (bold, green accent)
- Right: Home | About | Gallery | Reviews | Contact — smooth scroll links
- Mobile: hamburger menu with slide-in drawer
- Scroll-aware: adds shadow/bg when scrolled

## HERO SECTION (REDESIGN)
- FULL VIEWPORT HEIGHT (min-h-screen flex items-center)
- Background: Large beautiful real estate image (green plot/land) with dark overlay gradient
- Use: https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=1920 (green field)
- Or: https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=1920 (modern house/plot)
- Heading: "Plot in Chennai Available for Sale" — large, white, bold, GSAP fade-up
- Subheading: "CMDA Approved | Prime Location | Best Rates" — white, semi-transparent
- CTA Button: "Contact Now" → pulsating glow effect, green bg, white text
- Floating scroll indicator at bottom (animated chevron bounce)
- Subtle particle/geometric animation in background
- GSAP timeline: heading slide up, subtitle fade, button scale in, particles

## MESSAGING SHIFT
- DON'T frame as "investment only" — frame as "your dream plot, your future home"
- "CMDA-approved plots for your dream home"
- "Build your future on solid ground"
- Keep investment as secondary benefit

## GALLERY (REWRITE IMAGES)
- Use UNSPLASH real estate images with specific URLs:
  - https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800 (green field)
  - https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800 (luxury house)
  - https://images.unsplash.com/photo-1449844908441-8829872d2607?w=800 (residential)
  - https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800 (modern home)
  - https://images.unsplash.com/photo-1510627489930-0c1b0bfb6785?w=800 (green plot)
  - https://images.unsplash.com/photo-1434082032745-a1590c00b1e2?w=800 (drone shot)
  - https://images.unsplash.com/photo-1572120360610-d971b9d7767c?w=800 (aerial)
  - https://images.unsplash.com/photo-1592595896616-c37162298647?w=800 (green land)
  - https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800 (luxury)
  - https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800 (modern)
  - https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800 (mansion)
  - https://images.unsplash.com/photo-1600585153490-76fb20a32601?w=800 (estate)
- Masonry grid layout, 3 cols desktop, 2 tablet, 1 mobile
- Hover: scale + shadow lift + overlay with "View" text
- Lightbox: fullscreen, arrow navigation, close button
- GSAP staggered scroll reveal

## CTA SECTION (REDESIGN)
- "Your Dream Plot is Just a Call Away"
- Single CTA: "Contact Us on WhatsApp" → href="https://wa.me/919876543210"
- Green gradient bg with animated geometric pattern
- Floating phone icon animation

## REVIEWS SECTION (COMPLETE REWRITE)
- INFINITE AUTO-SCROLLING CAROUSEL
- Cards slide left continuously, slow and smooth (GSAP horizontal loop)
- When last card exits left, it reappears on right — seamless infinite loop
- Pause on hover
- Speed: slow enough to read, fast enough to feel alive
- Each card: rounded-2xl, white bg, shadow, star rating, review text, name, location
- 8 reviews with Indian names, Chennai locations
- Smooth GSAP animation, NOT CSS animation

## INTERACTIVE ENHANCEMENTS
- Add parallax scrolling effects (different scroll speeds for layers)
- Cursor glow/follow effect on hero
- Smooth scroll-to-section behavior
- Animated stat counters (already there, keep)
- Hover micro-interactions on all cards (scale 1.02, shadow increase)
- Button hover effects (scale, glow)
- Section dividers with animated wave SVG
- Loading skeleton/spinner on first load
- Fade-in sections on scroll (IntersectionObserver + framer-motion)
- Staggered reveal for gallery and feature cards
- Navbar active section highlight on scroll

## DESIGN SYSTEM
- Colors: White bg, Green (#166534 dark, #16a34a mid, #22c55e accent)
- Font: Geist Sans (already imported)
- Glassmorphism for navbar
- Gradient overlays on images
- Border radius: rounded-2xl for cards, rounded-full for buttons
- Shadows: subtle elevation system

## KEY PACKAGES TO USE
- gsap (ScrollTrigger, horizontalLoop)
- framer-motion
- react-icons (for WhatsApp icon, chevrons, etc.)

## FILES TO REWRITE COMPLETELY
1. src/components/Navbar.tsx (NEW)
2. src/app/layout.tsx (add Navbar)
3. src/components/HeroSection.tsx (complete rewrite)
4. src/components/GallerySection.tsx (new images, masonry, hover effects)
5. src/components/CTABanner.tsx (WhatsApp CTA)
6. src/components/ReviewsSection.tsx (infinite loop carousel)
7. src/components/ValuePropsSection.tsx (text changes, AKC branding)
8. src/components/AboutAKC.tsx (rename from AboutAKM, text changes)
9. src/components/ContactSection.tsx (AKC branding)
10. src/components/Footer.tsx (AKC branding)
11. src/app/page.tsx (add Navbar, adjust imports)
12. src/app/globals.css (add animations, glassmorphism)

## BUILD RULES
- npm run build MUST pass with zero errors
- All components with hooks must have "use client"
- GSAP ScrollTrigger must be registered
- Prefers-reduced-motion respected everywhere
- Responsive at all 5 breakpoints
