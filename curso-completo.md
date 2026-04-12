# Superwebs Scroll-Driven con Video + IA

> **Crea landing pages premium con video frame-a-frame sincronizado al scroll**

| | |
|---|---|
| **Autor** | Alipio / Rural Makers |
| **Versión** | 1.0.0 |
| **Nivel** | Intermedio |
| **Duración estimada** | 8 horas |
| **Fecha** | 2026-04-11 |
| **XP Total** | 440 XP (base) + 275 XP (retos extra) |

### Objetivos pedagógicos

1. Entender cómo funciona la sincronización scroll→frame a nivel técnico
2. Generar assets visuales (imágenes + video) con IA generativa
3. Dominar FFmpeg para extracción y optimización de frames
4. Construir un canvas renderer con Lenis + GSAP + ScrollTrigger
5. Automatizar todo el proceso con el skill video2website de Claude Code

### Tags

`scroll-driven` · `video` · `gsap` · `lenis` · `ffmpeg` · `canvas` · `ia-generativa` · `claude-code` · `landing-page`

---

## Lección 1: Qué son las animaciones Scroll-Driven

**Tipo**: Teoría | **XP**: 25 | **Zona**: fundamentos

### Explicación

## ¿Qué es una animación Scroll-Driven?

Una animación **scroll-driven** es aquella cuyo progreso está controlado por la posición del scroll, no por el tiempo. En lugar de que una animación dure X segundos y se ejecute automáticamente, el usuario controla cuánto avanza la animación según cuánto hace scroll en la página.

## ¿Por qué importa?

En 2026, las animaciones scroll-driven son el **estándar premium** del diseño web. Cada sitio ganador de Awwwards, FWA o CSS Design Awards las utiliza. Apple las popularizó con sus páginas de producto (iPhone, MacBook Pro) donde el dispositivo rota, se descompone o revela características mientras haces scroll. Agencias como Active Theory, Resn y Locomotive las implementan en cada proyecto. Si quieres crear webs que compitan al más alto nivel, dominar esta técnica es **obligatorio**.

## ¿Cómo funciona?

El concepto es simple: se mapea la posición del scroll (0% arriba, 100% abajo) al progreso de una animación (0% inicio, 100% fin). CSS nativo ya soporta esto con `animation-timeline: scroll()`, que vincula cualquier `@keyframes` al scroll del contenedor. Para animaciones más complejas, librerías como GSAP con ScrollTrigger permiten vincular timelines completas al scroll con opciones de scrub, pin y triggers avanzados. El resultado: el usuario tiene control total sobre la experiencia visual.

### 💡 Metáfora

Imagina un **flipbook** (esos cuadernitos donde cada página tiene un dibujo ligeramente distinto). Si pasas las páginas rápido, la animación va rápido. Si vas despacio, va despacio. Si te detienes, la animación se congela. Tú controlas la velocidad con tus dedos. Exactamente así funciona una animación scroll-driven: tu dedo en el trackpad o la rueda del ratón es el que pasa las páginas.

### 💻 Código: Animación CSS pura con scroll-driven animations

```html
<!DOCTYPE html>
<html lang="es">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Scroll-Driven Demo</title>
<style>
  * { margin: 0; padding: 0; box-sizing: border-box; }

  body {
    height: 400vh;
    background: #0a0a0a;
    color: white;
    font-family: system-ui, sans-serif;
  }

  .progress-bar {
    position: fixed;
    top: 0;
    left: 0;
    height: 4px;
    background: linear-gradient(90deg, #6366f1, #ec4899);
    width: 0%;
    /* Link animation to scroll position */
    animation: grow-progress linear;
    animation-timeline: scroll();
  }

  @keyframes grow-progress {
    from { width: 0%; }
    to   { width: 100%; }
  }

  .hero {
    height: 100vh;
    display: grid;
    place-items: center;
  }

  .hero h1 {
    font-size: clamp(2rem, 6vw, 5rem);
    opacity: 0;
    transform: translateY(60px);
    animation: fade-up linear;
    animation-timeline: scroll();
    animation-range: 0vh 50vh;
  }

  @keyframes fade-up {
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
</style>
</head>
<body>
  <div class="progress-bar"></div>
  <section class="hero">
    <h1>Haz scroll para animar</h1>
  </section>
  <section class="hero">
    <h1>Sección 2</h1>
  </section>
  <section class="hero">
    <h1>Sección 3</h1>
  </section>
  <section class="hero">
    <h1>Sección 4</h1>
  </section>
</body>
</html>
```

### 🎯 Mini-reto: Caza de animaciones scroll-driven

Encuentra 3 sitios web premiados (Awwwards, FWA, CSS Design Awards) que usen animaciones scroll-driven. Para cada uno, describe: (1) la URL, (2) qué elemento se anima con scroll, (3) qué técnica crees que usan (CSS nativo, GSAP ScrollTrigger, frames de video, etc.).

**Criterios de éxito:**
- Incluye 3 URLs reales de sitios premiados
- Describe correctamente el elemento animado en cada sitio
- Identifica o deduce razonablemente la técnica utilizada

**XP extra:** +15

### 📖 Glosario

| Término | Definición |
|---------|-----------|
| scroll-driven animation | Animación cuyo progreso está vinculado a la posición del scroll en lugar del tiempo. El usuario controla la velocidad y dirección al hacer scroll. CSS lo soporta nativamente con animation-timeline: scroll(). |
| scroll-jacking | Técnica (a menudo mal vista) donde el comportamiento natural del scroll se secuestra completamente para controlar la navegación. A diferencia de scroll-driven animations, el scroll-jacking reemplaza el scroll nativo. |
| scrub | Parámetro en librerías como GSAP que vincula el progreso de una animación directamente al scroll. Un scrub: true hace que la animación siga el scroll en tiempo real. Un scrub: 0.5 añade medio segundo de suavizado. |
| frame-by-frame | Técnica de animación donde se muestran imágenes individuales (frames) en secuencia rápida para crear la ilusión de movimiento. En scroll-driven, cada posición de scroll corresponde a un frame específico. |

---

## Lección 2: Generar imágenes de producto con IA

**Tipo**: Práctica | **XP**: 35 | **Zona**: assets

### Explicación

## ¿Qué es la generación de imágenes de producto con IA?

Consiste en usar herramientas de inteligencia artificial como **Freepik AI, Midjourney, DALL-E o Leonardo AI** para crear imágenes fotorrealistas de productos desde distintos ángulos. El objetivo es generar una secuencia de fotogramas que simulen una rotación 3D del producto, como si una cámara girara alrededor de él.

## ¿Por qué importa?

Antes, para conseguir una secuencia de rotación de producto necesitabas un estudio fotográfico con mesa giratoria, cámara profesional y horas de postproducción. O un artista 3D que modelara el producto en Blender/Cinema4D. Con IA generativa, puedes crear estas secuencias en **minutos y a coste cero**. Esto democratiza una técnica que antes solo podían permitirse grandes marcas como Apple o Nike.

## ¿Cómo funciona?

La clave está en el **prompting estratégico**. Necesitas mantener consistencia visual entre frames: mismo producto, misma iluminación, mismo fondo, solo cambia el ángulo. Usamos fondo oscuro o negro porque facilita la consistencia y da aspecto premium. El flujo es: (1) definir el producto, (2) crear un prompt base con iluminación y estilo fijos, (3) variar solo el ángulo en cada iteración (front view → 45° → side view → 135° → back view), (4) revisar y regenerar los frames inconsistentes. Herramientas como Freepik AI permiten usar una imagen de referencia para mantener la coherencia entre generaciones.

### 💡 Metáfora

Imagina a un **fotógrafo con una mesa giratoria**. Coloca el producto en el centro, enciende las luces del estudio (siempre las mismas), y va girando la mesa unos grados entre cada disparo. La cámara no se mueve, la luz no cambia, solo rota el producto. Con IA hacemos exactamente lo mismo: mantenemos todo constante en el prompt y solo cambiamos el ángulo de visión.

### 💻 Código: Plantilla de prompts secuenciales para rotación de producto

```javascript
// Prompt template system for consistent product image generation
// Use with Freepik AI, Midjourney, DALL-E, or Leonardo AI

const productConfig = {
  product: 'wireless noise-cancelling headphones',
  color: 'matte black with silver accents',
  background: 'pure black background, no reflections',
  lighting: 'soft studio lighting, single key light from top-right, subtle rim light',
  style: 'product photography, 8K, photorealistic, studio shot, centered in frame',
  negativePrompt: 'text, watermark, blurry, low quality, hands, people'
};

const angles = [
  { id: '001', angle: 'front view, facing camera directly' },
  { id: '002', angle: 'slightly rotated 30 degrees to the right' },
  { id: '003', angle: 'rotated 60 degrees to the right, showing side profile emerging' },
  { id: '004', angle: 'side view, 90 degrees, left ear cup visible' },
  { id: '005', angle: 'rotated 120 degrees, showing back at an angle' },
  { id: '006', angle: 'rotated 150 degrees, nearly back view' },
  { id: '007', angle: 'back view, 180 degrees, headband fully visible' },
  { id: '008', angle: 'rotated 210 degrees, other side emerging' },
  { id: '009', angle: 'rotated 240 degrees' },
  { id: '010', angle: 'right side view, 270 degrees' },
  { id: '011', angle: 'rotated 300 degrees, returning to front' },
  { id: '012', angle: 'rotated 330 degrees, almost front view' }
];

function generatePrompt(config, angleData) {
  return `${config.product}, ${config.color}, ${angleData.angle}, ${config.background}, ${config.lighting}, ${config.style}`;
}

// Generate all prompts
angles.forEach(a => {
  console.log(`--- Frame ${a.id} ---`);
  console.log(generatePrompt(productConfig, a));
  console.log();
});
```

### 🎯 Mini-reto: Tu primera secuencia de producto con IA

Elige un producto (auriculares, zapatilla, botella, reloj) y genera 4 imágenes secuenciales usando cualquier herramienta de IA (Freepik AI, Leonardo AI, DALL-E, Midjourney). Los ángulos deben ser: frontal, 45°, lateral (90°) y trasera (180°). Mantén consistencia en iluminación y fondo.

**Criterios de éxito:**
- Se generaron 4 imágenes con ángulos claramente distintos
- El producto es reconocible como el mismo en las 4 imágenes
- El fondo es oscuro/negro y consistente en todas las imágenes
- La iluminación es similar en todas las imágenes

