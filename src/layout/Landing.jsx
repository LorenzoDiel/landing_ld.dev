import Orb from "../components/Background"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import Contact from "../pages/Contact"
import Home from "../pages/Home"
import Problems from "../pages/Problems"
import Solutions from "../pages/Solutions"

export default function Landing() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-black text-white">
      <div className="fixed inset-0 z-0 bg-black" />

      <div
        className="fixed left-1/2 top-1/2 z-10 h-[56vmin] w-[56vmin] min-h-[260px] min-w-[260px] max-h-[560px] max-w-[560px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cover bg-center bg-no-repeat opacity-70 blur-[3px]"
        style={{ backgroundImage: "url('/dev_blanco_sf.png')" }}
      />

      <div className="fixed inset-0 z-20 pointer-events-none">
        <Orb
          hoverIntensity={2}
          rotateOnHover
          hue={20}
          forceHoverState={false}
          backgroundColor="#000000"
        />
      </div>

      <Navbar />

      <main className="relative z-30 h-screen snap-y snap-proximity overflow-y-auto scroll-smooth">
        <section className="snap-start">
          <Home />
        </section>
        <section className="snap-start">
          <Problems />
        </section>
        <section className="snap-start">
          <Solutions />
        </section>
        <section className="snap-start">
          <Contact />
        </section>
        <Footer />
      </main>
    </div>
  )
}
