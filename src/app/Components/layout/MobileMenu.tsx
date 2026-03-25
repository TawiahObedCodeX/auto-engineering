'use client'

import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { X, Phone } from 'lucide-react'
import { NAV_LINKS, CONTACT_INFO, BUSINESS_NAME } from '@/lib/constants'

interface MobileMenuProps {
  isOpen: boolean
  onClose: () => void
}

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Drawer */}
          <motion.div
            className="fixed top-0 right-0 z-50 h-full w-[80vw] max-w-xs bg-navy flex flex-col"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
          >
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-5 border-b border-white/10">
              <span className="font-heading font-bold text-xl text-white uppercase tracking-widest">
                {BUSINESS_NAME}
              </span>
              <button
                onClick={onClose}
                className="p-2 text-white/60 hover:text-white transition-colors"
                aria-label="Close menu"
              >
                <X size={22} />
              </button>
            </div>

            {/* Nav Links */}
            <nav className="flex flex-col px-6 py-8 gap-1 flex-1">
              {NAV_LINKS.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + i * 0.07 }}
                >
                  <Link
                    href={link.href}
                    onClick={onClose}
                    className="block py-3.5 font-heading font-semibold text-xl text-white/80 hover:text-orange uppercase tracking-widest transition-colors border-b border-white/5"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </nav>

            {/* CTA */}
            <div className="px-6 pb-10">
              <a
                href={`tel:${CONTACT_INFO.phone}`}
                className="flex items-center gap-3 bg-orange text-white font-body font-semibold px-5 py-4 rounded-sm uppercase tracking-widest text-sm justify-center hover:bg-orange-600 transition-colors"
              >
                <Phone size={16} />
                {CONTACT_INFO.phone}
              </a>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}