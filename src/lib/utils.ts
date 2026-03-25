import { type ClassValue, clsx } from 'clsx'

export function cn(...inputs: ClassValue[]) {
  // Simple className merger - install clsx if preferred
  return inputs
    .flat()
    .filter(Boolean)
    .join(' ')
    .replace(/\s+/g, ' ')
    .trim()
}

export function formatDate(date: Date): string {
  return date.toLocaleDateString('en-GB', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

export function isWeekend(date: Date): boolean {
  const day = date.getDay()
  return day === 0 // Sunday closed; Saturday half-day allowed
}

export function getMinBookingDate(): Date {
  const tomorrow = new Date()
  tomorrow.setDate(tomorrow.getDate() + 1)
  return tomorrow
}