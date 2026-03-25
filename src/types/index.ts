export interface BookingFormData {
  firstName: string
  lastName: string
  email: string
  phone: string
  carMake: string
  carModel: string
  carYear: string
  registrationNumber: string
  serviceType: string
  description: string
  preferredDate: Date | null
  preferredTime: string
}

export interface ServiceItem {
  id: string
  title: string
  description: string
  icon: string
}

export interface Tool {
  id: string
  name: string
  description: string
  icon: React.ReactNode
}

export interface CarBrand {
  name: string
  logo?: string
}

export interface NavLink {
  label: string
  href: string
}

export interface ContactInfo {
  address: string
  phone: string
  email: string
  hours: {
    weekdays: string
    saturday: string
    sunday: string
  }
}