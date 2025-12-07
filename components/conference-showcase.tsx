"use client"

import Link from "next/link"
import { MapPin, Calendar, Users, ArrowRight } from "lucide-react"

interface Conference {
  id: string
  title: string
  organization: string
  location: string
  date: string
  specialization: string
  format: string
  attendees: number
  image: string
}

const conferences: Conference[] = [
  {
    id: "1",
    title: "International Cardiology Summit 2025",
    organization: "World Heart Federation",
    location: "Singapore",
    date: "May 15-17, 2025",
    specialization: "Cardiology",
    format: "Hybrid",
    attendees: 3500,
    image: "/cardiology-conference.jpg",
  },
  {
    id: "2",
    title: "Neurology Research Conference",
    organization: "European Neurology Society",
    location: "Berlin, Germany",
    date: "June 20-22, 2025",
    specialization: "Neurology",
    format: "In-Person",
    attendees: 2800,
    image: "/neurology-research.jpg",
  },
  {
    id: "3",
    title: "Global Surgery Symposium",
    organization: "American College of Surgeons",
    location: "Chicago, USA",
    date: "July 10-12, 2025",
    specialization: "Surgery",
    format: "In-Person",
    attendees: 4200,
    image: "/surgery-symposium.jpg",
  },
  {
    id: "4",
    title: "Digital Health Innovation Forum",
    organization: "Health Tech Alliance",
    location: "Virtual",
    date: "August 5-7, 2025",
    specialization: "Digital Health",
    format: "Online",
    attendees: 5000,
    image: "/digital-health-concept.png",
  },
]

export default function ConferenceShowcase() {
  return (
    <section id="featured" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 space-y-4">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">Featured Conferences</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore our latest medical conferences and events across various specializations
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {conferences.map((conf) => (
            <Link key={conf.id} href={`/conference/${conf.id}`}>
              <div className="group h-full bg-card border border-border rounded-xl overflow-hidden hover:shadow-lg hover:border-primary/50 transition-all duration-300 cursor-pointer">
                <div className="relative h-48 bg-muted overflow-hidden">
                  <img
                    src={conf.image || "/placeholder.svg"}
                    alt={conf.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4 bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-sm font-medium">
                    {conf.format}
                  </div>
                </div>

                <div className="p-6 space-y-4">
                  <div className="space-y-2">
                    <p className="text-sm text-primary font-semibold">{conf.specialization}</p>
                    <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition">
                      {conf.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">{conf.organization}</p>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <MapPin size={16} className="text-secondary" />
                      {conf.location}
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Calendar size={16} className="text-secondary" />
                      {conf.date}
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Users size={16} className="text-secondary" />
                      {conf.attendees.toLocaleString()} attendees
                    </div>
                  </div>

                  <button className="w-full mt-4 py-2 bg-primary text-primary-foreground rounded-lg font-medium hover:opacity-90 transition flex items-center justify-center gap-2 group-hover:gap-3">
                    Register Now
                    <ArrowRight size={16} />
                  </button>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/conferences"
            className="inline-flex items-center gap-2 px-6 py-3 border border-primary text-primary rounded-lg font-medium hover:bg-primary hover:text-primary-foreground transition"
          >
            View All Conferences
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  )
}
