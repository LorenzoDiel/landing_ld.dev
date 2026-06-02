import { motion } from "motion/react"

const contactChannels = [
  {
    id: "01",
    title: "Instagram",
    handle: "@ld.devarg",
    href: "https://www.instagram.com/ld.devarg/",
    description:
      "Casos, ideas y novedades de lo que estoy construyendo.",
    color: "from-pink-500 via-rose-500 to-orange-400",
    glow: "bg-pink-500/20",
  },
  {
    id: "02",
    title: "WhatsApp",
    handle: "+54 9 223 620 0677",
    href: "https://wa.me/5492236200677",
    description:
      "Escribime directo para consultar algo puntual o coordinar una charla.",
    color: "from-emerald-400 to-green-600",
    glow: "bg-emerald-500/20",
  },
  {
    id: "03",
    title: "Facebook",
    handle: "LD.dev",
    href: "https://www.facebook.com/profile.php?id=61587136880652",
    description:
      "Contenido y actualizaciones sobre los proyectos en curso.",
    color: "from-sky-400 to-blue-600",
    glow: "bg-sky-500/20",
  },
]

export default function Contact() {
  return (
    <section className="relative min-h-[calc(100svh-10rem)] overflow-hidden px-6">

      <div className="relative z-10 mx-auto flex min-h-[calc(100svh-10rem)] w-full max-w-6xl flex-col items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.55, ease: "easeOut" }}
          className="max-w-3xl text-center"
        >
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 font-google-sans text-sm text-white/70 shadow-xl backdrop-blur-sm">
            <span className="h-2 w-2 rounded-full bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.9)]" />
            Contacto
          </div>

          <h2 className="font-anton text-3xl tracking-wide text-white md:text-5xl">
            Hablemos.
          </h2>

          <p className="mt-5 font-google-sans text-sm leading-7 text-white/72 md:text-base">
            Si ya identificaste un problema o querés ordenar mejor tu negocio, escribime por el canal que te quede más cómodo.
          </p>
        </motion.div>

        <div className="mt-2 grid w-full gap-2 md:grid-cols-3">
          {contactChannels.map((channel, index) => (
            <motion.a
              key={channel.id}
              href={channel.href}
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-20px" }}
              transition={{ duration: 0.45, delay: index * 0.08, ease: "easeOut" }}
              whileHover={{ y: -6 }}
              className="group relative overflow-hidden rounded-[28px] border border-white/10 bg-black/35 p-5 shadow-[0_30px_80px_rgba(0,0,0,0.35)] backdrop-blur-xl"
            >
              <div className={`absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100 ${channel.glow}`} />
              <div className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${channel.color}`} />

              <div className="relative flex h-full flex-col">
                <div className="flex items-center justify-between">
                  <span className="font-anton text-2xl text-white/18">
                    {channel.id}
                  </span>
                  <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 font-google-sans text-xs text-white/65">
                    Canal directo
                  </span>
                </div>

                <div className="mt-2 flex flex-col items-start gap-1">
                  <h3 className="font-anton text-2xl uppercase tracking-wide text-white">
                    {channel.title}
                  </h3>
                  <p className="mt-2 font-google-sans text-base text-white/88">
                    {channel.handle}
                  </p>
                </div>

                <p className="mt-2 font-google-sans text-sm leading-7 text-white/62">
                  {channel.description}
                </p>

                <div className="mt-2 inline-flex items-center gap-2 font-google-sans text-sm text-white/78 transition group-hover:text-white">
                  Abrir canal
                  <span aria-hidden="true">&rarr;</span>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}
