"use client"

import Link from "next/link"
import { MapPin, Calendar, Users } from "lucide-react"

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

export default function ConferenceGrid({ conferences }: { conferences: Conference[] }) {
  if (conferences.length === 0) {
    return (
      <div className="py-12 text-center">
        <p className="text-lg text-muted-foreground">No conferences found matching your filters.</p>
      </div>
    )
  }

  return (
    <div className="grid gap-6">
      {conferences.map((conf) => (
        <Link key={conf.id} href={`/conference/${conf.id}`}>
          <div className="group h-full bg-card border border-border rounded-xl overflow-hidden hover:shadow-lg hover:border-primary/50 transition-all duration-300 cursor-pointer">
            <div className="flex flex-col md:flex-row">
              <div className="relative h-48 md:h-auto md:w-48 bg-muted overflow-hidden flex-shrink-0">
                <img
                  src={conf.image || "/placeholder.svg"}
                  alt={conf.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4 md:top-2 md:right-2 bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-sm font-medium">
                  {conf.format}
                </div>
              </div>

              <div className="flex-1 p-6 flex flex-col justify-between">
                <div className="space-y-2 mb-4">
                  <p className="text-sm text-primary font-semibold">{conf.specialization}</p>
                  <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition">
                    {conf.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">{conf.organization}</p>
                </div>

                <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-6 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <MapPin size={16} className="text-secondary flex-shrink-0" />
                    {conf.location}
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar size={16} className="text-secondary flex-shrink-0" />
                    {conf.date}
                  </div>
                  <div className="flex items-center gap-2">
                    <Users size={16} className="text-secondary flex-shrink-0" />
                    {conf.attendees.toLocaleString()}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  )
}
