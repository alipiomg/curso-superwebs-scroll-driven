# Prompts Infografias — NanoBananaPro / Higgsfield
## Curso: Superwebs Scroll-Driven con Video + IA

Estilo global: Dark mode (#0a0a0a fondo), acentos verde neon (#00ff88) y cyan (#00d4ff), tipografia sans-serif moderna, layout vertical, iconos flat, sin texto borroso, alta resolucion.

---

## 01. Que son las animaciones Scroll-Driven

```
Infographic, dark background #0a0a0a, vertical layout, modern tech style.

Title: "Scroll-Driven Animations" in bold white with green neon (#00ff88) accent.

Section 1: Two parallel timelines comparing "Time-based" (auto-playing, clock icon) vs "Scroll-driven" (user-controlled, scroll icon). The time-based shows a linear progress bar running automatically. The scroll-driven shows a hand controlling a vertical scrollbar mapped to animation progress 0% to 100%.

Section 2: Diagram showing scroll position (0% top, 100% bottom) mapped with arrows to animation progress (0% start, 100% end). Use a gradient bar from green to cyan.

Section 3: Three mini browser mockups showing iconic examples: Apple product page, Linear.app landing, Awwwards portfolio. Each with a subtle glow.

Section 4: Code snippet box with dark bg showing: animation-timeline: scroll() highlighted in cyan.

Footer: "Leccion 01 — Rural Makers" in small muted text.
Clean, minimal, no clutter, professional infographic style.
```

---

## 02. Generacion de imagenes con IA

```
Infographic, dark background #0a0a0a, vertical layout, modern tech style.

Title: "AI Image Generation for Products" in bold white with green neon accent.

Section 1 - Workflow: Four connected circles with arrows: "Define Product" → "Create Base Prompt" → "Vary Angles" → "Check Consistency". Icons inside each circle.

Section 2 - Prompt Anatomy: A horizontal bar divided into 5 colored segments: Product (green), Angle (cyan), Lighting (yellow), Background (purple), Style (pink). Each labeled clearly.

Section 3: Grid of 4 product frames showing same object from 4 angles (front, 45deg, side, top). Dark background, studio lighting look.

Section 4 - Tips box: Bullet points with icons: "Black background", "Same lighting", "Use negative prompts", "Consistent style seed".

Footer: "Leccion 02 — Rural Makers"
Clean, minimal, professional infographic.
```

---

## 03. De imagenes a video con IA

```
Infographic, dark background #0a0a0a, vertical layout, modern tech style.

Title: "From Images to AI Video" in bold white with cyan (#00d4ff) accent.

Section 1: Two parallel flowcharts side by side. Left path: "Images → AI Video (Runway/Kling) → MP4". Right path: "Images → FFmpeg concat → MP4". Both converging at bottom to "Ready for frames extraction".

Section 2 - Ideal Specs: A specs card with rounded corners showing: 24fps, 1920x1080, H.264 codec, yuv420p, 3-6 seconds duration. Each spec in its own pill badge.

Section 3: Visual comparison - Left side "Few frames (choppy)" showing 3 spaced out frames with jagged motion lines. Right side "Many frames (smooth)" showing 12 tightly packed frames with smooth motion curve.

Section 4: Tool logos row: Runway ML, Kling AI, Pika Labs, FFmpeg. Each as a small icon with name below.

Footer: "Leccion 03 — Rural Makers"
```

---

## 04. FFmpeg: extraer y optimizar frames

```
Infographic, dark background #0a0a0a, vertical layout, modern tech style.

Title: "FFmpeg Frame Extraction Pipeline" in bold white with green neon accent.

Main visual: A vertical pipeline with 6 connected steps, each in a rounded card:

Step 1: Video file icon (MP4) with label "AI-generated video input"
Step 2: Magnifying glass icon - "ffprobe analysis" showing: duration, FPS, resolution
Step 3: Gear icon - "ffmpeg processing" with command flags highlighted
Step 4: Folder icon - "Output: numbered WebP frames" showing frame_0001.webp to frame_0120.webp
Step 5: Scale icon - "Size comparison: JPEG 45KB vs WebP 18KB" with a bar chart
Step 6: Terminal card showing the full command with each flag annotated with arrows pointing to explanations: -vf scale, -q:v quality, -start_number, output pattern

Color coding: input=cyan, process=green, output=purple.

Footer: "Leccion 04 — Rural Makers"
```

---

## 05. Canvas como motor de rendering

```
Infographic, dark background #0a0a0a, vertical layout, modern tech style.

Title: "HTML5 Canvas Rendering Engine" in bold white with cyan accent.

Section 1 - Comparison table: Two columns. Left: "<img> tag" with red X marks: "Triggers reflow", "Load events", "Flickering", "Layout recalculation". Right: "<canvas>" with green checkmarks: "GPU direct draw", "No reflow", "Instant paint", "Memory efficient".

Section 2: Canvas diagram showing a coordinate system (0,0 top-left) with a rectangle representing the viewport. Inside: drawImage() painting a frame. Axes labeled with width and height.

Section 3 - Cover-fit formula: Visual showing a wide image fitting into a tall canvas. Formula highlighted: scale = Math.max(canvasW/imgW, canvasH/imgH). Arrows showing how the image is centered and cropped.

Section 4: Circular flow diagram: resize → recalculate dimensions → clearRect() → drawImage() → display. Green arrows connecting each step.

Section 5: Minimal code snippet: 3 lines showing ctx.clearRect, scale calculation, ctx.drawImage.

Footer: "Leccion 05 — Rural Makers"
```

---

## 06. Lenis: smooth scroll profesional

```
Infographic, dark background #0a0a0a, vertical layout, modern tech style.

Title: "Lenis Smooth Scroll" in bold white with green neon accent.

Section 1 - Scroll comparison: Two side-by-side graphs. Left: "Native scroll" - a stepped/jagged line graph showing discrete jumps. Right: "Lenis scroll" - a smooth sinusoidal curve. Both with scroll position on Y axis and time on X axis.

Section 2 - Lerp explained: Diagram showing: current position (dot), target position (dot), and the lerp factor (0.07) as a spring/rubber band connecting them. Formula: current += (target - current) * lerp.

Section 3 - Integration flow: Horizontal chain of boxes: "Lenis" → "scroll event" → "ScrollTrigger.update()" + "gsap.ticker" → "lenis.raf()". Arrows connecting with data flow labels.

Section 4 - Config table: Three rows showing key settings: duration (1.2), wheelMultiplier (0.8), easing (easeOutQuart). Each with a small visual showing the effect: slow/fast, sensitivity, curve shape.

Footer: "Leccion 06 — Rural Makers"
```

---

## 07. GSAP + ScrollTrigger

```
Infographic, dark background #0a0a0a, vertical layout, modern tech style.

Title: "GSAP ScrollTrigger" in bold white with cyan accent. Subtitle: "The Brain of Scroll Animations".

Section 1: Browser viewport mockup. Inside: a content element with dotted lines marking "start: top 80%" and "end: bottom 20%". A vertical progress bar on the right showing 0% to 100% with current position highlighted in green.

Section 2 - Three feature panels side by side:
- "Scrub" panel: animation progress tied to scroll (rubber band icon)
- "Pin" panel: element stays fixed while scroll continues (pin/thumbtack icon)
- "Timeline" panel: sequence of animations chained (chain links icon)

Section 3: Minimal code cards for each property:
- scrub: 0.5 (smooth)
- pin: true
- toggleActions: "play none none reverse"
Each in a dark code box with syntax highlighting.

Section 4: Visual of onUpdate callback: scroll → self.progress → frameIndex → renderFrame(). Arrow flow.

Footer: "Leccion 07 — Rural Makers"
```

---

## 08. Vincular scroll a frames del canvas

```
Infographic, dark background #0a0a0a, vertical layout, modern tech style.

Title: "Scroll → Frame Binding" in bold white with gradient green-to-cyan.

Main pipeline (vertical flow with large icons):

Step 1: Video icon → "FFmpeg" → Folder icon labeled "120 WebP frames"

Step 2: Loading phase - Progress bar showing "Phase 1: Critical frames (every 10th)" at 30%, then "Phase 2: Fill remaining" completing to 100%. Label: "Progressive loading strategy".

Step 3: The core formula in a highlighted box:
ScrollTrigger progress (0 → 1)
↓ multiply by
(totalFrames - 1) = 119
↓ equals
frameIndex (0 → 119)

Step 4: Canvas element with drawImage() painting the correct frame. Three mini-frames shown: frame 0, frame 60, frame 119.

Step 5: Circle-wipe reveal animation: three stages showing a circle expanding from center to reveal content underneath.

Footer: "Leccion 08 — Rural Makers"
```

---

## 09. 7 tipos de animacion scroll-driven

```
Infographic, dark background #0a0a0a, horizontal layout, modern tech style.

Title: "7 Scroll-Driven Animations" in bold white with rainbow gradient accent.

Main visual: 7 vertical columns, each representing one animation type:

1. fade-up: Arrow pointing up + opacity icon. "Titles, cards"
2. slide-left: Arrow pointing left. "Text blocks, quotes"
3. scale-up: Expand arrows from center. "Images, heroes"
4. rotate-in: Circular arrow. "Icons, badges"
5. stagger: Multiple arrows in sequence. "Lists, grids"
6. clip-reveal: Scissors/mask icon. "Sections, reveals"
7. parallax: Two layers at different speeds. "Backgrounds"

Below: Timeline diagram showing reveal sequence: label (0ms) → heading (100ms) → body (200ms) → CTA (300ms). Staggered bars.

Rule callout box with warning icon: "Never repeat the same animation on consecutive sections"

Footer: "Leccion 09 — Rural Makers"
```

---

## 10. Branding generativo con IA

```
Infographic, dark background #0a0a0a, vertical layout, modern tech style.

Title: "Generative Branding with AI" in bold white with purple (#a855f7) accent.

Section 1 - Input: Box showing "Product name + Sector" with an arrow going into a Claude AI icon.

Section 2 - Claude generates (3 output cards):
- Card 1: "Name" - 3 example brand names in stylish typography
- Card 2: "Palette" - 5 color swatches with hex codes (dark bg, accent, secondary, text, muted)
- Card 3: "Typography" - Font specimen showing heading + body font pairing

Section 3 - Output: CSS custom properties code block showing :root variables for all generated tokens.

Section 4: Visual mockup of a landing page using the generated brand: 40% text area on left, canvas background on right. Showing the side-aligned layout pattern.

Section 5: Three mini mockups showing 3 different generated brands for comparison.

Footer: "Leccion 10 — Rural Makers"
```

---

## 11. Arquitectura del proyecto

```
Infographic, dark background #0a0a0a, vertical layout, modern tech style.

Title: "Superweb Project Architecture" in bold white with green accent.

Section 1 - Wireframe: Vertical stack showing complete page structure:
- Loader (top bar, animated)
- Header (sticky, with nav)
- Hero section (standalone, full viewport)
- Canvas (fixed behind content, labeled "position: fixed")
- Content sections (3 cards with data-animation attributes labeled)
- Marquee strip (horizontal scroll)
- Stats section (with overlay)
- CTA final
- Footer

Section 2 - File tree (side panel):
project/
  index.html
  css/style.css
  js/app.js
  frames/
    frame_0001.webp
    frame_0120.webp

Section 3 - Anti-patterns (crossed out in red):
- "Multiple CSS files" ✕
- "Framework dependencies" ✕
- "Server-side rendering" ✕
- "npm build step" ✕
Label: "Zero build tools. Static HTML. Deploy anywhere."

Footer: "Leccion 11 — Rural Makers"
```

---

## 12. Skill video2website: automatizacion total

```
Infographic, dark background #0a0a0a, horizontal pipeline layout, modern tech style.

Title: "video2website Skill Pipeline" in bold white with gradient green-to-cyan.

Main visual: Horizontal flow with 8 connected steps, each as a card with icon:

1. Document icon - "SKILL.md file" (the skill definition)
2. Terminal icon - "User runs /video2website"
3. Chat bubble icon - "Claude asks 4 questions" (video path, brand, sections, style)
4. Search icon - "ffprobe analyzes" (duration, fps, resolution)
5. Gear icon - "ffmpeg extracts frames" (WebP, optimized)
6. Code icon - "Claude generates HTML/CSS/JS" (complete landing page)
7. Checklist icon - "Quality gate: 13 checks" (canvas, scroll, responsive...)
8. Rocket icon - "npx serve → Live preview"

Below: Time estimate badges: "Total: ~3 minutes from video to website"

Connection arrows between each step, colored gradient from green to cyan.

Footer: "Leccion 12 — Rural Makers | Powered by Claude Code"
```

---

## Notas de uso

- **Formato**: Copiar cada bloque de texto entre ``` como prompt en NanoBananaPro/Higgsfield
- **Resolucion recomendada**: 1080x1920 (vertical) o 1920x1080 (horizontal para lecciones 9 y 12)
- **Estilo consistente**: Dark mode, verde neon #00ff88, cyan #00d4ff, fondo #0a0a0a
- **Post-procesado**: Ajustar textos si el modelo genera texto ilegible
