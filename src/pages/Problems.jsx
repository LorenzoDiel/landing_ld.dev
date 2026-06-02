import { motion } from "motion/react";
import { Link } from "react-router-dom";

const problems = [
  {
    id: "01",
    text: "La información vive en planillas de Excel que nadie más entiende.",
  },
  {
    id: "02",
    text: "Cada cierre de mes es horas cruzando datos a mano, con riesgo de error.",
  },
  {
    id: "03",
    text: "Las herramientas genéricas no entienden cómo funciona tu negocio.",
  },
  {
    id: "04",
    text: "Cuando algo falla, no hay sistema que lo detecte — lo detecta una persona.",
  },
];

export default function Problems() {
  return (
    <section className="relative min-h-[calc(100svh-10rem)] overflow-hidden px-6 py-0 md:px-12 lg:px-10">

      <div className="relative z-10 mx-auto flex min-h-[calc(100svh-10rem)] w-full max-w-7xl flex-col items-center justify-center pt-8 md:pt-10 lg:pt-0">
        <motion.div
          initial={{ opacity: 0, y: -16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.55, ease: "easeOut" }}
          className="mb-4 text-center md:mb-6"
        >
          <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 font-google-sans text-sm text-white/70 shadow-xl backdrop-blur-sm">
            <span className="h-2 w-2 rounded-full bg-red-500 shadow-[0_0_8px_rgba(239,68,68,0.8)]" />
            El Problema
          </div>
          <h2 className="text-2xl font-anton tracking-wide text-white drop-shadow-md md:text-3xl lg:text-4xl lg:leading-[0.92]">
            Lo que frena a la mayoría de las pymes argentinas.
          </h2>
        </motion.div>

        <div className="grid w-full max-w-6xl grid-cols-1 gap-2 md:grid-cols-2 xl:grid-cols-4">
          {problems.map((problem, index) => (
            <motion.article
              key={problem.id}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-20px" }}
              transition={{ duration: 0.45, delay: index * 0.06, ease: "easeOut" }}
              className="group relative min-h-[168px] rounded-[26px] border border-white/10 bg-black/25 p-5 shadow-[0_30px_80px_rgba(0,0,0,0.35)] backdrop-blur-xl md:min-h-[176px]"
            >
              <div className="absolute inset-0 rounded-[26px] bg-gradient-to-br from-white/8 via-white/[0.03] to-transparent" />
              <div className="absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-white/25 to-transparent" />

              <div className="relative flex flex-col gap-2">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/5 font-anton text-xl text-white/60 transition-colors duration-300 group-hover:bg-white/10 group-hover:text-white">
                  {problem.id}
                </div>
                <p className="font-google-sans text-[1.02rem] leading-[1.5] text-white/82 transition-colors duration-300 group-hover:text-white">
                  {problem.text}
                </p>
              </div>
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-20px" }}
          transition={{ duration: 0.55, delay: 0.2, ease: "easeOut" }}
          className="relative mt-2 w-full max-w-6xl"
        >
          <div className="absolute -inset-1 rounded-[30px] bg-gradient-to-r from-white/5 via-white/10 to-white/5 blur-xl opacity-70" />
          <div className="relative overflow-hidden rounded-[30px] border border-white/12 bg-black/50 px-6 py-6 text-center shadow-[0_40px_120px_rgba(0,0,0,0.45)] backdrop-blur-2xl md:px-10 md:py-4">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08),transparent_45%)]" />
            <div className="relative">
              <div className="flex flex-col items-center justify-center gap-3 font-google-sans text-base text-white/70 md:flex-row md:text-lg">
                <span>No es un problema de tamaño.</span>
                <span className="hidden h-1.5 w-1.5 rounded-full bg-white/20 md:block" />
                <span>No es un problema de presupuesto.</span>
              </div>
              <h4 className="mt-3 font-google-sans text-xl font-medium tracking-wide text-white md:text-2xl lg:text-[2rem]">
                Es un problema de herramientas. Y eso tiene solución.
              </h4>
            </div>
          </div>
        </motion.div>
      </div>

      <motion.div
        className="flex justify-center"
        initial={{ opacity: 0, y: -4 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.45, delay: 0.45, ease: "easeOut" }}
      >
        <Link
          to="/#solutions"
          aria-label="Ir a soluciones"
          className="group flex h-12 w-12 items-center justify-center text-white/70 shadow-[0_16px_40px_rgba(0,0,0,0.35)] transition hover:border-white/25 hover:bg-white/10 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
        >
          <motion.span
            className="flex flex-col items-center gap-0.5"
            animate={{ y: [0, 5, 0], scale: [1, 1.12, 1], opacity: [0.62, 1, 0.62] }}
            transition={{ duration: 1.25, repeat: Infinity, ease: "easeInOut" }}
          >
            <span className="block h-3 w-3 rotate-45 border-b-2 border-r-2 border-current" />
            <span className="block h-3 w-3 rotate-45 border-b-2 border-r-2 border-current opacity-70" />
          </motion.span>
        </Link>
      </motion.div>
    </section>
  );
}
