"use client"

import { Calendar, Heart, Download, Edit2, Lock } from "lucide-react"
import { useState } from "react"

interface DashboardContentProps {
  activeTab: string
}

const registeredConferences = [
  {
    id: 1,
    title: "International Cardiology Summit 2025",
    date: "May 15-17, 2025",
    location: "Singapore",
    status: "confirmed",
    ticketId: "TKT-2025-001",
  },
  {
    id: 2,
    title: "Digital Health Innovation Forum",
    date: "August 5-7, 2025",
    location: "Virtual",
    status: "confirmed",
    ticketId: "TKT-2025-002",
  },
]

const savedConferences = [
  {
    id: 1,
    title: "Neurology Research Conference",
    date: "June 20-22, 2025",
    location: "Berlin, Germany",
    savedDate: "2025-01-15",
  },
  {
    id: 2,
    title: "Global Surgery Symposium",
    date: "July 10-12, 2025",
    location: "Chicago, USA",
    savedDate: "2025-01-10",
  },
]

const certificates = [
  {
    id: 1,
    conference: "International Cardiology Summit 2024",
    date: "2024-05-17",
    hours: 24,
  },
  {
    id: 2,
    conference: "Digital Health Conference 2024",
    date: "2024-08-07",
    hours: 12,
  },
]

