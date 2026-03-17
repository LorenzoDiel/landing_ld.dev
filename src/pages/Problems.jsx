import { motion } from "motion/react";

const problems = [
  {
    id: "01",
    text: "La gesti\u00f3n diaria termina siendo m\u00e1s compleja de lo que deber\u00eda.",
  },
  {
    id: "02",
    text: "No siempre es f\u00e1cil encontrar herramientas que realmente se adapten al negocio.",
  },
  {
    id: "03",
    text: "Los datos suelen estar dispersos entre sistemas que no se hablan entre s\u00ed.",
  },
  {
    id: "04",
    text: "Cuando no hay estructura, crecer se vuelve m\u00e1s dif\u00edcil de lo necesario.",
  },
];

export default function Problems() {
  return (
    <section className="relative min-h-screen overflow-hidden px-6 py-0 md:px-12 lg:px-16">
      <div className="absolute left-1/4 top-1/4 h-96 w-96 rounded-full bg-blue-600/10 blur-[120px]" />
      <div className="absolute bottom-1/4 right-1/4 h-96 w-96 rounded-full bg-purple-600/10 blur-[120px]" />

      <div className="relative z-10 mx-auto flex min-h-screen w-full max-w-7xl flex-col items-center justify-center pt-16 md:pt-20 lg:pt-0">
        <motion.div
          initial={{ opacity: 0, y: -16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.55, ease: "easeOut" }}
          className="mb-4 text-center md:mb-6"
        >
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 font-google-sans text-sm text-white/70 shadow-xl backdrop-blur-sm">
            <span className="h-2 w-2 rounded-full bg-red-500 shadow-[0_0_8px_rgba(239,68,68,0.8)]" />
            El Problema
          </div>
          <h2 className="text-2xl font-anton uppercase tracking-wide text-white drop-shadow-md md:text-3xl lg:text-[4.3rem] lg:leading-[0.92]">
            La realidad diaria de <br className="hidden md:block" />
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              muchas PYMES
            </span>
          </h2>
        </motion.div>

        <div className="grid w-full max-w-6xl grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
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

              <div className="relative flex flex-col gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/5 font-anton text-3xl text-white/60 transition-colors duration-300 group-hover:bg-white/10 group-hover:text-white">
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
          className="relative mt-4 w-full max-w-6xl"
        >
          <div className="absolute -inset-1 rounded-[30px] bg-gradient-to-r from-blue-500/20 via-cyan-300/10 to-purple-500/20 blur-xl opacity-70" />
          <div className="relative overflow-hidden rounded-[30px] border border-white/12 bg-black/50 px-6 py-6 text-center shadow-[0_40px_120px_rgba(0,0,0,0.45)] backdrop-blur-2xl md:px-10 md:py-8">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08),transparent_45%)]" />
            <div className="relative">
              <div className="flex flex-col items-center justify-center gap-3 font-google-sans text-base text-white/70 md:flex-row md:text-lg">
                <span>No es falta de capacidad.</span>
                <span className="hidden h-1.5 w-1.5 rounded-full bg-white/20 md:block" />
                <span>No es falta de ganas.</span>
              </div>
              <h4 className="mt-4 font-google-sans text-xl font-medium tracking-wide text-white md:text-2xl lg:text-[2rem]">
                Es falta de herramientas pensadas para la{" "}
                <span className="bg-gradient-to-r from-blue-300 to-purple-300 bg-clip-text text-transparent">
                  realidad de las PYMES argentinas.
                </span>
              </h4>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
