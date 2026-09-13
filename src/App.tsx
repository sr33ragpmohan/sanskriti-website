import { LazyMotion, MotionConfig, domAnimation } from 'framer-motion'
import { Footer } from './components/layout/Footer'
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
      </MotionConfig>
    </LazyMotion>
  )
}
