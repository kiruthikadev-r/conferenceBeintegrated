"use client"

import { useState } from "react"
import Link from "next/link"
import { MapPin, Calendar, Users, Share2, Heart, ArrowLeft, Clock, Award, CheckCircle } from "lucide-react"

interface ConferenceDetailsProps {
  conferenceId: string
}

// Mock conference data
const conferenceData: { [key: string]: any } = {
  "1": {
    id: "1",
    title: "International Cardiology Summit 2025",
    organization: "World Heart Federation",
    location: "Singapore",
    date: "May 15-17, 2025",
    time: "9:00 AM - 5:00 PM SGT",
    specialization: "Cardiology",
    format: "Hybrid",
    attendees: 3500,
    image: "/placeholder.svg?key=abqfh",
    description:
      "The International Cardiology Summit brings together leading cardiologists and researchers from around the world to discuss the latest advances in cardiovascular medicine.",
    fullDescription: `Join us for the most comprehensive gathering of cardiology professionals in 2025. This hybrid summit combines the best of in-person and virtual experiences, allowing you to connect with thousands of cardiologists from over 75 countries.
    
We will explore cutting-edge research, innovative treatment approaches, and the future of cardiovascular care. With keynote sessions from Nobel Prize winners, hands-on workshops, and networking opportunities, this summit is a must-attend event for any cardiology professional.`,
    schedule: [
      {
        day: "Day 1 - May 15",
        sessions: [
          { time: "9:00 AM", title: "Opening Keynote: The Future of Cardiac Care", speaker: "Dr. James Anderson" },
          { time: "10:30 AM", title: "Advanced Imaging Techniques", speaker: "Dr. Sarah Chen" },
          { time: "1:00 PM", title: "Lunch & Networking", speaker: "" },
          { time: "2:00 PM", title: "Interventional Cardiology Workshop", speaker: "Multiple Speakers" },
        ],
      },
      {
        day: "Day 2 - May 16",
        sessions: [
          { time: "9:00 AM", title: "Heart Failure Management", speaker: "Dr. Michael Johnson" },
          { time: "10:45 AM", title: "Arrhythmia Symposium", speaker: "Dr. Lisa Wong" },
          { time: "1:00 PM", title: "Lunch & Networking", speaker: "" },
          { time: "2:30 PM", title: "Research Presentations", speaker: "Various Researchers" },
        ],
      },
    ],
    speakers: [
      {
        name: "Dr. James Anderson",
        title: "Chief Cardiologist",
        affiliation: "Stanford Hospital",
        image: "/placeholder.svg?key=speaker1",
      },
      {
        name: "Dr. Sarah Chen",
        title: "Professor of Cardiology",
        affiliation: "Harvard Medical School",
        image: "/placeholder.svg?key=speaker2",
      },
      {
        name: "Dr. Michael Johnson",
        title: "Interventional Cardiologist",
        affiliation: "Johns Hopkins University",
        image: "/placeholder.svg?key=speaker3",
      },
      {
        name: "Dr. Lisa Wong",
        title: "Electrophysiology Specialist",
        affiliation: "Mayo Clinic",
        image: "/placeholder.svg?key=speaker4",
      },
    ],
    highlights: [
      "Live case demonstrations and hands-on workshops",
      "Networking with 3,500+ cardiology professionals",
      "Access to latest research and publications",
      "Certificate of attendance",
      "Virtual access option for remote participants",
    ],
    pricing: {
      earlyBird: 299,
      standard: 399,
      student: 149,
    },
  },
  "2": {
    id: "2",
    title: "Neurology Research Conference",
    organization: "European Neurology Society",
    location: "Berlin, Germany",
    date: "June 20-22, 2025",
    specialization: "Neurology",
    format: "In-Person",
    attendees: 2800,
    image: "/placeholder.svg?key=d4da8",
    description: "Annual gathering of neurology professionals",
  },
}

