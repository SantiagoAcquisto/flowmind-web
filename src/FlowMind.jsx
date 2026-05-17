import { useState, useEffect } from "react";

// ── BREAKPOINTS ───────────────────────────────────────────────────────────────
function useResponsive() {
  const [w, setW] = useState(window.innerWidth);
  useEffect(() => {
    const fn = () => setW(window.innerWidth);
    window.addEventListener("resize", fn);
    return () => window.removeEventListener("resize", fn);
  }, []);
  return { isMobile: w <= 767, isTablet: w >= 768 && w <= 1024, isDesktop: w >= 1025 };
}

// ── PALETA ──────────────────────────────────────────────────────────────────
const C = {
  bg:      "#fffdf1",  // fondo hero
  bg2:     "#ffffff",  // fondo secciones alternas
  bg3:     "#ebe2cd",  // footer
  card:    "#ffffff",
  border:  "#ebe2cd",
  text:    "#4D4D4D",
  muted:   "#797979",
  primary: "#8B6B61",  // marrón cálido
  primary2:"#bc998e",  // marrón claro
  primary3:"#fffdf1",  // texto sobre botón
  accent:  "#F2A900",  // dorado
};

const FONTS = "https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600;700;800&family=Inter:wght@300;400;500;600&display=swap";

// ── LOGO ─────────────────────────────────────────────────────────────────────
function Logo({ size = 38 }) {
  const s = size;
  const cx = s/2, cy = s/2;
  const sc = s/64;
  return (
    <svg width={s} height={s} viewBox="0 0 64 64" fill="none" style={{ overflow:"visible" }}>
      <defs>
        <style>{`
          @keyframes lp1{0%,100%{opacity:1}50%{opacity:0.3}}
          @keyframes lp2{0%,100%{opacity:0.8}50%{opacity:0.15}}
          @keyframes lcr{0%,100%{r:8}50%{r:5}}
          .la1{animation:lp1 2s ease-in-out infinite}
          .la2{animation:lp2 2.8s ease-in-out 0.4s infinite}
          .la3{animation:lp2 3.2s ease-in-out 1s infinite}
          .lac{animation:lcr 2s ease-in-out infinite}
        `}</style>
      </defs>

      {/* Anillos orbitales */}
      <circle cx="32" cy="32" r="30" fill="none" stroke={C.primary} strokeWidth="0.4" strokeDasharray="3,6" opacity="0.3"/>
      <circle cx="32" cy="32" r="20" fill="none" stroke={C.accent}   strokeWidth="0.4" strokeDasharray="2,7" opacity="0.25"/>

      {/* Conexiones centro → nodos internos */}
      <line x1="32" y1="32" x2="22" y2="24" stroke={C.accent}   strokeWidth="0.8" opacity="0.5"/>
      <line x1="32" y1="32" x2="42" y2="24" stroke={C.accent}   strokeWidth="0.8" opacity="0.5"/>
      <line x1="32" y1="32" x2="22" y2="40" stroke={C.accent}   strokeWidth="0.8" opacity="0.5"/>
      <line x1="32" y1="32" x2="42" y2="40" stroke={C.accent}   strokeWidth="0.8" opacity="0.5"/>

      {/* Conexiones centro → nodos medios */}
      <line x1="32" y1="32" x2="32" y2="14" stroke={C.primary} strokeWidth="0.7" opacity="0.35"/>
      <line x1="32" y1="32" x2="16" y2="44" stroke={C.primary} strokeWidth="0.7" opacity="0.35"/>
      <line x1="32" y1="32" x2="48" y2="44" stroke={C.primary} strokeWidth="0.7" opacity="0.35"/>

      {/* Nodos medios */}
      <circle cx="32" cy="14" r="3.5" fill="#fffdf1" stroke={C.primary} strokeWidth="1.2"/>
      <circle cx="32" cy="14" r="1.5" fill={C.primary}/>
      <circle cx="16" cy="44" r="3.5" fill="#fffdf1" stroke={C.primary} strokeWidth="1.2"/>
      <circle cx="16" cy="44" r="1.5" fill={C.primary}/>
      <circle cx="48" cy="44" r="3.5" fill="#fffdf1" stroke={C.primary} strokeWidth="1.2"/>
      <circle cx="48" cy="44" r="1.5" fill={C.primary}/>

      {/* Nodos internos con pulso */}
      <circle cx="22" cy="24" r="2.5" fill="#fffdf1" stroke={C.primary2} strokeWidth="0.9" className="la2"/>
      <circle cx="42" cy="24" r="2.5" fill="#fffdf1" stroke={C.primary2} strokeWidth="0.9" className="la3"/>
      <circle cx="22" cy="40" r="2.5" fill="#fffdf1" stroke={C.primary2} strokeWidth="0.9" className="la2"/>
      <circle cx="42" cy="40" r="2.5" fill="#fffdf1" stroke={C.primary2} strokeWidth="0.9" className="la3"/>

      {/* Nodos exteriores */}
      <circle cx="32" cy="4"  r="2.5" fill="#fffdf1" stroke={C.primary} strokeWidth="1" className="la3"/>
      <circle cx="6"  cy="52" r="2.5" fill="#fffdf1" stroke={C.primary} strokeWidth="1" className="la1"/>
      <circle cx="58" cy="52" r="2.5" fill="#fffdf1" stroke={C.primary} strokeWidth="1" className="la2"/>

      {/* Nodo central */}
      <circle cx="32" cy="32" r="10" fill="#fffdf1" stroke={C.primary} strokeWidth="1.5"/>
      <circle cx="32" cy="32" r="7"  fill="none"    stroke={C.accent}  strokeWidth="0.7" opacity="0.6"/>
      <circle cx="32" cy="32" fill={C.primary} className="lac"/>

      {/* Partículas */}
      <circle r="1.5" fill={C.accent} opacity="0.9"><animateMotion dur="2.4s" repeatCount="indefinite"         path="M32 32 L22 24"/></circle>
      <circle r="1.2" fill={C.accent} opacity="0.8"><animateMotion dur="2.8s" repeatCount="indefinite" begin="0.5s" path="M32 32 L42 24"/></circle>
      <circle r="1.2" fill="#c9a84c"  opacity="0.8"><animateMotion dur="2.2s" repeatCount="indefinite" begin="1s"   path="M32 32 L22 40"/></circle>
      <circle r="1.5" fill={C.accent} opacity="0.9"><animateMotion dur="2.6s" repeatCount="indefinite" begin="1.5s" path="M32 32 L42 40"/></circle>
      <circle r="1"   fill={C.primary} opacity="0.7"><animateMotion dur="3s"   repeatCount="indefinite" begin="0.8s" path="M32 32 L32 14"/></circle>
      <circle r="1"   fill={C.primary} opacity="0.7"><animateMotion dur="3.2s" repeatCount="indefinite" begin="0.3s" path="M32 32 L16 44"/></circle>
      <circle r="1"   fill={C.primary} opacity="0.7"><animateMotion dur="2.9s" repeatCount="indefinite" begin="1.2s" path="M32 32 L48 44"/></circle>
    </svg>
  );
}

