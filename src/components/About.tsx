'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Clock, Target, Trophy, Heart } from 'lucide-react'

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  }

  const stats = [
    {
      icon: Clock,
      number: "219",
      label: "Hours Training",
      description: "Intensive preparation"
    },
    {
      icon: Target,
      number: "157",
      label: "Miles High",
      description: "Higher than planned"
    },
    {
      icon: Trophy,
      number: "16",
      label: "Minutes in Space",
      description: "Changed history"
    },
    {
      icon: Heart,
      number: "22",
      label: "Years Later",
      description: "Lived until 1983"
    }
  ]

  return (
    <section className="py-20 px-4 relative" ref={ref}>
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
        <div className="absolute top-1/3 left-1/3 w-64 h-64 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/3 w-64 h-64 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto relative z-10">
        <div className="max-w-5xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-6xl font-black mb-8 gradient-text font-display">
              The True Story
            </h2>
            <p className="text-2xl md:text-3xl lg:text-4xl text-gray-300 max-w-4xl mx-auto leading-relaxed font-medium">
              Before Doge. Before Pepe. Before any meme flew to the moon...
              <br />
              <span className="gradient-text-alt font-bold text-3xl md:text-4xl lg:text-5xl">There was Ham.</span>
            </p>
          </motion.div>

          {/* Stats Grid */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
          >
            {stats.map((stat, index) => (
              <motion.div 
                key={index}
                variants={itemVariants}
                className="glass-effect text-center p-6 rounded-xl hover-scale"
              >
                <div className="mb-4">
                  <stat.icon className="w-8 h-8 mx-auto text-orange-400" />
                </div>
                <div className="text-3xl font-black gradient-text mb-2">{stat.number}</div>
                <div className="text-sm font-bold text-gray-200 mb-1">{stat.label}</div>
                <div className="text-xs text-gray-400">{stat.description}</div>
              </motion.div>
            ))}
          </motion.div>
          
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="space-y-8"
          >
            {/* Main Story - Simplified */}
            <motion.div variants={itemVariants} className="glass-effect p-8 rounded-2xl">
              <div className="max-w-4xl mx-auto text-center space-y-6">
                <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
                  On January 31, 1961, a 3-year-old chimp named Ham was launched into space. Everything went wrong - but Ham kept pushing buttons at 14.7 Gs while his capsule lost pressure.
                </p>
                <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
                  His 16-minute flight proved humans could survive in space. 109 days later, Alan Shepard followed the exact same route Ham made safe.
                </p>
                <p className="text-xl md:text-2xl font-bold gradient-text">
                  Ham didn&apos;t go to the moon. But he&apos;s the reason we did.
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* Elegant Transition to Historical Moments */}
          <motion.div 
            className="mt-20 text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <div className="glass-effect p-6 rounded-2xl border border-cyan-500/30 bg-gradient-to-r from-cyan-500/5 to-orange-500/5">
              <p className="text-lg text-gray-300 mb-4">
                Dive deeper into Ham&apos;s incredible journey
              </p>
              <div className="w-16 h-1 bg-gradient-to-r from-cyan-400 to-orange-400 mx-auto rounded-full"></div>
              <div className="text-sm text-gray-400 mt-3 font-semibold tracking-wide">
                HISTORIC MOMENTS
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
} 