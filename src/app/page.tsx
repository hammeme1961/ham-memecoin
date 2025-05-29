'use client'

import { useState } from 'react'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import About from '@/components/About'
import StoryImages from '@/components/StoryImages'
import Tokenomics from '@/components/Tokenomics'
import Footer from '@/components/Footer'
import Toast from '@/components/Toast'

export default function Home() {
  const [showToast, setShowToast] = useState(false)

  const copyAddress = () => {
    const address = "test 123"
    navigator.clipboard.writeText(address)
    setShowToast(true)
    setTimeout(() => setShowToast(false), 3000)
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      <Hero copyAddress={copyAddress} />
      <About />
      <StoryImages />
      <Tokenomics />
      <Footer />
      
      <Toast show={showToast} message="Contract address copied!" />
    </div>
  )
} 