// ── WORKFLOW SVG ──────────────────────────────────────────────────────────────
function WorkflowSVG() {
  const particles = [
    ["#F2A900","2.8s","0s",  "M98 52 C155 52 185 105 238 108"],
    ["#c9a84c","1.9s","0.3s","M98 118 C155 118 185 115 238 115"],
    ["#F2A900","2.7s","1.1s","M98 188 C155 188 185 130 238 122"],
    ["#F2A900","1s",  "0s",  "M292 115 C318 115 322 115 342 115"],
    ["#c9a84c","1.9s","0.2s","M402 115 C428 115 432 55 460 55"],
    ["#F2A900","2.1s","0.6s","M402 115 C428 115 432 118 460 118"],
    ["#c9a84c","2.3s","1s",  "M402 115 C428 115 432 178 460 178"],
    ["#F2A900","1.5s","0s",  "M522 55 C545 55 548 108 558 108"],
    ["#c9a84c","1.3s","0.5s","M522 118 C540 118 545 115 558 115"],
    ["#F2A900","1.7s","0.9s","M522 178 C545 178 548 128 558 122"],
    ["#c9a84c","1.3s","0s",  "M622 108 C645 108 648 55 662 55"],
    ["#F2A900","1.4s","0.4s","M622 118 C645 118 648 118 662 118"],
    ["#c9a84c","1.5s","0.7s","M622 128 C645 128 648 178 662 178"],
  ];
  const inputs  = [["📧",52,"Email"],["💬",118,"WhatsApp"],["📋",188,"Forms"]];
  const middles = [["☁️",55,"Cloud"],["🗄️",118,"Database"],["📬",178,"Queue"]];
  const outputs = [["📊",55,"Dashboard"],["📈",118,"Reports"],["⚡",178,"Automate"]];
  const nF = "rgba(44,33,28,0.85)";
  const nS = "#8B6B61";
  const tC = "#bc998e";
  return (
    <svg viewBox="0 0 700 240" xmlns="http://www.w3.org/2000/svg" style={{ width:"100%", height:"240px", display:"block" }}>
      <defs>
        <filter id="glow"><feGaussianBlur stdDeviation="2" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
        <filter id="glowS"><feGaussianBlur stdDeviation="5" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
        <radialGradient id="eG" cx="50%" cy="50%" r="50%"><stop offset="0%" stopColor="#F2A900" stopOpacity="0.06"/><stop offset="100%" stopColor="#F2A900" stopOpacity="0"/></radialGradient>
        <radialGradient id="hG" cx="50%" cy="50%" r="50%"><stop offset="0%" stopColor="#8B6B61" stopOpacity="0.08"/><stop offset="100%" stopColor="#8B6B61" stopOpacity="0"/></radialGradient>
        <pattern id="g" width="24" height="24" patternUnits="userSpaceOnUse"><path d="M24 0L0 0 0 24" fill="none" stroke="rgba(139,107,97,0.07)" strokeWidth="0.5"/></pattern>
      </defs>
      <rect width="700" height="240" fill="transparent"/>
      <rect width="700" height="240" fill="url(#g)"/>
      <ellipse cx="580" cy="118" rx="80" ry="70" fill="url(#eG)"/>
      <ellipse cx="255" cy="118" rx="60" ry="55" fill="url(#hG)"/>
      <path d="M98 52 C155 52 185 105 238 108"   fill="none" stroke="rgba(139,107,97,0.35)" strokeWidth="1.2"/>
      <path d="M98 118 C155 118 185 115 238 115"  fill="none" stroke="rgba(139,107,97,0.45)" strokeWidth="1.5"/>
      <path d="M98 188 C155 188 185 130 238 122"  fill="none" stroke="rgba(139,107,97,0.28)" strokeWidth="1.1"/>
      <path d="M292 115 C318 115 322 115 342 115" fill="none" stroke="rgba(107,79,68,0.7)"   strokeWidth="1.8"/>
      <path d="M402 115 C428 115 432 55 460 55"   fill="none" stroke="rgba(139,107,97,0.4)"  strokeWidth="1.2"/>
      <path d="M402 115 C428 115 432 118 460 118" fill="none" stroke="rgba(139,107,97,0.4)"  strokeWidth="1.3"/>
      <path d="M402 115 C428 115 432 178 460 178" fill="none" stroke="rgba(139,107,97,0.35)" strokeWidth="1.1"/>
      <path d="M522 55 C545 55 548 108 558 108"   fill="none" stroke="rgba(139,107,97,0.35)" strokeWidth="1"/>
      <path d="M522 118 C540 118 545 115 558 115" fill="none" stroke="rgba(139,107,97,0.35)" strokeWidth="1"/>
      <path d="M522 178 C545 178 548 128 558 122" fill="none" stroke="rgba(139,107,97,0.3)"  strokeWidth="1"/>
      <path d="M622 108 C645 108 648 55 662 55"   fill="none" stroke="rgba(107,79,68,0.4)"   strokeWidth="1.2"/>
      <path d="M622 118 C645 118 648 118 662 118" fill="none" stroke="rgba(107,79,68,0.4)"   strokeWidth="1.2"/>
      <path d="M622 128 C645 128 648 178 662 178" fill="none" stroke="rgba(107,79,68,0.35)"  strokeWidth="1.1"/>
      {particles.map(([color,dur,begin,path],i) => (
        <circle key={i} r="2.5" fill={color} filter="url(#glow)">
          <animateMotion dur={dur} repeatCount="indefinite" begin={begin} path={path}/>
        </circle>
      ))}
      {inputs.map(([icon,y,label]) => (
        <g key={label}>
          <rect x="4" y={y-22} width="94" height="44" rx="10" fill={nF} stroke={nS} strokeWidth="1.1" filter="url(#glow)"/>
          <text x="51" y={y-4}  textAnchor="middle" fontSize="13"  fill={tC}           fontFamily="Inter,sans-serif">{icon}</text>
          <text x="51" y={y+13} textAnchor="middle" fontSize="9.5" fill={tC+"cc"} fontFamily="Inter,sans-serif" fontWeight="500">{label}</text>
        </g>
      ))}
      <rect x="238" y="88" width="54" height="58" rx="12" fill={nF} stroke="#6B4F44" strokeWidth="1.8" filter="url(#glowS)"/>
      <text x="265" y="111" textAnchor="middle" fontSize="9" fill={tC} fontFamily="Inter,sans-serif" fontWeight="700">AI App</text>
      <text x="265" y="124" textAnchor="middle" fontSize="9" fill={tC} fontFamily="Inter,sans-serif" fontWeight="700">Connect</text>
      <circle cx="265" cy="138" r="3" fill="#F2A900"><animate attributeName="opacity" values="1;0.1;1" dur="1.6s" repeatCount="indefinite"/></circle>
      <rect x="342" y="94" width="60" height="46" rx="10" fill={nF} stroke={nS} strokeWidth="1.4" filter="url(#glow)"/>
      <text x="372" y="114" textAnchor="middle" fontSize="12"  fill={tC}       fontFamily="Inter,sans-serif">\u2699\uFE0F</text>
      <text x="372" y="130" textAnchor="middle" fontSize="8.5" fill={tC+"99"} fontFamily="Inter,sans-serif" fontWeight="600">Processor</text>
      {middles.map(([icon,y,label]) => (
        <g key={label}>
          <rect x="460" y={y-26} width="62" height="50" rx="10" fill={nF} stroke={nS} strokeWidth="1.1" filter="url(#glow)"/>
          <text x="491" y={y-5}  textAnchor="middle" fontSize="13" fill={tC}       fontFamily="Inter,sans-serif">{icon}</text>
          <text x="491" y={y+13} textAnchor="middle" fontSize="8"  fill={tC+"88"} fontFamily="Inter,sans-serif">{label}</text>
        </g>
      ))}
      <rect x="558" y="84" width="64" height="66" rx="12" fill="rgba(44,33,28,0.92)" stroke="#F2A900" strokeWidth="2" filter="url(#glowS)"/>
      <text x="590" y="108" textAnchor="middle" fontSize="16" fill="#F2A900" fontFamily="Inter,sans-serif">🧠</text>
      <text x="590" y="124" textAnchor="middle" fontSize="9"  fill="#fffdf1" fontFamily="Inter,sans-serif" fontWeight="700">AI Engine</text>
      <circle cx="590" cy="140" r="3.5" fill="#F2A900">
        <animate attributeName="r"       values="3.5;8;3.5" dur="2.2s" repeatCount="indefinite"/>
        <animate attributeName="opacity" values="0.9;0;0.9" dur="2.2s" repeatCount="indefinite"/>
      </circle>
      {outputs.map(([icon,y,label]) => (
        <g key={label}>
          <rect x="662" y={y-24} width="34" height="48" rx="8" fill={nF} stroke={nS} strokeWidth="1" filter="url(#glow)"/>
          <text x="679" y={y-2}  textAnchor="middle" fontSize="12"  fill={tC}       fontFamily="Inter,sans-serif">{icon}</text>
          <text x="679" y={y+16} textAnchor="middle" fontSize="6.5" fill={tC+"88"} fontFamily="Inter,sans-serif">{label}</text>
        </g>
      ))}
    </svg>
  );
}

