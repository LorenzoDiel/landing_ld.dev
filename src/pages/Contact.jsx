import { motion } from "motion/react"

const contactChannels = [
  {
    id: "01",
    title: "Instagram",
    handle: "@ld.devarg",
    href: "https://www.instagram.com/ld.devarg/",
    description:
      "Conoce lo que hacemos, casos, ideas y novedades de LD.dev.",
    color: "from-pink-500 via-rose-500 to-orange-400",
    glow: "bg-pink-500/20",
  },
  {
    id: "02",
    title: "WhatsApp",
    handle: "+54 9 223 620 0677",
    href: "https://wa.me/5492236200677",
    description:
      "Escribinos directo para consultar una necesidad puntual o coordinar una charla.",
    color: "from-emerald-400 to-green-600",
    glow: "bg-emerald-500/20",
  },
  {
    id: "03",
    title: "Facebook",
    handle: "LD.dev",
    href: "https://www.facebook.com/profile.php?id=61587136880652",
    description:
      "Seguinos para ver contenido, actualizaciones y novedades de nuestros servicios.",
    color: "from-sky-400 to-blue-600",
    glow: "bg-sky-500/20",
  },
]

export default function Contact() {
  return (
    <section className="relative min-h-screen overflow-hidden px-6 py-12 md:px-10 md:py-16">
      <div className="absolute left-0 top-1/4 h-72 w-72 rounded-full bg-cyan-500/10 blur-[120px]" />
      <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-blue-500/10 blur-[140px]" />

      <div className="relative z-10 mx-auto flex min-h-screen w-full max-w-6xl flex-col items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.55, ease: "easeOut" }}
          className="max-w-3xl text-center"
        >
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 font-google-sans text-sm text-white/70 shadow-xl backdrop-blur-sm">
            <span className="h-2 w-2 rounded-full bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.9)]" />
            Contacto
          </div>

          <h2 className="font-anton text-3xl uppercase tracking-wide text-white md:text-5xl lg:text-6xl">
            Hablemos de tu
            <span className="bg-gradient-to-r from-cyan-300 to-blue-400 bg-clip-text text-transparent">
              {" "}proxima mejora
            </span>
          </h2>

          <p className="mt-4 font-google-sans text-sm leading-7 text-white/72 md:text-lg">
            Si ya identificaste un problema o queres ordenar mejor tu negocio,
            escribinos por el canal que te quede mas comodo.
          </p>
        </motion.div>

        <div className="mt-10 grid w-full gap-4 md:grid-cols-3">
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
              className="group relative overflow-hidden rounded-[28px] border border-white/10 bg-black/35 p-6 shadow-[0_30px_80px_rgba(0,0,0,0.35)] backdrop-blur-xl"
            >
              <div className={`absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100 ${channel.glow}`} />
              <div className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${channel.color}`} />

              <div className="relative flex h-full flex-col">
                <div className="flex items-center justify-between">
                  <span className="font-anton text-4xl text-white/18">
                    {channel.id}
                  </span>
                  <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 font-google-sans text-xs text-white/65">
                    Canal directo
                  </span>
                </div>

                <div className="mt-8">
                  <h3 className="font-anton text-3xl uppercase tracking-wide text-white">
                    {channel.title}
                  </h3>
                  <p className="mt-2 font-google-sans text-base text-white/88">
                    {channel.handle}
                  </p>
                </div>

                <p className="mt-5 font-google-sans text-sm leading-7 text-white/62">
                  {channel.description}
                </p>

                <div className="mt-8 inline-flex items-center gap-2 font-google-sans text-sm text-white/78 transition group-hover:text-white">
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
