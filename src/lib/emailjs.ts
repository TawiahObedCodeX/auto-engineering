import emailjs from '@emailjs/browser'
import type { BookingFormData } from '@/types'

// ─── Replace these with your real EmailJS credentials ────────────────────────
const SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID ?? ''
const TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID ?? ''
const PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY ?? ''
// ─────────────────────────────────────────────────────────────────────────────

export const initEmailJS = () => {
  if (PUBLIC_KEY) {
    emailjs.init(PUBLIC_KEY)
  }
}

export const sendBookingEmail = async (data: BookingFormData): Promise<void> => {
  const templateParams = {
    to_email: 'info@egealautoshop.com',
    from_name: `${data.firstName} ${data.lastName}`,
    from_email: data.email,
    phone: data.phone,
    car_make: data.carMake,
    car_model: data.carModel,
    car_year: data.carYear,
    registration: data.registrationNumber,
    service_type: data.serviceType,
    description: data.description || 'No additional details provided.',
    preferred_date: data.preferredDate
      ? data.preferredDate.toLocaleDateString('en-GB', {
          weekday: 'long',
          year: 'numeric',
          month: 'long',
          day: 'numeric',
        })
      : 'Not specified',
    preferred_time: data.preferredTime,
  }

  await emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY)
}

// Customer confirmation email (optional second template)
export const sendCustomerConfirmation = async (
  data: BookingFormData
): Promise<void> => {
  const CONFIRM_TEMPLATE_ID =
    process.env.NEXT_PUBLIC_EMAILJS_CONFIRM_TEMPLATE_ID ?? TEMPLATE_ID

  const templateParams = {
    to_email: data.email,
    to_name: data.firstName,
    service_type: data.serviceType,
    preferred_date: data.preferredDate
      ? data.preferredDate.toLocaleDateString('en-GB', {
          weekday: 'long',
          year: 'numeric',
          month: 'long',
          day: 'numeric',
        })
      : 'Not specified',
    preferred_time: data.preferredTime,
    shop_phone: '+233 24 000 0000',
    shop_address: '12 Industrial Road, Tema, Greater Accra, Ghana',
  }

  await emailjs.send(SERVICE_ID, CONFIRM_TEMPLATE_ID, templateParams, PUBLIC_KEY)
}