// ── ACCORDION// ── ACCORDION ─────────────────────────────────────────────────────────────────
const SERVICIOS = [
  {
    title:"Bot de WhatsApp",
    tag:"24/7 · sin código",
    img:"https://images.unsplash.com/photo-1587560699334-cc4ff634909a?w=500&h=600&fit=crop&q=80",
    desc:"Tu negocio responde solo a cualquier hora. Menú interactivo, respuestas automáticas y notificaciones al equipo.",
    features:["Responde consultas frecuentes automáticamente","Menú interactivo con opciones personalizadas","Notifica al equipo cuando hay un lead caliente","Registra consultas en Google Sheets","Responde distinto en horario y fuera de horario"],
    desde:"USD 80",
    mant:"USD 30/mes",
  },
  {
    title:"Agente IA en web",
    tag:"Claude AI · widget",
    img:"https://images.unsplash.com/photo-1677756119517-756a188d2d94?w=500&h=600&fit=crop&q=80",
    desc:"Chatbot entrenado con la información de tu negocio. Califica leads y responde en español e inglés.",
    features:["Entrenado con info real de tu negocio","Califica y clasifica leads automáticamente","Responde en español e inglés","Widget flotante integrado en tu web","Deriva al equipo cuando el cliente está listo para comprar"],
    desde:"USD 100",
    mant:"USD 35/mes",
  },
  {
    title:"Automatización completa",
    tag:"WA + IA + Sheets",
    img:"https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?w=500&h=600&fit=crop&q=80",
    desc:"WhatsApp, IA y Google Sheets integrados. El proceso comercial en piloto automático.",
    features:["Bot de WhatsApp con IA para atención inicial","Clasifica consultas automáticamente con IA","Registra datos del cliente en Google Sheets","Dashboard con métricas de conversaciones","Notifica al equipo según el tipo de lead"],
    desde:"USD 150",
    mant:"USD 50/mes",
  },
  {
    title:"E-commerce",
    tag:"React · Node · MySQL",
    img:"https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500&h=600&fit=crop&q=80",
    desc:"Tienda online completa con catálogo, carrito y panel admin. Sin comisiones — tuya para siempre.",
    features:["Catálogo de productos con fotos y categorías","Carrito de compras funcional","Panel admin con métricas y gestión de stock","Dominio + hosting + SSL incluidos","Notificaciones WhatsApp de pedidos (opcional)"],
    desde:"USD 500",
    mant:"USD 80/mes",
  },
  {
    title:"Consultoría IA",
    tag:"estrategia · plan",
    img:"https://images.unsplash.com/photo-1553877522-43269d4ea984?w=500&h=600&fit=crop&q=80",
    desc:"Analizamos tu negocio e identificamos qué automatizar primero para el mayor retorno.",
    features:["Análisis de procesos actuales del negocio","Identificación de oportunidades de automatización","Propuesta de solución con herramientas y costos","Hoja de ruta de implementación por etapas","Informe escrito con recomendaciones"],
    desde:"USD 40/h",
    mant:"—",
  },
];

