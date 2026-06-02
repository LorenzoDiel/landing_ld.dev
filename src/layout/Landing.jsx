import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import Contact from "../pages/Contact"
import Home from "../pages/Home"
import Problems from "../pages/Problems"
import Solutions from "../pages/Solutions"
import Projects from "../pages/Projects"
import { useEffect, useRef } from "react"
import { useLocation } from "react-router-dom"

const NAV_OFFSET = 86
const PROJECTS_NAV_OFFSET = 34
const SNAP_DELTA = 5
const SNAP_LOCK_MS = 700

const getSectionOffset = (section, index) => {
  if (index === 0) return 0
  return section.id === "projects" ? PROJECTS_NAV_OFFSET : NAV_OFFSET
}

export default function Landing() {
  const { hash, pathname } = useLocation()
  const mainRef = useRef(null)
  const snapLockRef = useRef(false)

  useEffect(() => {
    if (!mainRef.current) return

    if (!hash || hash === "#home") {
      mainRef.current.scrollTo({ top: 0, behavior: hash === "#home" ? "smooth" : "auto" })
      return
    }

    const section = document.getElementById(hash.slice(1))
    if (!section) return
    const sectionIndex = Array.from(mainRef.current.children).indexOf(section)

    mainRef.current.scrollTo({
      top: Math.max(section.offsetTop - getSectionOffset(section, sectionIndex), 0),
      behavior: "smooth",
    })
  }, [hash, pathname])

  const handleWheelSnap = (event) => {
    const container = mainRef.current
    if (!container || Math.abs(event.deltaY) < SNAP_DELTA || snapLockRef.current) return

    const direction = event.deltaY > 0 ? 1 : -1
    const maxScrollTop = container.scrollHeight - container.clientHeight
    const sections = Array.from(container.children)
    const currentSection = sections.find((section, index) => {
      const sectionOffset = getSectionOffset(section, index)
      const sectionStart = index === 0 ? 0 : Math.max(section.offsetTop - sectionOffset, 0)
      const sectionEnd = Math.min(section.offsetTop + section.offsetHeight - sectionOffset, maxScrollTop)
      return container.scrollTop >= sectionStart - 1 && container.scrollTop < sectionEnd - 1
    })

    if (currentSection && currentSection.offsetHeight > container.clientHeight) {
      const currentSectionIndex = sections.indexOf(currentSection)
      const sectionStart = Math.max(currentSection.offsetTop - getSectionOffset(currentSection, currentSectionIndex), 0)
      const sectionEnd = Math.min(currentSection.offsetTop + currentSection.offsetHeight - container.clientHeight, maxScrollTop)
      const canScrollSection =
        (direction > 0 && container.scrollTop < sectionEnd - 1) ||
        (direction < 0 && container.scrollTop > sectionStart + 1)

      if (canScrollSection) return
    }

    event.preventDefault()

    const snapTargets = sections.map((child, index) => {
      if (index === 0) return 0
      return Math.min(Math.max(child.offsetTop - getSectionOffset(child, index), 0), maxScrollTop)
    })

    const currentIndex = snapTargets.reduce((closestIndex, target, index) => {
      const currentDistance = Math.abs(container.scrollTop - target)
      const closestDistance = Math.abs(container.scrollTop - snapTargets[closestIndex])
      return currentDistance < closestDistance ? index : closestIndex
    }, 0)
    const nextIndex = Math.min(Math.max(currentIndex + direction, 0), snapTargets.length - 1)

    if (nextIndex === currentIndex) return

    snapLockRef.current = true
    container.scrollTo({
      top: snapTargets[nextIndex],
      behavior: "smooth",
    })

    window.setTimeout(() => {
      snapLockRef.current = false
    }, SNAP_LOCK_MS)
  }

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-[#0a0a0a] text-white">
      <div
        className="fixed inset-0 z-0 bg-[#0a0a0a]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.045) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.045) 1px, transparent 1px)",
          backgroundSize: "72px 72px",
        }}
      />

      <Navbar />

      <main
        ref={mainRef}
        onWheel={handleWheelSnap}
        className="relative z-30 h-svh overflow-y-auto scroll-smooth"
      >
        <section id="home" className="min-h-svh snap-start">
          <Home />
        </section>
        <section id="problems" className="min-h-svh snap-start scroll-mt-24">
          <Problems />
        </section>
        <section id="solutions" className="min-h-svh snap-start scroll-mt-24">
          <Solutions />
        </section>
        <section id="projects" className="min-h-svh snap-start scroll-mt-24">
          <Projects />
        </section>
        <section id="contact" className="min-h-svh snap-start scroll-mt-24">
          <Contact />
        </section>
        <div className="snap-end">
          <Footer />
        </div>
      </main>
    </div>
  )
}
