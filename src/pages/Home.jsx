import { motion } from 'motion/react'

export default function Home() {
  return (
    <div className="flex h-svh flex-col">
      <div className="flex h-full w-full flex-col items-center justify-center gap-4 pt-10">
        <div className="flex flex-col items-center justify-center">
        <h1 className="text-white text-5xl mt-20 font-anton font-bold [text-shadow:0_2px_4px_rgba(0,0,0,.5),0_0_18px_rgba(255,255,255,.2)] tracking-wide">DESDE UNA PYME, PARA PYMES</h1>
        <h2 className="text-white font-roboto-italic text-2xl font-light [text-shadow:0_2px_4px_rgba(0,0,0,.5),0_0_18px_rgba(255,255,255,.2)] tracking-wider">Soluciones reales para acompañar y mejorar la gestión de PYMES argentinas</h2>
        </div>
        <div className="flex items-end justify-center w-full mb-25">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            animate={{ backgroundPosition: '200% 0' }}
            className="px-6 py-2 bg-gradient-to-r from-blue-900 to-blue-500 via-blue-700 text-white rounded-lg text-lg font-roboto font-light shadow-lg [text-shadow:0_2px_4px_rgba(0,0,0,.5),0_0_18px_rgba(255,255,255,.2)]">
            Conocenos
          </motion.button>
        </div>
      </div>
    </div>
  )
}