import { useEffect, useMemo, useState } from "react"
import { motion, AnimatePresence } from "motion/react"

const projects = [
  {
    id: "gestion-logistica",
    name: "Gestión Logística",
    summary:
      "Una pyme de logística que dejó atrás planillas dispersas para operar viajes, gastos, documentación y liquidaciones desde una web app propia.",
    pdf: "/Proyecto Transvaal.pdf",
    demo: "https://ld-devarg.github.io/logistica-app-demo/#",
    accentBorder: "border-cyan-500/40",
    accentDot: "bg-cyan-400",
    stats: ["+280 viajes cargados", "100% migracion completada", "PDFs por Telegram"],
    highlights: [
      "Carga y seguimiento visual de viajes",
      "Preliquidaciones y liquidaciones en pocos pasos",
      "Documentación centralizada por proveedor",
    ],
    images: [
      { src: "/transvaal v.1/adicionales.png", label: "Adicionales" },
      { src: "/transvaal v.1/clientes.png", label: "Clientes" },
      { src: "/transvaal v.1/destinos.png", label: "Destinos" },
      { src: "/transvaal v.1/documentacion.png", label: "Documentos" },
      { src: "/transvaal v.1/gastos.png", label: "Gastos" },
      { src: "/transvaal v.1/liquidaciones.png", label: "Liquidaciones" },
      { src: "/transvaal v.1/preliquidaciones.png", label: "Preliquidaciones" },
      { src: "/transvaal v.1/proveedores.png", label: "Proveedores" },
      { src: "/transvaal v.1/tarifas.png", label: "Tarifas" },
      { src: "/transvaal v.1/telegram.png", label: "Telegram" },
      { src: "/transvaal v.1/usuarios.png", label: "Usuarios" },
      { src: "/transvaal v.1/viajes.png", label: "Viajes" },

    ],
  },
  {
    id: "fichar",
    name: "Fichar",
    summary:
      "Una herramienta para una pyme con tres sucursales que necesitaba planificar horarios, evitar duplicados y liquidar sueldos sin depender de Excel.",
    pdf: "/Proyecto Fichar.pdf",
    demo: null,
    accentBorder: "border-violet-500/40",
    accentDot: "bg-violet-400",
    stats: ["Planificación semanal en minutos", "Asignaciones validadas", "Sueldos automatizados"],
    highlights: [
      "Planilla semanal pensada para operar rápido",
      "Control visual de disponibilidad y turnos duplicados",
      "Vista simple para empleados y administradores",
    ],
    images: [
      { src: "/fichar/1.png", label: "Dashboard" },
      { src: "/fichar/2.png", label: "Planilla" },
      { src: "/fichar/3.png", label: "Asignacion" },
      { src: "/fichar/4.png", label: "Liquidacion" },
      { src: "/fichar/5.png", label: "Empleado" },
      { src: "/fichar/6.png", label: "Mobile" },
    ],
  },
]