**XP extra:** +20

### 📖 Glosario

| Término | Definición |
|---------|-----------|
| prompt engineering (para imágenes) | Arte de escribir instrucciones precisas para que una IA generativa produzca la imagen deseada. Incluye describir sujeto, ángulo, iluminación, estilo, fondo y usar negative prompts para excluir elementos no deseados. |
| fotograma | Una imagen individual dentro de una secuencia de animación. En nuestro contexto, cada imagen generada por IA representa un fotograma de la rotación del producto. Al mostrarlos en secuencia rápida, crean la ilusión de movimiento fluido. |
| consistencia visual | Mantener los mismos atributos visuales (iluminación, color, fondo, estilo) entre todas las imágenes de una secuencia. Es el mayor desafío al generar frames con IA, ya que cada generación puede introducir variaciones no deseadas. |

---

## Lección 3: De imágenes a video con IA generativa

**Tipo**: Práctica | **XP**: 35 | **Zona**: assets

### Explicación

## ¿Qué es la generación de video con IA?

Consiste en transformar imágenes estáticas en video fluido usando herramientas como **Runway Gen-3, Kling AI, Pika Labs o Sora**. Estas herramientas utilizan modelos de difusión para interpolar movimiento entre frames, creando transiciones suaves que serían imposibles de lograr solo con las imágenes originales. También podemos usar **FFmpeg** para compilar secuencias de imágenes en video.

## ¿Por qué importa?

Las imágenes generadas por IA en el concepto anterior tienen un problema: son estáticas y pueden tener inconsistencias entre frames. Al pasarlas por un generador de video con IA, obtenemos **movimiento fluido y natural** que suaviza las diferencias. El resultado es un video de producto con calidad de estudio de producción profesional. Alternativa: si tienes suficientes frames consistentes, FFmpeg puede compilarlos directamente en video sin IA.

## ¿Cómo funciona?

Hay dos flujos principales: (1) **IA generativa**: subes una imagen de referencia a Runway/Kling y describes el movimiento deseado ("rotate slowly"). La IA genera un video de 4-10 segundos interpolando frames. (2) **FFmpeg**: si ya tienes una secuencia de imágenes numeradas (frame_0001.png, frame_0002.png...), FFmpeg las ensambla en un video MP4. Especificaciones objetivo: **24 FPS, 1920x1080, MP4 con codec H.264, formato de pixel yuv420p** para máxima compatibilidad. El video resultante será la materia prima que después cortaremos en frames individuales optimizados.

### 💡 Metáfora

Piensa en la animación **stop-motion** como la de Wallace y Gromit. Alguien modela figuras de plastilina, las mueve milímetro a milímetro, y toma una foto entre cada movimiento. Al reproducir las fotos en secuencia rápida (24 por segundo), las figuras cobran vida. Nosotros hacemos lo mismo: nuestras imágenes de IA son las poses de plastilina, y FFmpeg o Runway son la cámara que las convierte en película.

### 💻 Código: FFmpeg: compilar imágenes en video MP4 optimizado

```bash
#!/bin/bash
# Compile a sequence of images into an optimized MP4 video
# Images must be named: frame_0001.png, frame_0002.png, etc.

INPUT_DIR="./frames"
OUTPUT="./output/product-rotation.mp4"
FRAMERATE=24

# Create output directory
mkdir -p ./output

# Method 1: From numbered image sequence
# -framerate: input FPS (how fast to show each image)
# -i: input pattern (%04d = 4-digit zero-padded number)
# -c:v libx264: H.264 codec (universal compatibility)
# -crf 18: quality (0=lossless, 23=default, 18=visually lossless)
# -pix_fmt yuv420p: pixel format for maximum player compatibility
# -vf scale: ensure dimensions are even numbers (required by H.264)
ffmpeg -framerate $FRAMERATE \
  -i "${INPUT_DIR}/frame_%04d.png" \
  -c:v libx264 \
  -crf 18 \
  -preset slow \
  -pix_fmt yuv420p \
  -vf "scale=1920:1080:force_original_aspect_ratio=decrease,pad=1920:1080:(ow-iw)/2:(oh-ih)/2" \
  -movflags +faststart \
  "$OUTPUT"

# Method 2: From a glob pattern (if names aren't sequential)
# ffmpeg -framerate 24 \
#   -pattern_type glob -i '${INPUT_DIR}/*.png' \
#   -c:v libx264 -crf 18 -pix_fmt yuv420p \
#   "$OUTPUT"

# Verify the output
echo "=== Video info ==="
ffprobe -v quiet -print_format json -show_streams "$OUTPUT" | grep -E '"width|"height|"duration|"r_frame_rate|"codec_name'

echo "Video created: $OUTPUT"
```

### 🎯 Mini-reto: Crea tu primer video de producto

Usando las imágenes generadas en el concepto anterior (o nuevas), crea un video de 4-6 segundos. Puedes usar FFmpeg para compilar imágenes O una herramienta de IA como Runway/Kling para generar video desde una imagen. El video debe ser MP4, H.264, al menos 720p.

**Criterios de éxito:**
- El video resultante es un MP4 válido y reproducible
- Tiene una duración de entre 4 y 6 segundos
- La resolución es al menos 1280x720
- El movimiento es fluido (no hay saltos bruscos entre frames)

**XP extra:** +20

### 📖 Glosario

| Término | Definición |
|---------|-----------|
| fps | Frames Per Second (fotogramas por segundo). Define cuántas imágenes se muestran en un segundo de video. 24 FPS es el estándar cinematográfico. Más FPS = movimiento más suave pero archivo más pesado y más frames para procesar. |
| H.264 | Codec de compresión de video más utilizado en la web. Ofrece excelente calidad con archivos pequeños y es compatible con todos los navegadores y dispositivos. También conocido como AVC (Advanced Video Coding). |
| codec | Algoritmo que comprime (codifica) y descomprime (decodifica) datos de audio o video. Los codecs de video más comunes son H.264, H.265/HEVC y VP9. Cada uno balancea calidad vs tamaño de archivo de forma diferente. |
| stop-motion | Técnica de animación donde se fotografían objetos físicos moviéndolos incrementalmente entre cada foto. Al reproducir las fotos en secuencia rápida, se crea la ilusión de movimiento continuo. Es la base conceptual de nuestro flujo de trabajo. |
| interpolación de frames | Proceso de generar frames intermedios entre dos frames existentes para crear transiciones más suaves. Las herramientas de video con IA hacen esto automáticamente, rellenando el movimiento entre las poses que les damos. |

---

## Lección 4: FFmpeg: extraer y optimizar frames

**Tipo**: Práctica | **XP**: 40 | **Zona**: herramientas

### Explicación

## ¿Qué es?

**FFmpeg** es la herramienta de línea de comandos más potente para manipular audio y vídeo. En nuestro caso, la usamos para dos tareas: analizar el vídeo generado con IA (con `ffprobe`) y extraer cada fotograma como imagen individual optimizada (con `ffmpeg`).

## ¿Por qué importa?

El vídeo generado por IA (Runway, Kling, Sora) viene en un formato pensado para reproducirse linealmente. Pero nosotros no queremos reproducirlo: queremos *controlarlo con el scroll*. Para eso necesitamos descomponer el vídeo en frames individuales que podamos cargar como imágenes y dibujar en un canvas. FFmpeg convierte un archivo de vídeo en cientos de imágenes WebP ligeras, listas para la web.

## ¿Cómo funciona?

1. **Análisis con ffprobe**: primero inspeccionamos el vídeo para saber su resolución, duración, FPS y códec. Esto nos dice cuántos frames totales tiene y a qué calidad trabajar.
2. **Extracción de frames**: `ffmpeg -i video.mp4 -vf fps=30 frame_%04d.webp` extrae un frame por cada 1/30 de segundo. El patrón `%04d` numera los frames con ceros: 0001, 0002, etc.
3. **Optimización WebP**: el formato WebP con calidad 80-85 ofrece el mejor ratio calidad/peso para frames de scroll. Un frame de 1920×1080 pesa ~40-60KB en WebP vs ~150KB en JPEG.
4. **Redimensionado**: si el vídeo es 4K pero la web se ve en 1080p, redimensionamos con `-vf scale=1920:-1` para ahorrar ancho de banda.
5. **Control de FPS**: no siempre necesitamos todos los frames. Para scroll suave, 60-120 frames totales son suficientes. Ajustamos el `fps=` según la duración del vídeo.

### 💡 Metáfora

FFmpeg es como una máquina de cortar fiambre de alta precisión: le metes un salchichón entero (el vídeo) y te saca rodajas perfectas del grosor que quieras (frames). Puedes elegir cuántas rodajas, el grosor (calidad), y el tamaño de cada una (resolución). Al final tienes un plato de rodajas listas para servir individualmente.

### 💻 Código: Pipeline completo: analizar vídeo → extraer frames WebP optimizados

```bash
#!/bin/bash
# === Step 1: Analyze video with ffprobe ===
echo "🔍 Analyzing video..."
ffprobe -v quiet -print_format json -show_streams -show_format input.mp4

# Key info we need:
# - Duration: how long the video is
# - FPS: frames per second (r_frame_rate)
# - Resolution: width × height
# - Total frames = duration × fps

# Quick summary
DURATION=$(ffprobe -v error -show_entries format=duration -of csv=p=0 input.mp4)
FPS=$(ffprobe -v error -select_streams v -show_entries stream=r_frame_rate -of csv=p=0 input.mp4)
WIDTH=$(ffprobe -v error -select_streams v -show_entries stream=width -of csv=p=0 input.mp4)
HEIGHT=$(ffprobe -v error -select_streams v -show_entries stream=height -of csv=p=0 input.mp4)
echo "Duration: ${DURATION}s | FPS: ${FPS} | Resolution: ${WIDTH}×${HEIGHT}"

# === Step 2: Create output directory ===
mkdir -p frames

# === Step 3: Extract frames as optimized WebP ===
# Option A: Extract ALL frames at original FPS
ffmpeg -i input.mp4 -vf "fps=${FPS}" -c:v libwebp -quality 82 frames/frame_%04d.webp

# Option B: Extract exactly 120 frames (recommended for scroll)
# Calculate target FPS: 120 frames / duration
TARGET_FPS=$(echo "120 / $DURATION" | bc -l)
ffmpeg -i input.mp4 -vf "fps=${TARGET_FPS},scale=1920:-1" -c:v libwebp -quality 82 frames/frame_%04d.webp

# === Step 4: Verify output ===
FRAME_COUNT=$(ls frames/*.webp | wc -l)
TOTAL_SIZE=$(du -sh frames/ | cut -f1)
AVG_SIZE=$(echo "$(du -sb frames/ | cut -f1) / $FRAME_COUNT / 1024" | bc)
echo "✅ Extracted ${FRAME_COUNT} frames | Total: ${TOTAL_SIZE} | Avg: ${AVG_SIZE}KB/frame"

# === Step 5: Optional - Generate a preview sprite sheet ===
ffmpeg -i input.mp4 -vf "fps=1,scale=160:-1,tile=10x1" -frames:v 1 preview_sprite.webp
echo "📋 Preview sprite generated"
```