function AccordionItem({ item, isActive, onHover }) {
  return (
    <div onMouseEnter={onHover} style={{ position:"relative", height:"500px", borderRadius:"4px", overflow:"hidden", cursor:"pointer", flexShrink:0, width:isActive?"380px":"68px", transition:"width 0.65s cubic-bezier(0.4,0,0.2,1)", border:`1px solid ${isActive?C.primary2:C.border}` }}>
      <img src={item.img} alt={item.title} style={{ position:"absolute", inset:0, width:"100%", height:"100%", objectFit:"cover", filter:"brightness(0.55)" }}/>
      <div style={{ position:"absolute", inset:0, background:isActive?"linear-gradient(to top, rgba(0,0,0,0.9) 40%, rgba(0,0,0,0.15) 100%)":"rgba(0,0,0,0.45)" }}/>
      {!isActive && (
        <div style={{ position:"absolute", bottom:"90px", left:"50%", transform:"translateX(-50%) rotate(90deg)", whiteSpace:"nowrap", fontSize:"11px", fontWeight:500, color:"rgba(255,255,255,0.75)", fontFamily:"Inter,sans-serif", letterSpacing:"0.1em", textTransform:"uppercase" }}>{item.title}</div>
      )}
      {isActive && (
        <div style={{ position:"absolute", bottom:0, left:0, right:0, padding:"1.5rem", overflowY:"auto", maxHeight:"100%" }}>
          <div style={{ fontSize:"10px", color:C.accent, marginBottom:"6px", letterSpacing:"0.15em", textTransform:"uppercase", fontFamily:"Inter,sans-serif" }}>{item.tag}</div>
          <h3 style={{ fontSize:"19px", fontFamily:"'Playfair Display',serif", fontWeight:700, color:"#fff", margin:"0 0 6px", lineHeight:1.2 }}>{item.title}</h3>
          <p style={{ fontSize:"12px", color:"rgba(255,255,255,0.65)", lineHeight:1.6, margin:"0 0 10px" }}>{item.desc}</p>
          <ul style={{ margin:"0 0 12px", padding:0, listStyle:"none", display:"flex", flexDirection:"column", gap:"4px" }}>
            {item.features.map((f,i) => (
              <li key={i} style={{ fontSize:"11px", color:"rgba(255,255,255,0.75)", display:"flex", gap:"6px", alignItems:"flex-start" }}>
                <span style={{ color:C.accent, flexShrink:0, marginTop:"1px" }}>✓</span>{f}
              </li>
            ))}
          </ul>
          <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center", borderTop:"1px solid rgba(255,255,255,0.12)", paddingTop:"10px" }}>
            <div>
              <span style={{ fontSize:"11px", color:"rgba(255,255,255,0.45)", fontFamily:"Inter,sans-serif" }}>desde </span>
              <span style={{ fontSize:"20px", fontFamily:"'Playfair Display',serif", fontWeight:700, color:C.accent }}>{item.desde}</span>
            </div>
            <div style={{ fontSize:"11px", color:C.accent, border:"1px solid rgba(242,169,0,0.3)", padding:"4px 10px", borderRadius:"2px", fontFamily:"Inter,sans-serif" }}>{item.mant}</div>
          </div>
        </div>
      )}
    </div>
  );
}

