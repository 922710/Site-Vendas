import { useState } from "react"
import { T } from "../tokens.js"
import { PROJECTS } from "../data.js"
import { useVisible } from "../hooks/useVisible.js"

export default function Projects() {
  const [hov, setHov] = useState(null)
  const [ref, vis] = useVisible()

  return (
    <section id="projetos" ref={ref} style={{ padding: "96px 0", background: T.bg }}>
      <div style={{ maxWidth: 1160, margin: "0 auto", padding: "0 28px" }}>
        <div className={`anim${vis ? " in" : ""}`} style={{ marginBottom: 56 }}>
          <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 11, color: T.accent, letterSpacing: ".15em", textTransform: "uppercase", display: "block", marginBottom: 16 }}>
            Projetos
          </span>
          <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", flexWrap: "wrap", gap: 16 }}>
            <h2 style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: "clamp(32px, 4vw, 48px)", letterSpacing: "-.03em", color: T.fg, lineHeight: 1.1 }}>
              O que já entreguei
            </h2>
            <a
              href="https://mariana-conta-2-ku4i.vercel.app/"
              target="_blank" rel="noreferrer"
              style={{ fontSize: 13, color: T.fgMid, display: "flex", alignItems: "center", gap: 5, transition: "color .2s" }}
              onMouseEnter={e => (e.currentTarget.style.color = T.fg)}
              onMouseLeave={e => (e.currentTarget.style.color = T.fgMid)}
            >
              Ver portfólio completo ↗
            </a>
          </div>
        </div>

        <div style={{ display: "grid", gap: 14 }} className="proj-grid">
          {PROJECTS.map((p, i) => (
            <a
              key={i}
              href={p.url}
              target="_blank" rel="noreferrer"
              onMouseEnter={() => setHov(i)}
              onMouseLeave={() => setHov(null)}
              className={`anim${vis ? " in" : ""}`}
              style={{
                padding: "28px 26px",
                background: hov === i ? T.surface : T.bg2,
                border: `1px solid ${hov === i ? p.color + "44" : T.border}`,
                borderRadius: 14,
                display: "flex", flexDirection: "column", gap: 14,
                textDecoration: "none",
                transition: "background .25s, border-color .25s, transform .25s",
                transform: hov === i ? "translateY(-3px)" : "translateY(0)",
                transitionDelay: `${i * 60}ms`,
              }}
            >
              <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between" }}>
                <div>
                  <span
                    className="pill"
                    style={{ marginBottom: 10, borderColor: p.color + "33", color: p.color, background: p.color + "12" }}
                  >{p.cat}</span>
                  <h3 style={{ fontFamily: "'Syne', sans-serif", fontWeight: 600, fontSize: 17, color: T.fg, lineHeight: 1.2 }}>
                    {p.title}
                  </h3>
                </div>
                <span style={{ color: T.fgLow, fontSize: 18, opacity: hov === i ? 1 : 0.4, transition: "opacity .2s", marginTop: 2 }}>↗</span>
              </div>
              <p style={{ fontSize: 13, color: T.fgMid, lineHeight: 1.7 }}>{p.desc}</p>
              <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
                {p.tags.map(t => <span key={t} className="pill">{t}</span>)}
              </div>
            </a>
          ))}
        </div>
      </div>
      <style>{`
        @media (min-width:600px) { .proj-grid { grid-template-columns: repeat(2,1fr) !important; } }
        @media (min-width:960px) { .proj-grid { grid-template-columns: repeat(3,1fr) !important; } }
      `}</style>
    </section>
  )
}
