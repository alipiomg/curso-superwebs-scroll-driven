# Patrones Pedagogicos — Superwebs Scroll-Driven

## Instincts Aplicados
1. **inst_ped_microleccion_6_secciones** — Cada concepto sigue una estructura de 6 secciones: explicacion, metafora, ejemplo de codigo, mini reto, glosario y prompt de infografia
2. **inst_ped_mapa_max_15_nodos** — El mapa conceptual tiene 12 nodos (dentro del limite de 15), organizados en zonas tematicas con prerequisitos claros
3. **inst_ped_reto_verificable** — Cada mini reto incluye criterios de exito especificos y respuesta esperada para autovalidacion
4. **inst_ped_metafora_cotidiana** — Cada concepto incluye una metafora de la vida cotidiana (flipbook, mesa giratoria, cuchillos de chef, etc.)
5. **inst_ped_codigo_real** — Los ejemplos de codigo son funcionales y copiables, no pseudocodigo

## Decisiones de Diseno
- 12 nodos (dentro del limite de 15)
- 5 zonas tematicas: fundamentos, assets, herramientas, frontend, integracion, diseno, automatizacion
- Ruta lineal como recomendada (progresion de teoria → practica → integracion)
- XP progresivo: lecciones iniciales dan menos XP, capstone (skill-video2website) da el maximo
- 2 nodos de convergencia: gsap-scrolltrigger (requiere canvas + lenis) y arquitectura-proyecto (requiere todo)

## Observables Clave
- Tiempo de lectura por leccion → ajustar longitud
- Retos fallidos 3+ veces → redisenar enunciado
- Conceptos omitidos por 60%+ → revisar relevancia
- Terminos del glosario consultados 5+ veces → mejorar explicacion inline
- Ruta mas popular → considerar como predeterminada

## Metricas Objetivo
- Tasa de completacion: >70%
- Media de intentos por reto: <2.5
- Tasa de omision por concepto: <30%
- XP total alcanzable: 440 base + 300 extra (retos) = 740 XP
