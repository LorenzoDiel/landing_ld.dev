import { AnimatePresence, motion } from "motion/react"

const areas = [
  { name: "Desarrollo web", description: "Sitios, landing pages, e-commerce y aplicaciones a medida." },
  { name: "Automatización de procesos", description: "Optimización de tareas repetitivas y flujos de trabajo." },
  { name: "Integraciones API", description: "Conexión entre sistemas y servicios para mejorar la eficiencia." },
  { name: "Dashboards personalizados", description: "Visualización de datos clave para la toma de decisiones." },
  { name: "Mantenimiento y soporte", description: "Actualizaciones, mejoras y resolución de problemas." },
  { name: "Marketing digital", description: "Estrategias y herramientas para potenciar tu presencia online." },
  { name: "Consultoría tecnológica", description: "Asesoramiento experto para optimizar tus proyectos y decisiones tecnológicas." },
]

const initialFormState = {
    empresa: "",
    rubro: "",
    nombre: "",
    email: "",
    area: "",
    descripcion: "",
}

const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
}

const validateForm = (formData) => {
    const errors = {}
    if (!formData.empresa.trim()) errors.empresa = "El campo Empresa es obligatorio."
    if (!formData.rubro.trim()) errors.rubro = "El campo Rubro es obligatorio."
    if (!formData.nombre.trim()) errors.nombre = "El campo Nombre es obligatorio."
    if (!formData.email.trim()) {
        errors.email = "El campo Email es obligatorio."
    } else if (!validateEmail(formData.email)) {
        errors.email = "Por favor, ingresa un email válido."
    }
    if (!formData.area) errors.area = "Por favor, selecciona un área de interés."
    if (!formData.descripcion.trim()) errors.descripcion = "El campo Descripción del proyecto es obligatorio."
    return errors
}


const handleSubmit = (event, formData) => {
    event.preventDefault()
    const errors = validateForm(formData)
    if (Object.keys(errors).length > 0) {
        // Aquí podrías mostrar los errores al usuario, por ejemplo, usando un estado para almacenar los errores y renderizarlos en el formulario.
        console.log("Errores de validación:", errors)
        return
    }
    
    console.log("Formulario válido, enviando datos:", formData)
}
export default function Cotizador({ isOpen, onClose }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[80] flex items-center justify-center bg-black/70 px-5 backdrop-blur-md"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, y: 28, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 18, scale: 0.98 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
            className="relative w-full h-8/10 max-w-xl rounded-3xl border border-white/10 bg-[#0f0f0f]/95 p-6 shadow-[0_35px_120px_rgba(0,0,0,0.55)] backdrop-blur-2xl md:p-8 mt-10"
            onClick={(event) => event.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-labelledby="cotizador-title"
          >
            <button
              type="button"
              onClick={onClose}
              aria-label="Cerrar cotizador"
              className="absolute right-5 top-5 flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-white/65 transition hover:bg-white/10 hover:text-white cursor-pointer"
            >
              X
            </button>

            <h1 id="cotizador-title" className="pr-10 text-2xl font-anton leading-tight tracking-wider text-white">
              Cotizá tu proyecto
            </h1>
            <p className="mb-8 mt-4 text-lg font-light leading-relaxed text-white/50">
              Completá el formulario y nos pondremos en contacto.
            </p>

            <form className="flex flex-col gap-4" onSubmit={(e) => handleSubmit(e, formData)}>
                <div className="flex flex-row gap-2">
                    <input
                        type="text"
                        placeholder="Empresa"
                        className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-white/20"
                    />
                    <input
                        type="text"
                        placeholder="Rubro"
                        className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-white/20"
                    />
                </div>
                <div className="flex flex-row gap-2">
                    <input
                        type="text"
                        placeholder="Nombre"
                        className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-white/20"
                    />
                    <input
                        type="email"
                        placeholder="Email"
                        className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-white/20"
                    />
                </div>
                <select
                    defaultValue=""
                    className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-white/20"
                >
                <option value="" disabled
                className="bg-[#0f0f0f] text-white">Área de interés</option>
                {areas.map((area) => (
                  <option
                  className="bg-[#0f0f0f] text-white"
                  key={area.name} value={area.name}>{area.name}</option>
                ))}
              </select>
              <textarea
                placeholder="Descripción del proyecto"
                className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-white/20"
                rows="4"
              />
              <div className="flex justify-end">
                <motion.button
                    type="submit"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="self-start rounded-lg bg-indigo-600 px-6 py-3 font-semibold text-white shadow-lg cursor-pointer"
                >
                    Enviar
                </motion.button>
              </div>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
