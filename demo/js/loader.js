/* ============================================================
   LOADER.JS — Preloader with Progress

   KEY CONCEPTS:
   - Two-phase loading: critical frames first, then rest
   - Progress bar and percentage are animated smoothly
   - On completion, triggers circle-wipe reveal effect
   - Removes preloader from view with CSS transition
   ============================================================ */

const Loader = (() => {
  // DOM references
  let preloaderEl, barEl, percentEl, statusEl;

  // State
  let displayedProgress = 0; // For smooth animation of percentage

  /* --------------------------------------------------------
     INIT — Cache DOM elements and start loading process.
     -------------------------------------------------------- */
  function init() {
    preloaderEl = document.getElementById('preloader');
    barEl = document.getElementById('preloader-bar');
    percentEl = document.getElementById('preloader-percent');
    statusEl = document.getElementById('preloader-status');
  }

  /* --------------------------------------------------------
     UPDATE PROGRESS — Called by CanvasRenderer during
     frame generation. Updates the bar and percentage.
     progress: 0.0 to 1.0
     status: text description of current phase
     -------------------------------------------------------- */
  function updateProgress(progress, status) {
    const percent = Math.round(progress * 100);

    // Update bar width
    barEl.style.width = percent + '%';

    // Update percentage text
    percentEl.textContent = percent + '%';

    // Update status text
    if (status) {
      statusEl.textContent = status;
    }
  }

  /* --------------------------------------------------------
     HIDE — Fades out the preloader after loading completes.
     Returns a Promise so we can chain the circle wipe.
     -------------------------------------------------------- */
  function hide() {
    return new Promise((resolve) => {
      // Brief pause at 100% so user sees completion
      statusEl.textContent = 'Ready';

      setTimeout(() => {
        preloaderEl.classList.add('is-hidden');
        // Wait for CSS transition to finish
        setTimeout(resolve, 600);
      }, 400);
    });
  }

  /* ---- Public API ---- */
  return {
    init,
    updateProgress,
    hide
  };
})();
