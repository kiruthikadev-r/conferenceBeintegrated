"use client"

import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import OrganizerPortal from "@/components/organizer-portal"

export default function OrganizerPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <OrganizerPortal />
      <Footer />
    </div>
  )
}
