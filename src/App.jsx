import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { Features } from './components/Features'
import { Pricing } from './components/Pricing'
import { Testimonials } from './components/Testimonials'
import { FAQs } from './components/FAQs'
import { Footer } from './components/Footer'




function App() {
  return (
    <div className='min-h-screen bg-[#0a0a0f] text-white'>
      <Navbar />
      <Hero />
      <Features />
      <Pricing />
      <Testimonials />
      <FAQs />
      <Footer />
    </div>
  )
}

export default App
