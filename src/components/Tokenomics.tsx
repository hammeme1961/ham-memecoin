'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Shield, Users, TrendingUp, Coins, Target, Lock } from 'lucide-react'

export default function Tokenomics() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  }

  const features = [
    {
      icon: Shield,
      title: "Fair Launch",
      description: "Launched on Pump.fun with zero team allocation",
      color: "text-green-400"
    },
    {
      icon: Users,
      title: "100% Community",
      description: "All tokens distributed to the community",
      color: "text-blue-400"
    },
    {
      icon: Lock,
      title: "No Locks",
      description: "No vesting, no team tokens, no hidden allocations",
      color: "text-purple-400"
    },
    {
      icon: TrendingUp,
      title: "Pure Pump.fun",
      description: "Fully transparent launch on trusted platform",
      color: "text-orange-400"
    }
  ]

  return (
    <section className="py-20 px-4 relative" ref={ref}>
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
        <div className="background-element absolute top-1/3 left-1/4 w-64 h-64 bg-gradient-to-r from-green-500/20 to-blue-500/20 rounded-full blur-3xl"></div>
        <div className="background-element absolute bottom-1/3 right-1/4 w-64 h-64 bg-gradient-to-r from-orange-500/20 to-yellow-500/20 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto relative z-10">
        <div className="max-w-4xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-6xl font-black mb-4 gradient-text font-display">
              Tokenomics
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Simple. Fair. Transparent. Just like Ham&apos;s mission.
            </p>
          </motion.div>

          {/* Main Supply Info */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="mb-16"
          >
            <motion.div variants={itemVariants} className="glass-effect p-8 rounded-2xl text-center">
              <div className="flex items-center justify-center gap-3 mb-6">
                <Coins className="w-8 h-8 text-orange-400" />
                <h3 className="text-3xl font-bold gradient-text font-display">Supply</h3>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <div className="text-4xl font-black gradient-text mb-2">1,000,000,000</div>
                  <div className="text-gray-300">Total Supply</div>
                </div>
                <div>
                  <div className="text-4xl font-black gradient-text-alt mb-2">100%</div>
                  <div className="text-gray-300">Community Owned</div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Features Grid */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="grid md:grid-cols-2 gap-6"
          >
            {features.map((feature, index) => (
              <motion.div 
                key={index}
                variants={itemVariants}
                className="glass-effect p-6 rounded-xl hover-scale group"
              >
                <div className="flex items-start gap-4">
                  <div className={`p-3 rounded-lg bg-gradient-to-r from-gray-800 to-gray-700 group-hover:scale-110 transition-transform`}>
                    <feature.icon className={`w-6 h-6 ${feature.color}`} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-gray-100 font-display">{feature.title}</h3>
                    <p className="text-gray-400">{feature.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
} 