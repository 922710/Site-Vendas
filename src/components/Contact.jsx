import { useState } from "react"
import { T } from "../tokens.js"
import { useVisible } from "../hooks/useVisible.js"

const CONTACT_LINKS = [
  { icon: "💬", label: "WhatsApp", val: "+55 61 99227-1063", url: "https://wa.me/5561992271063" },
  { icon: "💼", label: "LinkedIn", val: "marianavianaferreira", url: "https://www.linkedin.com/in/marianavianaferreira/" },
  { icon: "📧", label: "E-mail", val: "marianaviana121@gmail.com", url: "mailto:marianaviana121@gmail.com" },
]

const FORMSPREE_URL = "https://formspree.io/f/xgojvjve"

export default function Contact() {
  const [form, setForm] = useState({ nome: "", email: "", tipo: "empresa", msg: "" })
  const [sent, setSent] = useState(false)
  const [sending, setSending] = useState(false)
  const [error, setError] = useState(null)
  const [foc, setFoc] = useState(null)
  const [ref, vis] = useVisible()

  const inputStyle = (f) => ({
    width: "100%", padding: "11px 14px", fontSize: 14, background: T.bg3,
    border: `1px solid ${foc === f ? T.accent : T.border}`, color: T.fg,
    outline: "none", borderRadius: 8, transition: "border-color .2s",
  })

  const handleSubmit = async (e) => {
    e.preventDefault()
    setSending(true)
    setError(null)

    try {
      const res = await fetch(FORMSPREE_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json", "Accept": "application/json" },
        body: JSON.stringify({
          nome: form.nome,
          email: form.email,
          tipo: form.tipo,
          mensagem: form.msg,
        }),
      })

      if (res.ok) {
        setSent(true)
      } else {
        setError("Algo deu errado. Tente me chamar no WhatsApp.")
      }
    } catch {
      setError("Sem conexão. Tente me chamar no WhatsApp.")
    } finally {
      setSending(false)
    }
  }

  return (
    <section id="contato" ref={ref} style={{ padding: "96px 0", background: T.bg2 }}>
      <div style={{ maxWidth: 1160, margin: "0 auto", padding: "0 28px", display: "grid", gap: 64, alignItems: "start" }} className="contact-g">

        {/* Left */}
        <div className={`anim${vis ? " in" : ""}`}>
          <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 11, color: T.accent, letterSpacing: ".15em", textTransform: "uppercase", display: "block", marginBottom: 16 }}>
            Contato
          </span>
          <h2 style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: "clamp(32px, 4vw, 44px)", letterSpacing: "-.03em", color: T.fg, lineHeight: 1.1, marginBottom: 20 }}>
            Vamos construir<br />algo juntos?
          </h2>
          <p style={{ fontSize: 14, color: T.fgMid, lineHeight: 1.8, maxWidth: 380, marginBottom: 40 }}>
            Me conta o que você precisa. Respondo em poucas horas com uma análise inicial — sem compromisso.
          </p>

          {/* Contact options */}
          <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            {CONTACT_LINKS.map(c => (
              <a
                key={c.label}
                href={c.url}
                target="_blank" rel="noreferrer"
                style={{ display: "flex", alignItems: "center", gap: 14, padding: "14px 18px", background: T.bg3, border: `1px solid ${T.border}`, borderRadius: 10, transition: "border-color .2s" }}
                onMouseEnter={e => (e.currentTarget.style.borderColor = T.borderH)}
                onMouseLeave={e => (e.currentTarget.style.borderColor = T.border)}
              >
                <span style={{ fontSize: 18 }}>{c.icon}</span>
                <div>
                  <div style={{ fontSize: 11, color: T.fgLow, fontFamily: "'JetBrains Mono', monospace", marginBottom: 2 }}>{c.label}</div>
                  <div style={{ fontSize: 13, color: T.fgMid }}>{c.val}</div>
                </div>
                <span style={{ marginLeft: "auto", color: T.fgLow, fontSize: 14 }}>↗</span>
              </a>
            ))}
          </div>

          {/* Response time */}
          <div style={{ marginTop: 36, padding: "18px 20px", background: T.bg3, border: `1px solid ${T.border}`, borderRadius: 10 }}>
            <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 11, color: T.fgLow, marginBottom: 10 }}>Costumo responder em</div>
            <div style={{ fontFamily: "'Syne', sans-serif", fontWeight: 600, fontSize: 18, color: T.green }}>menos de 4 horas ⚡</div>
          </div>
        </div>

        {/* Right — form */}
        <div className={`anim${vis ? " in" : ""}`}>
          {sent ? (
            <div style={{ textAlign: "center", padding: "64px 24px", display: "flex", flexDirection: "column", alignItems: "center", gap: 20 }}>
              <div style={{ width: 64, height: 64, borderRadius: "50%", border: `2px solid ${T.green}`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 28, color: T.green }}>✓</div>
              <h3 style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: 24, color: T.fg }}>Mensagem enviada!</h3>
              <p style={{ fontSize: 14, color: T.fgMid, maxWidth: 300, lineHeight: 1.7 }}>
                Ótimo! Vou analisar seu projeto e responder em breve com uma proposta inicial.
              </p>
              <a
                href="https://wa.me/5561992271063"
                target="_blank" rel="noreferrer"
                style={{ padding: "11px 24px", background: T.green, color: T.bg, fontSize: 13, fontWeight: 600, borderRadius: 8 }}
              >
                Ou me chame no WhatsApp →
              </a>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              style={{ display: "flex", flexDirection: "column", gap: 20, padding: "36px 32px", background: T.bg3, border: `1px solid ${T.border}`, borderRadius: 16 }}
            >
              <h3 style={{ fontFamily: "'Syne', sans-serif", fontWeight: 600, fontSize: 18, color: T.fg, marginBottom: 4 }}>
                Conte sobre seu projeto
              </h3>

              <div style={{ display: "grid", gap: 16 }} className="form-g">
                {[
                  { id: "nome", label: "Nome", type: "text", ph: "Seu nome" },
                  { id: "email", label: "E-mail", type: "email", ph: "seu@email.com" },
                ].map(f => (
                  <div key={f.id}>
                    <label style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 11, color: T.fgLow, display: "block", marginBottom: 7, letterSpacing: ".05em" }}>
                      {f.label}
                    </label>
                    <input
                      type={f.type}
                      placeholder={f.ph}
                      required
                      value={form[f.id]}
                      onChange={e => setForm({ ...form, [f.id]: e.target.value })}
                      onFocus={() => setFoc(f.id)}
                      onBlur={() => setFoc(null)}
                      style={inputStyle(f.id)}
                    />
                  </div>
                ))}
              </div>

              {/* Type selector */}
              <div>
                <label style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 11, color: T.fgLow, display: "block", marginBottom: 10, letterSpacing: ".05em" }}>
                  Você é
                </label>
                <div style={{ display: "flex", gap: 10 }}>
                  {[["empresa", "🏢 Empresa"], ["estudante", "🎓 Estudante"]].map(([val, label]) => (
                    <button
                      key={val}
                      type="button"
                      onClick={() => setForm({ ...form, tipo: val })}
                      style={{
                        flex: 1, padding: "10px", borderRadius: 8, fontSize: 13, fontWeight: 500,
                        border: `1px solid ${form.tipo === val ? T.accent : T.border}`,
                        background: form.tipo === val ? `rgba(108,99,255,.12)` : "transparent",
                        color: form.tipo === val ? T.accent : T.fgMid,
                        transition: "all .2s",
                      }}
                    >
                      {label}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 11, color: T.fgLow, display: "block", marginBottom: 7, letterSpacing: ".05em" }}>
                  O que você precisa?
                </label>
                <textarea
                  placeholder="Me conta sobre o projeto, prazo e qualquer detalhe importante..."
                  required
                  rows={4}
                  value={form.msg}
                  onChange={e => setForm({ ...form, msg: e.target.value })}
                  onFocus={() => setFoc("msg")}
                  onBlur={() => setFoc(null)}
                  style={{ ...inputStyle("msg"), resize: "none" }}
                />
              </div>

              {error && (
                <p style={{ fontSize: 13, color: "#f87171", textAlign: "center" }}>{error}</p>
              )}

              <button
                type="submit"
                disabled={sending}
                style={{ padding: "13px", background: T.accent, color: "#fff", fontSize: 14, fontWeight: 500, borderRadius: 8, transition: "opacity .2s", opacity: sending ? 0.6 : 1, cursor: sending ? "not-allowed" : "pointer" }}
                onMouseEnter={e => { if (!sending) e.currentTarget.style.opacity = ".85" }}
                onMouseLeave={e => { if (!sending) e.currentTarget.style.opacity = "1" }}
              >
                {sending ? "Enviando..." : "Enviar mensagem →"}
              </button>
            </form>
          )}
        </div>
      </div>
      <style>{`
        @media (min-width:860px) { .contact-g { grid-template-columns: 1fr 1fr !important; } .form-g { grid-template-columns: 1fr 1fr !important; } }
      `}</style>
    </section>
  )
}
