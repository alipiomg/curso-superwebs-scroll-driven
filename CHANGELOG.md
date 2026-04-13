# Changelog — Superwebs Scroll-Driven con Video + IA

## [1.1.0] - 2026-04-13
### Fixed
- mdToHtml() ahora escapa HTML dentro de backticks (fix <canvas> renderizado como elemento real)
- checkBadges(true) en init() para recalcular badges al cargar pagina

### Added
- 12 infografias HTML/CSS autocontenidas (infografias/)
- Tab "Infografia" en cada leccion (iframe con HTML interactivo)
- Soporte imagenes NanoBananaPro en tab Prompt (INFOGRAFIA_IMG_MAP)
- 3 imagenes generadas: lecciones 1, 2, 3
- Bitacora HTML como hub de documentacion (bitacora.html)
- Demo superweb personalizada Rural Makers (demo/)
- 12 prompts formateados para NanoBananaPro
- Esquemas Excalidraw para infografias
- JOURNAL.md con trazabilidad de sesiones

### Changed
- Hero h1 font-weight 800, letter-spacing -0.04em
- CTA final con glow verde premium
- Footer con links a Curso, Bitacora, GitHub
- Testimonial eliminado

### Deploy
- Repo GitHub: alipiomg/curso-superwebs-scroll-driven
- GitHub Pages activo en master

## [1.0.0] - 2026-04-11
### Added
- 12 conceptos completos con microlecciones de 6 secciones
- Mapa conceptual con 2 rutas pedagogicas (lineal + exploratoria)
- Sistema de gamificacion: 5 niveles, 7 badges, 440 XP base
- 6 eventos observables para mejora iterativa con Synapis
- Landing page scroll-driven con canvas + GSAP + Lenis
- Curso interactivo HTML gamificado con localStorage
- Prompts de infografia para los 12 conceptos
