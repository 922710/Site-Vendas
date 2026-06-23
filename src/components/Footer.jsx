import { T } from "../tokens.js"

const NAV_LINKS = [
  ["Serviços", "#servicos"],
  ["Projetos", "#projetos"],
  ["Processo", "#processo"],
  ["FAQ", "#faq"],
  ["Contato", "#contato"],
]

const SOCIAL_LINKS = [
  ["WhatsApp", "https://wa.me/5561992271063"],
  ["LinkedIn", "https://www.linkedin.com/in/marianavianaferreira/"],
  ["Portfólio", "https://mariana-conta-2-ku4i.vercel.app/"],
]

export default function Footer() {
  return (
    <footer style={{ borderTop: `1px solid ${T.border}`, padding: "52px 0 40px", background: T.bg }}>
      <div style={{ maxWidth: 1160, margin: "0 auto", padding: "0 28px" }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 24, marginBottom: 40 }}>
          {/* Brand */}
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <div style={{
              width: 32, height: 32, borderRadius: 8,
              background: `linear-gradient(135deg, ${T.accent}, ${T.accentG})`,
              display: "flex", alignItems: "center", justifyContent: "center",
              fontSize: 13, fontWeight: 700, color: "#fff", fontFamily: "'Syne', sans-serif",
            }}>mv</div>
            <div>
              <div style={{ fontFamily: "'Syne', sans-serif", fontWeight: 600, fontSize: 15, color: T.fg }}>Mariana Viana</div>
              <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 10, color: T.fgLow, marginTop: 1 }}>
                Platform & Web Dev · Brasília, DF
              </div>
            </div>
          </div>

          {/* Nav */}
          <div style={{ display: "flex", gap: 20, flexWrap: "wrap" }}>
            {NAV_LINKS.map(([label, href]) => (
              <a
                key={label}
                href={href}
                style={{ fontSize: 13, color: T.fgLow, transition: "color .2s" }}
                onMouseEnter={e => (e.target.style.color = T.fg)}
                onMouseLeave={e => (e.target.style.color = T.fgLow)}
              >{label}</a>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{ paddingTop: 28, borderTop: `1px solid ${T.border}`, display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 12 }}>
          <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 11, color: T.fgLow }}>
            © 2026 Mariana Viana. Todos os direitos reservados.
          </span>
          <div style={{ display: "flex", gap: 16 }}>
            {SOCIAL_LINKS.map(([label, url]) => (
              <a
                key={label}
                href={url}
                target="_blank" rel="noreferrer"
                style={{ fontSize: 12, color: T.fgLow, transition: "color .2s" }}
                onMouseEnter={e => (e.target.style.color = T.accent)}
                onMouseLeave={e => (e.target.style.color = T.fgLow)}
              >{label} ↗</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
