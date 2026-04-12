# Prompts de Infografia — Superwebs Scroll-Driven

## Leccion 1: Que son las animaciones Scroll-Driven
**Plataforma**: Figma o Canva
**Estilo**: Fondo oscuro (#0a0a0a), acentos en gradiente violeta-rosa, tipografia monospace para codigo, estilo tech premium

Infografia vertical que muestre: (1) Comparativa visual tiempo-based vs scroll-driven - dos lineas de tiempo, una automatica y otra controlada por scroll. (2) Diagrama de como scroll position (0-100%) se mapea a animation progress (0-100%). (3) 3 ejemplos iconicos: Apple product page, Linear.app, y un portfolio de Awwwards. (4) Snippet de CSS con animation-timeline: scroll() destacado.

---

## Leccion 2: Generar imagenes de producto con IA
**Plataforma**: Figma o Canva
**Estilo**: Fondo oscuro, grid de imagenes de producto, flechas indicando rotacion, badges con los angulos (0°, 45°, 90°, 180°), estilo tech premium

Infografia que muestre: (1) El flujo de trabajo: Definir producto → Crear prompt base → Variar angulos → Revisar consistencia. (2) Anatomia de un buen prompt: producto + angulo + iluminacion + fondo + estilo. (3) Comparativa de 4 frames ejemplo mostrando la progresion de angulos. (4) Tips: fondo negro, misma iluminacion, negative prompts.

---

## Leccion 3: De imagenes a video con IA generativa
**Plataforma**: Figma o Canva
**Estilo**: Fondo oscuro, diagrama de flujo con flechas neon, iconos de herramientas, antes/despues del video resultante, estilo tech premium

Infografia que muestre: (1) Dos flujos paralelos: Imagenes → IA Video (Runway/Kling) → MP4 vs Imagenes → FFmpeg → MP4. (2) Specs del video ideal: 24fps, 1920x1080, H.264, yuv420p. (3) Comparativa visual de calidad: pocos frames (choppy) vs muchos frames (smooth). (4) Logos de herramientas: Runway, Kling, Pika, FFmpeg.

---

## Leccion 4: FFmpeg: extraer y optimizar frames
**Plataforma**: Figma o Canva
**Estilo**: Pipeline horizontal con iconos, fondo oscuro, codigo resaltado con syntax highlighting

Infografia que muestre el pipeline FFmpeg: 1) Video MP4 de IA (icono de archivo). 2) ffprobe analizando (duracion, FPS, resolucion). 3) ffmpeg procesando con los parametros clave resaltados. 4) Carpeta de salida con frames WebP numerados. 5) Comparativa de peso JPEG vs WebP. 6) Comando completo con cada flag explicada con flechas.

---

## Leccion 5: Canvas como motor de rendering
**Plataforma**: Figma
**Estilo**: Diagramas tecnicos con cuadriculas, fondo oscuro, acentos en azul/cyan para canvas y verde para codigo

Infografia que muestre: 1) Comparativa img vs canvas (reflow vs GPU direct draw). 2) Diagrama del canvas con ejes de coordenadas y zona de dibujo. 3) Formula visual del cover-fit con un rectangulo de imagen dentro de un rectangulo de canvas. 4) El flujo resize → recalcular → clearRect → drawImage. 5) Codigo minimo anotado de drawFrame.

---

## Leccion 6: Lenis: smooth scroll profesional
**Plataforma**: Figma
**Estilo**: Graficas comparativas lado a lado, dark mode, curvas de easing visuales con gradientes suaves

Infografia que compare: 1) Scroll nativo (grafica escalonada con saltos discretos) vs Lenis (curva suave continua). 2) Diagrama del lerp con current, target y factor. 3) Flujo de integracion: Lenis → scroll event → ScrollTrigger.update + gsap.ticker → lenis.raf. 4) Tabla de configuraciones clave (duration, wheelMultiplier, easing) con efecto visual de cada una.

---

## Leccion 7: GSAP + ScrollTrigger: el cerebro del scroll
**Plataforma**: Figma o Canva
**Estilo**: Tecnico-visual, dark mode, con flechas de flujo y codigo inline

Infografia vertical que muestre: 1) Un viewport con un elemento trigger y lineas de start/end marcadas. 2) Una barra de progreso lateral (0% a 100%) conectada al scroll. 3) Tres paneles mostrando el efecto de scrub, pin y timeline. 4) Codigo minimo de cada propiedad clave. Colores oscuros con acentos verde neon.

---

## Leccion 8: Vincular scroll → frame del canvas
**Plataforma**: Figma
**Estilo**: Diagrama de flujo horizontal, dark mode, con screenshots de canvas en cada paso y codigo inline

Infografia que muestre el flujo completo: 1) Video → FFmpeg → 120 frames WebP. 2) Fase 1 de carga (frames criticos cada 10) con barra de progreso. 3) ScrollTrigger progress 0→1 mapeado a frameIndex 0→119. 4) Canvas drawImage renderizando el frame correcto. 5) Circle-wipe reveal animado. Incluir el codigo de la formula de mapeo.

---

## Leccion 9: 7 tipos de animacion para secciones
**Plataforma**: Figma
**Estilo**: Grid visual de 7 columnas, dark mode, con iconos de flechas indicando direccion de cada animacion

Infografia con 7 columnas, una por animacion. Cada columna muestra: nombre, icono de direccion del movimiento, cuando usarla, y un mini-screenshot del efecto. Abajo: diagrama del reveal sequence (label→heading→body→CTA) con tiempos. Regla destacada: nunca repetir animacion consecutiva.

---

## Leccion 10: Branding generativo: paleta, tipo, naming
**Plataforma**: Figma
**Estilo**: Showcase de marca, dark mode, con muestras de color grandes y specimens tipograficos

Infografia mostrando el proceso generativo: 1) Input: nombre del producto + sector. 2) Claude genera: nombre (ejemplos), paleta (muestras de color), tipografia (specimens). 3) Output: CSS custom properties. 4) Ejemplo visual del layout side-aligned con texto al 40% y canvas al fondo. Incluir muestras de 3 marcas generadas diferentes.

---

## Leccion 11: Estructura HTML/CSS/JS y tokens de diseno
**Plataforma**: Figma o Excalidraw
**Estilo**: Wireframe anotado, dark mode, con numeros indicando el orden de scroll y flechas de flujo

Infografia vertical tipo wireframe que muestre la estructura completa de una superweb: loader arriba, header sticky, hero standalone, canvas fixed al fondo, secciones con flechas indicando data-animation, marquee cruzando, stats con overlay, CTA final. Al lado: arbol de archivos (index.html, css/style.css, js/app.js, frames/). Abajo: lista de anti-patterns tachados.

---

## Leccion 12: El skill video2website: automatizar todo
**Plataforma**: Figma o Whimsical
**Estilo**: Pipeline horizontal, dark mode, con iconos para cada fase y badges de tiempo estimado

Infografia de flujo horizontal mostrando el pipeline completo: 1) Archivo .md del skill → 2) Usuario escribe /video2website → 3) Claude pregunta (4 inputs) → 4) ffprobe analiza → 5) ffmpeg extrae frames → 6) Claude genera HTML/CSS/JS → 7) Quality checklist (13 puntos) → 8) npx serve → web terminada. Cada paso con su icono y tiempo estimado.
