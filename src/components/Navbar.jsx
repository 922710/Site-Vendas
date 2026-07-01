 import React from "react"
import { T } from "../tokens.js"

export default function Navbar() {
  return (
    <nav style={{ borderBottom: `1px solid ${T.border}`, padding: "20px 0", background: T.bg }}>
      <div style={{ maxWidth: 1160, margin: "0 auto", padding: "0 28px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        
        {/* Seção da Logo / Brand atualizada para Solvix TI */}
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <div style={{
            width: 32, 
            height: 32, 
            borderRadius: 8,
            background: `linear-gradient(135deg, ${T.accent}, ${T.accentG})`,
            display: "flex", 
            alignItems: "center", 
            justifyContent: "center",
            color: "#fff",
            fontWeight: "bold",
            fontSize: 14,
            fontFamily: "'Syne', sans-serif"
          }}>
            st
          </div>
          
          <span style={{ 
            fontFamily: "'Syne', sans-serif", 
            fontWeight: 700, 
            fontSize: 18, 
            color: T.fg 
          }}>
            Solvix TI
          </span>
        </div>

        {/* Links de navegação */}
        <div style={{ display: "flex", gap: "24px" }}>
          <a href="#servicos" style={{ color: T.fg, textDecoration: "none", fontSize: 14 }}>Serviços</a>
          <a href="#projetos" style={{ color: T.fg, textDecoration: "none", fontSize: 14 }}>Projetos</a>
          <a href="#contato" style={{ color: T.fg, textDecoration: "none", fontSize: 14 }}>Contato</a>
        </div>

      </div>
    </nav>
  )
}