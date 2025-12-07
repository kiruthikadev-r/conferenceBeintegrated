import Navigation from "@/components/navigation"
import Hero from "@/components/hero"
import ConferenceShowcase from "@/components/conference-showcase"
import Testimonials from "@/components/testimonials"
import CTA from "@/components/cta"
import Footer from "@/components/footer"

export const metadata = {
  title: "MedGlobal Connect - Medical Conference Discovery",
  description: "Discover and register for medical conferences, workshops, and symposiums worldwide.",
}

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <ConferenceShowcase />
      <Testimonials />
      <CTA />
      <Footer />
    </div>
  )
}
