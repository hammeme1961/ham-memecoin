'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import Image from 'next/image'
import { Calendar, MapPin, Clock, Star } from 'lucide-react'

export default function StoryImages() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-150px" })

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
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.4,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  }

  const storyImages = [
    {
      src: "/hovedbilde.png",
      title: "Ham's Launch Day",
      date: "January 31, 1961",
      description: "At 4:55 PM, a 3-year-old chimpanzee named Ham was strapped into Mercury capsule #5. Trained for 219 hours, Ham would become humanity's first ambassador to space. What should have been a routine 12-minute flight was about to become a life-or-death struggle that would determine if humans could survive the void of space.",
      icon: Star,
      color: "text-orange-400",
      aspectRatio: "aspect-[4/3]"
    },
    {
      src: "/med-hjelmen.png",
      title: "Suited for the Impossible",
      date: "Pre-Flight Preparation",
      description: "Ham's custom space suit and helmet represented cutting-edge 1961 technology. Every strap, every wire, every connection had to be perfect. NASA engineers knew they were sending a living being where no creature had gone before. Ham's calm demeanor during suiting up showed the intelligence and training that made him the perfect candidate for this historic mission.",
      icon: Calendar,
      color: "text-cyan-400",
      aspectRatio: "aspect-[3/4]"
    },
    {
      src: "/raketten.png",
      title: "Riding the Thunder",
      date: "Mercury-Redstone 2 Launch",
      description: "The Redstone rocket roared to life, pushing Ham at incredible speeds toward the edge of space. At 5,857 mph and 157 miles high, Ham experienced weightlessness while his capsule systems began failing. Cabin pressure dropped. The flight went 60 miles longer than planned. But Ham kept performing his tasks at 14.7 Gs - proving space travel was survivable.",
      icon: MapPin,
      color: "text-yellow-400",
      aspectRatio: "aspect-[2/3]"
    },
    {
      src: "/avis-bilde.png",
      title: "The World Takes Notice",
      date: "Headlines Around The Globe",
      description: "When Ham returned safely, the world erupted in celebration. The San Francisco Examiner's headline 'SPACE CHIMP LIVES' captured the moment that changed everything. Ham's success proved that space travel was no longer science fiction - it was reality. This newspaper became a symbol of humanity's first step toward the stars, paving the way for Alan Shepard just 109 days later.",
      icon: Clock,
      color: "text-green-400",
      aspectRatio: "aspect-[2/3]"
    }
  ]

  return (
    <section className="py-20 px-4 relative" ref={ref}>
      {/* Simplified Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-15">
        <div className="background-element absolute top-1/4 left-1/3 w-64 h-64 bg-gradient-to-r from-orange-500/15 to-yellow-500/15 rounded-full"></div>
        <div className="background-element absolute bottom-1/4 right-1/3 w-64 h-64 bg-gradient-to-r from-cyan-500/15 to-blue-500/15 rounded-full"></div>
      </div>

      <div className="container mx-auto relative z-10">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.4 }}
          >
            <h2 className="text-4xl md:text-6xl font-black mb-4 gradient-text font-display">
              Historic Moments
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              The images that captured a moment in history.
            </p>
          </motion.div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="space-y-20"
          >
            {storyImages.map((story, index) => (
              <motion.div 
                key={index}
                variants={itemVariants}
                className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-8 lg:gap-16`}
              >
                {/* Optimized Image Container */}
                <div className="flex-1 w-full max-w-lg lg:max-w-xl xl:max-w-2xl">
                  <div className="relative group">
                    {/* Simplified glow effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 to-cyan-500/10 rounded-2xl blur-lg group-hover:blur-xl transition-all duration-300"></div>
                    <div className="relative glass-effect rounded-2xl overflow-hidden p-2">
                      <div className={`relative ${story.aspectRatio} w-full`}>
                        <Image
                          src={story.src}
                          alt={story.title}
                          fill
                          className={`${story.src === '/avis-bilde.png' ? 'object-contain' : 'object-cover'} group-hover:scale-102 transition-transform duration-300 rounded-xl`}
                          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 600px"
                          priority={index < 2}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent rounded-xl"></div>
                        
                        {/* Simplified Date Badge */}
                        <div className="absolute top-3 left-3 bg-black/70 backdrop-blur-sm px-3 py-2 rounded-lg">
                          <div className="flex items-center gap-2">
                            <story.icon className={`w-4 h-4 ${story.color}`} />
                            <span className="text-sm font-medium text-white">{story.date}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Simplified Content */}
                <div className="flex-1 text-center lg:text-left space-y-6">
                  <div>
                    <span className="text-sm font-bold text-orange-400 bg-orange-400/10 px-4 py-2 rounded-full border border-orange-400/20">
                      Chapter {index + 1}
                    </span>
                  </div>
                  
                  <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white font-display leading-tight">
                    {story.title}
                  </h3>
                  
                  <div className="w-16 h-1 bg-gradient-to-r from-orange-400 to-cyan-400 rounded-full mx-auto lg:mx-0"></div>
                  
                  <p className="text-lg text-gray-300 leading-relaxed max-w-2xl">
                    {story.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
} 