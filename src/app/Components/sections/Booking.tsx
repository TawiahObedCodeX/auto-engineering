'use client'

import dynamic from 'next/dynamic'
import { Zap, Phone, Clock, ShieldCheck } from 'lucide-react'
import AnimatedSection from '@/app/Components/ui/AnimatedSection'
import { CONTACT_INFO } from '@/lib/constants'

// Dynamically import the form to avoid SSR issues with react-datepicker
const BookingForm = dynamic(() => import('@/app/Components/forms/BookingForm'), {
  ssr: false,
  loading: () => (
    <div className="space-y-4">
      {[...Array(6)].map((_, i) => (
        <div key={i} className="h-12 rounded-sm skeleton" />
      ))}
    </div>
  ),
})

const perks = [
  { Icon: ShieldCheck, text: 'Guaranteed workmanship on every repair' },
  { Icon: Clock, text: 'Same-day diagnostics available' },
  { Icon: Zap, text: 'Fast turnaround — most jobs done same day' },
  { Icon: Phone, text: 'Confirmation call within 24 hours' },
]

export default function Booking() {
  return (
    <section id="booking" className="py-20 lg:py-28 bg-navy relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-circuit-pattern pointer-events-none opacity-60" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-orange/30 to-transparent" />
      <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-electric/5 blur-[100px] pointer-events-none" />
      <div className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full bg-orange/5 blur-[100px] pointer-events-none" />

      <div className="section-container relative z-10">
        {/* Header */}
        <AnimatedSection className="text-center mb-14">
          <span className="inline-block font-body text-xs font-semibold uppercase tracking-[0.25em] text-orange mb-3">
            Schedule a Visit
          </span>
          <h2 className="section-heading text-white mb-5">
            Book Your{' '}
            <span className="text-gradient">Appointment</span>
          </h2>
          <p className="section-subheading mx-auto text-center">
            Fill in the form below and our team will confirm your booking within 24 hours.
            No guesswork — just expert service when you need it.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-16 items-start">
          {/* Left: form — takes more space */}
          <AnimatedSection direction="left" className="lg:col-span-3">
            <div className="bg-white/5 border border-white/10 rounded-sm p-6 sm:p-8 backdrop-blur-sm">
              <BookingForm />
            </div>
          </AnimatedSection>

          {/* Right: info panel */}
          <AnimatedSection direction="right" delay={0.15} className="lg:col-span-2">
            <div className="space-y-6">
              {/* Why book card */}
              <div className="bg-orange/10 border border-orange/20 rounded-sm p-6">
                <h3 className="font-heading font-bold text-white text-lg uppercase tracking-widest mb-4">
                  Why Book With Us?
                </h3>
                <ul className="space-y-3">
                  {perks.map(({ Icon, text }) => (
                    <li key={text} className="flex items-start gap-3">
                      <div className="w-7 h-7 bg-orange/20 rounded-sm flex items-center justify-center shrink-0 mt-0.5">
                        <Icon size={13} className="text-orange" />
                      </div>
                      <span className="font-body text-white/70 text-sm leading-relaxed">
                        {text}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Direct contact */}
              <div className="bg-white/5 border border-white/10 rounded-sm p-6">
                <h3 className="font-heading font-bold text-white text-sm uppercase tracking-widest mb-4">
                  Prefer to Call?
                </h3>
                <a
                  href={`tel:${CONTACT_INFO.phone}`}
                  className="flex items-center gap-3 text-orange font-body font-semibold hover:text-orange-300 transition-colors text-lg mb-3"
                >
                  <Phone size={18} />
                  {CONTACT_INFO.phone}
                </a>
                <div className="space-y-1 border-t border-white/10 pt-4">
                  <p className="font-body text-white/40 text-xs">
                    {CONTACT_INFO.hours.weekdays}
                  </p>
                  <p className="font-body text-white/40 text-xs">
                    {CONTACT_INFO.hours.saturday}
                  </p>
                  <p className="font-body text-white/30 text-xs">
                    {CONTACT_INFO.hours.sunday}
                  </p>
                </div>
              </div>

              {/* Address */}
              <div className="bg-electric/5 border border-electric/15 rounded-sm p-5">
                <p className="font-body text-white/40 text-xs uppercase tracking-widest mb-1">
                  Our Location
                </p>
                <p className="font-body text-white/80 text-sm leading-relaxed">
                  {CONTACT_INFO.address}
                </p>
                <a
                  href="#contact"
                  className="inline-block mt-3 text-electric font-body text-xs uppercase tracking-widest hover:text-electric-300 transition-colors"
                >
                  View on map →
                </a>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}