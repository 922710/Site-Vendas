 import { T } from "../tokens.js"

const NAV_LINKS = [
  ["Serviços", "#servicos"],
  ["Projetos", "#projetos"],
  ["Processo", "#processo"],
  ["FAQ", "#faq"],
  ["Contato", "#contato"],
]

const SOCIAL_LINKS = [
  ["WhatsApp", "#contact"],
  ["LinkedIn", "https://www.linkedin.com/"],
]

// O erro estava aqui na declaração da função!
export default function Footer() {
  return (
    <footer style={{ borderTop: `1px solid ${T.border}`, padding: "52px 0 40px", background: T.bg }}>
      <div style={{ maxWidth: 1160, margin: "0 auto", padding: "0 28px" }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap" }}>
          
          {/* Brand - Solvix TI */}
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <div style={{
              width: 32, height: 32, borderRadius: 8,
              background: `linear-gradient(135deg, ${T.accent}, ${T.accentG})`,
              display: "flex", alignItems: "center", justifyContent: "center",
              color: "#fff", fontWeight: "bold", fontSize: 14, fontFamily: "'Syne', sans-serif"
            }}>
              st
            </div>
            <span style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: 18, color: T.fg }}>
              Solvix TI
            </span>
          </div>

          {/* Links de Navegação */}
          <div style={{ display: "flex", gap: "20px" }}>
            {NAV_LINKS.map(([label, href]) => (
              <a key={label} href={href} style={{ color: T.text, textDecoration: "none" }}>{label}</a>
            ))}
          </div>

          {/* Redes Sociais */}
          <div style={{ display: "flex", gap: "15px" }}>
            {SOCIAL_LINKS.map(([label, href]) => (
              <a key={label} href={href} target="_blank" rel="noreferrer" style={{ color: T.text, textDecoration: "none" }}>{label}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}