// ── FORMULARIO ────────────────────────────────────────────────────────────────
function Formulario() {
  const [form, setForm] = useState({ nombre:"", email:"", empresa:"", mensaje:"" });
  const [estado, setEstado] = useState(null);

  const inp = { width:"100%", background:"transparent", border:"none", borderBottom:`1px solid ${C.border}`, borderRadius:0, padding:"0.75rem 0", color:C.text, fontSize:"14px", fontFamily:"Inter,sans-serif", outline:"none", boxSizing:"border-box", transition:"border-color 0.2s" };
  const lbl = { fontSize:"10px", color:C.muted, fontFamily:"Inter,sans-serif", display:"block", marginBottom:"8px", letterSpacing:"0.12em", textTransform:"uppercase" };

  const enviar = async e => {
    e.preventDefault();
    if (!form.nombre || !form.email || !form.mensaje) return;
    setEstado("enviando");
    try {
      const res = await fetch("https://formspree.io/f/mvzyprdz", { method:"POST", headers:{"Content-Type":"application/json"}, body:JSON.stringify({ ...form, _subject:"Nuevo contacto FlowMind" }) });
      setEstado(res.ok ? "ok" : "error");
      if (res.ok) setForm({ nombre:"", email:"", empresa:"", mensaje:"" });
    } catch { setEstado("error"); }
  };

  return (
    <form onSubmit={enviar} style={{ display:"flex", flexDirection:"column", gap:"2rem" }}>
      <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:"2rem" }}>
        {[["nombre","Nombre","Tu nombre"],["email","Email","tu@email.com"]].map(([k,l,p]) => (
          <div key={k}>
            <label style={lbl}>{l}</label>
            <input value={form[k]} onChange={e=>setForm({...form,[k]:e.target.value})} placeholder={p} style={inp} onFocus={e=>e.target.style.borderBottomColor=C.accent} onBlur={e=>e.target.style.borderBottomColor=C.border}/>
          </div>
        ))}
      </div>
      <div>
        <label style={lbl}>Empresa</label>
        <input value={form.empresa} onChange={e=>setForm({...form,empresa:e.target.value})} placeholder="Nombre de tu empresa (opcional)" style={inp} onFocus={e=>e.target.style.borderBottomColor=C.accent} onBlur={e=>e.target.style.borderBottomColor=C.border}/>
      </div>
      <div>
        <label style={lbl}>Mensaje</label>
        <textarea value={form.mensaje} onChange={e=>setForm({...form,mensaje:e.target.value})} placeholder="Contanos qué proceso querés automatizar..." rows={4} style={{...inp,resize:"vertical",lineHeight:1.7}} onFocus={e=>e.target.style.borderBottomColor=C.accent} onBlur={e=>e.target.style.borderBottomColor=C.border}/>
      </div>
      {estado==="ok"    && <p style={{ fontSize:"13px", color:C.primary, margin:0 }}>✓ Mensaje enviado. Te respondemos en menos de 24hs.</p>}
      {estado==="error" && <p style={{ fontSize:"13px", color:"#c0392b", margin:0 }}>Error al enviar. Escribinos a flujos.fm@gmail.com</p>}
      <button type="submit" disabled={estado==="enviando"} style={{ alignSelf:"flex-start", padding:"0.85rem 2.5rem", background:C.primary, color:C.primary3, border:"none", borderRadius:"4px", cursor:"pointer", fontFamily:"Inter,sans-serif", fontSize:"13px", fontWeight:600, letterSpacing:"0.05em", opacity:estado==="enviando"?0.6:1, transition:"opacity 0.2s, transform 0.2s" }}
        onMouseEnter={e=>e.currentTarget.style.transform="translateY(-1px)"}
        onMouseLeave={e=>e.currentTarget.style.transform="none"}
      >{estado==="enviando"?"Enviando...":"Enviar mensaje"}</button>
    </form>
  );
}

