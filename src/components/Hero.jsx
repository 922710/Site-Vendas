import { useState, useEffect, useRef } from "react"
import { T } from "../tokens.js"

const WA_URL = "https://wa.me/5561992271063?text=Olá%20Mariana!%20Quero%20criar%20meu%20site!"

const STATS = [
  ["7+", "sites entregues"],
  ["3", "dias para landing page"],
  ["100%", "responsivos"],
  ["AZ-900", "certificada Azure"],
]

const CHECKLIST = [
  "Design aprovado ✓",
  "Desenvolvimento 78%",
  "SEO configurado ✓",
  "Deploy pendente",
]

export default function Hero() {
  const [mouse, setMouse] = useState({ x: 0, y: 0 })
  const ref = useRef(null)

  useEffect(() => {
    const h = (e) => {
      if (!ref.current) return
      const r = ref.current.getBoundingClientRect()
      setMouse({ x: (e.clientX - r.left) / r.width, y: (e.clientY - r.top) / r.height })
    }
    window.addEventListener("mousemove", h)
    return () => window.removeEventListener("mousemove", h)
  }, [])

  return (
    <section ref={ref} style={{ position: "relative", minHeight: "100vh", display: "flex", alignItems: "center", overflow: "hidden", paddingTop: 60 }}>
      {/* Orbs */}
      <div style={{
        position: "absolute", width: 700, height: 700, borderRadius: "50%",
        background: `radial-gradient(circle, rgba(108,99,255,0.07) 0%, transparent 65%)`,
        left: `${mouse.x * 60 - 10}%`, top: `${mouse.y * 40}%`,
        transform: "translate(-50%,-50%)", transition: "left .5s ease, top .5s ease",
        pointerEvents: "none", animation: "glow-pulse 4s ease infinite",
      }} />
      <div style={{
        position: "absolute", width: 400, height: 400, borderRadius: "50%",
        background: `radial-gradient(circle, rgba(34,211,160,0.05) 0%, transparent 70%)`,
        right: "10%", bottom: "20%", pointerEvents: "none",
      }} />

      {/* Grid decoration */}
      <div style={{
        position: "absolute", inset: 0,
        backgroundImage: `linear-gradient(${T.border} 1px, transparent 1px), linear-gradient(90deg, ${T.border} 1px, transparent 1px)`,
        backgroundSize: "60px 60px", opacity: 0.4, pointerEvents: "none",
      }} />

      <div style={{ maxWidth: 1160, margin: "0 auto", padding: "80px 28px", width: "100%", position: "relative", zIndex: 1 }}>
        <div style={{ display: "grid", gap: 48, alignItems: "center" }} className="hero-g">

          {/* Left */}
          <div style={{ animation: "fadeUp .8s ease both" }}>
            {/* Badge */}
            <div style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "5px 14px", border: `1px solid ${T.border}`, borderRadius: 100, marginBottom: 32, background: T.bg2 }}>
              <span style={{ width: 7, height: 7, borderRadius: "50%", background: T.green, display: "inline-block", animation: "blink 2s ease infinite" }} />
              <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 11, color: T.fgMid, letterSpacing: ".06em" }}>Disponível para novos projetos</span>
            </div>

            <h1 style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: "clamp(42px, 6.5vw, 78px)", lineHeight: 1.0, letterSpacing: "-.04em", color: T.fg, marginBottom: 28 }}>
              Seu negócio<br />
              <span style={{ background: `linear-gradient(90deg, ${T.accent}, ${T.green})`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>online</span>{" "}
              em dias,<br />
              não meses.
            </h1>

            <p style={{ fontSize: 17, color: T.fgMid, lineHeight: 1.8, maxWidth: 500, marginBottom: 40 }}>
              Crio landing pages e sites para{" "}
              <strong style={{ color: T.fg, fontWeight: 500 }}>empresas que querem crescer</strong>{" "}
              e portfólios para{" "}
              <strong style={{ color: T.fg, fontWeight: 500 }}>estudantes que querem ser vistos</strong>.
              Resultado rápido, design que converte.
            </p>

            <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
              <a
                href={WA_URL}
                target="_blank" rel="noreferrer"
                style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "13px 26px", background: T.accent, color: "#fff", fontSize: 14, fontWeight: 500, borderRadius: 8, transition: "opacity .2s" }}
                onMouseEnter={e => (e.currentTarget.style.opacity = ".85")}
                onMouseLeave={e => (e.currentTarget.style.opacity = "1")}
              >
                💬 Quero meu site
              </a>
              <a
                href="#projetos"
                style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "13px 26px", border: `1px solid ${T.border}`, color: T.fgMid, fontSize: 14, borderRadius: 8, transition: "all .2s" }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = T.borderH; e.currentTarget.style.color = T.fg }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = T.border; e.currentTarget.style.color = T.fgMid }}
              >
                Ver projetos →
              </a>
            </div>

            {/* Mini stats */}
            <div style={{ display: "flex", gap: 32, marginTop: 52, paddingTop: 36, borderTop: `1px solid ${T.border}`, flexWrap: "wrap" }}>
              {STATS.map(([n, l]) => (
                <div key={l}>
                  <div style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: 26, color: T.fg, lineHeight: 1 }}>{n}</div>
                  <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 11, color: T.fgLow, marginTop: 5 }}>{l}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — floating card */}
          <div style={{ display: "flex", justifyContent: "center", animation: "fadeUp .8s .2s ease both" }} className="hero-right">
            <div style={{ position: "relative" }}>
              {/* Main card */}
              <div style={{
                background: T.surface, border: `1px solid ${T.borderH}`, borderRadius: 16,
                padding: "28px 24px", width: 300,
                boxShadow: `0 0 60px rgba(108,99,255,0.12)`,
                animation: "float 5s ease infinite",
              }}>
                <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 24 }}>
                  <div style={{
                    width: 36, height: 36, borderRadius: 10,
                    background: `linear-gradient(135deg, ${T.accent}, ${T.accentG})`,
                    display: "flex", alignItems: "center", justifyContent: "center", fontSize: 15,
                  }}>🚀</div>
                  <div>
                    <div style={{ fontSize: 13, fontWeight: 600, color: T.fg }}>Novo projeto</div>
                    <div style={{ fontSize: 11, color: T.fgMid }}>Landing page — em progresso</div>
                  </div>
                </div>

                {CHECKLIST.map((s, i) => (
                  <div key={i} style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 14 }}>
                    <div style={{
                      width: 18, height: 18, borderRadius: 5,
                      background: i === 3 ? T.bg3 : `rgba(34,211,160,0.15)`,
                      border: `1px solid ${i === 3 ? T.border : "rgba(34,211,160,0.3)"}`,
                      display: "flex", alignItems: "center", justifyContent: "center",
                      fontSize: 9, color: T.green, flexShrink: 0,
                    }}>{i === 3 ? "" : "✓"}</div>
                    <span style={{ fontSize: 12, color: i === 3 ? T.fgLow : T.fgMid }}>{s}</span>
                  </div>
                ))}

                {/* Progress bar */}
                <div style={{ marginTop: 16, height: 4, borderRadius: 4, background: T.bg3, overflow: "hidden" }}>
                  <div style={{ width: "78%", height: "100%", borderRadius: 4, background: `linear-gradient(90deg, ${T.accent}, ${T.green})` }} />
                </div>
              </div>

              {/* Floating badges */}
              <div style={{ position: "absolute", top: -18, right: -18, background: T.bg2, border: `1px solid ${T.border}`, borderRadius: 100, padding: "6px 14px", fontSize: 12, color: T.green, fontFamily: "'JetBrains Mono', monospace" }}>
                + 1 lead hoje 📈
              </div>
              <div style={{ position: "absolute", bottom: -18, left: -18, background: T.bg2, border: `1px solid ${T.border}`, borderRadius: 100, padding: "6px 14px", fontSize: 12, color: T.fgMid, fontFamily: "'JetBrains Mono', monospace" }}>
                3 dias de prazo ⚡
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (min-width:860px) { .hero-g { grid-template-columns: 1fr 360px !important; } }
        @media (max-width:859px) { .hero-right { display:none !important; } }
      `}</style>
    </section>
  )
}
