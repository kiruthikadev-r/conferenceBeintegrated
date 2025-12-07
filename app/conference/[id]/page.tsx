"use client"

import { useParams } from "next/navigation"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import ConferenceDetailsComponent from "@/components/conference-details"

export default function ConferenceDetailPage() {
  const params = useParams()
  const id = params.id as string

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <ConferenceDetailsComponent conferenceId={id} />
      <Footer />
    </div>
  )
}
