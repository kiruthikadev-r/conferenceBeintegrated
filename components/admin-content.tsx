"use client"

import { Trash2, Edit2, Check, X, Eye, Plus, TrendingUp } from "lucide-react"
import { useState } from "react"

interface AdminContentProps {
  activeTab: string
}

const conferences = [
  {
    id: 1,
    title: "International Cardiology Summit 2025",
    organization: "World Heart Federation",
    attendees: 3500,
    status: "active",
    date: "May 15-17, 2025",
  },
  {
    id: 2,
    title: "Neurology Research Conference",
    organization: "European Neurology Society",
    attendees: 2800,
    status: "active",
    date: "June 20-22, 2025",
  },
]

const submissions = [
  {
    id: 1,
    title: "Pediatric Health Summit",
    organization: "Health Foundation",
    date: "2025-02-01",
    status: "pending",
  },
  {
    id: 2,
    title: "Psychiatry Innovations Forum",
    organization: "Mental Health Alliance",
    date: "2025-02-02",
    status: "pending",
  },
]

const users = [
  {
    id: 1,
    name: "Dr. Sarah Johnson",
    email: "sarah@example.com",
    type: "Professional",
    status: "active",
    joined: "2025-01-10",
  },
  {
    id: 2,
    name: "Dr. Michael Chen",
    email: "michael@example.com",
    type: "Student",
    status: "active",
    joined: "2025-01-15",
  },
]

