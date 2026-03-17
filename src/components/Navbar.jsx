export default function Navbar() {
    return (
        <header className="fixed top-0 left-0 z-40 w-full h-24 bg-transparent flex items-center justify-center px-4 py-2">
            <nav className="grid w-8/10 grid-cols-[45%_55%] items-center">
                <div className="my-2 flex w-full items-center justify-center">
                    <img className="h-20 w-20" src="/dev_blanco_sf.png" alt="Logo" />
                </div>
                <div className="flex items-center justify-center gap-4">
                    <ul className="flex justify-center text-white items-center gap-6">
                        <li>Home</li>
                        <li>Nosotros</li>
                        <li>Contacto</li>
                    </ul>
                </div>
            </nav>
        </header>
    )
}
