'use client'

import dynamic from 'next/dynamic'
import { MapPin, Phone, Mail, Clock, ExternalLink } from 'lucide-react'
import AnimatedSection from '@/app/Components/ui/AnimatedSection'
import { CONTACT_INFO, MAP_CENTER } from '@/lib/constants'

// Dynamically import the map to avoid SSR issues with Leaflet
const LeafletMap = dynamic(() => import('./LeafletMap'), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full min-h-[480px] rounded-sm bg-navy/10 animate-pulse flex items-center justify-center">
      <span className="font-body text-navy/30 text-sm">Loading map…</span>
    </div>
  ),
})

const contactItems = [
  {
    Icon: MapPin,
    label: 'Address',
    value: CONTACT_INFO.address,
    // FIXED: Corrected template literal and Google Maps URL format
    href: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(CONTACT_INFO.address)}`,
    linkText: 'Get Directions',
    color: 'orange' as const,
  },
  {
    Icon: Phone,
    label: 'Phone',
    value: CONTACT_INFO.phone,
    href: `tel:${CONTACT_INFO.phone}`,
    linkText: 'Call Now',
    color: 'electric' as const,
  },
  {
    Icon: Mail,
    label: 'Email',
    value: CONTACT_INFO.email,
    href: `mailto:${CONTACT_INFO.email}`,
    linkText: 'Send Email',
    color: 'orange' as const,
  },
]

const hours = [
  { day: 'Monday – Friday', time: '7:30 AM – 6:00 PM', open: true },
  { day: 'Saturday', time: '8:00 AM – 4:00 PM', open: true },
  { day: 'Sunday', time: 'Closed', open: false },
]

export default function Contact() {
  // FIXED: Corrected template literal for coordinates
  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${MAP_CENTER[0]},${MAP_CENTER[1]}`

  return (
    <section id="contact" className="py-20 lg:py-28 bg-[#F9F9F9] overflow-hidden">
      <div className="section-container">
        {/* Header */}
        <AnimatedSection className="text-center mb-14">
          <span className="inline-block font-body text-xs font-semibold uppercase tracking-[0.25em] text-electric mb-3">
            Find Us
          </span>
          <h2 className="section-heading text-navy mb-5">
            Contact & <span className="text-gradient">Location</span>
          </h2>
          <p className="section-subheading mx-auto text-center text-slate-dark/60">
            Visit us in Tema or get in touch — we're always happy to answer questions
            before you drive in.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 items-start">
          {/* Left: contact details & hours */}
          <AnimatedSection direction="left" className="lg:col-span-2 space-y-5">
            {contactItems.map(({ Icon, label, value, href, linkText, color }) => (
              <div
                key={label}
                className="bg-white border border-slate-200/80 rounded-sm p-5 hover:border-orange/30 hover:shadow-md transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div
                    className={`w-10 h-10 rounded-sm flex items-center justify-center shrink-0 ${
                      color === 'orange' ? 'bg-orange/10' : 'bg-electric/10'
                    }`}
                  >
                    <Icon
                      size={18}
                      className={color === 'orange' ? 'text-orange' : 'text-electric'}
                    />
                  </div>
                  <div className="min-w-0">
                    <p className="font-body text-slate-dark/40 text-xs uppercase tracking-widest mb-1">
                      {label}
                    </p>
                    <p className="font-body text-slate-dark font-medium text-sm leading-snug mb-2 break-words">
                      {value}
                    </p>
                    <a
                      href={href}
                      target={href.startsWith('http') ? '_blank' : undefined}
                      rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="inline-flex items-center gap-1 font-body text-xs uppercase tracking-widest text-orange hover:text-orange-600 transition-colors"
                    >
                      {linkText}
                      {href.startsWith('http') && <ExternalLink size={10} />}
                    </a>
                  </div>
                </div>
              </div>
            ))}

            {/* Opening hours */}
            <div className="bg-navy rounded-sm p-6">
              <div className="flex items-center gap-2 mb-4">
                <Clock size={16} className="text-orange" />
                <h3 className="font-heading font-bold text-white text-sm uppercase tracking-widest">
                  Opening Hours
                </h3>
              </div>
              <div className="space-y-3">
                {hours.map(({ day, time, open }) => (
                  <div
                    key={day}
                    className="flex items-center justify-between border-b border-white/5 pb-3 last:border-0 last:pb-0"
                  >
                    <span className="font-body text-white/60 text-sm">{day}</span>
                    <span
                      className={`font-body font-medium text-sm ${
                        open ? 'text-electric' : 'text-white/30'
                      }`}
                    >
                      {time}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>

          {/* Right: map */}
          <AnimatedSection direction="right" delay={0.15} className="lg:col-span-3">
            <div className="relative rounded-sm overflow-hidden border border-slate-200/80 shadow-md h-[480px]">
              <LeafletMap />

              {/* Open in Google Maps button */}
              <div className="absolute bottom-4 right-4 z-[400]">
                <a
                  href={googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-white text-navy font-body font-semibold text-xs uppercase tracking-widest px-4 py-2.5 rounded-sm shadow-lg hover:bg-navy hover:text-white transition-all duration-200"
                >
                  <ExternalLink size={12} />
                  Open in Google Maps
                </a>
              </div>
            </div>

            {/* Bottom strip */}
            <div className="mt-4 bg-navy rounded-sm px-5 py-4 flex flex-col sm:flex-row items-center justify-between gap-3">
              <p className="font-body text-white/50 text-sm text-center sm:text-left">
                Walk-ins welcome during opening hours — no appointment needed for diagnostics.
              </p>
              <a href="#booking" className="bg-orange hover:bg-orange-600 text-white px-6 py-2 rounded-sm text-xs font-bold uppercase tracking-widest transition-colors whitespace-nowrap">
                Book Online
              </a>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}