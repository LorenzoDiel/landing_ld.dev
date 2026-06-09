import { useState } from "react"
import { Link } from "react-router-dom"
import { motion, AnimatePresence } from "motion/react"

const navItems = [
    { label: "Home", to: "/#home" },
    { label: "Soluciones", to: "/#problems" },
    { label: "Proyectos", to: "/#projects" },
    { label: "Contacto", to: "/#contact" },
]

function NavbarContent({ onNavigate, menuOpen, onToggleMenu }) {
    return (
        <>
            <div className="flex w-full items-center justify-start">
                <img className="h-12 w-12" src="/dev_blanco_sf.png" alt="Logo" />
            </div>
            <div className="hidden items-center justify-center gap-4 md:flex">
                <ul className="flex items-center justify-center gap-6 text-white">
                    {navItems.map((item) => (
                        <li key={item.to}>
                            <Link
                                to={item.to}
                                onClick={onNavigate}
                                className="rounded-full px-2 py-1 font-google-sans text-sm text-white/88 outline-none transition-colors hover:bg-white/10 hover:text-white focus-visible:ring-2 focus-visible:ring-white/70"
                            >
                                {item.label}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="hidden w-full items-center justify-end md:flex">
                <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    animate={{ backgroundPosition: "200% 0" }}
                    className="rounded-full border border-white/2 bg-black/30 px-5 py-2 font-google-sans text-sm font-light text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.12),0_5px_15px_rgba(0,0,0,0.25)] backdrop-blur-xl transition-colors hover:bg-white/10"
                    onClick={() => {window.open("https://wa.me/5492236200677?text=Hola%20LD%20!%20Quisiera%20charlar%20sobre%20un%20proyecto.", "_blank")}}
                >
                    Charlemos
                </motion.button>
            </div>
            <div className="flex w-full items-center justify-end md:hidden">
                <button
                    type="button"
                    onClick={onToggleMenu}
                    aria-label={menuOpen ? "Cerrar menu" : "Abrir menu"}
                    aria-expanded={menuOpen}
                    className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 rounded-full border border-white/10 bg-black/30 text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.12),0_5px_15px_rgba(0,0,0,0.25)] backdrop-blur-xl transition hover:bg-white/10"
                >
                    <span className={`h-px w-4 rounded-full bg-current transition ${menuOpen ? "translate-y-[3px] rotate-45" : ""}`} />
                    <span className={`h-px w-4 rounded-full bg-current transition ${menuOpen ? "opacity-0" : ""}`} />
                    <span className={`h-px w-4 rounded-full bg-current transition ${menuOpen ? "-translate-y-[3px] -rotate-45" : ""}`} />
                </button>
            </div>
        </>
    )
}

export default function Navbar({ variant = "default" }) {
    const [open, setOpen] = useState(false)
    const [menuOpen, setMenuOpen] = useState(false)
    const closeMenu = () => setMenuOpen(false)
    const mobileMenu = (
        <AnimatePresence>
            {menuOpen && (
                <motion.div
                    initial={{ opacity: 0, y: -8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.2, ease: "easeOut" }}
                    className="absolute left-0 top-[calc(100%+0.5rem)] flex w-full flex-col gap-2 rounded-3xl border border-white/10 bg-[#0b0b0b] p-3 shadow-[0_18px_70px_rgba(0,0,0,0.55)] md:hidden"
                >
                    {navItems.map((item) => (
                        <Link
                            key={item.to}
                            to={item.to}
                            onClick={closeMenu}
                            className="rounded-2xl px-4 py-3 font-google-sans text-sm text-white/88 outline-none transition-colors hover:bg-white/10 hover:text-white focus-visible:ring-2 focus-visible:ring-white/70"
                        >
                            {item.label}
                        </Link>
                    ))}
                    <button
                        type="button"
                        onClick={closeMenu}
                        className="mt-1 rounded-2xl border border-white/10 bg-black/30 px-4 py-3 text-left font-google-sans text-sm font-light text-white transition hover:bg-white/10"
                    >
                        Charlemos
                    </button>
                </motion.div>
            )}
        </AnimatePresence>
    )

    if (variant === "projects") {
        return (
            <header className="fixed left-0 top-0 z-50 flex h-24 w-full items-start justify-center px-4 py-2">
                <div
                    className="relative flex h-full w-full items-start justify-center"
                    onMouseEnter={() => setOpen(true)}
                    onMouseLeave={() => setOpen(false)}
                >
                    <nav className="relative grid h-15 w-full max-w-5xl grid-cols-[1fr_auto] items-center rounded-4xl border border-white/7 bg-white/[0.07] px-5 py-1 shadow-[0_18px_70px_rgba(0,0,0,0.38)] backdrop-blur-2xl backdrop-saturate-100 md:hidden">
                        <NavbarContent
                            menuOpen={menuOpen}
                            onToggleMenu={() => setMenuOpen((current) => !current)}
                        />
                        {mobileMenu}
                    </nav>
                    <AnimatePresence>
                        {open && (
                            <motion.nav
                                initial={{ opacity: 0, y: -18, scale: 0.98 }}
                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                exit={{ opacity: 0, y: -18, scale: 0.98 }}
                                transition={{ duration: 0.24, ease: "easeOut" }}
                                className="hidden h-15 w-full max-w-5xl grid-cols-[28%_44%_28%] items-center rounded-4xl border border-white/7 bg-white/[0.02] px-5 py-1 shadow-[0_18px_70px_rgba(0,0,0,0.38)] backdrop-blur-2xl backdrop-saturate-80 md:grid"
                            >
                                <NavbarContent onNavigate={() => setOpen(false)} />
                            </motion.nav>
                        )}
                    </AnimatePresence>
                </div>
            </header>
        )
    }

    return (
        <header className="fixed left-0 top-2 z-40 flex h-15 w-full items-center justify-center px-4 py-2">
            <nav className="relative grid w-full max-w-5xl grid-cols-[1fr_auto] items-center rounded-4xl border border-white/7 bg-white/[0.02] px-5 py-1 shadow-[0_18px_70px_rgba(0,0,0,0.38)] backdrop-blur-2xl backdrop-saturate-80 md:grid-cols-[28%_44%_28%]">
                <NavbarContent
                    menuOpen={menuOpen}
                    onToggleMenu={() => setMenuOpen((current) => !current)}
                />
                {mobileMenu}
            </nav>
        </header>
    )
}
