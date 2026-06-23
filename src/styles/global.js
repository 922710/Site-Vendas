import { T } from '../tokens.js'

export const globalCSS = `
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&family=Syne:wght@400;500;600;700;800&family=JetBrains+Mono:wght@300;400&display=swap');

  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
  html { scroll-behavior: smooth; }
  body { background: ${T.bg}; color: ${T.fg}; font-family: 'Inter', sans-serif; font-weight: 400; overflow-x: hidden; }
  a { color: inherit; text-decoration: none; }
  button { cursor: pointer; background: none; border: none; color: inherit; font: inherit; }
  input, textarea { font: inherit; }
  ::selection { background: ${T.accent}; color: #fff; }
  ::-webkit-scrollbar { width: 5px; }
  ::-webkit-scrollbar-track { background: ${T.bg}; }
  ::-webkit-scrollbar-thumb { background: ${T.fgLow}; border-radius: 4px; }

  @keyframes fadeUp { from { opacity:0; transform:translateY(28px); } to { opacity:1; transform:translateY(0); } }
  @keyframes glow-pulse { 0%,100% { opacity:.35; } 50% { opacity:.6; } }
  @keyframes marquee { from { transform:translateX(0); } to { transform:translateX(-50%); } }
  @keyframes blink { 0%,100% { opacity:1; } 50% { opacity:0; } }
  @keyframes float { 0%,100% { transform:translateY(0px) rotate(-2deg); } 50% { transform:translateY(-10px) rotate(2deg); } }
  @keyframes rotate-slow { from { transform:rotate(0deg); } to { transform:rotate(360deg); } }

  .anim { opacity:0; transform:translateY(28px); transition: opacity .65s ease, transform .65s ease; }
  .anim.in { opacity:1; transform:translateY(0); }

  .card-hover { transition: background .25s, border-color .25s, transform .25s; }
  .card-hover:hover { background: ${T.surface} !important; border-color: ${T.borderH} !important; transform: translateY(-3px); }

  .tab-btn { transition: background .2s, color .2s, border-color .2s; }
  .pill { display:inline-flex; align-items:center; padding:3px 10px; border-radius:100px; font-size:11px; font-family:'JetBrains Mono', monospace; font-weight:400; letter-spacing:.04em; background:rgba(108,99,255,0.1); color:${T.accent}; border:1px solid rgba(108,99,255,0.2); }
  .pill.green { background:rgba(34,211,160,0.1); color:${T.green}; border-color:rgba(34,211,160,0.2); }

  input::placeholder, textarea::placeholder { color:${T.fgLow}; }
`
