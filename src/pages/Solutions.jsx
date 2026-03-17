import { motion } from "motion/react";

export default function Solutions() {
    const solutions = [
        {
            id: "01",
            title: "LD.ads",
            tag: "Atraer clientes",
            description: "Estrategia y publicidad digital enfocada en atraer nuevos clientes a tu negocio. Hacemos que más personas te conozcan.",
            color: "from-blue-500 to-indigo-600",
            glow: "bg-blue-500/20",
            icon: (
                <svg className="w-8 h-8 text-white/90" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
                </svg>
            )
        },
        {
            id: "02",
            title: "LD.web",
            tag: "Tu sucursal digital",
            description: "Infraestructura web diseñada no solo para estar en internet, sino para convertir esas visitas en ventas reales.",
            color: "from-emerald-500 to-teal-600",
            glow: "bg-emerald-500/20",
            icon: (
                <svg className="w-8 h-8 text-white/90" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                </svg>
            )
        },
        {
            id: "03",
            title: "LD.data",
            tag: "Entender tus números",
            description: "Análisis y visualización de datos simples. Para que puedas ver qué funciona y tomar decisiones sin adivinar.",
            color: "from-amber-500 to-orange-600",
            glow: "bg-amber-500/20",
            icon: (
                <svg className="w-8 h-8 text-white/90" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
            )
        },
        {
            id: "04",
            title: "LD.ops",
            tag: "Automatizar tareas",
            description: "Automatización e integración de procesos. Conectamos tus herramientas para que el equipo no pierda horas en tareas repetitivas.",
            color: "from-purple-500 to-pink-600",
            glow: "bg-purple-500/20",
            icon: (
                <svg className="w-8 h-8 text-white/90" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
            )
        },
        {
            id: "05",
            title: "LD.bsns",
            tag: "Organizar para crecer",
            description: "Estructura empresarial pensada para crecer. Te ayudamos a ordenar tu organización para escalar sin descontrol.",
            color: "from-cyan-500 to-blue-500",
            glow: "bg-cyan-500/20",
            icon: (
                <svg className="w-8 h-8 text-white/90" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
            )
        }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15
            }
        }
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
    };

    return (
        <section className="relative min-h-screen py-6 md:py-10 flex flex-col items-center justify-center overflow-hidden">
            {/* Ambient Background Glows */}
            <div className="absolute top-0 right-1/4 w-[400px] h-[400px] bg-blue-600/10 rounded-full blur-[150px] pointer-events-none" />
            <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-indigo-600/10 rounded-full blur-[150px] pointer-events-none" />

            <div className="relative z-10 w-full max-w-[1400px] mx-auto px-4 md:px-6 flex flex-col items-center">
                
                {/* Header Section */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-6 md:mb-8 max-w-3xl mx-auto"
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white/80 text-xs font-google-sans mb-3 backdrop-blur-sm shadow-xl">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.8)]" />
                        Nuestras Áreas
                    </div>
                    
                    <h2 className="text-white text-2xl md:text-3xl lg:text-4xl font-anton tracking-wide uppercase drop-shadow-md mb-3 leading-tight">
                        Soluciones para cada parte del <br className="hidden md:block" />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">
                            crecimiento de tu empresa
                        </span>
                    </h2>
                    
                    <p className="text-white/70 text-sm lg:text-base font-google-sans font-light leading-relaxed max-w-2xl mx-auto">
                        En LD.dev sabemos que las PYMES necesitan herramientas que realmente funcionen. Organizamos nuestras soluciones en cinco pilares clave para acompañarte de forma integral.
                    </p>
                </motion.div>

                {/* 5 Pillars Grid */}
                <motion.div 
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-3 lg:gap-5 w-full"
                >
                    {solutions.map((solution, index) => (
                        <motion.div 
                            key={index}
                            variants={cardVariants}
                            whileHover={{ y: -6, scale: 1.01 }}
                            className="group relative h-full rounded-3xl p-[1px] overflow-hidden"
                        >
                            {/* Animated gradient border on hover */}
                            <div className={`absolute inset-0 bg-gradient-to-b opacity-20 group-hover:opacity-100 transition-opacity duration-500 ${solution.color}`} />
                            <div className="absolute inset-0 bg-white/10 opacity-100 group-hover:opacity-0 transition-opacity duration-300" />
                            
                            {/* Card Content Background */}
                            <div className="relative h-full bg-[#0a0a0f] rounded-[23px] p-4 lg:p-5 flex flex-col z-10">
                                
                                {/* Top Section: Icon & Id */}
                                <div className="flex justify-between items-center mb-3">
                                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center bg-gradient-to-br ${solution.color} bg-opacity-20 relative overflow-hidden`}>
                                        <div className="absolute inset-0 bg-black/40" />
                                        <div className="relative z-10 w-full h-full flex items-center justify-center [&>svg]:w-5 [&>svg]:h-5">
                                            {solution.icon}
                                        </div>
                                    </div>
                                    <span className="text-white/20 font-anton text-lg group-hover:text-white/40 transition-colors">
                                        {solution.id}
                                    </span>
                                </div>

                                {/* Title & Tag */}
                                <div className="mb-2">
                                    <h3 className="text-white text-lg font-anton tracking-wide mb-1 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-white/70 transition-all">
                                        {solution.title}
                                    </h3>
                                    <span className={`inline-block px-2 py-0.5 rounded-full text-[10px] md:text-xs font-google-sans font-medium text-white/90 bg-gradient-to-r ${solution.color} shadow-lg`}>
                                        {solution.tag}
                                    </span>
                                </div>

                                {/* Divider */}
                                <div className="w-full h-[1px] bg-white/10 my-2 group-hover:bg-white/20 transition-colors" />

                                {/* Description */}
                                <p className="text-white/60 text-[13px] font-google-sans leading-relaxed group-hover:text-white/80 transition-colors mt-auto">
                                    {solution.description}
                                </p>

                                {/* Ambient glow behind the card content */}
                                <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 rounded-full blur-[40px] opacity-0 group-hover:opacity-30 transition-opacity duration-500 pointer-events-none ${solution.glow}`} />
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Integration Flow Example Text */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="mt-6 md:mt-8 text-center"
                >
                    <p className="text-white/50 text-xs md:text-sm font-google-sans max-w-3xl mx-auto italic">
                        "Las áreas no funcionan aisladas. Forman un ecosistema integrado donde la suma de las partes potencia el crecimiento de tu negocio."
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