### 🎯 Mini-reto: Extrae 120 frames optimizados de un vídeo

Dado un vídeo de entrada (puedes usar cualquier vídeo MP4 de 5-10 segundos), escribe un script bash que: 1) Analice el vídeo con ffprobe y muestre duración, FPS y resolución, 2) Calcule el FPS objetivo para obtener exactamente 120 frames, 3) Extraiga los frames en formato WebP con calidad 82 y resolución máxima 1920px de ancho, 4) Muestre un resumen con el número de frames, peso total y peso medio por frame.

**Criterios de éxito:**
- El script usa ffprobe para analizar el vídeo
- Calcula el FPS objetivo como 120/duración
- Usa ffmpeg con -c:v libwebp y -quality entre 80-85
- Redimensiona a 1920px de ancho manteniendo proporción (-vf scale=1920:-1)
- Los frames se nombran con padded numbers (frame_0001.webp)
- Muestra un resumen con conteo y peso medio
- Se obtienen aproximadamente 120 frames

**XP extra:** +25

### 📖 Glosario

| Término | Definición |
|---------|-----------|
| ffprobe | Herramienta de análisis de FFmpeg que inspecciona archivos multimedia sin modificarlos. Devuelve metadatos como duración, resolución, códec, FPS y bitrate en formato JSON o texto plano. |
| ffmpeg | Herramienta de línea de comandos para convertir, extraer y manipular audio/vídeo. En nuestro contexto, la usamos para extraer frames individuales de un vídeo y convertirlos a WebP. |
| WebP | Formato de imagen desarrollado por Google que ofrece compresión superior a JPEG y PNG. Con calidad 80-85, un frame 1080p pesa ~40-60KB vs ~150KB en JPEG, ideal para preloading de múltiples frames. |
| FPS (frames per second) | Número de fotogramas por segundo en un vídeo. Un vídeo a 30fps tiene 30 imágenes por cada segundo de duración. Para extraer N frames totales, usamos fps=N/duración. |
| frame padding | Numeración con ceros a la izquierda (%04d = 0001, 0002...). Garantiza que los archivos se ordenen correctamente en el sistema de archivos y en el código de preloading. |
| scale filter | Filtro de FFmpeg (-vf scale=W:H) que redimensiona el vídeo. Usar -1 en un eje mantiene la proporción original. Ejemplo: scale=1920:-1 fija el ancho en 1920 y calcula el alto automáticamente. |

---

## Lección 5: Canvas como motor de rendering

**Tipo**: Teoría | **XP**: 30 | **Zona**: frontend

### Explicación

## ¿Qué es?

El elemento `<canvas>` de HTML5 es una superficie de dibujo programable. A diferencia de un `<img>` o un `<video>`, el canvas no tiene contenido propio: tú decides qué dibujar y cuándo. Es una pizarra en blanco controlada por JavaScript donde podemos renderizar frames de vídeo a demanda.

## ¿Por qué importa?

Podríamos cambiar el `src` de un `<img>` en cada scroll, pero eso dispara reflows, eventos de carga y parpadeos. El canvas evita todo eso: `drawImage()` pinta directamente en memoria de GPU, sin reflow ni layout. Es la superficie más rápida y limpia para dibujar frames secuenciales. Por eso Apple, Tesla y las mejores agencias lo usan para sus webs scroll-driven.

## ¿Cómo funciona?

1. **Crear el canvas**: un `<canvas>` con dimensiones que cubran el viewport (`width = window.innerWidth`, `height = window.innerHeight`).
2. **Obtener el contexto 2D**: `canvas.getContext('2d')` nos da acceso a la API de dibujo.
3. **drawImage()**: el método clave. Acepta un objeto `Image` precargado y lo dibuja en las coordenadas y dimensiones que indiquemos.
4. **Cover-fit**: para que la imagen cubra todo el canvas sin deformarse, calculamos el `scale` como `Math.max(canvasW/imgW, canvasH/imgH)` y centramos.
5. **clearRect()**: antes de dibujar un nuevo frame, limpiamos el anterior. Aunque `drawImage` sobrescribe, `clearRect` evita artefactos en frames con transparencia.
6. **Responsive**: en `resize`, actualizamos `canvas.width` y `canvas.height` y redibujamos el frame actual.

### 💡 Metáfora

El canvas es como una pantalla de cine en una sala privada: la pantalla en sí no tiene película propia, sino que proyectas sobre ella lo que quieras, cuando quieras. Tú eres el proyeccionista y decides qué fotograma mostrar en cada momento. La pantalla solo sabe mostrar lo que le envías, de forma instantánea y sin parpadeo.

### 💻 Código: Canvas renderer con cover-fit y resize responsivo

```javascript
const canvas = document.getElementById('hero-canvas');
const ctx = canvas.getContext('2d');

// === Resize canvas to fill viewport ===
function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
resizeCanvas();
window.addEventListener('resize', () => {
  resizeCanvas();
  // Redraw current frame after resize
  if (currentImage) drawFrame(currentImage);
});

let currentImage = null;

// === Draw an image with cover-fit ===
function drawFrame(img) {
  // Clear previous frame
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Calculate cover-fit dimensions
  const imgRatio = img.width / img.height;
  const canvasRatio = canvas.width / canvas.height;

  let drawW, drawH, drawX, drawY;

  if (canvasRatio > imgRatio) {
    // Canvas is wider: fit to width, crop height
    drawW = canvas.width;
    drawH = canvas.width / imgRatio;
    drawX = 0;
    drawY = (canvas.height - drawH) / 2;
  } else {
    // Canvas is taller: fit to height, crop width
    drawH = canvas.height;
    drawW = canvas.height * imgRatio;
    drawX = (canvas.width - drawW) / 2;
    drawY = 0;
  }

  ctx.drawImage(img, drawX, drawY, drawW, drawH);
  currentImage = img;
}

// === Load and display a test image ===
const testImg = new Image();
testImg.src = './frames/frame_0001.webp';
testImg.onload = () => {
  drawFrame(testImg);
  console.log(`Canvas: ${canvas.width}×${canvas.height}`);
  console.log(`Image: ${testImg.width}×${testImg.height}`);
  console.log('Cover-fit rendered ✓');
};

// === Bonus: performance-aware rendering ===
let rafId = null;
function scheduleRender(img) {
  if (rafId) cancelAnimationFrame(rafId);
  rafId = requestAnimationFrame(() => {
    drawFrame(img);
    rafId = null;
  });
}
```

### 🎯 Mini-reto: Canvas a pantalla completa con cover-fit

Crea un canvas que ocupe todo el viewport (100vw × 100vh). Carga una imagen cualquiera y dibújala con efecto cover-fit (que cubra todo el canvas sin deformarse, recortando lo que sobre). El canvas debe ser responsivo: al redimensionar la ventana, debe actualizar sus dimensiones y redibujar la imagen manteniendo el cover-fit.

**Criterios de éxito:**
- El canvas ocupa exactamente el viewport completo
- canvas.width y canvas.height se setean en JavaScript (no solo CSS)
- La imagen se dibuja con cover-fit usando Math.max para el ratio
- La imagen se centra (no se pega a una esquina)
- Al redimensionar la ventana, el canvas se actualiza y redibuja
- Se usa clearRect antes de dibujar
- No hay deformación de la imagen (aspect ratio mantenido)

**XP extra:** +20

### 📖 Glosario

| Término | Definición |
|---------|-----------|
| canvas | Elemento HTML5 (`<canvas>`) que proporciona una superficie de dibujo programable mediante JavaScript. No tiene contenido visual propio; todo se dibuja dinámicamente con la API de contexto 2D o WebGL. |
| getContext('2d') | Método que devuelve el contexto de rendering 2D del canvas, con acceso a métodos como drawImage, clearRect, fillRect, arc, etc. Es la interfaz entre JavaScript y los píxeles del canvas. |
| drawImage() | Método del contexto 2D que dibuja una imagen (Image, canvas, o video) en el canvas. Acepta coordenadas (x, y) y opcionalmente dimensiones (w, h) para escalar. Es la operación más usada en scroll-driven rendering. |
| cover-fit | Técnica de escalado que hace que una imagen cubra completamente un contenedor sin deformarse. Se calcula con `Math.max(containerW/imgW, containerH/imgH)` y se centra el resultado. |
| clearRect() | Método del contexto 2D que borra un área rectangular del canvas, dejándola transparente. Se usa antes de dibujar un nuevo frame para evitar que el anterior se acumule. |
| requestAnimationFrame | API del navegador que programa una función para ejecutarse antes del siguiente repintado. Más eficiente que setTimeout para actualizaciones visuales, garantiza sincronización con el refresh rate del monitor. |

---

## Lección 6: Lenis: smooth scroll profesional

**Tipo**: Teoría | **XP**: 30 | **Zona**: frontend

### Explicación

## ¿Qué es?

**Lenis** es una librería de smooth scroll ligera (~3KB) que intercepta el scroll nativo del navegador y lo suaviza con interpolación. En vez del scroll brusco por defecto (especialmente con rueda del ratón), Lenis crea un desplazamiento fluido y predecible que se siente premium.

## ¿Por qué importa?

El scroll nativo del navegador es irregular: la rueda del ratón envía saltos discretos (100-120px por step), el trackpad envía eventos inerciales, y el táctil tiene su propia física. Esta irregularidad hace que las animaciones scroll-driven se vean entrecortadas. Lenis normaliza todo esto: independientemente del dispositivo, el scroll se mueve suavemente con una curva de easing configurable. Además, Lenis se integra nativamente con GSAP ScrollTrigger, lo que es esencial para nuestro sistema.

## ¿Cómo funciona?

