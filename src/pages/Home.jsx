import { motion } from "motion/react"
import { useState } from "react"
import { Link } from "react-router-dom"
import CardProyectos from "../components/CardProyectos"
import Cotizador from "../components/Cotizador"

const proyectos = {
  GestionLogistica: {
    title: "Gestión Logística",
    description: "De Google Sheets a webapp. Liquidaciones, choferes y gestión documental.",
    link: "/Proyecto gestion-logistica.pdf",
    stats: ["Logística - MDP", "2026"],
  },
  Fichar: {
    title: "Fichar",
    description: "Planificación de turnos y liquidación de sueldos para 3 sucursales.",
    link: "/Proyecto Fichar.pdf",
    stats: ["Retail - MDP", "2026"],
  },
}

export default function Home() {
  const [isCotizadorOpen, setIsCotizadorOpen] = useState(false)

  return (
    <div className="relative z-10 flex min-h-[calc(100svh)] flex-col justify-center px-4 pt-12 md:px-10 md:pt-10 lg:px-20">
      <div className="flex flex-col md:grid grid-cols-[1.5fr_1fr] items-center gap-4 mt-10">
        {/* columna izquierda - hero */}
        <div className="flex flex-col items-center text-center md:items-start md:text-left justify-center">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-2 md:px-4 py-2 md:py-1.5 text-sm text-white/70 backdrop-blur-sm">
            <span className="h-2 w-2 rounded-full bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.8)]" />
            Desarrollo de software - Mar del Plata, Argentina
          </div>
          <h1 className="max-w-2xl text-white text-3xl md:text-4xl font-anton tracking-wider leading-tight mb-4">
            Reemplazá tus planillas de Excel por herramientas que realmente funcionan.
          </h1>
          <p className="max-w-xl text-white/50 text-md md:text-lg font-light leading-relaxed mb-10">
            Desarrollo aplicaciones web a medida para pymes argentinas. Sin plantillas genéricas, sin agencias intermediarias.
          </p>
          <div className="flex gap-4">
            <Link
              to="/#projects"
              className="px-6 py-2.5 rounded-full bg-white text-black text-sm font-medium"
            >
              Ver proyectos
            </Link>
            <motion.button
              type="button"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsCotizadorOpen(true)}
              className="px-6 py-2.5 rounded-full border border-white/20 text-white text-sm font-light"
            >
              Cotizá tu proyecto
            </motion.button>
          </div>
        </div>

        {/* columna derecha - preview proyectos */}
        <div className="flex flex-col gap-3 pr-4">
          <p className="text-white/30 text-xs tracking-widest uppercase mb-1">Proyectos recientes</p>

          {Object.values(proyectos).map((proyecto) => (
            <CardProyectos key={proyecto.title} proyectos={proyecto} />
          ))}

          {/* placeholder próximo */}
          <div className="rounded-xl border border-white/5 bg-white/2 p-4 opacity-40">
            <p className="text-white/30 text-xs uppercase tracking-wider mb-1">Próximamente</p>
            <p className="text-white/40 text-sm">ERP - Distribución</p>
          </div>
        </div>
      </div>

      <Cotizador isOpen={isCotizadorOpen} onClose={() => setIsCotizadorOpen(false)} />
    </div>
  )
}
