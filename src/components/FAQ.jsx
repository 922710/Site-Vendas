import { useState } from "react"
import { T } from "../tokens.js"
import { FAQS } from "../data.js"
import { useVisible } from "../hooks/useVisible.js"

export default function FAQ() {
  const [open, setOpen] = useState(null)
  const [ref, vis] = useVisible()

  return (
    <section id="faq" ref={ref} style={{ padding: "96px 0", background: T.bg }}>
      <div style={{ maxWidth: 860, margin: "0 auto", padding: "0 28px" }}>
        <div className={`anim${vis ? " in" : ""}`} style={{ textAlign: "center", marginBottom: 56 }}>
          <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 11, color: T.accent, letterSpacing: ".15em", textTransform: "uppercase", display: "block", marginBottom: 16 }}>
            FAQ
          </span>
          <h2 style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: "clamp(32px, 4vw, 48px)", letterSpacing: "-.03em", color: T.fg, lineHeight: 1.1 }}>
            Dúvidas frequentes
          </h2>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          {FAQS.map((item, i) => (
            <div
              key={i}
              className={`anim${vis ? " in" : ""}`}
              style={{ borderBottom: `1px solid ${T.border}`, transitionDelay: `${i * 70}ms` }}
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                style={{ width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center", gap: 16, padding: "22px 0", textAlign: "left" }}
              >
                <span style={{ fontFamily: "'Syne', sans-serif", fontWeight: 500, fontSize: 16, color: open === i ? T.fg : T.fgMid, transition: "color .2s", lineHeight: 1.3 }}>
                  {item.q}
                </span>
                <span style={{ color: T.accent, fontSize: 22, lineHeight: 1, flexShrink: 0, transform: open === i ? "rotate(45deg)" : "rotate(0)", transition: "transform .3s" }}>
                  +
                </span>
              </button>
              <div style={{ overflow: "hidden", maxHeight: open === i ? 200 : 0, transition: "max-height .4s ease" }}>
                <p style={{ fontSize: 14, color: T.fgMid, lineHeight: 1.8, paddingBottom: 22, paddingRight: 40 }}>
                  {item.a}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
