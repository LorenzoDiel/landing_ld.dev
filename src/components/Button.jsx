import { motion } from "motion/react";

export default function Button() {
  const MotionButton = motion.button;

  return (
    <MotionButton
      className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-lg shadow-lg"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      Click Me!
    </MotionButton>
  );
}
