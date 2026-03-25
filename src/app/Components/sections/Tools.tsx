'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import {
  Cpu, Zap, Wrench, Battery, Lightbulb, Wind,
  Microscope, Activity, PenTool, MonitorCheck, BarChart2, Search
} from 'lucide-react'
import { SERVICES, TOOLS } from '@/lib/constants'
import AnimatedSection from '@/app/Components/ui/AnimatedSection'

const serviceIcons = [Microscope, Zap, Cpu, Battery, Lightbulb, Wind]
const toolIcons = [MonitorCheck, Activity, PenTool, Cpu, BarChart2, Search]

export default function Tools() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '0px 0px -80px 0px' })

  return (
    <section id="tools" className="py-20 lg:py-28 bg-navy relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-circuit-pattern pointer-events-none" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-electric/40 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-orange/30 to-transparent" />

      <div className="section-container relative z-10">
        {/* Header */}
        <AnimatedSection className="text-center mb-16">
          <span className="inline-block font-body text-xs font-semibold uppercase tracking-[0.25em] text-electric mb-3">
            Our Capabilities
          </span>
          <h2 className="section-heading text-white mb-5">
            Services &amp;{' '}
            <span className="text-gradient">Diagnostic Tools</span>
          </h2>
          <p className="section-subheading mx-auto text-center">
            We invest in the best equipment so we can offer you the most accurate
            diagnosis and the most effective repairs — every time.
          </p>
        </AnimatedSection>

        {/* Services grid */}
        <div className="mb-20">
          <AnimatedSection>
            <h3 className="font-heading font-bold text-white/40 uppercase tracking-[0.3em] text-xs mb-8 flex items-center gap-3">
              <span className="w-8 h-px bg-orange" />
              What We Do
              <span className="w-8 h-px bg-orange" />
            </h3>
          </AnimatedSection>

          <div ref={ref} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {SERVICES.map((service, i) => {
              const Icon = serviceIcons[i] ?? Wrench
              return (
                <motion.div
                  key={service.id}
                  className="group bg-white/5 border border-white/10 rounded-sm p-6 hover:border-orange/40 hover:bg-white/[0.08] transition-all duration-300 cursor-default"
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: i * 0.1, duration: 0.5, ease: 'easeOut' }}
                  whileHover={{ y: -4 }}
                >
                  <div className="w-12 h-12 bg-orange/10 border border-orange/20 rounded-sm flex items-center justify-center mb-4 group-hover:bg-orange/20 transition-colors">
                    <Icon size={22} className="text-orange" />
                  </div>
                  <h4 className="font-heading font-bold text-white text-lg uppercase tracking-wide mb-2">
                    {service.title}
                  </h4>
                  <p className="font-body text-white/50 text-sm leading-relaxed">
                    {service.description}
                  </p>
                </motion.div>
              )
            })}
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 mb-16" />

        {/* Diagnostic Tools */}
        <AnimatedSection>
          <h3 className="font-heading font-bold text-white/40 uppercase tracking-[0.3em] text-xs mb-8 flex items-center gap-3">
            <span className="w-8 h-px bg-electric" />
            Our Equipment
            <span className="w-8 h-px bg-electric" />
          </h3>
        </AnimatedSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {TOOLS.map((tool, i) => {
            const Icon = toolIcons[i] ?? Cpu
            return (
              <AnimatedSection key={tool.id} delay={i * 0.08}>
                <div className="flex items-start gap-4 bg-electric/5 border border-electric/15 rounded-sm p-5 hover:border-electric/30 transition-colors">
                  <div className="w-10 h-10 bg-electric/10 rounded-sm flex items-center justify-center shrink-0">
                    <Icon size={18} className="text-electric" />
                  </div>
                  <div>
                    <h4 className="font-heading font-bold text-white text-sm uppercase tracking-wide mb-1">
                      {tool.name}
                    </h4>
                    <p className="font-body text-white/45 text-xs leading-relaxed">
                      {tool.description}
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            )
          })}
        </div>
      </div>
    </section>
  )
}