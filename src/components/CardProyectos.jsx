

export default function CardProyectos({ proyectos }) {
  return (
    <div className="rounded-xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm hover:bg-white/8 transition-colors cursor-pointer">
          <div className="flex justify-between items-start mb-2">
            <span className="text-white/40 text-xs uppercase tracking-wider">{proyectos.stats[0]}</span>
            <span className="text-white/20 text-xs">{proyectos.stats[1]}</span>
          </div>
          <p className="text-white text-sm font-medium mb-1">{proyectos.title}</p>
          <p className="text-white/50 text-xs leading-relaxed">{proyectos.description}</p>
          <p><span className="underline text-white/50 text-[12px] cursor-pointer" onClick={() => window.open(proyectos.link, '_blank')}>Ver proyecto</span></p>          
    </div>
    )
}