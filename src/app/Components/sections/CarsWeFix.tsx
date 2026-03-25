'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { CAR_BRANDS } from '@/lib/constants'
import AnimatedSection from '@/app/Components/ui/AnimatedSection'
import { CheckCircle2 } from 'lucide-react'

export default function CarsWeFix() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '0px 0px -80px 0px' })

  return (
    <section id="cars" className="py-20 lg:py-28 bg-[#F9F9F9] overflow-hidden">
      <div className="section-container">
        {/* Header */}
        <AnimatedSection className="text-center mb-14">
          <span className="inline-block font-body text-xs font-semibold uppercase tracking-[0.25em] text-orange mb-3">
            All Makes &amp; Models
          </span>
          <h2 className="section-heading text-navy mb-5">
            Every Vehicle.{' '}
            <span className="text-gradient">Every Brand.</span>
          </h2>
          <p className="section-subheading mx-auto text-center text-slate-dark/60">
            From European luxury to Japanese reliability — if it runs on electricity,
            we can diagnose and fix it. No vehicle is too complex for our team.
          </p>
        </AnimatedSection>

        {/* Brand grid */}
        <div ref={ref} className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
          {CAR_BRANDS.map((brand, i) => (
            <motion.div
              key={brand}
              className="group relative bg-white border border-slate-200/80 rounded-sm px-4 py-5 flex flex-col items-center gap-2 hover:border-orange/40 hover:shadow-md transition-all duration-300 cursor-default"
              initial={{ opacity: 0, scale: 0.92 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: i * 0.04, duration: 0.4, ease: 'easeOut' }}
              whileHover={{ y: -4 }}
            >
              {/* Brand icon placeholder — stylised letter badge */}
              <div className="w-12 h-12 rounded-full bg-navy/5 border border-navy/10 flex items-center justify-center group-hover:bg-orange/10 group-hover:border-orange/20 transition-all duration-300">
                <span className="font-heading font-extrabold text-navy/60 text-lg group-hover:text-orange transition-colors">
                  {brand.charAt(0)}
                </span>
              </div>
              <span className="font-heading font-bold text-navy/80 text-xs uppercase tracking-widest text-center leading-tight group-hover:text-navy transition-colors">
                {brand}
              </span>

              {/* Hover tick */}
              <motion.div
                className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity"
              >
                <CheckCircle2 size={12} className="text-electric" />
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* "And more" tag */}
        <AnimatedSection delay={0.3} className="text-center mt-8">
          <div className="inline-flex items-center gap-3 bg-navy/5 border border-navy/10 px-6 py-3 rounded-sm">
            <CheckCircle2 size={16} className="text-electric" />
            <span className="font-body text-navy/60 text-sm">
              + All other makes &amp; models accepted — including commercial vehicles &amp; 4x4s
            </span>
          </div>
        </AnimatedSection>

        {/* Divider CTA strip */}
        <AnimatedSection delay={0.4} className="mt-14">
          <div className="relative bg-navy rounded-sm overflow-hidden">
            <div className="absolute inset-0 bg-circuit-pattern opacity-20" />
            <div className="absolute inset-0 bg-gradient-to-r from-orange/20 via-transparent to-electric/20" />
            <div className="relative z-10 px-8 py-8 flex flex-col sm:flex-row items-center justify-between gap-5">
              <div>
                <h3 className="font-heading font-extrabold text-white text-2xl uppercase tracking-wide mb-1">
                  Don&apos;t see your car listed?
                </h3>
                <p className="font-body text-white/50 text-sm">
                  We most likely service it. Call us and we&apos;ll confirm in seconds.
                </p>
              </div>
              <a
                href="#booking"
                className="btn-primary whitespace-nowrap shrink-0"
              >
                Book a Check-Up
              </a>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}