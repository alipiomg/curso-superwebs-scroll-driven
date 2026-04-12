/* ============================================================
   ANIMATIONS.JS — Section Animations (7 types)

   KEY CONCEPTS:
   - Each animation type is defined as a function that receives
     the element and creates a GSAP ScrollTrigger animation.
   - Animations are triggered when sections enter the viewport.
   - Uses data-animate attribute to determine animation type.
   - scrub: false for these — they trigger and play, not scrub.
   ============================================================ */

const Animations = (() => {

  /* --------------------------------------------------------
     ANIMATION DEFINITIONS
     Each function receives the element to animate and
     optionally its parent section for scroll trigger context.
     -------------------------------------------------------- */

  /**
   * TYPE 1: fade-up
   * Element fades in from below (opacity 0 → 1, y offset → 0)
   * This is the most common scroll animation pattern.
   */
  function fadeUp(el) {
    gsap.from(el, {
      y: 60,
      opacity: 0,
      duration: 1,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: el,
        start: 'top 85%',
        end: 'top 40%',
        toggleActions: 'play none none reverse',
        // toggleActions: onEnter onLeave onEnterBack onLeaveBack
        // 'play none none reverse' = plays on enter, reverses on leave back
      }
    });
  }

  /**
   * TYPE 2: slide-left
   * Element slides in from the right side of the viewport.
   * Great for alternating left/right content layouts.
   */
  function slideLeft(el) {
    gsap.from(el, {
      x: 120,
      opacity: 0,
      duration: 1,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: el,
        start: 'top 85%',
        end: 'top 40%',
        toggleActions: 'play none none reverse',
      }
    });
  }

  /**
   * TYPE 3: scale-up
   * Element starts small and scales to full size.
   * Creates a "popping in" effect.
   */
  function scaleUp(el) {
    gsap.from(el, {
      scale: 0.7,
      opacity: 0,
      duration: 1,
      ease: 'back.out(1.5)',
      scrollTrigger: {
        trigger: el,
        start: 'top 85%',
        end: 'top 40%',
        toggleActions: 'play none none reverse',
      }
    });
  }

  /**
   * TYPE 4: rotate-in
   * Element rotates from a tilted angle to its normal position.
   * Adds dimensionality and visual interest.
   */
  function rotateIn(el) {
    gsap.from(el, {
      rotation: -8,
      y: 40,
      opacity: 0,
      duration: 1,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: el,
        start: 'top 85%',
        end: 'top 40%',
        toggleActions: 'play none none reverse',
      }
    });
  }

  /**
   * TYPE 5: stagger-up
   * For containers with multiple children — each child animates
   * in sequence with a delay (stagger).
   * Perfect for grids, lists, and card layouts.
   */
  function staggerUp(el) {
    // If the element is a grid container, animate its children
    const children = el.children;
    if (children.length > 1) {
      gsap.from(children, {
        y: 50,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out',
        stagger: 0.15, // 150ms delay between each child
        scrollTrigger: {
          trigger: el,
          start: 'top 85%',
          end: 'top 40%',
          toggleActions: 'play none none reverse',
        }
      });
    } else {
      // Fallback to simple fade-up for single elements
      fadeUp(el);
    }
  }

  /**
   * TYPE 6: clip-reveal
   * Uses clip-path to reveal content from center outward.
   * One of the most visually striking animation types.
   *
   * NOTE: clip-path animations require the element to be
   * visible but clipped, then the clip expands.
   */
  function clipReveal(el) {
    // Set initial clip-path (fully clipped — invisible)
    gsap.set(el, {
      clipPath: 'inset(50% 50% 50% 50%)',
      opacity: 1,
    });

    gsap.to(el, {
      clipPath: 'inset(0% 0% 0% 0%)',
      duration: 1.2,
      ease: 'power3.inOut',
      scrollTrigger: {
        trigger: el,
        start: 'top 85%',
        end: 'top 40%',
        toggleActions: 'play none none reverse',
      }
    });
  }

  /* --------------------------------------------------------
     ANIMATION ROUTER
     Maps data-animate values to animation functions.
     -------------------------------------------------------- */
  const animationMap = {
    'fade-up':     fadeUp,
    'slide-left':  slideLeft,
    'scale-up':    scaleUp,
    'rotate-in':   rotateIn,
    'stagger-up':  staggerUp,
    'clip-reveal': clipReveal,
  };

  /* --------------------------------------------------------
     INIT — Finds all [data-animate] elements and applies
     the corresponding animation based on the attribute value.
     -------------------------------------------------------- */
  function init() {
    const elements = document.querySelectorAll('[data-animate]');

    elements.forEach((el) => {
      const type = el.getAttribute('data-animate');
      const animFn = animationMap[type];

      if (animFn) {
        animFn(el);
      } else {
        console.warn(`[Animations] Unknown animation type: "${type}"`);
      }
    });

    console.log(`[Animations] Initialized ${elements.length} animations`);
  }

  /* --------------------------------------------------------
     HERO CONTENT ANIMATION
     Special animation for the hero title and tagline.
     Called after the circle-wipe reveal completes.
     -------------------------------------------------------- */
  function animateHeroContent() {
    const heroContent = document.querySelector('.hero__content');
    if (!heroContent) return;

    // Fade in the hero content
    gsap.to(heroContent, {
      opacity: 1,
      duration: 1,
      ease: 'power2.out',
      delay: 0.2,
    });

    // Animate title
    const title = heroContent.querySelector('.hero__title');
    if (title) {
      gsap.from(title, {
        y: 30,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
        delay: 0.3,
      });
    }

    // Animate tagline
    const tagline = heroContent.querySelector('.hero__tagline');
    if (tagline) {
      gsap.from(tagline, {
        y: 20,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
        delay: 0.6,
      });
    }

    // Fade out hero content as user scrolls into the hero section
    gsap.to(heroContent, {
      opacity: 0,
      y: -50,
      ease: 'none',
      scrollTrigger: {
        trigger: '#hero',
        start: '5% top',
        end: '25% top',
        scrub: true,
      }
    });
  }

  /* ---- Public API ---- */
  return {
    init,
    animateHeroContent,
  };
})();
