import { T } from "../tokens.js"

const ITEMS = ["Landing Page", "Conversão", "WhatsApp", "Portfólio", "SEO", "Design", "Next.js", "React", "Brasília", "Rápido e Acessível"]

export default function Marquee() {
  return (
    <div style={{ borderTop: `1px solid ${T.border}`, borderBottom: `1px solid ${T.border}`, overflow: "hidden", padding: "12px 0", background: T.bg2 }}>
      <div style={{ display: "flex", gap: 40, animation: "marquee 20s linear infinite", width: "max-content" }}>
        {[...ITEMS, ...ITEMS].map((item, i) => (
          <span key={i} style={{ display: "flex", alignItems: "center", gap: 40, whiteSpace: "nowrap" }}>
            <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 11, color: T.fgLow, letterSpacing: ".12em", textTransform: "uppercase" }}>{item}</span>
            <span style={{ color: T.accent, opacity: .5 }}>◆</span>
          </span>
        ))}
      </div>
    </div>
  )
}
