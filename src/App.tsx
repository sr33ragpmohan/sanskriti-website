import { LazyMotion, MotionConfig, domAnimation } from 'framer-motion'
import { ContactChooserProvider } from './components/contact/ContactChooser'
import { Footer } from './components/layout/Footer'
import { MobileActionBar } from './components/layout/MobileActionBar'
import { Navbar } from './components/layout/Navbar'
import { About } from './components/sections/About'
import { Approach } from './components/sections/Approach'
import { CallToAction } from './components/sections/CallToAction'
import { Contact } from './components/sections/Contact'
import { Gallery } from './components/sections/Gallery'
import { Hero } from './components/sections/Hero'
import { Services } from './components/sections/Services'

export default function App() {
  return (
    // LazyMotion + `m` components keep the animation bundle small.
    <LazyMotion features={domAnimation} strict>
      <MotionConfig reducedMotion="user">
        {/* Every WhatsApp / Call button opens a chooser for the three numbers. */}
        <ContactChooserProvider>
          <a href="#main" className="skip-link">
            Skip to content
          </a>
          <Navbar />
          <main id="main">
            <Hero />
            <About />
            <Services />
            <Approach />
            <Gallery />
            <CallToAction />
            <Contact />
          </main>
          <Footer />
          <MobileActionBar />
        </ContactChooserProvider>
      </MotionConfig>
    </LazyMotion>
  )
}