1. **Intercepta el scroll**: Lenis escucha los eventos de scroll del navegador y los reemplaza con su propio sistema de interpolación.
2. **Lerp (linear interpolation)**: en cada frame, Lenis mueve la posición actual hacia la posición objetivo usando una interpolación: `current += (target - current) * lerp`. Un lerp de 0.1 es suave, 0.2 es más ágil.
3. **RAF loop**: Lenis necesita un `requestAnimationFrame` loop para actualizar la posición. Se conecta con GSAP vía `gsap.ticker` para compartir el mismo loop de rendering.
4. **ScrollTrigger sync**: `ScrollTrigger.scrollerProxy` o la integración directa permite que ScrollTrigger lea la posición de Lenis en vez del scroll nativo.
5. **Touch & wheel**: Lenis maneja ambos inputs. En móvil usa `touch-action: none` y gestiona el gesto directamente. En desktop suaviza los events de wheel.

### 💡 Metáfora

Lenis es como la suspensión hidráulica de un coche de lujo: la carretera (el scroll nativo) tiene baches y grietas, pero tú dentro del coche sientes un deslizamiento suave y continuo. Sin Lenis, vas en un carro de madera sintiendo cada piedra. Con Lenis, vas en un Mercedes sintiendo seda.

### 💻 Código: Lenis + GSAP ScrollTrigger: setup completo con sincronización

```javascript
import Lenis from 'lenis';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// === Initialize Lenis ===
const lenis = new Lenis({
  duration: 1.2,       // Duration of the smooth scroll (seconds)
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Exponential easing
  orientation: 'vertical',
  gestureOrientation: 'vertical',
  smoothWheel: true,
  wheelMultiplier: 1,   // Adjust scroll speed (lower = slower)
  touchMultiplier: 2,   // Touch sensitivity
  infinite: false        // No infinite scroll
});

// === Connect Lenis to GSAP ticker ===
// This ensures both systems share the same animation frame
lenis.on('scroll', ScrollTrigger.update);

gsap.ticker.add((time) => {
  lenis.raf(time * 1000); // Lenis expects ms, GSAP gives seconds
});

// Disable GSAP's internal lag smoothing to avoid conflicts
gsap.ticker.lagSmoothing(0);

// === Optional: Pause Lenis during modals or loading ===
function pauseScroll() {
  lenis.stop();
}

function resumeScroll() {
  lenis.start();
}

// === Optional: Scroll to a section programmatically ===
function scrollToSection(selector) {
  lenis.scrollTo(selector, {
    offset: 0,
    duration: 1.5,
    easing: (t) => 1 - Math.pow(1 - t, 3) // Cubic ease-out
  });
}

// === Debug: Log scroll progress ===
lenis.on('scroll', ({ scroll, limit, velocity, direction, progress }) => {
  console.log(`Scroll: ${Math.round(scroll)}px | Progress: ${(progress * 100).toFixed(1)}% | Velocity: ${velocity.toFixed(2)}`);
});

console.log('Lenis initialized ✓');
console.log('Scroll to test: scrollToSection(".section-2")');
```

### 🎯 Mini-reto: Smooth scroll con Lenis + ScrollTrigger sincronizados

Crea una página con 5 secciones a pantalla completa (100vh cada una) con colores diferentes. Inicializa Lenis para smooth scroll y conéctalo con GSAP ScrollTrigger. Cada sección debe tener un título que haga fade-in cuando entra en el viewport usando ScrollTrigger. Añade un botón en el header que haga scroll programático a la sección 3 usando lenis.scrollTo().

**Criterios de éxito:**
- Lenis está inicializado con duration y easing configurados
- Lenis está conectado a gsap.ticker correctamente
- ScrollTrigger.update se llama en el evento scroll de Lenis
- lagSmoothing(0) está configurado
- Las 5 secciones tienen 100vh y colores distintos
- Cada título hace fade-in con ScrollTrigger al entrar en viewport
- El botón ejecuta lenis.scrollTo('.section-3') correctamente
- El scroll se siente suave y continuo

**XP extra:** +20

### 📖 Glosario

| Término | Definición |
|---------|-----------|
| Lenis | Librería de smooth scroll (~3KB) que intercepta y suaviza el scroll nativo del navegador mediante interpolación lineal (lerp). Se integra con GSAP ScrollTrigger para animaciones scroll-driven fluidas. |
| lerp (linear interpolation) | Técnica matemática que mueve un valor hacia un objetivo proporcionalmente en cada frame: `current += (target - current) * factor`. Un factor bajo (0.05) da movimiento lento y suave; uno alto (0.2) es más rápido y directo. |
| gsap.ticker | El loop de animación interno de GSAP que se ejecuta en cada requestAnimationFrame. Al conectar Lenis al ticker de GSAP, ambos comparten el mismo ciclo de rendering, evitando desincronización. |
| lagSmoothing | Función de GSAP que compensa frames perdidos. Con Lenis, se desactiva (lagSmoothing(0)) porque Lenis ya gestiona su propia interpolación temporal y la compensación de GSAP puede causar saltos. |
| wheelMultiplier | Configuración de Lenis que escala la velocidad del scroll por rueda del ratón. Un valor de 1 es la velocidad normal, 0.5 la reduce a la mitad (más lento, más premium), 2 la duplica. |
| scrollTo | Método de Lenis para hacer scroll programático a una posición o selector CSS. Acepta opciones de duración, easing y offset. Más suave que window.scrollTo porque usa la interpolación de Lenis. |

---

## Lección 7: GSAP + ScrollTrigger: el cerebro del scroll

**Tipo**: Teoría | **XP**: 40 | **Zona**: frontend

### Explicación

## ¿Qué es?

**ScrollTrigger** es el plugin de GSAP que conecta animaciones con la posición del scroll. Sin él, GSAP anima por tiempo; con él, anima por *scroll*. Es el cerebro que decide cuándo empieza, cuándo termina y cómo progresa cada animación mientras el usuario hace scroll.

## ¿Por qué importa?

Las webs premium que ves en Awwwards no usan CSS scroll-snap ni IntersectionObserver crudo. Usan ScrollTrigger porque ofrece control quirúrgico: defines un **trigger** (el elemento que activa la animación), un **start** (cuándo arranca, ej. `"top center"`), un **end** (cuándo termina), y un **scrub** que mapea el progreso del scroll (0 a 1) al progreso de la animación. Además, **pin** fija un elemento en pantalla mientras dura la animación, creando el efecto de "scroll que transforma" en vez de "scroll que desplaza".

## ¿Cómo funciona?

1. **Trigger**: el elemento HTML que ScrollTrigger vigila.
2. **Start/End**: puntos de scroll donde la animación comienza y termina. Se definen como `"posición-del-trigger posición-del-viewport"`.
3. **Scrub**: con `scrub: true`, la animación sigue al scroll 1:1. Con `scrub: 0.5`, hay un suavizado de 0.5 segundos.
4. **Pin**: fija el trigger en su posición mientras el scroll avanza, creando espacio virtual.
5. **Timeline**: encadena múltiples animaciones en secuencia dentro del mismo ScrollTrigger.

El flujo es: el usuario hace scroll → ScrollTrigger calcula el progreso (0-1) → GSAP interpola las propiedades CSS al valor correspondiente.

### 💡 Metáfora

Como la claqueta de un director de cine: ScrollTrigger marca exactamente cuándo empieza y termina cada escena (animación). Y el modo scrub convierte tu dedo en un mando de rebobinado: scrolleas hacia abajo y la película avanza, scrolleas hacia arriba y rebobinas. Tú controlas el tiempo de la película con tu scroll.

### 💻 Código: Timeline con ScrollTrigger: pin + animaciones vinculadas al scroll

```javascript
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// Create a timeline pinned to the hero section
const tl = gsap.timeline({
  scrollTrigger: {
    trigger: '.hero',
    start: 'top top',
    end: '+=200%',
    scrub: true,
    pin: true,
    markers: true // Remove in production
  }
});

// Phase 1: fade in the heading
tl.fromTo('.hero__heading', {
  opacity: 0,
  y: 60
}, {
  opacity: 1,
  y: 0,
  duration: 1
});

// Phase 2: slide in the subtext from the left
tl.fromTo('.hero__subtext', {
  opacity: 0,
  x: -100
}, {
  opacity: 1,
  x: 0,
  duration: 1
});

// Phase 3: scale up the CTA button
tl.fromTo('.hero__cta', {
  scale: 0.5,
  opacity: 0
}, {
  scale: 1,
  opacity: 1,
  duration: 0.5
});

// Phase 4: fade everything out as user scrolls past
tl.to('.hero__content', {
  opacity: 0,
  y: -40,
  duration: 1
});

console.log('ScrollTrigger active:', ScrollTrigger.getAll().length);
```

### 🎯 Mini-reto: Tres secciones, tres pins, tres animaciones

Crea una página con 3 secciones a pantalla completa. Cada sección debe estar pinneada durante el scroll y contener una animación diferente: la primera hace un fade de opacidad (0→1), la segunda una translación horizontal (x: -200 → 0), y la tercera un scale (0.3 → 1). Usa scrub: true en todas.

**Criterios de éxito:**
- Las 3 secciones ocupan 100vh cada una
- Cada sección tiene pin: true con ScrollTrigger
- La sección 1 anima opacity de 0 a 1
- La sección 2 anima x de -200 a 0
- La sección 3 anima scale de 0.3 a 1
- Todas usan scrub: true
- Las animaciones son reversibles al scrollear hacia arriba

**XP extra:** +25

### 📖 Glosario

| Término | Definición |
|---------|-----------|
| ScrollTrigger | Plugin de GSAP que vincula animaciones a la posición del scroll en vez del tiempo. Observa un elemento trigger y calcula el progreso (0-1) entre los puntos start y end definidos. |
| scrub | Propiedad que sincroniza la animación con el scroll. Con `true` es 1:1 inmediato. Con un número (ej. 0.5) añade suavizado en segundos. Sin scrub, la animación se dispara una vez y corre por tiempo. |
| pin | Fija el elemento trigger en su posición mientras el scroll avanza a través de la zona de animación. Crea un efecto de que el contenido se transforma en lugar de desplazarse. |
| timeline | Secuencia de animaciones GSAP encadenadas. Dentro de un ScrollTrigger, todas las animaciones de la timeline se mapean proporcionalmente al progreso del scroll. |
| trigger point | El elemento HTML que ScrollTrigger observa para determinar cuándo activar la animación. Se define con la propiedad `trigger` y su posición en el viewport determina el progreso. |
| start/end markers | Los puntos de scroll donde la animación comienza y termina. Se definen como dos valores: posición del trigger y posición del viewport. Ejemplo: `'top center'` significa cuando el top del trigger llega al center del viewport. |

