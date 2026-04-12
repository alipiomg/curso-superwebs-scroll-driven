/* ============================================================
   CANVAS.JS — Frame Renderer & Management

   KEY CONCEPTS:
   - Generates 60 frames programmatically using Canvas 2D API
   - Each frame is a gradient composition that evolves over time
   - Frame 0 = dark, minimal | Frame 59 = bright, expanded
   - Frames are pre-rendered to offscreen canvases for performance
   - The main canvas draws the current frame based on scroll progress
   - Circle-wipe reveal effect on initial load
   ============================================================ */

const CanvasRenderer = (() => {
  // --- Config ---
  const TOTAL_FRAMES = 60;
  const CRITICAL_FRAMES = 15; // First 15 frames loaded in phase 1

  // --- State ---
  let canvas, ctx;
  let canvasWidth, canvasHeight;
  let frames = [];        // Array of pre-rendered ImageData or offscreen canvases
  let currentFrame = 0;
  let isReady = false;

  // Circle-wipe state
  let wipeRadius = 0;
  let wipeTargetRadius = 0;
  let isWiping = false;

  /* --------------------------------------------------------
     FRAME GENERATION
     Each frame is drawn to an offscreen canvas.
     We interpolate colors, positions, and sizes across
     the 0→59 range to simulate a product reveal.
     -------------------------------------------------------- */
  function generateFrame(index) {
    // Progress: 0.0 to 1.0
    const t = index / (TOTAL_FRAMES - 1);

    // Create offscreen canvas for this frame
    const offscreen = document.createElement('canvas');
    offscreen.width = canvasWidth;
    offscreen.height = canvasHeight;
    const octx = offscreen.getContext('2d');

    const cx = canvasWidth / 2;
    const cy = canvasHeight / 2;
    const maxDim = Math.max(canvasWidth, canvasHeight);

    // --- Layer 1: Background gradient (shifts from dark to colored) ---
    const bgGrad = octx.createRadialGradient(cx, cy, 0, cx, cy, maxDim * 0.8);
    const r1 = Math.round(10 + t * 5);
    const g1 = Math.round(10 + t * 30);
    const b1 = Math.round(10 + t * 15);
    bgGrad.addColorStop(0, `rgb(${r1 + 10}, ${g1 + 10}, ${b1 + 10})`);
    bgGrad.addColorStop(1, `rgb(${r1}, ${g1}, ${b1})`);
    octx.fillStyle = bgGrad;
    octx.fillRect(0, 0, canvasWidth, canvasHeight);

    // --- Layer 2: Central orb (grows and brightens) ---
    const orbRadius = (20 + t * maxDim * 0.35);
    const orbGrad = octx.createRadialGradient(cx, cy, 0, cx, cy, orbRadius);

    // Accent color fades in with progress
    const accentAlpha = 0.05 + t * 0.6;
    orbGrad.addColorStop(0, `rgba(0, 255, 136, ${accentAlpha})`);
    orbGrad.addColorStop(0.4, `rgba(0, 200, 255, ${accentAlpha * 0.5})`);
    orbGrad.addColorStop(1, 'rgba(0, 0, 0, 0)');
    octx.fillStyle = orbGrad;
    octx.fillRect(0, 0, canvasWidth, canvasHeight);

    // --- Layer 3: Rotating ring particles ---
    const particleCount = Math.floor(4 + t * 12);
    const ringRadius = 50 + t * maxDim * 0.25;
    const baseAngle = t * Math.PI * 4; // Rotates over scroll

    for (let i = 0; i < particleCount; i++) {
      const angle = baseAngle + (i / particleCount) * Math.PI * 2;
      const px = cx + Math.cos(angle) * ringRadius;
      const py = cy + Math.sin(angle) * ringRadius;
      const pSize = 2 + t * 6;

      const pGrad = octx.createRadialGradient(px, py, 0, px, py, pSize * 3);
      pGrad.addColorStop(0, `rgba(0, 255, 136, ${0.3 + t * 0.5})`);
      pGrad.addColorStop(1, 'rgba(0, 255, 136, 0)');
      octx.fillStyle = pGrad;
      octx.beginPath();
      octx.arc(px, py, pSize * 3, 0, Math.PI * 2);
      octx.fill();
    }

    // --- Layer 4: Outer glow rays (appear in later frames) ---
    if (t > 0.3) {
      const rayT = (t - 0.3) / 0.7; // 0→1 within this phase
      const rayCount = 6;
      octx.save();
      octx.translate(cx, cy);
      octx.rotate(baseAngle * 0.5);

      for (let i = 0; i < rayCount; i++) {
        const rayAngle = (i / rayCount) * Math.PI * 2;
        octx.save();
        octx.rotate(rayAngle);

        const rayLength = maxDim * 0.3 * rayT;
        const rayWidth = 1 + rayT * 3;

        const rayGrad = octx.createLinearGradient(0, 0, rayLength, 0);
        rayGrad.addColorStop(0, `rgba(0, 255, 136, ${rayT * 0.3})`);
        rayGrad.addColorStop(1, 'rgba(0, 255, 136, 0)');

        octx.strokeStyle = rayGrad;
        octx.lineWidth = rayWidth;
        octx.beginPath();
        octx.moveTo(orbRadius * 0.5, 0);
        octx.lineTo(orbRadius * 0.5 + rayLength, 0);
        octx.stroke();

        octx.restore();
      }
      octx.restore();
    }

    // --- Layer 5: Subtle noise/grain texture ---
    // We add a few random subtle dots for visual texture
    octx.fillStyle = `rgba(255, 255, 255, 0.015)`;
    for (let i = 0; i < 80; i++) {
      const nx = Math.random() * canvasWidth;
      const ny = Math.random() * canvasHeight;
      const ns = Math.random() * 2 + 0.5;
      octx.beginPath();
      octx.arc(nx, ny, ns, 0, Math.PI * 2);
      octx.fill();
    }

    // --- Layer 6: Center bright point (product "eye") ---
    const coreSize = 3 + t * 15;
    const coreGrad = octx.createRadialGradient(cx, cy, 0, cx, cy, coreSize);
    coreGrad.addColorStop(0, `rgba(255, 255, 255, ${0.3 + t * 0.7})`);
    coreGrad.addColorStop(0.3, `rgba(0, 255, 136, ${0.2 + t * 0.4})`);
    coreGrad.addColorStop(1, 'rgba(0, 255, 136, 0)');
    octx.fillStyle = coreGrad;
    octx.beginPath();
    octx.arc(cx, cy, coreSize, 0, Math.PI * 2);
    octx.fill();

    return offscreen;
  }

  /* --------------------------------------------------------
     INITIALIZATION
     Sets up the main canvas and generates all frames.
     Returns a Promise that reports progress via callback.
     -------------------------------------------------------- */
  function init(onProgress) {
    canvas = document.getElementById('hero-canvas');
    ctx = canvas.getContext('2d');

    // Set canvas to device pixel ratio for crispness
    resize();

    return new Promise((resolve) => {
      frames = new Array(TOTAL_FRAMES);
      let loaded = 0;

      // PHASE 1: Generate critical frames (first 15)
      function generateCritical() {
        for (let i = 0; i < CRITICAL_FRAMES; i++) {
          frames[i] = generateFrame(i);
          loaded++;
          if (onProgress) {
            onProgress(loaded / TOTAL_FRAMES, 'Loading critical frames...');
          }
        }
      }

      // PHASE 2: Generate remaining frames (async-ish via setTimeout chunks)
      function generateRemaining() {
        let i = CRITICAL_FRAMES;

        function chunk() {
          const end = Math.min(i + 5, TOTAL_FRAMES); // 5 frames per chunk
          for (; i < end; i++) {
            frames[i] = generateFrame(i);
            loaded++;
            if (onProgress) {
              onProgress(loaded / TOTAL_FRAMES, 'Loading remaining frames...');
            }
          }
          if (i < TOTAL_FRAMES) {
            setTimeout(chunk, 0); // Yield to browser
          } else {
            isReady = true;
            drawFrame(0);
            resolve();
          }
        }
        chunk();
      }

      // Execute phases
      generateCritical();
      setTimeout(generateRemaining, 0);
    });
  }

  /* --------------------------------------------------------
     RESIZE — Recalculates canvas dimensions.
     Should be called on window resize.
     -------------------------------------------------------- */
  function resize() {
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    canvasWidth = window.innerWidth;
    canvasHeight = window.innerHeight;

    canvas.width = canvasWidth * dpr;
    canvas.height = canvasHeight * dpr;
    canvas.style.width = canvasWidth + 'px';
    canvas.style.height = canvasHeight + 'px';

    ctx.scale(dpr, dpr);

    // Regenerate frames if already initialized (on resize)
    if (isReady) {
      for (let i = 0; i < TOTAL_FRAMES; i++) {
        frames[i] = generateFrame(i);
      }
      drawFrame(currentFrame);
    }
  }

  /* --------------------------------------------------------
     DRAW FRAME — Renders a specific frame to the main canvas.
     This is the function called on each scroll update.
     -------------------------------------------------------- */
  function drawFrame(index) {
    if (!isReady || !frames[index]) return;
    currentFrame = index;

    // Clear and draw the pre-rendered frame
    ctx.clearRect(0, 0, canvasWidth, canvasHeight);
    ctx.drawImage(frames[index], 0, 0, canvasWidth, canvasHeight);
  }

  /* --------------------------------------------------------
     SET FRAME BY PROGRESS — Maps 0-1 progress to frame index.
     Called by ScrollTrigger on scroll.
     -------------------------------------------------------- */
  function setProgress(progress) {
    const frameIndex = Math.min(
      Math.floor(progress * TOTAL_FRAMES),
      TOTAL_FRAMES - 1
    );
    if (frameIndex !== currentFrame) {
      drawFrame(frameIndex);
    }
  }

  /* --------------------------------------------------------
     CIRCLE WIPE REVEAL
     Animates a circular clip from center outward.
     Used as the intro transition after preloader.
     -------------------------------------------------------- */
  function circleWipeReveal() {
    return new Promise((resolve) => {
      canvas.classList.add('is-visible');

      const maxRadius = Math.sqrt(
        Math.pow(canvasWidth / 2, 2) + Math.pow(canvasHeight / 2, 2)
      );

      // We'll use GSAP to animate the wipe
      const wipeState = { radius: 0 };
      const dpr = Math.min(window.devicePixelRatio || 1, 2);

      gsap.to(wipeState, {
        radius: maxRadius,
        duration: 1.2,
        ease: 'power2.inOut',
        onUpdate() {
          // Redraw current frame with circular clip
          ctx.save();
          ctx.clearRect(0, 0, canvasWidth, canvasHeight);

          ctx.beginPath();
          ctx.arc(canvasWidth / 2, canvasHeight / 2, wipeState.radius, 0, Math.PI * 2);
          ctx.clip();

          if (frames[currentFrame]) {
            ctx.drawImage(frames[currentFrame], 0, 0, canvasWidth, canvasHeight);
          }
          ctx.restore();
        },
        onComplete() {
          // After wipe, draw normally (no clip needed anymore)
          drawFrame(currentFrame);
          resolve();
        }
      });
    });
  }

  /* ---- Public API ---- */
  return {
    init,
    resize,
    drawFrame,
    setProgress,
    circleWipeReveal,
    get totalFrames() { return TOTAL_FRAMES; },
    get isReady() { return isReady; }
  };
})();
