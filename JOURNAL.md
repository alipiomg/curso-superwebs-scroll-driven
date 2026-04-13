# Journal — Superwebs Scroll-Driven con Video + IA

## Sesion 1 — 2026-04-11
### Creacion completa del curso
- 12 conceptos pedagogicos con microlecciones de 6 secciones
- Mapa conceptual con 2 rutas (lineal + exploratoria)
- Sistema de gamificacion: 5 niveles, 7 badges, 440 XP base + 300 extra
- 6 eventos observables para mejora iterativa
- Landing page scroll-driven con canvas + GSAP + Lenis
- Curso interactivo HTML gamificado con localStorage
- Demo superweb "AURA" con 6 tipos de animacion
- 12 prompts de infografia

### Decisiones
- HTML autocontenido sin build tools → deploy inmediato GitHub Pages
- localStorage para gamificacion zero-backend
- course.json como unica fuente de verdad

---

## Sesion 2 — 2026-04-13
### Bugs criticos arreglados
1. **mdToHtml() no escapaba HTML en backticks**: `<canvas>` se renderizaba como elemento HTML real. Fix: escapeHtml() dentro de inline code y code blocks antes de envolver en `<code>`.
2. **checkBadges() no se ejecutaba al cargar**: Si el estado perdia badges, no se recuperaban. Fix: checkBadges(true) en init() con modo silencioso.

### Mejoras landing
- Tipografia hero: font-weight 800, letter-spacing -0.04em
- Testimonial eliminado (auto-cita)
- CTA final con glow verde premium (box-shadow 30px/60px)
- Footer con links a Curso, Bitacora, GitHub
- Mobile review completo: sin desbordes

### Nuevos entregables
- **12 infografias HTML/CSS autocontenidas** (infografias/01..12.html)
- **12 prompts NanoBananaPro** (prompts-infografias-nanobananapro.md)
- **Bitacora HTML** (bitacora.html) — hub de documentacion conectada
- **Esquemas Excalidraw** (infografias-esquemas.excalidraw)
- **Demo personalizada Rural Makers** (demo/) — AURA → Rural Makers

### Infografias embebidas
- Tab "Infografia" en cada leccion carga HTML via iframe
- Tab "Prompt Infografia" muestra imagen NanoBananaPro si existe, prompt como fallback
- INFOGRAFIA_IMG_MAP para adicion progresiva de imagenes generadas
- 3 imagenes generadas: lecciones 1, 2, 3

### Deploy
- Repo: https://github.com/alipiomg/curso-superwebs-scroll-driven
- Live: https://alipiomg.github.io/curso-superwebs-scroll-driven/
- GitHub Pages activado en master branch

### Sinapsis actualizado
- 4 nuevas passive rules: md-to-html-escape, gamification-init-recalc, infografia-progressive-map, html-curso-autocontenido
- operator-state: tech stack + GitHub Pages + NanoBananaPro, 4 decisiones estrategicas, 3 lessons
- Proyecto registrado en _projects.json
- Nuevo skill en catalogo: html-course-builder
- Memory file creado para el proyecto

### Pendientes
- 9 infografias NanoBananaPro restantes (4-12)
- Demo superweb sin frames reales (solo canvas generativo)
- Testimoniales reales para landing
