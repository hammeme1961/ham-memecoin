'use client'

import { motion, AnimatePresence } from 'framer-motion'

interface ToastProps {
  show: boolean
  message: string
}

export default function Toast({ show, message }: ToastProps) {
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.3 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 50, scale: 0.3 }}
          transition={{ type: "spring", stiffness: 500, damping: 30 }}
          className="fixed bottom-6 right-6 bg-green-600 text-white px-6 py-4 rounded-xl shadow-2xl z-50 font-semibold"
        >
          {message}
        </motion.div>
      )}
    </AnimatePresence>
  )
} 