---

## Lección 8: Vincular scroll → frame del canvas

**Tipo**: Práctica | **XP**: 45 | **Zona**: integracion

### Explicación

## ¿Qué es?

**Frame binding** es la técnica central de las superwebs scroll-driven: conectar la posición del scroll directamente con el frame que se dibuja en un `<canvas>`. Cuando el usuario scrollea, no se desplaza contenido sino que se cambia la imagen renderizada, creando la ilusión de un vídeo controlado por el dedo.

## ¿Por qué importa?

Este es el efecto que separa una web genérica de una web premium tipo Apple. El usuario siente que está *dentro* del producto, manipulándolo. No es un vídeo que se reproduce solo: es una experiencia interactiva donde el scroll controla el tiempo. Además, al ser frames estáticos (WebP/JPEG), tienes control total del rendimiento y compatibilidad.

## ¿Cómo funciona?

1. **Preloading en dos fases**: primero se cargan los frames críticos (cada 10º frame) para que la experiencia sea funcional rápido. Después, en segundo plano, se cargan los intermedios para suavizar la transición.
2. **Mapeo de progreso**: ScrollTrigger devuelve un progreso de 0 a 1. Multiplicamos por `(totalFrames - 1)` y redondeamos para obtener el `frameIndex`.
3. **Render loop**: en cada `onUpdate` de ScrollTrigger, dibujamos `frames[frameIndex]` en el canvas con `drawImage`.
4. **Circle-wipe reveal**: usamos `clip-path: circle()` animado con GSAP para revelar el canvas con un efecto circular que crece desde el centro.
5. **Optimización**: solo redibujamos si el frame cambió (`lastFrame !== currentFrame`).

### 💡 Metáfora

Como el plato de un DJ: tu dedo en el scroll es como la mano del DJ sobre el vinilo. Tú controlas exactamente qué 'frame' de la canción suena, hacia adelante o hacia atrás, rápido o lento. Si dejas de tocar, la música se congela en ese instante exacto.

### 💻 Código: Sistema completo: preload de frames + scroll→canvas + circle-wipe

```javascript
const canvas = document.getElementById('hero-canvas');
const ctx = canvas.getContext('2d');

const TOTAL_FRAMES = 120;
const FRAME_PATH = './frames/frame_';
const frames = new Array(TOTAL_FRAMES);
let loadedCount = 0;

// Set canvas to full viewport
function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
resizeCanvas();
window.addEventListener('resize', resizeCanvas);

// Phase 1: Load critical frames (every 10th)
function preloadCritical() {
  return new Promise((resolve) => {
    let criticalLoaded = 0;
    const criticalIndices = [];
    for (let i = 0; i < TOTAL_FRAMES; i += 10) criticalIndices.push(i);

    criticalIndices.forEach((i) => {
      const img = new Image();
      img.src = `${FRAME_PATH}${String(i).padStart(4, '0')}.webp`;
      img.onload = () => {
        frames[i] = img;
        criticalLoaded++;
        loadedCount++;
        updateLoader(loadedCount / TOTAL_FRAMES);
        if (criticalLoaded === criticalIndices.length) resolve();
      };
    });
  });
}

// Phase 2: Load remaining frames in background
function preloadRemaining() {
  for (let i = 0; i < TOTAL_FRAMES; i++) {
    if (frames[i]) continue;
    const img = new Image();
    img.src = `${FRAME_PATH}${String(i).padStart(4, '0')}.webp`;
    img.onload = () => {
      frames[i] = img;
      loadedCount++;
      updateLoader(loadedCount / TOTAL_FRAMES);
    };
  }
}

// Progress indicator
function updateLoader(progress) {
  const bar = document.querySelector('.loader__bar');
  const pct = document.querySelector('.loader__percent');
  if (bar) bar.style.transform = `scaleX(${progress})`;
  if (pct) pct.textContent = `${Math.round(progress * 100)}%`;
}

// Find nearest loaded frame
function getNearestFrame(index) {
  if (frames[index]) return frames[index];
  for (let offset = 1; offset < TOTAL_FRAMES; offset++) {
    if (frames[index - offset]) return frames[index - offset];
    if (frames[index + offset]) return frames[index + offset];
  }
  return null;
}

// Render frame on canvas
let lastFrameIndex = -1;
function renderFrame(index) {
  if (index === lastFrameIndex) return;
  const img = getNearestFrame(index);
  if (!img) return;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  // Cover-fit the image
  const scale = Math.max(canvas.width / img.width, canvas.height / img.height);
  const w = img.width * scale;
  const h = img.height * scale;
  const x = (canvas.width - w) / 2;
  const y = (canvas.height - h) / 2;
  ctx.drawImage(img, x, y, w, h);
  lastFrameIndex = index;
}

// Initialize: preload then bind scroll
async function init() {
  await preloadCritical();
  renderFrame(0);

  // Circle-wipe reveal
  gsap.fromTo(canvas,
    { clipPath: 'circle(0% at 50% 50%)' },
    { clipPath: 'circle(75% at 50% 50%)', duration: 1.5, ease: 'power2.out' }
  );

  // Hide loader
  gsap.to('.loader', { opacity: 0, duration: 0.5, onComplete: () => {
    document.querySelector('.loader').style.display = 'none';
  }});

  // Bind scroll to frames
  ScrollTrigger.create({
    trigger: '.hero',
    start: 'top top',
    end: '+=300%',
    scrub: true,
    pin: true,
    onUpdate: (self) => {
      const frameIndex = Math.round(self.progress * (TOTAL_FRAMES - 1));
      renderFrame(frameIndex);
    }
  });

  // Load remaining frames in background
  preloadRemaining();
}

init();
```

### 🎯 Mini-reto: Renderer scroll→frame con preloader visual

Construye un sistema funcional de scroll-to-frame: crea un canvas a pantalla completa, precarga al menos 10 imágenes (pueden ser de placeholder), muestra un indicador de progreso de carga con porcentaje, y vincula el scroll al frame index usando ScrollTrigger. Añade un efecto circle-wipe al revelar el canvas.

**Criterios de éxito:**
- El canvas ocupa 100vw × 100vh
- Las imágenes se precargan con objetos Image()
- Hay un indicador de progreso visual (barra + porcentaje)
- ScrollTrigger mapea progress (0-1) a frameIndex correctamente
- Solo se redibuja si el frame cambió (optimización)
- Hay un efecto circle-wipe con clip-path al iniciar
- El preloading es en dos fases (crítico + resto)

**XP extra:** +30

### 📖 Glosario

| Término | Definición |
|---------|-----------|
| frame binding | Técnica que conecta la posición del scroll con un índice de frame, dibujando la imagen correspondiente en un canvas. Es el núcleo de la animación scroll-driven con vídeo descompuesto. |
| preloading | Proceso de cargar imágenes en memoria antes de necesitarlas. Se crean objetos `new Image()` y se asigna su `src`. El evento `onload` confirma que están listas para dibujarse en canvas. |
| progress mapping | Conversión del progreso del scroll (número entre 0 y 1 que devuelve ScrollTrigger) a un índice de frame concreto. Fórmula: `Math.round(progress * (totalFrames - 1))`. |
| clip-path | Propiedad CSS que recorta un elemento usando formas geométricas (circle, polygon, inset). Animada con GSAP, crea efectos de revelado como el circle-wipe. |
| circle-wipe reveal | Efecto visual donde el contenido aparece desde un círculo que crece desde el centro. Se logra animando `clip-path: circle()` de 0% a 75% o más. |
| two-phase loading | Estrategia de carga en dos fases: primero los frames críticos (cada N frames) para funcionalidad inmediata, luego los intermedios en segundo plano para suavizar la experiencia. |

---

## Lección 9: 7 tipos de animación para secciones

**Tipo**: Práctica | **XP**: 40 | **Zona**: frontend

### Explicación

## ¿Qué es?

Un sistema de **7 animaciones predefinidas** que se asignan a las secciones de la página mediante atributos `data-animation`. Cada tipo tiene un propósito narrativo y visual distinto: fade-up, slide-left, slide-right, scale-up, rotate-in, stagger-up y clip-reveal.

## ¿Por qué importa?

La diferencia entre una web amateur y una premium no es tener animaciones, sino tener las **animaciones correctas en el lugar correcto**. Repetir el mismo efecto en todas las secciones aburre. Usar un efecto inadecuado distrae. Este sistema da variedad con coherencia: cada animación cumple un rol narrativo. Regla de oro: **nunca repetir la misma animación en secciones consecutivas**.

## ¿Cómo funciona?

- **fade-up**: contenido sube con fade. Ideal para introducciones.
- **slide-left**: entra desde la izquierda. Para texto alineado a la izquierda.
- **slide-right**: entra desde la derecha. Para texto alineado a la derecha.
- **scale-up**: escala desde pequeño. Secciones de impacto.
- **rotate-in**: gira al entrar. Rompe la monotonía.
- **stagger-up**: elementos aparecen en secuencia escalonada. Ideal para stats/grids.
- **clip-reveal**: revelado con clip-path. Perfecto para el CTA final.

Dentro de cada sección, los elementos se revelan en orden: **label → heading → body → CTA**. Esto crea una jerarquía visual natural que guía la lectura del usuario. El stagger entre elementos es de 0.15-0.2 segundos.

### 💡 Metáfora

Como el set de cuchillos de un chef profesional: cada cuchillo (animación) tiene un propósito específico. El cuchillo de pan (fade-up) no sirve para filetear (clip-reveal), y un buen chef nunca usa el mismo cuchillo para todo. La variedad con propósito es lo que convierte platos simples en alta cocina.

### 💻 Código: Los 7 tipos de animación con ScrollTrigger y data-attributes