export default function Projects() {
  const [activeProjectId, setActiveProjectId] = useState(projects[0].id)
  const [activeImageIndex, setActiveImageIndex] = useState(0)

  const activeProject = useMemo(
    () => projects.find((p) => p.id === activeProjectId) ?? projects[0],
    [activeProjectId]
  )
  const activeImage = activeProject.images[activeImageIndex] ?? activeProject.images[0]

  const [expanded, setExpanded] = useState(false)

  const selectProject = (id) => {
    setActiveProjectId(id)
    setActiveImageIndex(0)
  }

  const handleThumbnailsWheel = (event) => {
    const container = event.currentTarget
    const isHorizontal = window.matchMedia("(max-width: 767px)").matches
    const maxScroll = isHorizontal
      ? container.scrollWidth - container.clientWidth
      : container.scrollHeight - container.clientHeight

    if (maxScroll <= 0) return

    const isScrollingDown = event.deltaY > 0
    const isScrollingUp = event.deltaY < 0
    const scrollPosition = isHorizontal ? container.scrollLeft : container.scrollTop
    const atStart = scrollPosition <= 0
    const atEnd = Math.ceil(scrollPosition) >= maxScroll
    const shouldKeepScrollInside =
      (isScrollingDown && !atEnd) || (isScrollingUp && !atStart)

    if (shouldKeepScrollInside) {
      event.stopPropagation()

      if (isHorizontal) {
        event.preventDefault()
        container.scrollLeft += event.deltaY
      }
    }
  }

  useEffect(() => {
    const onKey = (e) => { if (e.key === "Escape") setExpanded(false) }
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [])

  return (
    <div className="relative flex min-h-[calc(100svh-5rem)] items-center overflow-visible bg-[#0a0a0a] text-white lg:overflow-hidden">
      <div
        className="fixed inset-0 z-0"
        style={{
          backgroundImage:
            "linear-gradient(#ffffff0b 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.045) 1px, transparent 1px)",
          backgroundSize: "72px 72px",
          backgroundColor: "#0a0a0a",
        }}
      />

      <main className="relative z-30 flex min-h-[calc(100svh-5rem)] w-full flex-col px-4 py-6 md:px-8 lg:h-[calc(100svh-7rem)] lg:min-h-0 lg:px-10 lg:py-0">

        {/* Header */}
        <div className="flex flex-col">
          <div className="flex w-full items-center justify-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.06] px-4 py-1.5 font-google-sans text-sm text-white/70 backdrop-blur-xl">
              <span className="h-2 w-2 rounded-full bg-green-500 shadow-[0_0_8px_rgba(16,185,129,0.8)]" />
              Casos reales
            </div>
          </div>
          <div className="flex flex-col gap-3 lg:flex-row lg:gap-0">
            <div className="mt-2 mb-1 md:mt-0 flex items-center justify-center text-center lg:justify-start lg:text-left">
              <h1 className="font-anton text-2xl leading-tight tracking-wide text-white lg:text-3xl">
                Proyectos que salieron de<br />una necesidad concreta.
              </h1>
            </div>
            <div className="flex flex-1 items-center justify-center lg:items-end lg:justify-end">
              <div className="h-12 w-full max-w-sm">
                <select
                  value={activeProject.id}
                  onChange={(e) => selectProject(e.target.value)}
                  className="w-full cursor-pointer rounded-xl border border-white/10 bg-black/40 py-2.5 pl-3 font-google-sans text-xs text-white/80 outline-none transition hover:border-white/25 focus:border-white/35 focus:ring-2 focus:ring-white/20 md:text-sm lg:text-xs lg:pl-4 lg:pr-8 lg:text-left"
                  >
                  {projects.map((p) => (
                  <option key={p.id} value={p.id} className="bg-[#0a0a0a]">
                    {p.name}
                  </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </div>

        {/* Cuerpo: 3 columnas 2 / 7 / 1 */}
        <div className="grid min-h-0 flex-1 grid-cols-1 gap-3 lg:grid-cols-[2fr_7fr_1fr]">

          {/* Columna izquierda — resumen del proyecto */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeProject.id + "-panel"}
              initial={{ opacity: 0, x: -8 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -8 }}
              transition={{ duration: 0.3 }}
              className="order-3 flex min-h-0 flex-col overflow-hidden rounded-xl border border-white/10 bg-white/[0.02] p-5 lg:order-1 lg:p-4"
            >
              <span className="mb-2 font-google-sans text-[10px] uppercase tracking-[0.2em] text-white/30">
                Sobre el proyecto
              </span>
              <p className="font-google-sans text-sm leading-relaxed text-white/65 lg:text-[13px] lg:leading-6">
                {activeProject.summary}
              </p>

              <div className="my-4 border-t border-white/[0.08] lg:my-3" />

              <div className="flex flex-col gap-3 lg:gap-2.5">
                {activeProject.highlights.map((h, i) => (
                  <div key={i} className="flex items-start gap-2.5">
                    <span className={`mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full opacity-70 ${activeProject.accentDot}`} />
                    <span className="font-google-sans text-xs leading-relaxed text-white/50 lg:leading-5">{h}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Columna central — visor de imagen */}
          <div className="order-1 flex min-h-[280px] flex-col overflow-hidden rounded-xl border border-white/10 bg-black/20 sm:min-h-[360px] lg:order-2 lg:min-h-0">
            <div className="relative flex min-h-0 flex-1 items-center justify-center p-5">
              <AnimatePresence mode="wait">
                <motion.img
                  key={activeImage.src}
                  src={activeImage.src}
                  alt={activeImage.label}
                  initial={{ opacity: 0, scale: 0.97 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.97 }}
                  transition={{ duration: 0.35, ease: "easeOut" }}
                  className="max-h-full max-w-full rounded-lg object-contain shadow-2xl"
                />
              </AnimatePresence>

              {/* Botón expandir */}
              <div className="flex absolute inset-0 items-end justify-end p-3">
                <div className="flex flex-wrap items-center justify-end gap-2">
                  {activeProject.demo && (
                    <a
                      href={activeProject.demo}
                      target="_blank"
                      rel="noreferrer"
                      className={`rounded-full border px-5 py-1.5 font-google-sans text-xs transition hover:bg-white/5 ${activeProject.accentBorder} text-white/70`}
                    >
                      Ver Demo
                    </a>
                  )}
                  <a
                    href={activeProject.pdf}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-full bg-emerald-600/80 px-5 py-1.5 font-google-sans text-xs font-medium text-white transition hover:bg-emerald-500"
                  >
                    Ver proyecto
                  </a>
                <button
                  onClick={() => setExpanded(true)}
                  className="rounded-lg border border-white/10 bg-black/50 p-1.5 text-white/40 backdrop-blur-sm transition hover:border-white/25 hover:text-white/70"
                  title="Expandir imagen"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="15 3 21 3 21 9" />
                    <polyline points="9 21 3 21 3 15" />
                    <line x1="21" y1="3" x2="14" y2="10" />
                    <line x1="3" y1="21" x2="10" y2="14" />
                  </svg>
                </button>
                </div>
              </div>
            </div>
          </div>

          {/* Columna derecha — selector + miniaturas */}
          <div
            className="scrollbar-hidden order-2 flex max-h-[360px] flex-row gap-2 overflow-x-auto overflow-y-hidden rounded-xl p-1 md:flex-col md:overflow-x-hidden md:overflow-y-auto lg:order-3 lg:max-h-none"
            onWheel={handleThumbnailsWheel}
          >

            {activeProject.images.map((image, index) => (
              <button
                key={index}
                onClick={() => setActiveImageIndex(index)}
                className={`rounded-xl border transition-all duration-200 ${
                  index === activeImageIndex
                    ? `${activeProject.accentBorder} opacity-100`
                    : "border-white/[0.08] opacity-35 hover:opacity-60 hover:border-white/20 "
                } w-[180px] shrink-0 md:w-full`}
              >
                <img
                  src={image.src}
                  alt={image.label}
                  className="h-[96px] w-full rounded-lg object-cover md:h-[64px]"
                />
              </button>
              
            ))}
            <svg
              className="pointer-events-none absolute right-2.5 top-1/2 hidden -translate-y-1/2 text-white/30 lg:block"
              xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"
              fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
            >
              <polyline points="6 9 12 15 18 9" />
            </svg>
            <svg
                className="pointer-events-none absolute right-2.5 top-1/2 mt-2 hidden -translate-y-1/2 text-white/30 lg:block"
                xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"
                fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
            >
              <polyline points="6 9 12 15 18 9" />
            </svg>
          </div>
        </div>

        {/* Stats bar */}
        <div className="mt-3 flex shrink-0 flex-col items-stretch gap-2 sm:flex-row sm:items-center sm:gap-3">
          {activeProject.stats.map((stat, i) => (
            <div
              key={i}
              className="flex flex-1 items-center justify-center rounded-full border border-white/10 bg-black/30 py-2 font-google-sans text-xs text-white/50"
            >
              {stat}
            </div>
          ))}
        </div>

      </main>

      {/* Lightbox */}
      <AnimatePresence>
        {expanded && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-sm"
            onClick={() => setExpanded(false)}
          >
            <motion.img
              src={activeImage.src}
              alt={activeImage.label}
              initial={{ opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.94 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="max-h-[90dvh] max-w-[90dvw] rounded-xl object-contain shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />

            {/* Botón cerrar */}
            <button
              onClick={() => setExpanded(false)}
              className="absolute right-5 top-5 flex items-center justify-center rounded-lg border border-white/10 bg-black/60 p-2 text-white/50 backdrop-blur-sm transition hover:border-white/25 hover:text-white/90"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>

            {/* Label */}
            <span className="absolute bottom-5 left-1/2 -translate-x-1/2 rounded-full border border-white/10 bg-black/60 px-4 py-1.5 font-google-sans text-xs text-white/50 backdrop-blur-sm">
              {activeImage.label}
            </span>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
