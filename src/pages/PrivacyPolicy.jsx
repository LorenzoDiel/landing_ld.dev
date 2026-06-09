import { Link } from "react-router-dom"

const sections = [
  {
    title: "Informacion que recopilamos",
    content:
      "Podemos recibir datos que nos compartis de forma voluntaria, como nombre, correo electronico, telefono o informacion comercial enviada desde formularios, correo o WhatsApp.",
  },
  {
    title: "Uso de la informacion",
    content:
      "Utilizamos esos datos para responder consultas, preparar propuestas, brindar servicios, mejorar la experiencia del sitio y mantener comunicaciones vinculadas con nuestro trabajo.",
  },
  {
    title: "Datos de navegacion",
    content:
      "El sitio puede registrar informacion tecnica basica como paginas visitadas, tiempo de permanencia, tipo de dispositivo o navegador, con fines estadisticos y de mejora.",
  },
  {
    title: "Comparticion con terceros",
    content:
      "Podemos usar proveedores externos para hosting, formularios, analitica o comunicaciones. Esos servicios pueden procesar informacion bajo sus propias politicas.",
  },
  {
    title: "Proteccion de datos",
    content:
      "Aplicamos medidas razonables para resguardar la informacion frente a accesos no autorizados, uso indebido, alteracion o divulgacion. Ningun sistema es completamente invulnerable.",
  },
  {
    title: "Tus derechos",
    content:
      "Si queres actualizar, corregir o solicitar la eliminacion de tus datos, podes contactarnos por los canales publicados en el sitio.",
  },
  {
    title: "Cambios en esta politica",
    content:
      "Esta politica puede actualizarse cuando cambien nuestros procesos, herramientas o requerimientos legales. La version publicada en esta pagina sera la vigente.",
  },
]

export default function PrivacyPolicy() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-black px-2 py-4 text-white md:px-10">
      <div className="absolute inset-0 z-0 bg-black" />
      <div className="absolute left-1/2 top-24 z-10 h-[34rem] w-[34rem] -translate-x-1/2 rounded-full bg-blue-500/12 blur-[120px]" />
      <div className="absolute bottom-0 right-0 z-10 h-[24rem] w-[24rem] rounded-full bg-cyan-400/10 blur-[120px]" />

      <div className="relative z-20 mx-auto flex w-full max-w-5xl flex-col gap-8">
        <div className="flex items-center justify-between gap-4">
          <Link
            to="/"
            className="inline-flex w-fit items-center gap-2 rounded-full border border-white/12 bg-white/5 px-4 py-2 font-google-sans text-sm text-white/80 backdrop-blur-sm transition hover:bg-white/10 hover:text-white"
          >
            Volver al inicio
          </Link>
        </div>

        <section className="overflow-hidden rounded-[32px] border border-white/10 bg-white/5 shadow-[0_40px_120px_rgba(0,0,0,0.45)] backdrop-blur-2xl">
          <div className="border-b border-white/10 px-6 py-8 md:px-10 md:py-10">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 font-google-sans text-sm text-white/70">
              <span className="h-2 w-2 rounded-full bg-blue-400 shadow-[0_0_10px_rgba(96,165,250,0.9)]" />
              Legal
            </div>
            <h1 className="max-w-3xl font-anton text-4xl uppercase tracking-wide text-white md:text-6xl">
              Politicas de privacidad
            </h1>
            <p className="mt-4 max-w-3xl font-google-sans text-base leading-7 text-white/70 md:text-lg">
              En LD.dev tratamos la informacion personal con criterio de minima
              necesidad: solo usamos lo necesario para responder consultas,
              trabajar con clientes y mejorar el sitio.
            </p>
          </div>

          <div className="grid gap-4 px-6 py-6 md:px-10 md:py-10">
            {sections.map((section) => (
              <article
                key={section.title}
                className="rounded-[24px] border border-white/8 bg-black/30 p-5 md:p-6"
              >
                <h2 className="font-anton text-2xl uppercase tracking-wide text-white md:text-3xl">
                  {section.title}
                </h2>
                <p className="mt-3 font-google-sans text-sm leading-7 text-white/72 md:text-base">
                  {section.content}
                </p>
              </article>
            ))}
          </div>
        </section>
      </div>
    </main>
  )
}