// ── APP ───────────────────────────────────────────────────────────────────────
export default function FlowMind() {
  const [activeIdx, setActiveIdx] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const { isMobile, isTablet } = useResponsive();
  const scrollTo = id => { document.getElementById(id)?.scrollIntoView({ behavior:"smooth" }); setMenuOpen(false); };

  const sec    = { padding: isMobile ? "4rem 1.5rem" : isTablet ? "6rem 3rem" : "8rem clamp(1.5rem,7vw,9rem)" };
  const slabel = { fontSize:"10px", color:C.muted, fontFamily:"Inter,sans-serif", letterSpacing:"0.2em", textTransform:"uppercase", marginBottom:"1.5rem", display:"block" };
  const sh2    = { fontSize: isMobile ? "1.8rem" : "clamp(2rem,5vw,3.5rem)", fontFamily:"'Playfair Display',serif", fontWeight:700, color:C.text, margin:"0 0 1.5rem", lineHeight:1.05, letterSpacing:"-0.02em" };

  return (
    <div style={{ fontFamily:"Inter,sans-serif", background:C.bg, color:C.muted, minHeight:"100vh" }}>
      <link href={FONTS} rel="stylesheet"/>

      {/* NAV */}
      <nav style={{ position:"fixed", top:0, left:0, right:0, zIndex:100, display:"flex", alignItems:"center", justifyContent:"space-between", padding: isMobile ? "1rem 1.5rem" : "1.2rem clamp(1.5rem,7vw,9rem)", background:"rgba(255,253,241,0.96)", backdropFilter:"blur(24px)", borderBottom:`1px solid ${C.border}` }}>
        <div style={{ display:"flex", alignItems:"center", gap:"12px", cursor:"pointer" }} onClick={()=>scrollTo("inicio")}>
          <Logo size={isMobile ? 40 : 62}/>
          <span style={{ fontFamily:"'Playfair Display',serif", fontWeight:700, fontSize: isMobile ? "1rem" : "1.3rem", color:C.text }}>FlowMind</span>
        </div>

        {/* Menú mobile */}
        {isMobile ? (
          <button onClick={()=>setMenuOpen(!menuOpen)} style={{ background:"none", border:"none", cursor:"pointer", fontSize:"24px", color:C.text }}>
            {menuOpen ? "✕" : "☰"}
          </button>
        ) : (
          <div style={{ display:"flex", gap:"2.5rem", alignItems:"center" }}>
            {[["servicios","Servicios"],["nosotros","Nosotros"],["contacto","Contacto"]].map(([id,lbl]) => (
              <button key={id} onClick={()=>scrollTo(id)} style={{ background:"none", border:"none", cursor:"pointer", fontSize:"13px", fontFamily:"Inter,sans-serif", color:C.muted, transition:"color 0.2s" }}
                onMouseEnter={e=>e.target.style.color=C.primary}
                onMouseLeave={e=>e.target.style.color=C.muted}
              >{lbl}</button>
            ))}
            <button onClick={()=>scrollTo("contacto")} style={{ padding:"0.6rem 1.5rem", background:C.primary, color:C.primary3, border:"none", borderRadius:"4px", cursor:"pointer", fontFamily:"Inter,sans-serif", fontSize:"12px", fontWeight:600, transition:"opacity 0.2s" }}
              onMouseEnter={e=>e.currentTarget.style.opacity="0.85"}
              onMouseLeave={e=>e.currentTarget.style.opacity="1"}
            >Contacto</button>
          </div>
        )}
      </nav>

      {/* MENÚ MOBILE DESPLEGABLE */}
      {isMobile && menuOpen && (
        <div style={{ position:"fixed", top:"65px", left:0, right:0, zIndex:99, background:"rgba(255,253,241,0.98)", borderBottom:`1px solid ${C.border}`, padding:"1.5rem", display:"flex", flexDirection:"column", gap:"1.5rem" }}>
          {[["servicios","Servicios"],["nosotros","Nosotros"],["contacto","Contacto"]].map(([id,lbl]) => (
            <button key={id} onClick={()=>scrollTo(id)} style={{ background:"none", border:"none", cursor:"pointer", fontSize:"16px", fontFamily:"Inter,sans-serif", color:C.text, textAlign:"left", padding:0 }}>{lbl}</button>
          ))}
          <button onClick={()=>scrollTo("contacto")} style={{ padding:"0.8rem", background:C.primary, color:C.primary3, border:"none", borderRadius:"4px", cursor:"pointer", fontFamily:"Inter,sans-serif", fontSize:"14px", fontWeight:600 }}>Contacto</button>
        </div>
      )}

      {/* HERO */}
      <section id="inicio" style={{ minHeight:"100vh", display:"flex", flexDirection:"column", justifyContent:"flex-end", padding: isMobile ? "0 1.5rem 4rem" : "0 clamp(1.5rem,7vw,9rem) 6rem", background:`radial-gradient(ellipse at top left, rgba(242,169,0,0.06) 0%, transparent 60%), ${C.bg}` }}>
        <div style={{ paddingTop: isMobile ? "7rem" : "10rem", maxWidth:"1200px" }}>
          <div style={{ display:"grid", gridTemplateColumns: isMobile ? "1fr" : "repeat(auto-fit,minmax(300px,1fr))", gap: isMobile ? "2rem" : "5rem", alignItems:"flex-end" }}>
            <div>
              <span style={{ fontSize:"10px", color:C.primary, fontFamily:"Inter,sans-serif", letterSpacing:"0.25em", textTransform:"uppercase", display:"block", marginBottom:"2rem" }}>FlowMind · Automatización IA</span>
              <h1 style={{ fontSize:"clamp(3rem,8vw,6.5rem)", fontFamily:"'Playfair Display',serif", fontWeight:800, color:C.text, margin:"0 0 2rem", lineHeight:0.95, letterSpacing:"-0.03em" }}>
                Flujos<br/><span style={{ color:C.primary }}>inteligentes</span><br/>para negocios<br/><span style={{ color:C.accent }}>reales.</span>
              </h1>
              <div style={{ display:"flex", gap:"1.5rem", flexWrap:"wrap" }}>
                <button onClick={()=>scrollTo("servicios")} style={{ padding:"1rem 2.5rem", background:C.primary, color:C.primary3, border:"none", borderRadius:"4px", cursor:"pointer", fontFamily:"Inter,sans-serif", fontSize:"13px", fontWeight:600, transition:"opacity 0.2s, transform 0.2s" }}
                  onMouseEnter={e=>{ e.currentTarget.style.opacity="0.85"; e.currentTarget.style.transform="translateY(-2px)"; }}
                  onMouseLeave={e=>{ e.currentTarget.style.opacity="1"; e.currentTarget.style.transform="none"; }}
                >Ver servicios</button>
                <button onClick={()=>scrollTo("contacto")} style={{ padding:"1rem 2.5rem", background:"transparent", color:C.text, border:`1px solid ${C.border}`, borderRadius:"4px", cursor:"pointer", fontFamily:"Inter,sans-serif", fontSize:"13px", transition:"border-color 0.2s" }}
                  onMouseEnter={e=>e.currentTarget.style.borderColor=C.primary}
                  onMouseLeave={e=>e.currentTarget.style.borderColor=C.border}
                >Hablar con nosotros</button>
              </div>
            </div>
            <div>
              <p style={{ fontSize:"clamp(1rem,2vw,1.15rem)", color:C.muted, lineHeight:1.8, marginBottom:"3rem", fontWeight:300 }}>
                Automatizamos los procesos repetitivos de tu negocio con n8n y Claude AI. Bots de WhatsApp, agentes inteligentes y flujos que trabajan 24/7 — sin que necesites saber de tecnología.
              </p>
              <div style={{ display:"grid", gridTemplateColumns:"repeat(3,1fr)", gap:"2rem", borderTop:`1px solid ${C.border}`, paddingTop:"2rem" }}>
                {[["24/7","Operación"],["48hs","Entrega"],["0","Código requerido"]].map(([v,l]) => (
                  <div key={l}>
                    <div style={{ fontSize:"2.5rem", fontFamily:"'Playfair Display',serif", fontWeight:700, color:C.accent, lineHeight:1 }}>{v}</div>
                    <div style={{ fontSize:"11px", color:C.muted, marginTop:"6px", letterSpacing:"0.05em" }}>{l}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SOBRE FLOWMIND */}
      <section style={{ ...sec, background:C.bg2 }}>
        <div style={{ maxWidth:"1200px", margin:"0 auto" }}>
          <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(280px,1fr))", gap:"2rem", marginBottom:"4rem" }}>
            <div>
              <span style={slabel}>Sobre FlowMind</span>
              <h2 style={sh2}>Automatización sin vueltas.</h2>
            </div>
            <p style={{ fontSize:"16px", color:C.muted, lineHeight:1.8, fontWeight:300, alignSelf:"flex-end" }}>
              No vendemos software genérico. Analizamos tu negocio, identificamos qué automatizar primero y construimos soluciones que realmente funcionan desde el día uno.
            </p>
          </div>
          <div style={{ display:"grid", gridTemplateColumns: isMobile ? "1fr" : "2fr 1fr", gap:"1.5rem", marginBottom:"5rem" }}>
            <img src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=900&h=600&fit=crop&q=80" alt="automatización" style={{ width:"100%", height: isMobile ? "240px" : "520px", objectFit:"cover", borderRadius:"4px", filter:"brightness(0.7)" }}/>
            <div style={{ display:"flex", flexDirection:"column", gap:"1.5rem" }}>
              <div style={{ background:C.card, border:`1px solid ${C.border}`, borderRadius:"8px", padding:"2rem", flex:1, display:"flex", flexDirection:"column", justifyContent:"space-between" }}>
                <Logo size={32}/>
                <div>
                  <p style={{ fontSize:"15px", fontWeight:600, color:C.text, marginBottom:"8px" }}>Flujos inteligentes para negocios reales</p>
                  <p style={{ fontSize:"13px", color:C.muted, lineHeight:1.6 }}>Combinamos n8n, Claude AI y APIs para automatizar lo que hoy hacés a mano.</p>
                </div>
                <button onClick={()=>scrollTo("contacto")} style={{ padding:"0.7rem 1.5rem", background:"transparent", color:C.primary, border:`1px solid ${C.border}`, borderRadius:"4px", cursor:"pointer", fontFamily:"Inter,sans-serif", fontSize:"12px", alignSelf:"flex-start", transition:"border-color 0.2s" }}
                  onMouseEnter={e=>e.currentTarget.style.borderColor=C.primary}
                  onMouseLeave={e=>e.currentTarget.style.borderColor=C.border}
                >Hablemos →</button>
              </div>
              <img src="https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=500&h=300&fit=crop&q=80" alt="datos" style={{ width:"100%", height:"200px", objectFit:"cover", borderRadius:"4px", filter:"brightness(0.65)" }}/>
            </div>
          </div>
          <div style={{ background:C.bg, border:`1px solid ${C.border}`, borderRadius:"8px", padding:"3rem 4rem", position:"relative", overflow:"hidden" }}>
            <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(200px,1fr))", gap:"2rem", alignItems:"flex-start", marginBottom:"3rem" }}>
              <h3 style={{ fontSize:"clamp(1.5rem,3vw,2rem)", fontFamily:"'Playfair Display',serif", fontWeight:700, color:C.text, margin:0 }}>Lo que construimos en números</h3>
              <p style={{ fontSize:"14px", color:C.muted, lineHeight:1.7, fontWeight:300 }}>Proyectos reales, en producción, con resultados medibles desde el primer día.</p>
            </div>
            <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(150px,1fr))", gap:"2rem" }}>
              {[["4+","Flujos en producción"],["1,142","Productos automatizados"],["24/7","Operación sin parar"],["100%","Todo deployado"]].map(([v,l]) => (
                <div key={l} style={{ textAlign:"center" }}>
                  <div style={{ fontSize:"clamp(2rem,5vw,3.5rem)", fontFamily:"'Playfair Display',serif", fontWeight:700, color:C.accent, lineHeight:1 }}>{v}</div>
                  <div style={{ fontSize:"12px", color:C.muted, marginTop:"8px" }}>{l}</div>
                </div>
              ))}
            </div>
            <div style={{ position:"absolute", top:0, right:0, width:"50%", height:"100%", backgroundImage:`linear-gradient(${C.border} 1px, transparent 1px), linear-gradient(90deg, ${C.border} 1px, transparent 1px)`, backgroundSize:"40px 40px", opacity:0.4, maskImage:"linear-gradient(to bottom right, transparent, rgba(0,0,0,0.5))", pointerEvents:"none" }}/>
          </div>
        </div>
      </section>

      {/* SERVICIOS */}
      <section id="servicios" style={sec}>
        <div style={{ maxWidth:"1200px", margin:"0 auto" }}>
          <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(280px,1fr))", gap:"2rem", marginBottom:"4rem" }}>
            <div>
              <span style={slabel}>Servicios</span>
              <h2 style={sh2}>¿Qué podemos hacer<br/>por tu negocio?</h2>
            </div>
            <div style={{ alignSelf:"flex-end" }}>
              <p style={{ fontSize:"15px", color:C.muted, lineHeight:1.8, fontWeight:300, marginBottom:"1.5rem" }}>
                Cada servicio está diseñado para resolver un problema real. Pasá el mouse sobre cada uno para ver los detalles.
              </p>
              <WorkflowSVG/>
            </div>
          </div>
          {isMobile ? (
            <div style={{ display:"flex", flexDirection:"column", gap:"1rem" }}>
              {SERVICIOS.map((item,i) => (
                <div key={i} style={{ borderRadius:"4px", overflow:"hidden", border:`1px solid ${C.border}` }}>
                  <div style={{ position:"relative", height:"200px" }}>
                    <img src={item.img} alt={item.title} style={{ width:"100%", height:"100%", objectFit:"cover", filter:"brightness(0.55)" }}/>
                    <div style={{ position:"absolute", inset:0, background:"linear-gradient(to top, rgba(0,0,0,0.85) 40%, rgba(0,0,0,0.1) 100%)" }}/>
                    <div style={{ position:"absolute", bottom:0, left:0, right:0, padding:"1.25rem" }}>
                      <div style={{ fontSize:"10px", color:C.accent, marginBottom:"6px", letterSpacing:"0.12em", textTransform:"uppercase" }}>{item.tag}</div>
                      <h3 style={{ fontSize:"17px", fontFamily:"'Playfair Display',serif", fontWeight:700, color:"#fff", margin:"0 0 6px" }}>{item.title}</h3>
                      <p style={{ fontSize:"12px", color:"rgba(255,255,255,0.7)", lineHeight:1.6, margin:"0 0 8px" }}>{item.desc}</p>
                      <ul style={{ margin:"0 0 10px", padding:0, listStyle:"none", display:"flex", flexDirection:"column", gap:"3px" }}>
                        {item.features.map((f,i) => (
                          <li key={i} style={{ fontSize:"11px", color:"rgba(255,255,255,0.65)", display:"flex", gap:"5px" }}>
                            <span style={{ color:C.accent, flexShrink:0 }}>✓</span>{f}
                          </li>
                        ))}
                      </ul>
                      <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center" }}>
                        <span style={{ fontSize:"18px", fontFamily:"'Playfair Display',serif", fontWeight:700, color:C.accent }}>desde {item.desde}</span>
                        <span style={{ fontSize:"11px", color:C.accent, border:"1px solid rgba(242,169,0,0.3)", padding:"3px 10px", borderRadius:"2px" }}>{item.mant}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div style={{ display:"flex", gap:"10px", overflowX:"auto", padding:"0.5rem 0" }}>
              {SERVICIOS.map((item,i) => (
                <AccordionItem key={i} item={item} isActive={activeIdx===i} onHover={()=>setActiveIdx(i)}/>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* NOSOTROS */}
      <section id="nosotros" style={{ ...sec, background:C.bg2 }}>
        <div style={{ maxWidth:"1200px", margin:"0 auto" }}>
          <span style={slabel}>Cómo trabajamos</span>
          <div style={{ display:"grid", gridTemplateColumns: isMobile ? "1fr" : isTablet ? "repeat(2,1fr)" : "repeat(auto-fill,minmax(260px,1fr))", gap:"1px", border:`1px solid ${C.border}`, borderRadius:"8px", overflow:"hidden" }}>
            {[
              ["01","Análisis gratuito","Antes de cotizar, analizamos tu negocio y procesos actuales sin ningún costo."],
              ["02","Diseño del flujo","Diseñamos la automatización más eficiente para tu caso específico."],
              ["03","Implementación","Construimos y probamos en un ambiente de staging antes del deploy."],
              ["04","Deploy y soporte","Deployamos en producción y te acompañamos con soporte incluido."],
            ].map(([num,title,desc]) => (
              <div key={num} style={{ background:C.card, padding:"2.5rem", borderRight:`1px solid ${C.border}` }}>
                <div style={{ fontSize:"24px", fontFamily:"'Playfair Display',serif", color:C.primary2, marginBottom:"1.5rem", fontWeight:700 }}>{num}</div>
                <h3 style={{ fontSize:"16px", fontFamily:"'Playfair Display',serif", fontWeight:700, color:C.text, margin:"0 0 0.75rem" }}>{title}</h3>
                <p style={{ fontSize:"13px", color:C.muted, lineHeight:1.7, margin:0 }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACTO */}
      <section id="contacto" style={sec}>
        <div style={{ maxWidth:"1200px", margin:"0 auto", display:"grid", gridTemplateColumns: isMobile ? "1fr" : "repeat(auto-fit,minmax(280px,1fr))", gap: isMobile ? "3rem" : "6rem" }}>
          <div>
            <span style={slabel}>Contacto</span>
            <h2 style={sh2}>Hablemos de<br/>tu negocio.</h2>
            <p style={{ fontSize:"15px", color:C.muted, lineHeight:1.8, marginBottom:"2.5rem", fontWeight:300 }}>
              Contanos qué proceso querés automatizar y te respondemos en menos de 24hs con una propuesta concreta.
            </p>
            <div style={{ display:"flex", flexDirection:"column", gap:"1rem" }}>
              {[["Email","flujos.fm@gmail.com"],["LinkedIn","linkedin.com/in/acquisto-dev"],["Web","flowmind.com.ar"]].map(([l,v]) => (
                <div key={l} style={{ display:"flex", gap:"1rem", alignItems:"center", borderBottom:`1px solid ${C.border}`, paddingBottom:"1rem" }}>
                  <span style={{ fontSize:"10px", color:C.primary, letterSpacing:"0.15em", textTransform:"uppercase", width:"60px" }}>{l}</span>
                  <span style={{ fontSize:"13px", color:C.muted }}>{v}</span>
                </div>
              ))}
            </div>
          </div>
          <Formulario/>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ padding:"2.5rem clamp(1.5rem,7vw,9rem)", borderTop:`1px solid ${C.border}`, background:C.bg3, display:"flex", justifyContent:"space-between", alignItems:"center", flexWrap:"wrap", gap:"1rem" }}>
        <div style={{ display:"flex", alignItems:"center", gap:"10px" }}>
          <Logo size={28}/>
          <span style={{ fontFamily:"'Playfair Display',serif", fontWeight:700, fontSize:"0.95rem", color:C.text }}>FlowMind</span>
        </div>
        <div style={{ fontSize:"12px", color:C.muted }}>© 2026 FlowMind · Flujos inteligentes para negocios reales</div>
        <div style={{ fontSize:"12px", color:C.primary }}>flowmind.com.ar</div>
      </footer>

      <style>{`*{box-sizing:border-box}html{scroll-behavior:smooth}body{margin:0}::-webkit-scrollbar{width:4px}::-webkit-scrollbar-track{background:${C.bg}}::-webkit-scrollbar-thumb{background:${C.primary2};border-radius:2px}::placeholder{color:${C.muted}88}`}</style>
    </div>
  );
}
