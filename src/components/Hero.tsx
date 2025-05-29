'use client'

import { motion } from 'framer-motion'
import { Copy, Twitter, MessageCircle, TrendingUp, Zap } from 'lucide-react'
import Image from 'next/image'

interface HeroProps {
  copyAddress: () => void
}

export default function Hero({ copyAddress }: HeroProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 py-20">
      {/* Simplified Background - Less distracting */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-30">
        <div className="background-element absolute top-1/3 left-1/3 w-96 h-96 bg-gradient-to-r from-orange-500/20 to-yellow-500/20 rounded-full blur-3xl"></div>
        <div className="background-element absolute bottom-1/3 right-1/3 w-96 h-96 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full blur-3xl"></div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto relative z-10 max-w-7xl">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid lg:grid-cols-2 gap-12 items-center"
        >
          {/* Text Content */}
          <div className="space-y-8 text-center lg:text-left">
            {/* Launch Badge */}
            <motion.div variants={itemVariants}>
              <div className="inline-flex items-center gap-2 bg-green-500/10 border border-green-500/30 px-4 py-2 rounded-full text-green-400 font-semibold">
                <Zap className="w-4 h-4" />
                <span>Launched on Pump.fun</span>
              </div>
            </motion.div>

            {/* Main Title */}
            <motion.div variants={itemVariants} className="space-y-4">
              <h1 className="text-6xl md:text-8xl lg:text-9xl font-black gradient-text font-display">
                HAM
              </h1>
              <div className="flex justify-center lg:justify-start items-center gap-3 text-2xl">
                <span>🦍</span>
                <span>🚀</span>
                <span>🌙</span>
              </div>
            </motion.div>
            
            {/* Subtitle */}
            <motion.div variants={itemVariants} className="space-y-3">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-100 font-display">
                The Ape Who Made The Moon Possible
              </h2>
              <p className="text-lg text-gray-400">
                January 31, 1961 - First Hominid in Space
              </p>
              <div className="flex justify-center lg:justify-start items-center gap-3 text-sm font-bold">
                <span className="bg-red-500/20 text-red-400 px-3 py-1 rounded-full">NO TEAM</span>
                <span className="bg-green-500/20 text-green-400 px-3 py-1 rounded-full">100% COMMUNITY</span>
              </div>
            </motion.div>
            
            {/* Contract Address */}
            <motion.div variants={itemVariants} className="max-w-xl mx-auto lg:mx-0">
              <div 
                className="glass-effect rounded-xl p-6 cursor-pointer hover-glow transition-all duration-300 group"
                onClick={copyAddress}
              >
                <div className="flex items-center justify-center lg:justify-start gap-2 mb-2">
                  <p className="text-sm text-gray-400">Contract Address (Solana)</p>
                  <div className="bg-green-500/20 text-green-400 text-xs px-2 py-1 rounded border border-green-500/30">
                    Pump.fun
                  </div>
                </div>
                <div className="flex items-center justify-center lg:justify-start gap-2 flex-wrap">
                  <code className="text-sm font-mono text-orange-400 font-bold group-hover:text-yellow-400 transition-colors break-all">
                    Ai3kcAWyKjMk8w8Rw4z1VPB3yfYbJvJvkvJPschimp
                  </code>
                  <Copy className="w-4 h-4 text-orange-400 group-hover:text-yellow-400 transition-colors flex-shrink-0" />
                </div>
                <p className="text-xs text-gray-500 mt-2">Click to copy</p>
              </div>
            </motion.div>
            
            {/* Social Links */}
            <motion.div variants={itemVariants} className="flex flex-wrap justify-center lg:justify-start gap-4">
              <motion.a 
                href="https://x.com/hammeme_" 
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary flex items-center gap-2 px-6 py-3 hover-scale"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Twitter className="w-4 h-4" />
                X (Twitter)
              </motion.a>
              <motion.a 
                href="https://t.me/hammemee" 
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary flex items-center gap-2 px-6 py-3 hover-scale"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <MessageCircle className="w-4 h-4" />
                Telegram
              </motion.a>
              <motion.div 
                className="btn-secondary flex items-center gap-2 px-6 py-3 opacity-60 cursor-not-allowed"
              >
                <TrendingUp className="w-4 h-4" />
                Pump.fun (TBA)
              </motion.div>
              <motion.div 
                className="btn-secondary flex items-center gap-2 px-6 py-3 opacity-60 cursor-not-allowed"
              >
                <TrendingUp className="w-4 h-4" />
                Dexscreener (TBA)
              </motion.div>
            </motion.div>
          </div>

          {/* Large HAM Image */}
          <motion.div 
            variants={itemVariants}
            className="relative"
          >
            <div className="relative aspect-square max-w-lg mx-auto">
              {/* Glow effect behind image */}
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500/30 to-cyan-500/30 rounded-3xl blur-3xl"></div>
              
              {/* Main image container */}
              <div className="relative glass-effect rounded-3xl overflow-hidden p-4">
                <Image
                  src="/hovedbilde.png"
                  alt="HAM - The Space Pioneer Chimp"
                  width={600}
                  height={600}
                  className="w-full h-full object-cover rounded-2xl"
                  priority
                />
                
                {/* Image overlay with info */}
                <div className="absolute bottom-4 left-4 right-4 bg-black/70 backdrop-blur-sm rounded-xl p-4">
                  <div className="text-white">
                    <div className="text-lg font-bold mb-1">Ham the Astrochimp</div>
                    <div className="text-sm text-gray-300">January 31, 1961 • 157 miles high • 16 minutes that changed history</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
} 