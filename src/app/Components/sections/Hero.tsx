'use client'

import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { ChevronDown, Zap, Shield, Clock } from 'lucide-react'
import { BUSINESS_TAGLINE } from '@/lib/constants'

const stats = [
  { label: 'Years Experience', value: '15+' },
  { label: 'Vehicles Serviced', value: '5K+' },
  { label: 'Car Brands', value: '25+' },
  { label: 'Satisfied Clients', value: '98%' },
]

const badges = [
  { Icon: Zap, text: 'Expert Diagnostics' },
  { Icon: Shield, text: 'Guaranteed Work' },
  { Icon: Clock, text: 'Same-Day Service' },
]

export default function Hero() {
  const orbRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!orbRef.current) return
      const { clientX, clientY } = e
      const x = (clientX / window.innerWidth - 0.5) * 40
      const y = (clientY / window.innerHeight - 0.5) * 40
      orbRef.current.style.transform = `translate(${x}px, ${y}px)`
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-navy noise-overlay"
    >
      {/* Animated background orbs */}
      <div
        ref={orbRef}
        className="absolute inset-0 pointer-events-none transition-transform duration-700 ease-out"
        aria-hidden="true"
      >
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full bg-electric/10 blur-[120px] animate-orb" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-orange/10 blur-[100px] animate-pulse-slow" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-navy-700/80 blur-[60px]" />
      </div>

      {/* Circuit pattern overlay */}
      <div className="absolute inset-0 bg-circuit-pattern opacity-40 pointer-events-none" />

      {/* Diagonal accent line */}
      <div className="absolute top-0 right-0 w-[2px] h-full bg-gradient-to-b from-transparent via-electric/40 to-transparent pointer-events-none" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-orange/30 to-transparent pointer-events-none" />

      <div className="section-container relative z-10 pt-32 pb-20">
        {/* Badges */}
        <motion.div
          className="flex flex-wrap gap-3 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {badges.map(({ Icon, text }) => (
            <div
              key={text}
              className="flex items-center gap-2 bg-white/5 border border-white/10 px-3 py-1.5 rounded-sm"
            >
              <Icon size={13} className="text-electric" />
              <span className="font-body text-white/60 text-xs uppercase tracking-widest">
                {text}
              </span>
            </div>
          ))}
        </motion.div>

        {/* Main headline */}
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: [0.21, 1.11, 0.81, 0.99] }}
          >
            <h1 className="section-heading text-white leading-none mb-2">
              Your Car&apos;s{' '}
              <span className="text-gradient">Electrical Expert</span>
            </h1>
            <h2 className="section-heading text-white leading-none mb-6">
              In Ghana.
            </h2>
          </motion.div>

          <motion.p
            className="section-subheading mb-10"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            {BUSINESS_TAGLINE} — From advanced diagnostics to full rewiring,
            we restore electrical health to any vehicle with unmatched precision.
          </motion.p>

          <motion.div
            className="flex flex-wrap gap-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.65 }}
          >
            <a href="#booking" className="btn-primary">
              <Zap size={16} />
              Book Appointment
            </a>
            <a href="#tools" className="btn-secondary">
              Explore Our Services
            </a>
          </motion.div>
        </div>

        {/* Stats strip */}
        <motion.div
          className="grid grid-cols-2 sm:grid-cols-4 gap-px mt-20 bg-white/10 rounded-sm overflow-hidden border border-white/10"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.85 }}
        >
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className="bg-navy/70 px-6 py-6 text-center"
            >
              <div className="font-heading font-extrabold text-4xl text-orange mb-1">
                {stat.value}
              </div>
              <div className="font-body text-white/50 text-xs uppercase tracking-widest">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll cue */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/30"
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <span className="font-body text-[10px] uppercase tracking-[0.3em]">Scroll</span>
        <ChevronDown size={16} />
      </motion.div>
    </section>
  )
}