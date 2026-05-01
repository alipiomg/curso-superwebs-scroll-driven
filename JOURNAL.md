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

---

## Sesion 3 — 2026-04-30
### Sinapsis evolution: ecosistema content production

**Skill enriquecida**
- `synapis-course-architect` v2.4.0 → **v2.5.0**
- Integracion Higgsfield MCP en paso 7f (auto-generacion de infografias)
- Comando nuevo `/course-infografias-auto` para cursos ya generados
- Manifest tracking (`.manifest.json`) con prompt hash para evitar regen
- Style prefix automatico desde operator-state
- Fallbacks robustos: MCP unavailable → texto, MCP error → manifest pending

**Skills nuevas (3)**
- `landing-iterator` v1.0.0 (700 tokens) — edicion quirurgica, variantes A/B, asset-swap, rollback
- `social-publisher` v1.0.0 (900 tokens) — Facebook/IG/X via MCP, captions con tono operador, scheduling
- `content-pipeline` v1.0.0 (1100 tokens) — agente orquestador end-to-end, 8 fases con gates

**Comando nuevo**
- `/course-deploy-full` (300 tokens) — cierra lanzamiento sobre curso ya hecho
- 5 pasos: infografias missing + deploy GH Pages + video opcional + publish opcional + bitacora

**Passive rules (4 nuevas)**
- `higgsfield-prefer-mcp` — sugiere MCP en vez de manual cuando aplique
- `facebook-publish-flow` — recuerda usar social-publisher
- `landing-edit-not-rewrite` — fuerza ediciones quirurgicas
- `mcp-fallback-graceful` — degradacion automatica cuando MCPs fallan

**Catalogo Sinapsis**
- totalTokens 6715 → 9415 (+2700)
- Quartet de produccion documentado: course-architect + landing-iterator + social-publisher + content-pipeline
- Eliminado placeholder `html-course-builder` (consolidado en course-architect)

**Ejecucion del comando /course-deploy-full**
- Estado: git limpio, repo en sync con remote
- Paso 1 (infografias Higgsfield): SKIP graceful — MCP no conectado en sesion. 9 imagenes pendientes documentadas.
- Paso 2 (deploy): SKIP — sin cambios pendientes, ya live en GH Pages
- Paso 3 (video teaser): SKIP — no especificado
- Paso 4 (publish FB): SKIP — MCP Facebook no conectado
- Paso 5 (bitacora): EJECUTADO — Sesion 3 anadida con timeline completo

### Pendientes Sesion 3
- Conectar Higgsfield MCP y ejecutar `/course-infografias-auto --missing-only`
- Conectar Facebook/Meta MCP para social-publisher
- Generar video teaser hero con HyperFrames cuando se necesite
- Probar `/content-pipeline` con un brief nuevo para validar el flujo completo

### Live URLs (sin cambios desde Sesion 2)
- Curso: https://alipiomg.github.io/curso-superwebs-scroll-driven/curso-superwebs-scroll-driven.html
- Landing: https://alipiomg.github.io/curso-superwebs-scroll-driven/landing-superwebs-scroll-driven.html
- Bitacora: https://alipiomg.github.io/curso-superwebs-scroll-driven/bitacora.html
- Demo: https://alipiomg.github.io/curso-superwebs-scroll-driven/demo/