export default function DashboardContent({ activeTab }: DashboardContentProps) {
  const [isEditingProfile, setIsEditingProfile] = useState(false)
  const [profileData, setProfileData] = useState({
    fullName: "Dr. Sarah Johnson",
    email: "sarah@example.com",
    specialization: "Cardiology",
    institution: "Stanford Hospital",
    bio: "Cardiologist with 10+ years of clinical experience",
  })

  const renderContent = () => {
    switch (activeTab) {
      case "overview":
        return (
          <div className="space-y-6">
            <h1 className="text-3xl font-bold text-foreground">Welcome back, Dr. Johnson!</h1>

            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-card border border-border rounded-xl p-6">
                <p className="text-sm text-muted-foreground mb-1">Registered Events</p>
                <p className="text-3xl font-bold text-primary">2</p>
              </div>
              <div className="bg-card border border-border rounded-xl p-6">
                <p className="text-sm text-muted-foreground mb-1">Saved Conferences</p>
                <p className="text-3xl font-bold text-secondary">2</p>
              </div>
              <div className="bg-card border border-border rounded-xl p-6">
                <p className="text-sm text-muted-foreground mb-1">Certificates Earned</p>
                <p className="text-3xl font-bold text-primary">2</p>
              </div>
            </div>

            <div className="bg-card border border-border rounded-xl p-6">
              <h2 className="text-xl font-bold text-foreground mb-4">Upcoming Conferences</h2>
              <div className="space-y-3">
                {registeredConferences.map((conf) => (
                  <div key={conf.id} className="flex items-center justify-between p-4 bg-muted rounded-lg">
                    <div>
                      <p className="font-semibold text-foreground">{conf.title}</p>
                      <p className="text-sm text-muted-foreground">{conf.date}</p>
                    </div>
                    <span className="px-3 py-1 bg-secondary/10 text-secondary rounded-full text-sm font-medium">
                      {conf.status}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )

      case "registered":
        return (
          <div className="space-y-4">
            <h1 className="text-3xl font-bold text-foreground mb-6">Registered Events</h1>
            {registeredConferences.map((conf) => (
              <div key={conf.id} className="bg-card border border-border rounded-xl p-6 space-y-4">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-foreground">{conf.title}</h3>
                    <p className="text-sm text-muted-foreground mt-1">{conf.location}</p>
                  </div>
                  <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
                    {conf.status}
                  </span>
                </div>
                <div className="flex items-center gap-2 text-foreground">
                  <Calendar size={18} className="text-secondary" />
                  {conf.date}
                </div>
                <div className="border-t border-border pt-4 flex gap-3">
                  <button className="flex-1 py-2 px-4 bg-primary text-primary-foreground rounded-lg font-medium hover:opacity-90 transition flex items-center justify-center gap-2">
                    <Download size={16} />
                    Download Ticket
                  </button>
                  <button className="flex-1 py-2 px-4 border border-border text-foreground rounded-lg font-medium hover:bg-muted transition">
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        )

      case "saved":
        return (
          <div className="space-y-4">
            <h1 className="text-3xl font-bold text-foreground mb-6">Saved Conferences</h1>
            {savedConferences.length > 0 ? (
              savedConferences.map((conf) => (
                <div key={conf.id} className="bg-card border border-border rounded-xl p-6 space-y-3">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="text-xl font-bold text-foreground">{conf.title}</h3>
                      <p className="text-sm text-muted-foreground mt-1">{conf.location}</p>
                    </div>
                    <Heart size={20} className="fill-secondary text-secondary" />
                  </div>
                  <p className="text-sm text-muted-foreground">{conf.date}</p>
                  <button className="py-2 px-4 bg-primary text-primary-foreground rounded-lg font-medium hover:opacity-90 transition w-full">
                    Register Now
                  </button>
                </div>
              ))
            ) : (
              <p className="text-muted-foreground">No saved conferences yet</p>
            )}
          </div>
        )

      case "profile":
        return (
          <div className="space-y-6">
            <h1 className="text-3xl font-bold text-foreground">My Profile</h1>

            <div className="bg-card border border-border rounded-xl p-6 space-y-6">
              <div className="flex items-end gap-4">
                <img
                  src="/placeholder.svg?key=profilebig"
                  alt="Profile"
                  className="w-24 h-24 rounded-full object-cover"
                />
                <button className="px-4 py-2 border border-border text-foreground rounded-lg hover:bg-muted transition">
                  Change Photo
                </button>
              </div>

              {!isEditingProfile ? (
                <div className="space-y-4">
                  <div>
                    <p className="text-sm text-muted-foreground">Full Name</p>
                    <p className="text-lg font-semibold text-foreground">{profileData.fullName}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Email</p>
                    <p className="text-lg font-semibold text-foreground">{profileData.email}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Specialization</p>
                    <p className="text-lg font-semibold text-foreground">{profileData.specialization}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Institution</p>
                    <p className="text-lg font-semibold text-foreground">{profileData.institution}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Bio</p>
                    <p className="text-foreground">{profileData.bio}</p>
                  </div>
                  <button
                    onClick={() => setIsEditingProfile(true)}
                    className="flex items-center gap-2 text-primary hover:text-primary/80 font-medium transition"
                  >
                    <Edit2 size={18} />
                    Edit Profile
                  </button>
                </div>
              ) : (
                <form
                  onSubmit={(e) => {
                    e.preventDefault()
                    setIsEditingProfile(false)
                  }}
                  className="space-y-4"
                >
                  {Object.entries(profileData).map(([key, value]) => (
                    <div key={key}>
                      <label className="block text-sm font-medium text-foreground mb-1 capitalize">
                        {key.replace(/([A-Z])/g, " $1")}
                      </label>
                      <input
                        type={key === "email" ? "email" : "text"}
                        value={value as string}
                        onChange={(e) => setProfileData({ ...profileData, [key]: e.target.value })}
                        className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                      />
                    </div>
                  ))}
                  <div className="flex gap-3 pt-4">
                    <button
                      type="submit"
                      className="flex-1 py-2 bg-primary text-primary-foreground rounded-lg font-medium hover:opacity-90 transition"
                    >
                      Save Changes
                    </button>
                    <button
                      type="button"
                      onClick={() => setIsEditingProfile(false)}
                      className="flex-1 py-2 border border-border text-foreground rounded-lg font-medium hover:bg-muted transition"
                    >
                      Cancel
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        )

      case "certificates":
        return (
          <div className="space-y-4">
            <h1 className="text-3xl font-bold text-foreground mb-6">My Certificates</h1>
            {certificates.map((cert) => (
              <div key={cert.id} className="bg-card border border-border rounded-xl p-6 space-y-3">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-lg font-bold text-foreground">{cert.conference}</h3>
                    <p className="text-sm text-muted-foreground">{cert.date}</p>
                  </div>
                  <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
                    {cert.hours} hours
                  </span>
                </div>
                <button className="py-2 px-4 border border-border text-foreground rounded-lg font-medium hover:bg-muted transition flex items-center gap-2">
                  <Download size={16} />
                  Download Certificate
                </button>
              </div>
            ))}
          </div>
        )

      case "settings":
        return (
          <div className="space-y-6">
            <h1 className="text-3xl font-bold text-foreground">Settings</h1>

            <div className="bg-card border border-border rounded-xl p-6 space-y-4">
              <h2 className="text-xl font-bold text-foreground">Notifications</h2>
              <div className="space-y-3">
                {["Email notifications for new conferences", "Event reminders", "Community updates"].map(
                  (notif, idx) => (
                    <label key={idx} className="flex items-center gap-3 cursor-pointer">
                      <input type="checkbox" defaultChecked className="rounded accent-primary" />
                      <span className="text-foreground">{notif}</span>
                    </label>
                  ),
                )}
              </div>
            </div>

            <div className="bg-card border border-border rounded-xl p-6 space-y-4">
              <h2 className="text-xl font-bold text-foreground">Privacy</h2>
              <label className="flex items-center gap-3 cursor-pointer">
                <input type="checkbox" defaultChecked className="rounded accent-primary" />
                <span className="text-foreground">Make my profile public</span>
              </label>
            </div>

            <div className="bg-card border border-border rounded-xl p-6 space-y-4">
              <h2 className="text-xl font-bold text-foreground">Security</h2>
              <button className="flex items-center gap-2 text-primary hover:text-primary/80 font-medium transition">
                <Lock size={18} />
                Change Password
              </button>
            </div>
          </div>
        )

      default:
        return null
    }
  }

  return <div>{renderContent()}</div>
}
