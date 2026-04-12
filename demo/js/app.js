/* ============================================================
   APP.JS — Main Initialization

   KEY CONCEPTS:
   - Orchestrates the loading sequence:
     1. Init preloader
     2. Generate canvas frames (with progress callback)
     3. Hide preloader
     4. Circle-wipe reveal
     5. Init Lenis smooth scroll + GSAP integration
     6. Setup ScrollTrigger for canvas frame scrubbing
     7. Init section animations
   - Lenis ↔ GSAP sync is the critical integration point
   ============================================================ */

(async function App() {
  'use strict';

  /* --------------------------------------------------------
     STEP 1: Initialize the preloader UI
     -------------------------------------------------------- */
  Loader.init();

  /* --------------------------------------------------------
     STEP 2: Generate all canvas frames
     The CanvasRenderer.init() returns a Promise and reports
     progress via the callback we pass to it.
     -------------------------------------------------------- */
  await CanvasRenderer.init((progress, status) => {
    Loader.updateProgress(progress, status);
  });

  /* --------------------------------------------------------
     STEP 3: Hide the preloader with a smooth transition
     -------------------------------------------------------- */
  await Loader.hide();

  /* --------------------------------------------------------
     STEP 4: Circle-wipe reveal on the canvas
     This animates a circular clip from center → full viewport.
     -------------------------------------------------------- */
  await CanvasRenderer.circleWipeReveal();

  /* --------------------------------------------------------
     STEP 5: Initialize Lenis Smooth Scroll
     Lenis provides buttery smooth scrolling. We need to
     connect it to GSAP's ticker so ScrollTrigger stays
     perfectly in sync with Lenis's scroll position.

     This is THE critical integration for scroll-driven sites:
     - Lenis handles the smooth interpolation
     - GSAP ScrollTrigger reads scroll position from Lenis
     - Without this sync, animations would be jerky
     -------------------------------------------------------- */

  // Register GSAP plugins
  gsap.registerPlugin(ScrollTrigger);

  // Create Lenis instance
  const lenis = new Lenis({
    duration: 1.2,        // Smooth scroll duration
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Smooth easing
    orientation: 'vertical',
    gestureOrientation: 'vertical',
    smoothWheel: true,
    wheelMultiplier: 1,
    touchMultiplier: 2,
  });

  // CRITICAL: Connect Lenis scroll to GSAP ScrollTrigger
  // This ensures ScrollTrigger reads Lenis's smoothed scroll position
  lenis.on('scroll', ScrollTrigger.update);

  // CRITICAL: Add Lenis raf (requestAnimationFrame) to GSAP's ticker
  // This makes Lenis update on every GSAP tick, keeping them in perfect sync
  gsap.ticker.add((time) => {
    lenis.raf(time * 1000); // GSAP gives time in seconds, Lenis wants ms
  });

  // CRITICAL: Disable GSAP's built-in lag smoothing
  // Lag smoothing can cause scroll position jumps when Lenis is handling scroll
  gsap.ticker.lagSmoothing(0);

  /* --------------------------------------------------------
     STEP 6: Canvas Frame Scrubbing via ScrollTrigger
     Pin the canvas during the hero section and map
     scroll progress (0→1) to frame index (0→59).

     This is the core "video on scroll" effect:
     - The hero section is 300vh tall
     - As you scroll through it, progress goes 0→1
     - We convert that to a frame index and draw it
     -------------------------------------------------------- */
  ScrollTrigger.create({
    trigger: '#hero',
    start: 'top top',
    end: 'bottom bottom',
    scrub: true, // Smooth scrubbing (true = 1 second catch-up)
    onUpdate: (self) => {
      // self.progress = 0 to 1 based on scroll position within trigger
      CanvasRenderer.setProgress(self.progress);
    }
  });

  /* --------------------------------------------------------
     STEP 7: Initialize Section Animations
     Each [data-animate] element gets its animation type
     registered with ScrollTrigger.
     -------------------------------------------------------- */
  Animations.init();

  // Animate hero content (title + tagline)
  Animations.animateHeroContent();

  /* --------------------------------------------------------
     STEP 8: Handle window resize
     Recalculate canvas dimensions and regenerate frames.
     Debounced to avoid excessive recalculation.
     -------------------------------------------------------- */
  let resizeTimeout;
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(() => {
      CanvasRenderer.resize();
      ScrollTrigger.refresh(); // Recalculate all trigger positions
    }, 250);
  });

  /* --------------------------------------------------------
     DONE — Log completion
     -------------------------------------------------------- */
  console.log('[RuralMakers] Rural Makers initialized successfully');
  console.log('[RuralMakers] Frames:', CanvasRenderer.totalFrames);
  console.log('[RuralMakers] Lenis + GSAP ScrollTrigger connected');

})();
