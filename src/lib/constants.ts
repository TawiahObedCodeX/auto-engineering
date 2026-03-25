import type { NavLink, ContactInfo } from '@/types'

export const BUSINESS_NAME = 'Egeal Auto Electrical'
export const BUSINESS_FULL_NAME = 'Egeal Auto Electrical Engineering Shop'
export const BUSINESS_TAGLINE = 'Precision Diagnostics. Expert Repairs. Every Vehicle.'

export const NAV_LINKS: NavLink[] = [
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#tools' },
  { label: 'Cars We Fix', href: '#cars' },
  { label: 'Book Appointment', href: '#booking' },
  { label: 'Contact', href: '#contact' },
]

export const CONTACT_INFO: ContactInfo = {
  address: '12 Industrial Road, Tema, Greater Accra, Ghana',
  phone: '+233 24 000 0000',
  email: 'info@egealautoshop.com',
  hours: {
    weekdays: 'Monday – Friday: 7:30 AM – 6:00 PM',
    saturday: 'Saturday: 8:00 AM – 4:00 PM',
    sunday: 'Sunday: Closed',
  },
}

export const SERVICES = [
  {
    id: 'diagnostics',
    title: 'Advanced Diagnostics',
    description:
      'Full computer diagnostics using state-of-the-art scanners to pinpoint faults quickly and accurately.',
    icon: '🔬',
  },
  {
    id: 'wiring',
    title: 'Wiring & Rewiring',
    description:
      'Complete automotive wiring repairs, upgrades, and custom harness installation for all vehicle types.',
    icon: '⚡',
  },
  {
    id: 'ecu',
    title: 'ECU & Module Repair',
    description:
      'Expert repair and reprogramming of engine control units, body control modules, and sensor systems.',
    icon: '🖥️',
  },
  {
    id: 'alternator',
    title: 'Alternators & Starters',
    description:
      'Testing, rebuilding, and replacing alternators, starters, and charging system components.',
    icon: '🔋',
  },
  {
    id: 'lighting',
    title: 'Lighting Systems',
    description:
      'LED upgrades, HID conversions, DRL installation, and full lighting system diagnostics and repair.',
    icon: '💡',
  },
  {
    id: 'aircon',
    title: 'A/C Electrical',
    description:
      'Air conditioning electrical fault diagnosis, compressor clutch repair, and climate control systems.',
    icon: '❄️',
  },
]

export const TOOLS = [
  {
    id: 'scanner',
    name: 'OBD-II Multi-Brand Scanner',
    description: 'Reads fault codes across all makes and models — live data, freeze frames, and actuation tests.',
  },
  {
    id: 'oscilloscope',
    name: 'Automotive Oscilloscope',
    description: 'Visualises electrical signals in real time to detect injector, sensor, and ignition faults.',
  },
  {
    id: 'multimeter',
    name: 'Digital Clamp Multimeter',
    description: 'Precision voltage, current, and resistance measurements throughout the electrical system.',
  },
  {
    id: 'programming',
    name: 'ECU Programming Unit',
    description: 'Reprograms and flashes control modules with manufacturer-level software.',
  },
  {
    id: 'battery',
    name: 'Battery & Charging Analyser',
    description: 'Tests battery health, CCA, and full charging system performance under load.',
  },
  {
    id: 'smoke',
    name: 'Smoke Leak Tester',
    description: 'Detects vacuum, boost, and exhaust leaks that trigger electrical fault codes.',
  },
]

export const CAR_BRANDS = [
  'Toyota', 'Mercedes-Benz', 'BMW', 'Volkswagen', 'Ford',
  'Honda', 'Nissan', 'Hyundai', 'Kia', 'Peugeot',
  'Renault', 'Mitsubishi', 'Isuzu', 'Volvo', 'Audi',
  'Land Rover', 'Lexus', 'Mazda', 'Subaru', 'Jeep',
  'Chevrolet', 'Opel', 'Suzuki', 'Citroën', 'Fiat',
]

export const SERVICE_TYPES = [
  'Full Vehicle Diagnostics',
  'Engine Electrical Fault',
  'Wiring / Rewiring',
  'ECU / Module Repair',
  'Alternator / Starter',
  'Lighting System',
  'Air Conditioning Electrical',
  'Battery & Charging System',
  'Immobiliser / Security System',
  'Other – Please Describe',
]

export const TIME_SLOTS = [
  '07:30 AM', '08:00 AM', '08:30 AM', '09:00 AM',
  '09:30 AM', '10:00 AM', '10:30 AM', '11:00 AM',
  '11:30 AM', '12:00 PM', '12:30 PM', '01:00 PM',
  '01:30 PM', '02:00 PM', '02:30 PM', '03:00 PM',
  '03:30 PM', '04:00 PM', '04:30 PM',
]

// Map coordinates — Tema, Ghana (update as needed)
export const MAP_CENTER: [number, number] = [5.6698, -0.0166]
export const MAP_ZOOM = 15