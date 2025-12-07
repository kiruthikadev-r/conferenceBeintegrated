"use client"

import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import ConferenceFilter from "@/components/conference-filter"
import ConferenceGrid from "@/components/conference-grid"
import { useState } from "react"

interface Conference {
  id: string
  title: string
  organization: string
  location: string
  country: string
  date: string
  specialization: string
  format: string
  attendees: number
  image: string
  description: string
}

const allConferences: Conference[] = [
  {
    id: "1",
    title: "International Cardiology Summit 2025",
    organization: "World Heart Federation",
    location: "Singapore",
    country: "Singapore",
    date: "May 15-17, 2025",
    specialization: "Cardiology",
    format: "Hybrid",
    attendees: 3500,
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=2070",
    description: "Leading conference on cardiovascular research and practice",
  },
  {
    id: "2",
    title: "Neurology Research Conference",
    organization: "European Neurology Society",
    location: "Berlin",
    country: "Germany",
    date: "June 20-22, 2025",
    specialization: "Neurology",
    format: "In-Person",
    attendees: 2800,
    image: "https://images.unsplash.com/photo-1559757175-5700dde675bc?auto=format&fit=crop&q=80&w=2070",
    description: "Annual gathering of neurology professionals",
  },
  {
    id: "3",
    title: "Global Surgery Symposium",
    organization: "American College of Surgeons",
    location: "Chicago",
    country: "USA",
    date: "July 10-12, 2025",
    specialization: "Surgery",
    format: "In-Person",
    attendees: 4200,
    image: "https://images.unsplash.com/photo-1551884170-09fb70a3a2ed?auto=format&fit=crop&q=80&w=2076",
    description: "Premier surgery conference with live demonstrations",
  },
  {
    id: "4",
    title: "Digital Health Innovation Forum",
    organization: "Health Tech Alliance",
    location: "Virtual",
    country: "Online",
    date: "August 5-7, 2025",
    specialization: "Digital Health",
    format: "Online",
    attendees: 5000,
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=2070",
    description: "Explore latest health tech innovations",
  },
  {
    id: "5",
    title: "Pediatrics and Child Health Conference",
    organization: "American Academy of Pediatrics",
    location: "New York",
    country: "USA",
    date: "September 8-10, 2025",
    specialization: "Pediatrics",
    format: "Hybrid",
    attendees: 2200,
    image: "https://images.unsplash.com/photo-1516574187841-693018f54746?auto=format&fit=crop&q=80&w=1974",
    description: "Advanced pediatric care and child health management",
  },
  {
    id: "6",
    title: "Oncology and Cancer Research Symposium",
    organization: "International Cancer Research Society",
    location: "Barcelona",
    country: "Spain",
    date: "October 12-14, 2025",
    specialization: "Oncology",
    format: "In-Person",
    attendees: 3600,
    image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=2080",
    description: "Latest breakthroughs in cancer treatment and research",
  },
  {
    id: "7",
    title: "Orthopedic Surgery Conference",
    organization: "American Academy of Orthopaedic Surgeons",
    location: "San Francisco",
    country: "USA",
    date: "November 5-7, 2025",
    specialization: "Orthopedics",
    format: "In-Person",
    attendees: 2900,
    image: "https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&fit=crop&q=80&w=2070",
    description: "Orthopedic techniques and sports medicine advances",
  },
  {
    id: "8",
    title: "Mental Health and Psychiatry Summit",
    organization: "World Psychiatric Association",
    location: "Amsterdam",
    country: "Netherlands",
    date: "December 1-3, 2025",
    specialization: "Psychiatry",
    format: "Hybrid",
    attendees: 2100,
    image: "https://images.unsplash.com/photo-1527613426441-4da17471b66d?auto=format&fit=crop&q=80&w=2070",
    description: "Mental health trends and psychiatric innovations",
  },
]

export default function ConferencesPage() {
  const [filtered, setFiltered] = useState(allConferences)
  const [filters, setFilters] = useState({
    specialization: "",
    format: "",
    country: "",
    searchTerm: "",
  })

  const handleFilter = (newFilters: typeof filters) => {
    setFilters(newFilters)

    let result = allConferences

    if (newFilters.searchTerm) {
      result = result.filter(
        (conf) =>
          conf.title.toLowerCase().includes(newFilters.searchTerm.toLowerCase()) ||
          conf.organization.toLowerCase().includes(newFilters.searchTerm.toLowerCase()),
      )
    }

    if (newFilters.specialization) {
      result = result.filter((conf) => conf.specialization === newFilters.specialization)
    }

    if (newFilters.format) {
      result = result.filter((conf) => conf.format === newFilters.format)
    }

    if (newFilters.country) {
      result = result.filter((conf) => conf.country === newFilters.country)
    }

    setFiltered(result)
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-2">Medical Conferences</h1>
          <p className="text-muted-foreground">
            Browse {filtered.length} conference{filtered.length !== 1 ? "s" : ""} from around the world
          </p>
        </div>

        <div className="grid lg:grid-cols-4 gap-8">
          <div className="lg:col-span-1">
            <ConferenceFilter onFilter={handleFilter} allConferences={allConferences} />
          </div>
          <div className="lg:col-span-3">
            <ConferenceGrid conferences={filtered} />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
