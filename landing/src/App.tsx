import { Hero } from './components/Hero'
import { ProductShowcase } from './components/ProductShowcase'
import { HowItWorks } from './components/HowItWorks'
import { GenreShowcase } from './components/GenreShowcase'
import { Footer } from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <ProductShowcase />
      <HowItWorks />
      <GenreShowcase />
      <Footer />
    </div>
  )
}
