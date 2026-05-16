# FlowMind Web — Contexto del Proyecto

## Qué es este proyecto

Web comercial de FlowMind, agencia de automatización con IA para negocios reales.
Construida en React + Vite, un solo archivo JSX, sin TypeScript, sin Tailwind.

**URL producción:** flowmind.com.ar
**Repo:** https://github.com/SantiagoAcquisto/flowmind-web
**VPS:** srv1655147.hstgr.cloud · IP: 69.62.67.30 · root
**Deploy:** `/root/flowmind-web/` en el VPS

---

## Stack

- React 18 + Vite
- Estilos inline (no Tailwind, no CSS modules)
- Google Fonts: Playfair Display (títulos) + Inter (body)
- Formspree para el formulario de contacto
- Sin TypeScript, sin shadcn, sin dependencias extra

---

## Paleta de colores

```js
const C = {
  bg:      "#fffdf1",  // fondo hero — crema cálido
  bg2:     "#ffffff",  // fondo secciones alternas
  bg3:     "#ebe2cd",  // footer y separadores
  card:    "#ffffff",  // cards
  border:  "#ebe2cd",  // bordes
  text:    "#4D4D4D",  // texto principal carbón
  muted:   "#797979",  // texto secundario
  primary: "#8B6B61",  // marrón cálido — botones, logo
  primary2:"#bc998e",  // marrón claro — acentos suaves
  primary3:"#fffdf1",  // texto sobre botón primario
  accent:  "#F2A900",  // dorado — highlights y stats
};
```

---

## Estructura del archivo FlowMind.jsx

```
const C          — paleta de colores
const FONTS      — URL Google Fonts
function Logo    — SVG del logo (nodos conectados)
function WorkflowSVG — diagrama SVG animado del workflow
const SERVICIOS  — array de datos de los 5 servicios
function AccordionItem — card expandible de servicio
function Formulario    — formulario de contacto con Formspree
export default FlowMind — componente principal con todas las secciones
```

---

## Secciones de la web

1. **Nav** — fijo, logo + links + botón contacto
2. **Hero** — título serif grande, descripción, botones, stats 24/7/48hs/0
3. **Sobre FlowMind** — grid imágenes + card + achievements
4. **Servicios** — WorkflowSVG + acordeón interactivo de 5 servicios
5. **Nosotros** — 4 pasos del proceso en grid
6. **Contacto** — 2 columnas: info + formulario
7. **Footer** — logo, copyright, dominio

---

## Servicios y precios

| Servicio | Starter | Pro | Mantenimiento |
|----------|---------|-----|---------------|
| Bot de WhatsApp | $80 USD | $150 USD | $30/mes |
| Agente IA en web | $100 USD | $200 USD | $35/mes |
| Automatización completa (WA+IA+Sheets) | $150 USD | $300 USD | $50/mes |
| E-commerce | $500 USD | $800 USD | $80/mes |
| Consultoría IA | $40/h | $60/h | — |

---

## Workflow SVG — especificaciones

- Fondo transparente (flota sobre el crema del sitio)
- Nodos en marrón oscuro `rgba(44,33,28,0.85)` con bordes `#8B6B61`
- Partículas animadas en dorado `#F2A900` y `#c9a84c`
- Conexiones en tonos cálidos oscuros `rgba(139,107,97,X)`
- AI Engine con borde dorado y pulso animado
- Sin colores brillantes (sin azul, sin verde, sin púrpura)

---

## Formulario de contacto

- Servicio: Formspree
- Form ID: `xpwzgvkd`
- Email destino: flujos.fm@gmail.com
- Campos: nombre, email, empresa (opcional), mensaje
- Subject: "Nuevo contacto FlowMind"

---

## Convenciones de código

- Estilos siempre inline como objetos JS
- Variables de estilo reutilizables definidas como `const` dentro del componente (`sec`, `slabel`, `sh2`)
- Arrays de datos fuera del componente (`SERVICIOS`)
- Sin código muerto — cada cambio limpia lo anterior
- Fuentes tipográficas: `'Playfair Display',serif` para títulos, `Inter,sans-serif` para body
- Sin TypeScript, sin PropTypes

---

## Deploy en VPS

```bash
# Desde Windows — copiar archivos
scp -r dist/* root@69.62.67.30:/var/www/flowmind/

# En el VPS — build
cd /root/flowmind-web
npm run build
cp -r dist/* /var/www/flowmind/
```

DNS apunta via Cloudflare:
- `flowmind.com.ar` → 69.62.67.30
- `www.flowmind.com.ar` → 69.62.67.30

---

## Empresa FlowMind

**Fundador:** Santiago Andrés Acquisto
**Email:** flujos.fm@gmail.com
**Slogan:** "Flujos inteligentes para negocios reales."
**LinkedIn personal:** linkedin.com/in/acquisto-dev
**Workana:** perfil activo
**Ubicación:** Mar del Plata, Argentina

**Costos internos (NO mostrar a clientes):**
- Wasender: $6/mes por número de cliente
- Claude Haiku API: ~$1-3/mes por cliente
- n8n self-hosted: $0 (VPS propio)
- VPS FlowMind: ~$17,000 ARS/mes

---

## Pendientes

- [ ] Verificar DNS flowmind.com.ar propagado completamente
- [ ] Configurar Traefik en VPS para servir flowmind.com.ar
- [ ] Email hola@flowmind.com.ar
- [ ] Publicar perfil Workana con servicios
- [ ] LinkedIn empresa FlowMind
- [ ] Instagram FlowMind
