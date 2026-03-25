'use client'

import { motion } from 'framer-motion'
import { CheckCircle, Award, Wrench, Users } from 'lucide-react'
import AnimatedSection from '@/app/Components/ui/AnimatedSection'

const highlights = [
  'Fully certified auto electrical technicians',
  'Factory-grade diagnostic equipment',
  'Transparent pricing — no hidden charges',
  'Genuine and OEM-quality parts only',
  'All vehicle makes and models accepted',
  'Warranty on all completed repairs',
]

const expertise = [
  { Icon: Award, label: 'Certified Specialists', sub: '15+ years in the field' },
  { Icon: Wrench, label: 'All Makes & Models', sub: 'European, Japanese, American' },
  { Icon: Users, label: 'Client-First Approach', sub: '98% satisfaction rate' },
]

export default function About() {
  return (
    <section id="about" className="py-20 lg:py-28 bg-[#F9F9F9] overflow-hidden">
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left — visual */}
          <AnimatedSection direction="left" className="relative order-2 lg:order-1">
            {/* Main image placeholder — replace with actual image */}
            <div className="relative rounded-sm overflow-hidden bg-navy aspect-[4/3]">
              <div className="absolute inset-0 bg-gradient-to-br from-navy via-navy-700 to-navy-800" />
              <div className="absolute inset-0 bg-circuit-pattern opacity-20" />

              {/* Workshop illustration */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-orange/20 border border-orange/30 flex items-center justify-center">
                    <Wrench size={40} className="text-orange" />
                  </div>
                  <p className="font-heading font-bold text-white text-xl uppercase tracking-widest">
                    Est. 2009
                  </p>
                  <p className="font-body text-white/40 text-sm mt-1">
                    Tema, Ghana
                  </p>
                </div>
              </div>

              {/* Accent corner */}
              <div className="absolute top-0 right-0 w-20 h-20 border-t-2 border-r-2 border-orange opacity-60" />
              <div className="absolute bottom-0 left-0 w-20 h-20 border-b-2 border-l-2 border-electric opacity-60" />
            </div>

            {/* Floating badge */}
            <motion.div
              className="absolute -bottom-5 -right-5 lg:-right-8 bg-orange text-white px-6 py-4 rounded-sm shadow-orange"
              animate={{ y: [0, -6, 0] }}
              transition={{ repeat: Infinity, duration: 3.5, ease: 'easeInOut' }}
            >
              <div className="font-heading font-extrabold text-3xl">15+</div>
              <div className="font-body text-xs uppercase tracking-widest opacity-90">
                Years Experience
              </div>
            </motion.div>
          </AnimatedSection>

          {/* Right — copy */}
          <div className="order-1 lg:order-2">
            <AnimatedSection delay={0.1}>
              <span className="inline-block font-body text-xs font-semibold uppercase tracking-[0.25em] text-orange mb-3">
                Who We Are
              </span>
              <h2 className="section-heading text-navy mb-6 leading-tight">
                Ghana&apos;s Premier Auto{' '}
                <span className="text-gradient">Electrical</span> Specialists
              </h2>
              <p className="font-body text-slate-dark/70 leading-relaxed mb-4">
                Founded in Tema over a decade ago, Egeal Auto Electrical Engineering Shop
                has become the go-to destination for professional automotive electrical
                solutions across Greater Accra. We combine deep technical knowledge with
                cutting-edge diagnostic technology to solve even the most complex
                electrical faults.
              </p>
              <p className="font-body text-slate-dark/70 leading-relaxed mb-8">
                Whether you drive a Japanese compact, a European luxury vehicle, or a
                heavy commercial truck, our team of certified engineers brings the same
                level of precision, care, and honesty to every job.
              </p>
            </AnimatedSection>

            {/* Highlights */}
            <AnimatedSection delay={0.2}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3 mb-10">
                {highlights.map((item) => (
                  <div key={item} className="flex items-start gap-2.5">
                    <CheckCircle size={16} className="text-electric mt-0.5 shrink-0" />
                    <span className="font-body text-slate-dark/80 text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </AnimatedSection>

            {/* Expertise cards */}
            <AnimatedSection delay={0.3}>
              <div className="grid grid-cols-3 gap-3">
                {expertise.map(({ Icon, label, sub }) => (
                  <div
                    key={label}
                    className="bg-navy/5 border border-navy/10 rounded-sm p-4 text-center hover:border-orange/30 transition-colors"
                  >
                    <div className="w-10 h-10 mx-auto mb-2 bg-navy rounded-sm flex items-center justify-center">
                      <Icon size={18} className="text-orange" />
                    </div>
                    <p className="font-heading font-bold text-navy text-xs uppercase tracking-wide leading-tight mb-1">
                      {label}
                    </p>
                    <p className="font-body text-slate-dark/50 text-xs">{sub}</p>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  )
}