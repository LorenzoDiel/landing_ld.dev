import { Link } from "react-router-dom"

export default function Footer() {
  return (
    <footer className="relative z-30 border-t border-white/10 bg-black/70 px-6 py-6 backdrop-blur-md">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-between gap-3 text-center md:flex-row md:text-left">
        <div>
          <p className="font-google-sans text-sm text-white/85">LD.dev</p>
          <p className="font-google-sans text-xs text-white/45">
            Soluciones digitales para PYMES argentinas. <br /><span className="font-google-sans text-xs text-white/25">Propiedad intelectual Diel Lorenzo | CUIT: 20-40072992-2</span>
          </p>
        </div>

        <Link
          to="/politicas-de-privacidad"
          className="font-google-sans text-sm text-white/75 underline decoration-white/25 underline-offset-4 transition hover:text-white"
        >
          Politicas de privacidad
        </Link>
      </div>
    </footer>
  )
}