export default function AdminContent({ activeTab }: AdminContentProps) {
  const [showAddForm, setShowAddForm] = useState(false)

  const renderContent = () => {
    switch (activeTab) {
      case "overview":
        return (
          <div className="space-y-6">
            <h1 className="text-3xl font-bold text-foreground">Admin Dashboard</h1>

            <div className="grid md:grid-cols-4 gap-4">
              <div className="bg-card border border-border rounded-xl p-6">
                <p className="text-sm text-muted-foreground mb-1">Total Conferences</p>
                <p className="text-3xl font-bold text-primary">127</p>
                <p className="text-xs text-secondary mt-2 flex items-center gap-1">
                  <TrendingUp size={14} /> 12% this month
                </p>
              </div>
              <div className="bg-card border border-border rounded-xl p-6">
                <p className="text-sm text-muted-foreground mb-1">Total Users</p>
                <p className="text-3xl font-bold text-primary">15,482</p>
                <p className="text-xs text-secondary mt-2 flex items-center gap-1">
                  <TrendingUp size={14} /> 8% this month
                </p>
              </div>
              <div className="bg-card border border-border rounded-xl p-6">
                <p className="text-sm text-muted-foreground mb-1">Pending Submissions</p>
                <p className="text-3xl font-bold text-secondary">24</p>
              </div>
              <div className="bg-card border border-border rounded-xl p-6">
                <p className="text-sm text-muted-foreground mb-1">Registrations</p>
                <p className="text-3xl font-bold text-primary">8,392</p>
                <p className="text-xs text-secondary mt-2 flex items-center gap-1">
                  <TrendingUp size={14} /> 15% this month
                </p>
              </div>
            </div>

            <div className="grid lg:grid-cols-2 gap-6">
              <div className="bg-card border border-border rounded-xl p-6">
                <h2 className="text-xl font-bold text-foreground mb-4">Recent Submissions</h2>
                <div className="space-y-3">
                  {submissions.map((sub) => (
                    <div key={sub.id} className="flex items-center justify-between p-3 bg-muted rounded-lg">
                      <div>
                        <p className="font-semibold text-foreground text-sm">{sub.title}</p>
                        <p className="text-xs text-muted-foreground">{sub.organization}</p>
                      </div>
                      <span className="px-2 py-1 bg-secondary/10 text-secondary rounded text-xs font-medium">
                        Pending
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-card border border-border rounded-xl p-6">
                <h2 className="text-xl font-bold text-foreground mb-4">Top Conferences</h2>
                <div className="space-y-3">
                  {conferences.slice(0, 2).map((conf) => (
                    <div key={conf.id} className="p-3 bg-muted rounded-lg">
                      <p className="font-semibold text-foreground text-sm">{conf.title}</p>
                      <p className="text-xs text-muted-foreground">{conf.attendees.toLocaleString()} attendees</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )

      case "conferences":
        return (
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h1 className="text-3xl font-bold text-foreground">Manage Conferences</h1>
              <button
                onClick={() => setShowAddForm(!showAddForm)}
                className="flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition"
              >
                <Plus size={18} />
                Add Conference
              </button>
            </div>

            {showAddForm && (
              <div className="bg-card border border-border rounded-xl p-6 space-y-4">
                <h2 className="text-lg font-bold text-foreground">New Conference</h2>
                <div className="grid md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="Conference Title"
                    className="px-4 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                  <input
                    type="text"
                    placeholder="Organization"
                    className="px-4 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                  <input
                    type="date"
                    className="px-4 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                  <select className="px-4 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary">
                    <option>Select Format</option>
                    <option>In-Person</option>
                    <option>Online</option>
                    <option>Hybrid</option>
                  </select>
                </div>
                <div className="flex gap-3">
                  <button className="flex-1 py-2 bg-primary text-primary-foreground rounded-lg font-medium hover:opacity-90 transition">
                    Add Conference
                  </button>
                  <button
                    onClick={() => setShowAddForm(false)}
                    className="flex-1 py-2 border border-border text-foreground rounded-lg font-medium hover:bg-muted transition"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            )}

            <div className="space-y-3">
              {conferences.map((conf) => (
                <div
                  key={conf.id}
                  className="bg-card border border-border rounded-xl p-6 flex items-center justify-between"
                >
                  <div>
                    <h3 className="font-semibold text-foreground">{conf.title}</h3>
                    <p className="text-sm text-muted-foreground">
                      {conf.organization} • {conf.date}
                    </p>
                    <p className="text-sm text-muted-foreground mt-1">{conf.attendees.toLocaleString()} attendees</p>
                  </div>
                  <div className="flex gap-2">
                    <button className="p-2 border border-border rounded-lg hover:bg-muted transition">
                      <Edit2 size={18} className="text-foreground" />
                    </button>
                    <button className="p-2 border border-destructive text-destructive rounded-lg hover:bg-destructive/5 transition">
                      <Trash2 size={18} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )

      case "submissions":
        return (
          <div className="space-y-4">
            <h1 className="text-3xl font-bold text-foreground mb-6">Pending Submissions</h1>
            {submissions.map((sub) => (
              <div key={sub.id} className="bg-card border border-border rounded-xl p-6 space-y-4">
                <div>
                  <h3 className="font-semibold text-foreground">{sub.title}</h3>
                  <p className="text-sm text-muted-foreground">{sub.organization}</p>
                  <p className="text-xs text-muted-foreground mt-1">Submitted: {sub.date}</p>
                </div>
                <div className="flex gap-3">
                  <button className="flex-1 py-2 bg-primary text-primary-foreground rounded-lg font-medium hover:opacity-90 transition flex items-center justify-center gap-2">
                    <Check size={18} />
                    Approve
                  </button>
                  <button className="flex-1 py-2 border border-destructive text-destructive rounded-lg font-medium hover:bg-destructive/5 transition flex items-center justify-center gap-2">
                    <X size={18} />
                    Reject
                  </button>
                  <button className="px-4 py-2 border border-border text-foreground rounded-lg hover:bg-muted transition">
                    <Eye size={18} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )

      case "users":
        return (
          <div className="space-y-4">
            <h1 className="text-3xl font-bold text-foreground mb-6">Users</h1>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-3 px-4 text-foreground font-semibold">Name</th>
                    <th className="text-left py-3 px-4 text-foreground font-semibold">Email</th>
                    <th className="text-left py-3 px-4 text-foreground font-semibold">Type</th>
                    <th className="text-left py-3 px-4 text-foreground font-semibold">Joined</th>
                    <th className="text-left py-3 px-4 text-foreground font-semibold">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {users.map((user) => (
                    <tr key={user.id} className="border-b border-border hover:bg-muted transition">
                      <td className="py-3 px-4 text-foreground">{user.name}</td>
                      <td className="py-3 px-4 text-muted-foreground">{user.email}</td>
                      <td className="py-3 px-4 text-foreground">{user.type}</td>
                      <td className="py-3 px-4 text-muted-foreground">{user.joined}</td>
                      <td className="py-3 px-4">
                        <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
                          {user.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )

      case "analytics":
        return (
          <div className="space-y-6">
            <h1 className="text-3xl font-bold text-foreground">Analytics</h1>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-card border border-border rounded-xl p-6">
                <h2 className="text-lg font-bold text-foreground mb-4">Registration Trends</h2>
                <div className="space-y-3">
                  {["January", "February", "March", "April"].map((month, idx) => (
                    <div key={month} className="flex items-center gap-3">
                      <span className="text-sm text-muted-foreground w-20">{month}</span>
                      <div className="flex-1 h-6 bg-muted rounded-full overflow-hidden">
                        <div
                          className="h-full bg-primary rounded-full transition"
                          style={{ width: `${60 + idx * 10}%` }}
                        ></div>
                      </div>
                      <span className="text-sm font-semibold text-foreground">{2000 + idx * 500}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-card border border-border rounded-xl p-6">
                <h2 className="text-lg font-bold text-foreground mb-4">Top Specializations</h2>
                <div className="space-y-3">
                  {["Cardiology", "Neurology", "Surgery", "Pediatrics"].map((spec, idx) => (
                    <div key={spec} className="flex items-center justify-between">
                      <span className="text-foreground">{spec}</span>
                      <span className="text-sm font-semibold text-secondary">{1500 - idx * 200}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )

      case "settings":
        return (
          <div className="space-y-6">
            <h1 className="text-3xl font-bold text-foreground">Admin Settings</h1>

            <div className="bg-card border border-border rounded-xl p-6 space-y-4">
              <h2 className="text-xl font-bold text-foreground">Platform Settings</h2>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1">Platform Name</label>
                  <input
                    type="text"
                    defaultValue="MedGlobal Connect"
                    className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1">Support Email</label>
                  <input
                    type="email"
                    defaultValue="support@medglobal.com"
                    className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
              </div>
              <button className="px-6 py-2 bg-primary text-primary-foreground rounded-lg font-medium hover:opacity-90 transition">
                Save Settings
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
