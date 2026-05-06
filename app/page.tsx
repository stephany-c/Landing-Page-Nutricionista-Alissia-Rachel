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
import { WhatsappButton } from "@/components/whatsapp-button"
import { WaveDivider, WaveLayered } from "@/components/wave-divider"

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Navbar />
      <Hero />
      
      {/* Wave after Hero */}
      <div className="bg-background -mt-1">
        <WaveDivider variant="wave1" fillColor="fill-secondary" />
      </div>
      
      <div className="bg-secondary">
        <About />
      </div>
      
      {/* Wave after About */}
      <div className="bg-secondary -mb-1">
        <WaveDivider variant="wave2" fillColor="fill-primary" />
      </div>
      
      <div className="bg-primary">
        <Stats />
      </div>
      
      {/* Wave after Stats */}
      <div className="bg-primary -mb-1">
        <WaveDivider variant="wave3" fillColor="fill-background" />
      </div>
      
      <TargetAudience />
      
      {/* Wave layered transition */}
      <WaveLayered topColor="fill-primary/5" bottomColor="fill-secondary" />
      
      <div className="bg-secondary">
        <Differentials />
      </div>
      
      {/* Wave after Differentials */}
      <div className="bg-secondary -mb-1">
        <WaveDivider variant="wave4" fillColor="fill-background" />
      </div>
      
      <Services />
      
      {/* Wave before Methodology */}
      <div className="bg-background -mb-1">
        <WaveDivider variant="wave1" fillColor="fill-secondary" />
      </div>
      
      <div className="bg-secondary">
        <Methodology />
      </div>
      
      {/* Wave after Methodology */}
      <div className="bg-secondary -mb-1">
        <WaveDivider variant="wave2" fillColor="fill-background" />
      </div>
      
      <Results />
      
      {/* Wave before Gallery */}
      <div className="bg-background -mb-1">
        <WaveDivider variant="wave3" fillColor="fill-secondary" />
      </div>
      
      <div className="bg-secondary">
        <Gallery />
      </div>
      
      {/* Wave after Gallery */}
      <div className="bg-secondary -mb-1">
        <WaveDivider variant="wave4" fillColor="fill-background" />
      </div>
      
      <Testimonials />
      
      {/* Wave before FAQ */}
      <div className="bg-background -mb-1">
        <WaveDivider variant="wave1" fillColor="fill-secondary" />
      </div>
      
      <div className="bg-secondary">
        <FAQ />
      </div>
      
      {/* Wave before CTA */}
      <div className="bg-secondary -mb-1">
        <WaveDivider variant="wave2" fillColor="fill-primary" />
      </div>
      
      <div className="bg-primary">
        <CTASection />
      </div>
      
      {/* Wave before Footer */}
      <div className="bg-primary -mb-1">
        <WaveDivider variant="wave3" fillColor="fill-foreground" />
      </div>
      
      <Footer />
      <WhatsappButton />
    </main>
  )
}