```javascript
// HTML: <section data-animation="fade-up"> ... </section>

const ANIMATIONS = {
  'fade-up': {
    from: { opacity: 0, y: 60 },
    to: { opacity: 1, y: 0 }
  },
  'slide-left': {
    from: { opacity: 0, x: -120 },
    to: { opacity: 1, x: 0 }
  },
  'slide-right': {
    from: { opacity: 0, x: 120 },
    to: { opacity: 1, x: 0 }
  },
  'scale-up': {
    from: { opacity: 0, scale: 0.7 },
    to: { opacity: 1, scale: 1 }
  },
  'rotate-in': {
    from: { opacity: 0, rotation: -8, y: 40 },
    to: { opacity: 1, rotation: 0, y: 0 }
  },
  'stagger-up': {
    from: { opacity: 0, y: 50 },
    to: { opacity: 1, y: 0 }
  },
  'clip-reveal': {
    from: { clipPath: 'inset(100% 0% 0% 0%)' },
    to: { clipPath: 'inset(0% 0% 0% 0%)' }
  }
};

function initSectionAnimations() {
  document.querySelectorAll('[data-animation]').forEach((section) => {
    const type = section.dataset.animation;
    const anim = ANIMATIONS[type];
    if (!anim) return;

    // Stagger-up: animate children individually
    if (type === 'stagger-up') {
      const children = section.querySelectorAll('.stagger-item');
      gsap.fromTo(children, anim.from, {
        ...anim.to,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: section,
          start: 'top 75%',
          end: 'top 25%',
          toggleActions: 'play none none reverse'
        }
      });
      return;
    }

    // All other types: staggered reveal of inner elements
    const elements = section.querySelectorAll(
      '.section__label, .section__heading, .section__body, .section__cta'
    );

    if (elements.length > 0) {
      // Set initial state for the section wrapper
      gsap.set(section, anim.from);

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: 'top 75%',
          end: 'top 25%',
          toggleActions: 'play none none reverse'
        }
      });

      // Reveal the section
      tl.to(section, {
        ...anim.to,
        duration: 0.8,
        ease: 'power2.out'
      });

      // Stagger inner elements: label → heading → body → CTA
      tl.fromTo(elements,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.6, stagger: 0.18, ease: 'power2.out' },
        '-=0.4'
      );
    } else {
      // No inner elements: animate section directly
      gsap.fromTo(section, anim.from, {
        ...anim.to,
        duration: 1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: section,
          start: 'top 75%',
          end: 'top 25%',
          toggleActions: 'play none none reverse'
        }
      });
    }
  });
}

// Initialize after DOM ready
initSectionAnimations();
```

### 🎯 Mini-reto: 7 secciones, 7 animaciones, revelado escalonado

Crea una página con 7 secciones, cada una usando un tipo de animación diferente (fade-up, slide-left, slide-right, scale-up, rotate-in, stagger-up, clip-reveal). Cada sección debe tener label, heading y body que se revelan en secuencia escalonada. Nunca repitas la misma animación en secciones consecutivas.

**Criterios de éxito:**
- Hay 7 secciones, cada una con un data-animation diferente
- Cada sección contiene label, heading y body
- Los elementos internos se revelan en orden escalonado (label→heading→body)
- No se repite la misma animación en secciones consecutivas
- La sección stagger-up tiene elementos con clase .stagger-item
- La sección clip-reveal usa clipPath animado
- Las animaciones se reversan al scrollear hacia arriba

**XP extra:** +30

### 📖 Glosario

| Término | Definición |
|---------|-----------|
| stagger | Propiedad de GSAP que aplica un retardo incremental entre las animaciones de múltiples elementos. Un stagger de 0.15 significa que cada elemento empieza 0.15s después del anterior, creando un efecto de cascada. |
| clip-reveal | Animación que revela contenido animando la propiedad `clip-path`. Típicamente de `inset(100% 0 0 0)` (oculto) a `inset(0% 0 0 0)` (visible). Crea un efecto de cortina o persiana. |
| fade-up | Animación donde el elemento sube (y: 60→0) mientras aparece (opacity: 0→1). Es la animación más versátil y se usa como default para introducciones de contenido. |
| data attribute | Atributo HTML personalizado con prefijo `data-`. `data-animation="fade-up"` permite al JS leer el tipo de animación con `element.dataset.animation` sin contaminar clases CSS. |
| reveal sequence | Orden predefinido en que los elementos de una sección se hacen visibles: primero el label (categoría), luego el heading (título), después el body (texto), y finalmente el CTA (botón). Crea jerarquía visual. |
| easing | Función que controla la aceleración de una animación. `power2.out` empieza rápido y desacelera, creando un movimiento natural. GSAP ofrece ease, power1-4, back, elastic, entre otros. |

---

## Lección 10: Branding generativo: paleta, tipo, naming

**Tipo**: Teoría | **XP**: 30 | **Zona**: diseno

### Explicación

## ¿Qué es?

El **branding generativo** es el proceso por el cual Claude Code genera automáticamente la identidad visual completa de una marca: nombre, paleta de colores, tipografía y sistema de diseño. Todo parte de unas pocas decisiones iniciales (qué es el producto, qué sensación quiere transmitir) y se materializa en **design tokens** como CSS custom properties.

## ¿Por qué importa?

Un diseñador tarda horas en definir una identidad visual coherente. Claude Code lo hace en segundos, generando nombres cortos y memorables (tipo tech: 4-7 letras, pronunciable), paletas de colores con fondos oscuros y acentos vibrantes, y parejas tipográficas de Google Fonts. El resultado no es genérico: cada marca generada tiene personalidad propia y coherencia interna.

## ¿Cómo funciona?

1. **Naming**: Claude genera nombres cortos, tech-sounding, fáciles de recordar. Ejemplos: Volta, Neon, Prisma, Flux.
2. **Paleta**: fondo oscuro (`#0a0a0a`–`#1a1a1a`), color primario de acento (vibrante), secundario (complementario), texto claro.
3. **Tipografía**: pareja display + mono de Google Fonts. Ejemplo clásico: Space Grotesk (headings) + Space Mono (código/detalles). Los headings usan `12vw` para impacto.
4. **Design tokens**: todo se define como `--custom-properties` en `:root`. Colores, tamaños, espaciados, radios.
5. **Layout side-aligned**: el texto siempre va al lado (40% del viewport), nunca centrado sobre el canvas. Esto preserva la visibilidad del vídeo.

### 💡 Metáfora

Como el ADN de una persona: a partir de unos pocos 'genes' fundamentales (nombre de marca + 2 colores + 2 fuentes), Claude genera el 'cuerpo' visual completo del sitio web con una personalidad coherente. Igual que el ADN determina ojos, pelo y rasgos, los design tokens determinan cada elemento visual de la página.

### 💻 Código: Design tokens completos: colores, tipografía, layout side-aligned

```css
/* Google Fonts import */
@import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;700&family=Space+Mono:wght@400;700&display=swap');

/* =====================
   DESIGN TOKENS
   ===================== */
:root {
  /* Brand colors */
  --color-bg: #0a0a0a;
  --color-bg-elevated: #141414;
  --color-bg-overlay: rgba(10, 10, 10, 0.85);
  --color-primary: #00ff88;
  --color-primary-dim: #00cc6a;
  --color-secondary: #7b61ff;
  --color-text: #f5f5f5;
  --color-text-muted: #888888;
  --color-border: #2a2a2a;

  /* Typography */
  --font-display: 'Space Grotesk', sans-serif;
  --font-mono: 'Space Mono', monospace;
  --font-size-hero: clamp(3rem, 12vw, 10rem);
  --font-size-heading: clamp(2rem, 5vw, 4rem);
  --font-size-subheading: clamp(1.25rem, 2.5vw, 1.75rem);
  --font-size-body: clamp(1rem, 1.2vw, 1.125rem);
  --font-size-label: clamp(0.75rem, 1vw, 0.875rem);
  --line-height-tight: 1.05;
  --line-height-normal: 1.5;
  --letter-spacing-tight: -0.03em;
  --letter-spacing-wide: 0.15em;

  /* Spacing */
  --space-xs: 0.5rem;
  --space-sm: 1rem;
  --space-md: 2rem;
  --space-lg: 4rem;
  --space-xl: 8rem;
  --space-section: clamp(6rem, 15vh, 12rem);

  /* Layout */
  --content-width: 40%;
  --content-max-width: 560px;
  --content-padding: clamp(1.5rem, 4vw, 3rem);
  --border-radius: 0.5rem;
}

/* =====================
   BASE STYLES
   ===================== */
body {
  margin: 0;
  background: var(--color-bg);
  color: var(--color-text);
  font-family: var(--font-display);
  font-size: var(--font-size-body);
  line-height: var(--line-height-normal);
  -webkit-font-smoothing: antialiased;
}

/* =====================
   SIDE-ALIGNED LAYOUT
   Text on the side, never centered over canvas
   ===================== */
.section {
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: center;
  padding: var(--space-lg) var(--content-padding);
}

.section__content {
  width: var(--content-width);
  max-width: var(--content-max-width);
}

.section__label {
  font-family: var(--font-mono);
  font-size: var(--font-size-label);
  color: var(--color-primary);
  text-transform: uppercase;
  letter-spacing: var(--letter-spacing-wide);
  margin-bottom: var(--space-sm);
}

.section__heading {
  font-size: var(--font-size-heading);
  font-weight: 700;
  line-height: var(--line-height-tight);
  letter-spacing: var(--letter-spacing-tight);
  margin-bottom: var(--space-md);
}

.section__body {
  color: var(--color-text-muted);
  font-size: var(--font-size-body);
  line-height: var(--line-height-normal);
  margin-bottom: var(--space-md);
}
```

### 🎯 Mini-reto: Identidad de marca para un producto ficticio

Define la identidad visual completa para un producto ficticio: inventa un nombre (4-7 letras, tech-sounding), elige una paleta de 4 colores (fondo oscuro + primario + secundario + texto), selecciona 2 Google Fonts (display + mono), e impleméntalo todo como CSS custom properties en :root. Añade los estilos base para el layout side-aligned.

