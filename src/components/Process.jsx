import { useState } from "react"
import { T } from "../tokens.js"
import { PROCESS } from "../data.js"
import { useVisible } from "../hooks/useVisible.js"

const WA_URL = "https://wa.me/5561992271063?text=Olá%20Mariana!%20Quero%20iniciar%20um%20projeto%20de%20site!"

export default function Process() {
  const [ref, vis] = useVisible()
  const [active, setActive] = useState(null)

  return (
    <section id="processo" ref={ref} style={{ padding: "96px 0", background: T.bg2 }}>
      <div style={{ maxWidth: 1160, margin: "0 auto", padding: "0 28px" }}>
        <div className={`anim${vis ? " in" : ""}`} style={{ textAlign: "center", marginBottom: 64 }}>
          <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 11, color: T.accent, letterSpacing: ".15em", textTransform: "uppercase", display: "block", marginBottom: 16 }}>
            Como funciona
          </span>
          <h2 style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: "clamp(32px, 4vw, 48px)", letterSpacing: "-.03em", color: T.fg, lineHeight: 1.1 }}>
            Do briefing ao ar em 4 etapas
          </h2>
        </div>

        <div style={{ display: "grid", gap: 20, position: "relative" }} className="proc-grid">
          {/* Connector line — desktop only */}
          <div
            className="proc-line"
            style={{
              display: "none", position: "absolute", top: 44,
              left: "12.5%", right: "12.5%", height: 1,
              background: `linear-gradient(90deg, ${T.accent}, ${T.green})`, opacity: .25,
            }}
          />

          {PROCESS.map((s, i) => (
            <div
              key={i}
              onClick={() => setActive(active === i ? null : i)}
              className={`anim${vis ? " in" : ""}`}
              style={{
                padding: "32px 24px",
                background: active === i ? T.surface : T.bg3,
                border: `1px solid ${active === i ? T.borderH : T.border}`,
                borderRadius: 14, cursor: "pointer",
                transition: "all .3s",
                transitionDelay: `${i * 100}ms`,
                position: "relative",
              }}
            >
              {/* Step number */}
              <div style={{
                width: 40, height: 40, borderRadius: 10,
                border: `1px solid ${active === i ? T.accent : T.border}`,
                display: "flex", alignItems: "center", justifyContent: "center",
                marginBottom: 20, transition: "border-color .3s",
              }}>
                <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 12, color: active === i ? T.accent : T.fgLow }}>
                  {s.n}
                </span>
              </div>
              <h3 style={{ fontFamily: "'Syne', sans-serif", fontWeight: 600, fontSize: 17, color: T.fg, marginBottom: 10 }}>
                {s.title}
              </h3>
              <p style={{ fontSize: 13, color: T.fgMid, lineHeight: 1.7 }}>{s.desc}</p>
            </div>
          ))}
        </div>

        {/* CTA box */}
        <div
          className={`anim${vis ? " in" : ""}`}
          style={{
            marginTop: 48, padding: "40px 36px",
            background: `linear-gradient(135deg, rgba(108,99,255,.1), rgba(34,211,160,.06))`,
            border: `1px solid rgba(108,99,255,.2)`,
            borderRadius: 16, display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 24,
          }}
        >
          <div>
            <h3 style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: 22, color: T.fg, marginBottom: 8 }}>
              Pronto para começar?
            </h3>
            <p style={{ fontSize: 14, color: T.fgMid }}>Respondo em poucas horas. Primeira conversa é sem compromisso.</p>
          </div>
          <a
            href={WA_URL}
            target="_blank" rel="noreferrer"
            style={{ padding: "13px 28px", background: T.accent, color: "#fff", fontSize: 14, fontWeight: 500, borderRadius: 8, whiteSpace: "nowrap", transition: "opacity .2s" }}
            onMouseEnter={e => (e.currentTarget.style.opacity = ".85")}
            onMouseLeave={e => (e.currentTarget.style.opacity = "1")}
          >
            💬 Iniciar projeto
          </a>
        </div>
      </div>
      <style>{`
        @media (min-width:700px) { .proc-grid { grid-template-columns: repeat(4,1fr) !important; } .proc-line { display:block !important; } }
      `}</style>
    </section>
  )
}
