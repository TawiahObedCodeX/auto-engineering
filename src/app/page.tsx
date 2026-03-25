import Header from '@/app/Components/layout/Header'
import Footer from '@/app/Components/layout/Footer'
import Hero from '@/app/Components/sections/Hero'
import About from '@/app/Components/sections/About'
import Tools from '@/app/Components/sections/Tools'
import CarsWeFix from '@/app/Components/sections/CarsWeFix'
import Booking from '@/app/Components/sections/Booking'
import Contact from '@/app/Components/sections/Contact'

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Tools />
        <CarsWeFix />
        <Booking />
        <Contact />
      </main>
      <Footer />
    </>
  )
}