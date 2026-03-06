import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Services } from "@/components/services"
import { Stats } from "@/components/stats"
import { Testimonials } from "@/components/testimonials"
import { CTASection } from "@/components/cta-section"
import { Footer } from "@/components/footer"
import { Methodology } from "@/components/methodology"
import { FAQ } from "@/components/faq"
import { TargetAudience } from "@/components/target-audience"
import { Differentials } from "@/components/differentials"
import { Gallery } from "@/components/gallery"
import { Results } from "@/components/results"

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Stats />
      <TargetAudience />
      <Differentials />
      <Services />
      <Methodology />
      <Results />
      <Gallery />
      <Testimonials />
      <FAQ />
      <CTASection />
      <Footer />
    </main>
  )
}
