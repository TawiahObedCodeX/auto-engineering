'use client'

import { motion } from 'framer-motion'

interface CardProps {
  children: React.ReactNode
  className?: string
  hover?: boolean
  glass?: boolean
  dark?: boolean
}

export default function Card({
  children,
  className = '',
  hover = true,
  glass = false,
  dark = false,
}: CardProps) {
  const baseClass = dark
    ? 'bg-navy-700 border border-white/10'
    : glass
    ? 'glass-card'
    : 'bg-white border border-slate-200/60'

  return (
    <motion.div
      className={`rounded-sm ${baseClass} ${className}`}
      whileHover={
        hover
          ? {
              y: -6,
              boxShadow: dark
                ? '0 20px 60px rgba(0,0,0,0.5)'
                : '0 20px 60px rgba(0,0,0,0.12)',
            }
          : undefined
      }
      transition={{ duration: 0.3 }}
    >
      {children}
    </motion.div>
  )
}