'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Menu, Phone, Zap } from 'lucide-react'
import MobileMenu from './MobileMenu'
import { NAV_LINKS, CONTACT_INFO, BUSINESS_NAME } from '@/lib/constants'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('')

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)

      // Active section detection
      const sections = NAV_LINKS.map((l) => l.href.replace('#', ''))
      for (const section of [...sections].reverse()) {
        const el = document.getElementById(section)
        if (el) {
          const rect = el.getBoundingClientRect()
          if (rect.top <= 120) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <motion.header
        className={`fixed top-0 left-0 right-0 z-30 transition-all duration-500 ${
          scrolled
            ? 'bg-navy/95 backdrop-blur-md shadow-glass border-b border-white/10 py-3'
            : 'bg-transparent py-5'
        }`}
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <div className="section-container flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="w-9 h-9 bg-orange rounded-sm flex items-center justify-center group-hover:bg-orange-600 transition-colors">
              <Zap size={18} fill="white" className="text-white" />
            </div>
            <div>
              <span className="font-heading font-extrabold text-xl text-white uppercase tracking-widest block leading-none">
                {BUSINESS_NAME}
              </span>
              <span className="text-electric text-[10px] font-body tracking-[0.2em] uppercase block">
                Engineering Shop
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {NAV_LINKS.map((link) => {
              const sectionId = link.href.replace('#', '')
              const isActive = activeSection === sectionId
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`animated-underline font-body font-medium text-sm uppercase tracking-widest transition-colors duration-200 ${
                    isActive ? 'text-orange' : 'text-white/80 hover:text-white'
                  }`}
                >
                  {link.label}
                </Link>
              )
            })}
          </nav>

          {/* CTA + Mobile toggle */}
          <div className="flex items-center gap-3">
            <a
              href={`tel:${CONTACT_INFO.phone}`}
              className="hidden sm:flex items-center gap-2 bg-orange/10 border border-orange/30 text-orange px-4 py-2 rounded-sm text-xs font-body font-semibold uppercase tracking-widest hover:bg-orange hover:text-white transition-all duration-200"
            >
              <Phone size={13} />
              Call Now
            </a>
            <button
              onClick={() => setMobileOpen(true)}
              className="lg:hidden p-2 text-white/70 hover:text-white transition-colors"
              aria-label="Open menu"
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </motion.header>

      <MobileMenu isOpen={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  )
}