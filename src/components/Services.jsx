 import { useState } from "react"
import { T } from "../tokens.js"
import { SERVICES_BIZ } from "../data.js"
import { useVisible } from "../hooks/useVisible.js"

export default function Services() {
  const [hovered, setHov] = useState(null)
  const [ref, vis] = useVisible()

  // Define a lista fixa apenas com os serviços corporativos
  const list = SERVICES_BIZ

  return (
    <section id="servicos" ref={ref} style={{ padding: "96px 0", background: T.bg2 }}>
      <div style={{ maxWidth: 1160, margin: "0 auto", padding: "0 28px" }}>
        {/* Header */}
        <div className={`anim${vis ? " in" : ""}`} style={{ textAlign: "center", marginBottom: 56 }}>
          <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 11, color: T.accent, letterSpacing: ".15em", textTransform: "uppercase", display: "block", marginBottom: 16 }}>
            Serviços
          </span>
          <h2 style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: "clamp(32px, 4vw, 48px)", letterSpacing: "-.03em", color: T.fg, lineHeight: 1.1, marginBottom: 20 }}>
            Para quem é isso?
          </h2>
          <p style={{ fontSize: 15, color: T.fgMid, maxWidth: 460, margin: "0 auto 40px" }}>
            Soluções digitais sob medida para impulsionar o seu negócio.
          </p>
        </div>

        {/* Cards */}
        <div style={{ display: "grid", gap: 20 }} className="srv-grid">
          {list.map((s, i) => (
            <div
              key={i}
              className={`card-hover anim${vis ? " in" : ""}`}
              onMouseEnter={() => setHov(i)}
              onMouseLeave={() => setHov(null)}
              style={{
                padding: "36px 32px", background: T.bg3, border: `1px solid ${T.border}`,
                borderRadius: 16, display: "flex", flexDirection: "column", gap: 20,
                transitionDelay: `${i * 80}ms`,
              }}
            >
              <div style={{ fontSize: 28 }}>{s.icon}</div>
              <div>
                <h3 style={{ fontFamily: "'Syne', sans-serif", fontWeight: 600, fontSize: 20, color: T.fg, marginBottom: 10, lineHeight: 1.2 }}>
                  {s.title}
                </h3>
                <p style={{ fontSize: 14, color: T.fgMid, lineHeight: 1.75 }}>{s.desc}</p>
              </div>
              <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 8 }}>
                {s.items.map((item, j) => (
                  <li key={j} style={{ display: "flex", alignItems: "center", gap: 10, fontSize: 13, color: T.fgMid }}>
                    <span style={{ color: T.green, fontSize: 11 }}>✓</span> {item}
                  </li>
                ))}
              </ul>
              <div style={{ marginTop: "auto", paddingTop: 20, borderTop: `1px solid ${T.border}`, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <span style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: 16, color: T.fg }}>{s.price}</span>
                <a
                  href="#contact"
                  style={{ fontSize: 13, color: T.accent, display: "flex", alignItems: "center", gap: 5, opacity: hovered === i ? 1 : 0.5, transition: "opacity .2s" }}
                >
                  Quero esse →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
      <style>{`
        @media (min-width:700px) { .srv-grid { grid-template-columns: repeat(3,1fr) !important; } }
      `}</style>
    </section>
  )
}