'use client'

import { useRef } from 'react'
import { useInView } from 'framer-motion'

interface ScrollAnimationOptions {
  once?: boolean
  margin?: string
  amount?: number | 'some' | 'all'
}

export function useScrollAnimation(options: ScrollAnimationOptions = {}) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, {
    once: options.once ?? true,
    margin: options.margin ?? '0px 0px -80px 0px',
    amount: options.amount ?? 0.1,
  })

  return { ref, isInView }
}

export function useStaggerAnimation(index: number, baseDelay = 0.1) {
  return {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: {
      duration: 0.6,
      delay: index * baseDelay,
      ease: [0.21, 1.11, 0.81, 0.99],
    },
  }
}