export default function ConferenceDetailsComponent({ conferenceId }: ConferenceDetailsProps) {
  const conference = conferenceData[conferenceId]
  const [isSaved, setIsSaved] = useState(false)

  if (!conference) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-12">
        <Link href="/conferences" className="flex items-center gap-2 text-primary hover:text-primary/80">
          <ArrowLeft size={18} />
          Back to Conferences
        </Link>
        <p className="mt-8 text-center text-muted-foreground">Conference not found</p>
      </div>
    )
  }

  return (
    <main className="max-w-6xl mx-auto px-4 py-8">
      <Link href="/conferences" className="flex items-center gap-2 text-primary hover:text-primary/80 mb-8">
        <ArrowLeft size={18} />
        Back to Conferences
      </Link>

      {/* Hero Image */}
      <div className="relative h-96 bg-muted rounded-xl overflow-hidden mb-8">
        <img
          src={conference.image || "/placeholder.svg"}
          alt={conference.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
          <div className="p-8 text-white">
            <div className="inline-block bg-secondary text-secondary-foreground px-4 py-1 rounded-full mb-4">
              {conference.format}
            </div>
            <h1 className="text-4xl font-bold mb-2">{conference.title}</h1>
            <p className="text-lg opacity-90">{conference.organization}</p>
          </div>
        </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-8">
          {/* Key Info */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-card border border-border rounded-lg p-4">
              <div className="flex items-start gap-3">
                <Calendar className="text-secondary mt-1" size={20} />
                <div className="min-w-0">
                  <p className="text-xs text-muted-foreground">Dates</p>
                  <p className="text-sm font-semibold text-foreground">{conference.date}</p>
                </div>
              </div>
            </div>
            <div className="bg-card border border-border rounded-lg p-4">
              <div className="flex items-start gap-3">
                <MapPin className="text-secondary mt-1" size={20} />
                <div className="min-w-0">
                  <p className="text-xs text-muted-foreground">Location</p>
                  <p className="text-sm font-semibold text-foreground">{conference.location}</p>
                </div>
              </div>
            </div>
            <div className="bg-card border border-border rounded-lg p-4">
              <div className="flex items-start gap-3">
                <Users className="text-secondary mt-1" size={20} />
                <div className="min-w-0">
                  <p className="text-xs text-muted-foreground">Attendees</p>
                  <p className="text-sm font-semibold text-foreground">{conference.attendees.toLocaleString()}</p>
                </div>
              </div>
            </div>
            <div className="bg-card border border-border rounded-lg p-4">
              <div className="flex items-start gap-3">
                <Award className="text-secondary mt-1" size={20} />
                <div className="min-w-0">
                  <p className="text-xs text-muted-foreground">Field</p>
                  <p className="text-sm font-semibold text-foreground">{conference.specialization}</p>
                </div>
              </div>
            </div>
          </div>

          {/* About */}
          <div className="bg-card border border-border rounded-xl p-6">
            <h2 className="text-2xl font-bold text-foreground mb-4">About</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">{conference.description}</p>
            {conference.fullDescription && (
              <p className="text-muted-foreground leading-relaxed whitespace-pre-line">{conference.fullDescription}</p>
            )}
          </div>

          {/* Highlights */}
          {conference.highlights && (
            <div className="bg-card border border-border rounded-xl p-6">
              <h2 className="text-2xl font-bold text-foreground mb-4">Highlights</h2>
              <ul className="space-y-3">
                {conference.highlights.map((highlight: string, idx: number) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle className="text-secondary mt-0.5 flex-shrink-0" size={20} />
                    <span className="text-foreground">{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Schedule */}
          {conference.schedule && (
            <div className="bg-card border border-border rounded-xl p-6">
              <h2 className="text-2xl font-bold text-foreground mb-6">Schedule</h2>
              <div className="space-y-6">
                {conference.schedule.map((day: any, dayIdx: number) => (
                  <div key={dayIdx}>
                    <h3 className="font-semibold text-primary mb-4">{day.day}</h3>
                    <div className="space-y-3">
                      {day.sessions.map((session: any, sessionIdx: number) => (
                        <div key={sessionIdx} className="flex gap-4 p-4 bg-muted rounded-lg">
                          <div className="flex items-center gap-2 text-sm font-semibold text-secondary min-w-fit">
                            <Clock size={16} />
                            {session.time}
                          </div>
                          <div className="flex-1">
                            <p className="font-medium text-foreground">{session.title}</p>
                            {session.speaker && <p className="text-sm text-muted-foreground">{session.speaker}</p>}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Speakers */}
          {conference.speakers && (
            <div className="bg-card border border-border rounded-xl p-6">
              <h2 className="text-2xl font-bold text-foreground mb-6">Featured Speakers</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {conference.speakers.map((speaker: any, idx: number) => (
                  <div key={idx} className="text-center">
                    <img
                      src={speaker.image || "/placeholder.svg"}
                      alt={speaker.name}
                      className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                    />
                    <h3 className="font-semibold text-foreground">{speaker.name}</h3>
                    <p className="text-sm text-primary">{speaker.title}</p>
                    <p className="text-sm text-muted-foreground">{speaker.affiliation}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Sidebar */}
        <div className="lg:col-span-1">
          <div className="sticky top-24 space-y-4">
            {/* CTA Card */}
            <div className="bg-gradient-to-br from-primary to-secondary rounded-xl p-6 text-primary-foreground space-y-4">
              <div>
                <p className="text-sm opacity-90 mb-1">Starting from</p>
                <p className="text-3xl font-bold">${conference.pricing?.student}</p>
                <p className="text-xs opacity-75">Student pricing</p>
              </div>

              <Link
                href="/signup"
                className="block w-full py-3 bg-primary-foreground text-primary rounded-lg font-semibold hover:opacity-90 transition text-center"
              >
                Register Now
              </Link>

              <button className="w-full py-2 border border-primary-foreground rounded-lg font-medium hover:bg-primary-foreground/10 transition">
                Learn More
              </button>
            </div>

            {/* Save & Share */}
            <div className="flex gap-2">
              <button
                onClick={() => setIsSaved(!isSaved)}
                className={`flex-1 py-2 border rounded-lg font-medium transition flex items-center justify-center gap-2 ${
                  isSaved
                    ? "bg-secondary/10 border-secondary text-secondary"
                    : "border-border text-muted-foreground hover:border-secondary"
                }`}
              >
                <Heart size={18} className={isSaved ? "fill-current" : ""} />
                <span className="hidden sm:inline">Save</span>
              </button>
              <button className="flex-1 py-2 border border-border text-muted-foreground rounded-lg font-medium hover:border-secondary transition flex items-center justify-center gap-2">
                <Share2 size={18} />
                <span className="hidden sm:inline">Share</span>
              </button>
            </div>

            {/* Additional Info */}
            <div className="bg-card border border-border rounded-xl p-4 space-y-3">
              <h3 className="font-semibold text-foreground">About Host</h3>
              <p className="text-sm text-muted-foreground">{conference.organization}</p>
              <button className="text-sm text-secondary font-medium hover:text-primary transition">
                View more events →
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