**Criterios de éxito:**
- El nombre de marca tiene 4-7 letras y suena tech
- La paleta tiene al menos 4 colores definidos como custom properties
- El fondo es oscuro (#0a0a0a a #1a1a1a)
- Hay un color de acento vibrante
- Se importan 2 Google Fonts: una display y una mono
- Los tokens incluyen tipografía, espaciado y colores
- El layout usa side-aligned (contenido al 40% del viewport)

**XP extra:** +20

### 📖 Glosario

| Término | Definición |
|---------|-----------|
| design tokens | Variables de diseño reutilizables que definen la identidad visual: colores, tipografía, espaciados, bordes. En CSS se implementan como custom properties (`--nombre: valor`) en `:root`, creando una única fuente de verdad para todo el diseño. |
| CSS custom properties | Variables nativas de CSS declaradas con `--` y consumidas con `var()`. A diferencia de variables Sass, son dinámicas: se pueden cambiar en runtime, heredan por cascada, y se pueden modificar con JavaScript. |
| brand identity | Conjunto de elementos visuales que hacen reconocible a una marca: nombre, colores, tipografía, tono. En branding generativo, Claude Code genera estos elementos automáticamente a partir de pocas directrices iniciales. |
| font pairing | Combinación de dos tipografías complementarias. En superwebs scroll-driven se usa una fuente display (para headings, impactante) y una mono (para labels/código, técnica). La pareja debe contrastar pero armonizar. |
| side-aligned layout | Patrón de diseño donde el texto ocupa el 40% del viewport y se posiciona al lado, nunca centrado sobre el canvas de vídeo. Esto preserva la visibilidad del contenido visual mientras el texto permanece legible. |

---

## Lección 11: Estructura HTML/CSS/JS y tokens de diseño

**Tipo**: Práctica | **XP**: 40 | **Zona**: integracion

### Explicación

## ¿Qué es?

La **arquitectura del proyecto** es la estructura completa de archivos y landmarks HTML que componen una superweb scroll-driven. Define dónde va cada pieza: `index.html` (loader, header, hero, canvas, secciones, marquee, stats, CTA), `css/style.css` (tokens, layout, responsive), y `js/app.js` (Lenis, GSAP, preloader, renderer, animaciones).

## ¿Por qué importa?

Sin una arquitectura clara, el proyecto se convierte en espagueti. Cada superweb sigue el mismo patrón probado: un **loader** que oculta la carga, un **header sticky** con marca y CTA, un **hero standalone** (mínimo 12rem de altura), un **canvas fixed** para los frames, **secciones** con animaciones data-driven, un **marquee** con tipografía de 12vw, una sección de **stats con dark overlay**, y un **CTA persistente**. Seguir este patrón garantiza consistencia y calidad.

## ¿Cómo funciona?

- **Loader**: pantalla completa con barra de progreso, desaparece al cargar frames críticos.
- **Header sticky**: fixed top, con logo y botón CTA, fondo transparente que oscurece al scrollear.
- **Hero standalone**: primera impresión, mínimo 12rem, con título grande y subtítulo.
- **Canvas fixed**: `position: fixed`, cubre todo el viewport, z-index detrás del contenido.
- **Secciones**: cada una con `data-animation`, contenido side-aligned al 40%.
- **Marquee**: texto corriendo infinito con font-size de `12vw`.
- **Stats**: overlay oscuro sobre el canvas, números que animan al entrar.
- **CTA final**: sección de cierre con botón de acción.

**Anti-patterns**: no glassmorphism, no texto centrado sobre canvas, no FRAME_SPEED < 1.8.

### 💡 Metáfora

Como el plano de un edificio: antes de poner un solo ladrillo, el arquitecto define dónde va cada habitación (sección), ventana (animación), ascensor (scroll) y escalera de emergencia (loader). Saltarse el plano significa demoler y reconstruir. Con el plano correcto, cada pieza encaja a la primera.

### 💻 Código: Esqueleto HTML completo con todos los landmarks y data-attributes

```html
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Volta — Next-gen Energy</title>
  <link rel="stylesheet" href="css/style.css">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;700&family=Space+Mono:wght@400;700&display=swap" rel="stylesheet">
</head>
<body>

  <!-- ====== LOADER ====== -->
  <div class="loader" aria-label="Cargando">
    <div class="loader__brand">VOLTA</div>
    <div class="loader__track">
      <div class="loader__bar"></div>
    </div>
    <div class="loader__percent">0%</div>
  </div>

  <!-- ====== HEADER (sticky) ====== -->
  <header class="header">
    <a href="/" class="header__logo">VOLTA</a>
    <nav class="header__nav">
      <a href="#features" class="header__link">Features</a>
      <a href="#specs" class="header__link">Specs</a>
    </nav>
    <a href="#cta" class="header__cta btn btn--primary">Pre-order</a>
  </header>

  <!-- ====== HERO (standalone, min 12rem) ====== -->
  <section class="hero" id="hero">
    <h1 class="hero__title">VOLTA</h1>
    <p class="hero__subtitle">Energy, reimagined.</p>
  </section>

  <!-- ====== CANVAS (fixed, full viewport) ====== -->
  <canvas id="hero-canvas" class="canvas-fixed"></canvas>

  <!-- ====== SCROLL SPACER (for frame animation) ====== -->
  <div class="scroll-spacer" id="scroll-spacer"></div>

  <!-- ====== SECTION 1: Feature intro ====== -->
  <section class="section" data-animation="fade-up">
    <div class="section__content">
      <span class="section__label">Innovación</span>
      <h2 class="section__heading">Energía sin límites</h2>
      <p class="section__body">
        Una nueva generación de baterías que se adaptan
        a tu ritmo de vida. Más duración, menos peso.
      </p>
      <a href="#" class="section__cta btn">Descubrir</a>
    </div>
  </section>

  <!-- ====== SECTION 2: Technical detail ====== -->
  <section class="section" data-animation="slide-left">
    <div class="section__content">
      <span class="section__label">Tecnología</span>
      <h2 class="section__heading">Celdas de estado sólido</h2>
      <p class="section__body">
        72 capas nanoestructuradas que multiplican
        la densidad energética por 3.
      </p>
    </div>
  </section>

  <!-- ====== SECTION 3: Impact ====== -->
  <section class="section" data-animation="scale-up">
    <div class="section__content">
      <span class="section__label">Impacto</span>
      <h2 class="section__heading">Cero emisiones. Cero compromisos.</h2>
      <p class="section__body">
        Fabricación 100% renovable. Reciclable al final
        de su vida útil.
      </p>
    </div>
  </section>

  <!-- ====== MARQUEE ====== -->
  <div class="marquee" aria-hidden="true">
    <div class="marquee__track">
      <span class="marquee__text">VOLTA</span>
      <span class="marquee__separator">●</span>
      <span class="marquee__text">ENERGY</span>
      <span class="marquee__separator">●</span>
      <span class="marquee__text">VOLTA</span>
      <span class="marquee__separator">●</span>
      <span class="marquee__text">ENERGY</span>
      <span class="marquee__separator">●</span>
    </div>
  </div>

  <!-- ====== STATS (dark overlay) ====== -->
  <section class="section section--stats" data-animation="stagger-up">
    <div class="section__overlay"></div>
    <div class="section__content section__content--wide">
      <div class="stat stagger-item">
        <span class="stat__number" data-count="72">0</span>
        <span class="stat__label">Capas nano</span>
      </div>
      <div class="stat stagger-item">
        <span class="stat__number" data-count="3">0</span>
        <span class="stat__unit">x</span>
        <span class="stat__label">Más densidad</span>
      </div>
      <div class="stat stagger-item">
        <span class="stat__number" data-count="100">0</span>
        <span class="stat__unit">%</span>
        <span class="stat__label">Renovable</span>
      </div>
    </div>
  </section>

  <!-- ====== SECTION 4: Variety ====== -->
  <section class="section" data-animation="rotate-in">
    <div class="section__content">
      <span class="section__label">Diseño</span>
      <h2 class="section__heading">Forma sigue función</h2>
      <p class="section__body">
        Cada curva tiene un propósito. Cada material,
        una razón.
      </p>
    </div>
  </section>

  <!-- ====== CTA FINAL ====== -->
  <section class="section section--cta" data-animation="clip-reveal" id="cta">
    <div class="section__content section__content--center">
      <span class="section__label">Disponible 2026</span>
      <h2 class="section__heading">Reserva tu Volta</h2>
      <p class="section__body">
        Sé de los primeros en experimentar la nueva energía.
      </p>
      <a href="#" class="btn btn--primary btn--large">Pre-order — 49€</a>
    </div>
  </section>

  <!-- ====== FOOTER ====== -->
  <footer class="footer">
    <p class="footer__copy">&copy; 2026 Volta. Todos los derechos reservados.</p>
  </footer>

  <!-- Scripts -->
  <script src="https://cdn.jsdelivr.net/npm/lenis@1/dist/lenis.min.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/gsap@3/dist/gsap.min.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/gsap@3/dist/ScrollTrigger.min.js"></script>
  <script src="js/app.js"></script>
</body>
</html>
```

### 🎯 Mini-reto: Esqueleto completo de una superweb scroll-driven

Construye el HTML y CSS completo de una superweb scroll-driven para un producto ficticio. Debe incluir todos los landmarks: loader con barra de progreso, header sticky, hero standalone (min 12rem), canvas fixed, al menos 4 secciones con data-animation diferente, marquee con tipografía 12vw, sección de stats con dark overlay, y CTA final. Define todos los design tokens en CSS custom properties.

**Criterios de éxito:**
- Tiene loader con barra de progreso y porcentaje
- Header es sticky con logo y CTA
- Hero tiene mínimo 12rem de altura y es standalone
- Canvas tiene position: fixed y cubre el viewport
- Mínimo 4 secciones con data-animation diferentes
- Marquee con font-size de 12vw
- Sección stats con dark overlay y elementos stagger
- CTA final con botón de acción
- Design tokens definidos como CSS custom properties en :root
- No hay glassmorphism ni texto centrado sobre canvas

**XP extra:** +35

### 📖 Glosario

| Término | Definición |
|---------|-----------|
| landmark (HTML) | Elemento semántico principal que estructura la página: header, main, section, footer. En superwebs, cada landmark tiene un rol específico (loader, hero, canvas, secciones, marquee, stats, CTA) que define la experiencia del scroll. |
| dark overlay | Capa semitransparente oscura (`rgba(10,10,10,0.85)`) que se coloca sobre el canvas para mejorar la legibilidad del texto en las secciones de stats. Se implementa con un pseudo-elemento o div con position absolute. |
| marquee | Banda de texto que se desplaza horizontalmente de forma infinita. En superwebs usa tipografía de `12vw` para impacto visual. Se anima con CSS `@keyframes` o GSAP, duplicando el texto para crear un loop continuo. |
| CSS tokens | Sistema de variables CSS en `:root` que centralizan todas las decisiones de diseño. Cambiar un token actualiza toda la página. Incluyen colores, tipografía, espaciados, radios de borde y breakpoints. |
| hero standalone | Sección hero que funciona como primera impresión independiente, con mínimo 12rem de altura. No depende del canvas ni de otras secciones. Contiene el nombre de marca en grande y un subtítulo conciso. |
| persistent CTA | Botón de llamada a la acción que aparece tanto en el header (siempre visible) como en la sección final. Garantiza que el usuario siempre tenga acceso a la acción principal sin importar dónde esté en la página. |

---

## Lección 12: El skill video2website: automatizar todo

**Tipo**: Práctica | **XP**: 50 | **Zona**: automatizacion

### Explicación

## ¿Qué es?

El **skill video2website** es un archivo `.md` que se instala en `~/.claude/skills/` y le enseña a Claude Code cómo transformar un archivo de vídeo en una landing page premium completa de forma automática. Es como un manual de instrucciones que Claude sigue paso a paso: analiza el vídeo, extrae frames, genera HTML/CSS/JS, crea la identidad de marca, aplica las 7 animaciones, y valida la calidad.

## ¿Por qué importa?

Sin el skill, tendrías que dar instrucciones detalladas a Claude en cada proyecto. Con el skill, dices `/video2website` y Claude ya sabe todo: qué preguntar (ruta del vídeo, nombre de marca, contenido, paleta), qué herramientas usar (ffprobe para analizar, ffmpeg para extraer), y qué estándares cumplir (checklist de calidad). Es la diferencia entre enseñar a alguien desde cero cada vez y tener un empleado experto que ya sabe el proceso.

## ¿Cómo funciona?

1. **Instalación**: copiar el archivo `.md` a `~/.claude/skills/`.
2. **Invocación**: el usuario escribe `/video2website` en Claude Code.
3. **Claude pregunta**: ruta del vídeo, nombre de marca, secciones de contenido, colores preferidos.
4. **Análisis**: `ffprobe` obtiene duración, FPS, resolución del vídeo.
5. **Extracción**: `ffmpeg` extrae frames como WebP optimizado.
6. **Generación**: Claude crea index.html, style.css, app.js con toda la arquitectura.
7. **Validación**: checklist de calidad (loader funciona, scroll es fluido, sin anti-patterns, responsive).
8. **Preview**: `npx serve .` para ver el resultado en el navegador.

### 💡 Metáfora

Como contratar a un equipo completo (fotógrafo, diseñador, maquetador, programador) que trabajan perfectamente coordinados y ya conocen tu estilo. Solo que el 'equipo' es un solo archivo de skill que orquesta todo el proceso. Tú entregas el vídeo y recibes la web terminada.

### 💻 Código: Instalación del skill y flujo completo de invocación

```bash
#!/bin/bash
# =============================================
# INSTALL VIDEO2WEBSITE SKILL FOR CLAUDE CODE
# =============================================

# Step 1: Create the skills directory if it doesn't exist
mkdir -p ~/.claude/skills

# Step 2: Copy the skill file
cp ./skills/video2website.md ~/.claude/skills/video2website.md

# Step 3: Verify installation
echo "Skills instalados:"
ls -la ~/.claude/skills/*.md

# =============================================
# USAGE EXAMPLE (in Claude Code terminal)
# =============================================

# The user types in Claude Code:
#   /video2website
#
# Claude asks:
#   1. Ruta del vídeo: ./product-demo.mp4
#   2. Nombre de marca: Volta
#   3. Secciones: Innovación, Tecnología, Impacto, Diseño
#   4. Color primario: #00ff88
#
# Claude executes automatically:

# Analyze video
ffprobe -v quiet -print_format json -show_streams ./product-demo.mp4

# Extract frames as optimized WebP
mkdir -p ./frames
ffmpeg -i ./product-demo.mp4 \
  -vf "fps=30,scale=1920:-1" \
  -c:v libwebp \
  -quality 80 \
  -compression_level 6 \
  ./frames/frame_%04d.webp

# Count extracted frames
TOTAL_FRAMES=$(ls ./frames/*.webp | wc -l)
echo "Frames extraídos: $TOTAL_FRAMES"

# Claude then generates:
# - index.html (loader, header, hero, canvas, sections, marquee, stats, CTA)
# - css/style.css (design tokens, layout, responsive, animations)
# - js/app.js (Lenis, GSAP, preloader, frame renderer, section animations)

# Preview the result
npx serve .

# =============================================
# QUALITY CHECKLIST (Claude validates automatically)
# =============================================
# [x] Loader shows progress and disappears after critical frames load
# [x] Scroll is smooth (Lenis initialized)
# [x] Canvas renders frames correctly on scroll
# [x] No same animation on consecutive sections
# [x] Text is side-aligned, never centered over canvas
# [x] Hero is standalone with min 12rem height
# [x] Marquee text is 12vw
# [x] Stats section has dark overlay
# [x] CTA is persistent (header + final section)
# [x] No glassmorphism
# [x] FRAME_SPEED >= 1.8
# [x] Responsive on mobile (stacked layout)
# [x] All design tokens in CSS custom properties
```

### 🎯 Mini-reto: Instala el skill, genera una landing page, documenta el proceso

Instala el skill video2website en Claude Code (copia el .md a ~/.claude/skills/). Luego invócalo con un vídeo de tu elección (puede ser corto, 5-10 segundos). Documenta todo el proceso: qué te preguntó Claude, qué comandos ejecutó automáticamente, cuánto tardó, y evalúa el resultado con el checklist de calidad.

**Criterios de éxito:**
- El skill está instalado en ~/.claude/skills/
- Se invocó con /video2website o instrucción equivalente
- Claude analizó el vídeo con ffprobe
- Claude extrajo frames con ffmpeg
- Se generó index.html, style.css y app.js
- El resultado pasa al menos 10 de 13 puntos del checklist
- El alumno documentó el proceso paso a paso

**XP extra:** +40

### 📖 Glosario

| Término | Definición |
|---------|-----------|
| skill (Claude Code) | Archivo Markdown (.md) que se instala en `~/.claude/skills/` y le da a Claude Code conocimiento especializado sobre un proceso o dominio. Cuando el usuario invoca el skill, Claude sigue las instrucciones del archivo como un protocolo. |
| scaffold | Estructura inicial de archivos y carpetas que el skill genera automáticamente. Incluye index.html, carpetas css/, js/, frames/, y todos los archivos base con el código boilerplate listo para funcionar. |
| quality gate | Checklist de validación que Claude ejecuta al final del proceso. Verifica que el resultado cumple todos los estándares: loader funcional, scroll fluido, sin anti-patterns, responsive, tokens definidos. Si falla algún punto, Claude lo corrige automáticamente. |
| npx serve | Comando que levanta un servidor HTTP local para previsualizar el resultado. `npx serve .` sirve los archivos del directorio actual en `localhost:3000`. No requiere instalación previa gracias a npx. |
| checklist de calidad | Lista de 13 verificaciones que validan una superweb scroll-driven: loader, smooth scroll, frame rendering, variedad de animaciones, side-aligned text, hero standalone, marquee 12vw, dark overlay stats, CTA persistente, no glassmorphism, FRAME_SPEED >= 1.8, responsive, y tokens CSS. |

---

## Gamificación: Niveles y Badges

### Tabla de XP por lección

| # | Lección | XP Base | XP Reto | XP Total |
|---|---------|---------|---------|----------|
| 1 | Qué son las animaciones Scroll-Driven | 25 | 15 | 40 |
| 2 | Generar imágenes de producto con IA | 35 | 20 | 55 |
| 3 | De imágenes a video con IA generativa | 35 | 20 | 55 |
| 4 | FFmpeg: extraer y optimizar frames | 40 | 25 | 65 |
| 5 | Canvas como motor de rendering | 30 | 20 | 50 |
| 6 | Lenis: smooth scroll profesional | 30 | 20 | 50 |
| 7 | GSAP + ScrollTrigger: el cerebro del scroll | 40 | 25 | 65 |
| 8 | Vincular scroll → frame del canvas | 45 | 30 | 75 |
| 9 | 7 tipos de animación para secciones | 40 | 30 | 70 |
| 10 | Branding generativo: paleta, tipo, naming | 30 | 20 | 50 |
| 11 | Estructura HTML/CSS/JS y tokens de diseño | 40 | 35 | 75 |
| 12 | El skill video2website: automatizar todo | 50 | 40 | 90 |
| | **TOTAL** | **440** | **300** | **740** |

### Niveles de progreso

| Nivel | Nombre | XP requerido | Zona desbloqueada |
|-------|--------|-------------|-------------------|
| 1 | **Scroll Rookie** | 0 XP | Fundamentos |
| 2 | **Asset Creator** | 80 XP | Assets (IA generativa) |
| 3 | **Frame Master** | 200 XP | Herramientas (FFmpeg) |
| 4 | **Canvas Renderer** | 300 XP | Frontend (Canvas, Lenis, GSAP) |
| 5 | **Scroll Architect** | 450 XP | Integración (binding, animaciones) |
| 6 | **Superweb Builder** | 600 XP | Automatización (skill completo) |
| 7 | **Scroll-Driven Legend** | 740 XP | Maestría total (todos los retos extra) |

### Badges especiales

| Badge | Condición | Descripción |
|-------|-----------|-------------|
| **Cazador de Referentes** | Completar reto de Lección 1 | Has identificado scroll-driven animations en sitios premiados |
| **IA Artist** | Completar retos de Lecciones 2 y 3 | Dominas la generación de assets con IA generativa |
| **FFmpeg Ninja** | Completar reto de Lección 4 | Extraes y optimizas frames como un profesional |
| **Canvas Pro** | Completar reto de Lección 5 | El canvas no tiene secretos para ti |
| **Smooth Operator** | Completar retos de Lecciones 6 y 7 | Lenis + GSAP ScrollTrigger sincronizados |
| **Frame Binder** | Completar reto de Lección 8 | Has conectado scroll con canvas rendering |
| **Animation Director** | Completar reto de Lección 9 | 7 animaciones, 7 propósitos, cero repeticiones |
| **Brand Designer** | Completar reto de Lección 10 | Creas identidades de marca con IA en segundos |
| **Full Architect** | Completar reto de Lección 11 | Dominas la arquitectura completa de una superweb |
| **Automation Master** | Completar reto de Lección 12 | Un video entra, una web sale. Automatización total. |
| **Superweb Legend** | Completar TODOS los retos | Has dominado cada aspecto de las superwebs scroll-driven |

---

> *Curso generado con Synapis v3.2 por Alipio / Rural Makers*
> *Fecha: 2026-04-11*
