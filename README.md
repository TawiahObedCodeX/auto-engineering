# Auto Electrical Engineer Pro – Frontend Website

> A high-performance, visually striking, and fully responsive frontend website for a professional auto electrical engineer.  
> Built with Next.js 14, Tailwind CSS, and Framer Motion, this project delivers a seamless user experience with advanced animations, an intuitive booking system, and a modern, trustworthy design.

---

## 📋 Table of Contents

- [Project Overview](#project-overview)
- [Tech Stack & Packages](#tech-stack--packages)
- [Design System](#design-system)
  - [Color Palette](#color-palette)
  - [Typography](#typography)
  - [UI/UX Principles](#uiux-principles)
- [Animations & Interactions](#animations--interactions)
- [Layout & Page Structure](#layout--page-structure)
- [Folder Structure](#folder-structure)
- [Key Components & Implementation](#key-components--implementation)
  - [Booking Appointment Logic](#booking-appointment-logic)
  - [Location Map Integration](#location-map-integration)
- [Getting Started (Clone & Run)](#getting-started-clone--run)
- [Environment Variables](#environment-variables)
- [Deployment](#deployment)
- [Future Enhancements](#future-enhancements)

---

## 🚀 Project Overview

This is a **frontend-only** website for a specialised auto electrical engineer. It showcases:

- **Professional services** – diagnostics, repairs, electrical system optimisation.
- **State‑of‑the‑art machinery** – diagnostic scanners, oscilloscopes, and specialised tools.
- **All car makes** – from European luxury to Japanese reliability, every vehicle is welcome.
- **Online appointment booking** – users can schedule a visit directly.
- **Location & contact** – interactive map and direct contact details.

The site is built to impress with **mind‑blowing animations**, a **responsive layout**, and a **strong, credible** visual identity that builds trust with customers.

---

## ⚙️ Tech Stack & Packages

| Category          | Technology / Package                                | Purpose                                                                 |
|-------------------|-----------------------------------------------------|-------------------------------------------------------------------------|
| **Framework**     | [Next.js 14](https://nextjs.org/) (App Router)      | React framework with server components, routing, and performance.      |
| **Language**      | TypeScript                                          | Type safety, better developer experience.                               |
| **Styling**       | [Tailwind CSS](https://tailwindcss.com/)            | Utility‑first CSS for rapid, consistent UI development.                |
| **Animations**    | [Framer Motion](https://www.framer.com/motion/)     | Advanced page transitions, scroll‑triggered animations, and gestures.  |
| **Forms**         | [React Hook Form](https://react-hook-form.com/) + [Zod](https://zod.dev/) | Efficient form handling with robust validation.                        |
| **Date Picker**   | [react-datepicker](https://reactdatepicker.com/)    | User‑friendly appointment date & time selection.                       |
| **Icons**         | [Lucide React](https://lucide.dev/)                 | Clean, consistent icon set.                                             |
| **Maps**          | [Leaflet](https://leafletjs.com/) + [React Leaflet](https://react-leaflet.js.org/) | Interactive, self‑hosted map (no API key required for basic use).      |
| **Email Service** | [EmailJS](https://www.emailjs.com/)                 | Frontend‑only email sending for appointment confirmations.             |
| **Fonts**         | `next/font` (Google Fonts)                          | Optimised loading of custom fonts.                                      |
| **Linting**       | ESLint + Prettier                                   | Code quality and formatting.                                            |

---

## 🎨 Design System

### Color Palette

| Role           | Color Name       | Hex Code   | Usage                                          |
|----------------|------------------|------------|------------------------------------------------|
| **Primary**    | Deep Navy        | `#0A192F`  | Headers, buttons, footer background.           |
| **Secondary**  | Vibrant Orange   | `#FF6B35`  | Call‑to‑action buttons, accent highlights.     |
| **Accent**     | Electric Blue    | `#00A6C4`  | Hover states, icons, special elements.         |
| **Background** | Off White        | `#F9F9F9`  | Main page background.                          |
| **Text**       | Dark Slate       | `#1E2A3A`  | Body text.                                     |
| **Text Light** | Light Gray       | `#94A3B8`  | Secondary text, labels.                        |

> **Why these colours?**  
> Navy conveys reliability and expertise; orange adds energy and urgency; electric blue represents high‑tech diagnostics. The combination feels professional yet approachable.

### Typography

| Element       | Font Family                          | Weight       | Size (Desktop)   |
|---------------|--------------------------------------|--------------|------------------|
| Headings      | `'Poppins', sans-serif`              | 600–800      | 2rem – 4rem      |
| Body          | `'Inter', sans-serif`                | 400–500      | 1rem – 1.125rem  |
| Buttons/Links | `'Inter', sans-serif`                | 500          | 0.875rem – 1rem  |

- **Font loading:** Using `next/font` to preload and avoid layout shift.
- **Line height:** 1.5 for body, 1.2 for headings.

### UI/UX Principles

- **Glassmorphism cards:** `backdrop-blur` with semi‑transparent backgrounds for modern, layered look.
- **Consistent spacing:** 8‑point grid system (Tailwind’s spacing scale).
- **Accessibility:** Sufficient contrast, focus rings, semantic HTML.
- **Responsive:** Mobile‑first approach, breakpoints at `640px`, `768px`, `1024px`, `1280px`.

---

## ✨ Animations & Interactions

We leverage **Framer Motion** to create a dynamic, engaging experience:

| Animation Type            | Implementation                                                                                 |
|---------------------------|------------------------------------------------------------------------------------------------|
| **Page Transitions**      | `motion.div` with `initial`, `animate`, `exit` on route changes (using `useRouter`).          |
| **Scroll‑Triggered**      | `useInView` hook – elements fade up when they enter the viewport.                              |
| **Staggered Children**    | Cards in services section appear one after another.                                            |
| **Hover Effects**         | Buttons scale up, cards lift with shadow, icons spin.                                          |
| **Hero Background**       | Animated gradient orb that moves on mouse move (parallax).                                     |
| **Loading State**         | Skeleton screens with shimmer effect while booking form submits.                               |
| **Navigation**            | Sticky header with underline animation on active link.                                         |

> All animations are performant – we use `transform` and `opacity` properties, avoiding layout thrashing.

---

## 🧱 Layout & Page Structure

The website is a **single‑page layout** with distinct, full‑width sections.  
The header is sticky; the footer contains contact info and quick links.

### Section Order (Home Page)

1. **Hero** – Bold headline, CTA buttons, animated background.
2. **About** – Story of the engineer, expertise, certifications.
3. **Diagnostic Tools & Machines** – Showcasing oscilloscopes, diagnostic scanners, etc. (grid with icons).
4. **Cars We Fix** – Logo grid of car brands (all makes, all models).
5. **Appointment Booking** – Form with date/time picker, personal details, vehicle info.
6. **Contact & Location** – Leaflet map + address, phone, email, opening hours.
7. **Footer** – Copyright, social links, navigation.

**Responsive Behaviour:**  
- Mobile: stacked sections, collapsible menu.  
- Tablet: two‑column layouts where appropriate.  
- Desktop: wide containers, maximum width `1280px`, margins auto.

---

## 📁 Folder Structure

```bash
.
├── public/                     # Static assets (images, icons, map tiles)
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── layout.tsx          # Root layout (fonts, metadata, providers)
│   │   ├── page.tsx            # Home page (imports sections)
│   │   └── globals.css         # Tailwind directives & custom styles
│   ├── components/
│   │   ├── layout/             # Header, Footer, MobileMenu
│   │   ├── sections/           # Hero, About, Tools, CarsWeFix, Booking, Contact
│   │   ├── ui/                 # Button, Card, AnimatedSection, Loader
│   │   └── forms/              # BookingForm, FormInput, DatePickerField
│   ├── hooks/                  # useScrollAnimation, useFormSubmit, useWindowSize
│   ├── lib/                    # utils, constants, emailjs config
│   ├── types/                  # TypeScript interfaces (BookingFormData, etc.)
│   └── styles/                 # Additional CSS modules (if needed)
├── .env.local                  # Environment variables (EmailJS, optional map key)
├── tailwind.config.ts          # Tailwind config (colors, fonts, plugins)
├── tsconfig.json               # TypeScript config
└── README.md                   # This file







This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
