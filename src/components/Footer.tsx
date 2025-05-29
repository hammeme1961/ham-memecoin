'use client'

import { motion } from 'framer-motion'

export default function Footer() {
  return (
    <footer className="border-t border-gray-800 py-12 px-4 mt-20">
      <div className="container mx-auto text-center">
        <motion.div 
          className="space-y-4 text-gray-400"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="text-lg">© 2025 $HAM Community - In memory of Ham (1957-1983)</p>
          <p className="text-sm">A 100% community-owned tribute. Not affiliated with NASA. 🌙</p>
          <motion.div 
            className="text-2xl"
            animate={{ 
              scale: [1, 1.1, 1],
              rotate: [0, 5, -5, 0]
            }}
            transition={{ 
              duration: 2,
              repeat: Infinity,
              repeatType: "reverse"
            }}
          >
            🦍🚀
          </motion.div>
        </motion.div>
      </div>
    </footer>
  )
} 