import { useState, useEffect } from "react"
import { T } from "../tokens.js"

const WA_URL = "https://wa.me/5561992271063?text=Olá%20Mariana!%20Vi%20seu%20site%20e%20gostaria%20de%20conversar%20sobre%20um%20projeto."
const LINKS = ["Serviços", "Projetos", "Processo", "FAQ", "Contato"]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mOpen, setMOpen] = useState(false)

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 30)
    window.addEventListener("scroll", h)
    return () => window.removeEventListener("scroll", h)
  }, [])

  const toId = (label) =>
    label.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")

  return (
    <nav style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 200,
      background: scrolled ? "rgba(7,7,10,0.88)" : "transparent",
      backdropFilter: scrolled ? "blur(20px)" : "none",
      borderBottom: `1px solid ${scrolled ? T.border : "transparent"}`,
      transition: "all .3s ease",
    }}>
      <div style={{
        maxWidth: 1160, margin: "0 auto", padding: "0 28px",
        height: 60, display: "flex", alignItems: "center", justifyContent: "space-between",
      }}>
        {/* Logo */}
        <a href="#" style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <div style={{
            width: 30, height: 30, borderRadius: 8,
            background: `linear-gradient(135deg, ${T.accent}, ${T.accentG})`,
            display: "flex", alignItems: "center", justifyContent: "center",
            fontSize: 13, fontWeight: 700, color: "#fff", fontFamily: "'Syne', sans-serif",
          }}>mv</div>
          <span style={{ fontFamily: "'Syne', sans-serif", fontWeight: 600, fontSize: 15, color: T.fg, letterSpacing: "-.02em" }}>
            Mariana Viana
          </span>
        </a>

        {/* Desktop nav */}
        <ul style={{ display: "flex", listStyle: "none", gap: 28, alignItems: "center" }} className="d-nav">
          {LINKS.map(l => (
            <li key={l}>
              <a
                href={`#${toId(l)}`}
                style={{ fontSize: 13, color: T.fgMid, transition: "color .2s" }}
                onMouseEnter={e => (e.target.style.color = T.fg)}
                onMouseLeave={e => (e.target.style.color = T.fgMid)}
              >{l}</a>
            </li>
          ))}
        </ul>

        <a
          href={WA_URL}
          target="_blank" rel="noreferrer"
          className="d-cta"
          style={{ padding: "8px 18px", background: T.accent, color: "#fff", fontSize: 13, fontWeight: 500, borderRadius: 6, transition: "opacity .2s" }}
          onMouseEnter={e => (e.currentTarget.style.opacity = ".85")}
          onMouseLeave={e => (e.currentTarget.style.opacity = "1")}
        >
          Falar no WhatsApp
        </a>

        <button
          onClick={() => setMOpen(!mOpen)}
          className="m-btn"
          aria-label="Menu"
          style={{ color: T.fg, fontSize: 20, lineHeight: 1 }}
        >
          {mOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile menu */}
      {mOpen && (
        <div style={{
          background: T.bg2, borderTop: `1px solid ${T.border}`,
          padding: "24px 28px", display: "flex", flexDirection: "column", gap: 18,
        }}>
          {LINKS.map(l => (
            <a
              key={l}
              href={`#${toId(l)}`}
              onClick={() => setMOpen(false)}
              style={{ fontSize: 15, color: T.fg }}
            >{l}</a>
          ))}
          <a
            href="https://wa.me/5561992271063"
            target="_blank" rel="noreferrer"
            onClick={() => setMOpen(false)}
            style={{ marginTop: 8, padding: "12px", textAlign: "center", background: T.accent, color: "#fff", fontSize: 14, fontWeight: 500, borderRadius: 6 }}
          >
            Falar no WhatsApp
          </a>
        </div>
      )}

      <style>{`
        @media (min-width:900px) { .d-nav { display:flex !important; } .d-cta { display:block !important; } .m-btn { display:none !important; } }
        @media (max-width:899px) { .d-nav { display:none !important; } .d-cta { display:none !important; } }
      `}</style>
    </nav>
  )
}
