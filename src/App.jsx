import { globalCSS } from "./styles/global.js"
import Navbar from "./components/Navbar.jsx"
import Hero from "./components/Hero.jsx"
import Marquee from "./components/Marquee.jsx"
import Services from "./components/Services.jsx"
import Projects from "./components/Projects.jsx"
import Process from "./components/Process.jsx"
import FAQ from "./components/FAQ.jsx"
import Contact from "./components/Contact.jsx"
import Footer from "./components/Footer.jsx"
import { T } from "./tokens.js"

export default function App() {
  return (
    <>
      <style>{globalCSS}</style>
      <div style={{ minHeight: "100vh", background: T.bg }}>
        <Navbar />
        <main>
          <Hero />
          <Marquee />
          <Services />
          <Projects />
          <Process />
          <FAQ />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  )
}
