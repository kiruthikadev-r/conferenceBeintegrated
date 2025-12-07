"use client"
import { LayoutDashboard, Calendar, Heart, User, LogOut, Settings, FileText } from "lucide-react"

interface DashboardSidebarProps {
  activeTab: string
  setActiveTab: (tab: string) => void
}

const menuItems = [
  { id: "overview", label: "Overview", icon: LayoutDashboard },
  { id: "registered", label: "Registered Events", icon: Calendar },
  { id: "saved", label: "Saved Conferences", icon: Heart },
  { id: "profile", label: "My Profile", icon: User },
  { id: "certificates", label: "Certificates", icon: FileText },
  { id: "settings", label: "Settings", icon: Settings },
]

export default function DashboardSidebar({ activeTab, setActiveTab }: DashboardSidebarProps) {
  return (
    <div className="lg:col-span-1 h-fit sticky top-24">
      <div className="bg-card border border-border rounded-xl p-6 space-y-6">
        {/* User Profile Card */}
        <div className="text-center pb-6 border-b border-border">
          <img
            src="/placeholder.svg?key=profile"
            alt="Profile"
            className="w-16 h-16 rounded-full mx-auto mb-3 object-cover"
          />
          <h3 className="font-semibold text-foreground">Dr. Sarah Johnson</h3>
          <p className="text-sm text-muted-foreground">Medical Professional</p>
          <p className="text-xs text-secondary mt-1">Cardiology Specialist</p>
        </div>

        {/* Menu */}
        <nav className="space-y-2">
          {menuItems.map((item) => {
            const Icon = item.icon
            return (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`w-full flex items-center gap-3 px-4 py-2 rounded-lg transition ${
                  activeTab === item.id ? "bg-primary text-primary-foreground" : "text-foreground hover:bg-muted"
                }`}
              >
                <Icon size={18} />
                <span>{item.label}</span>
              </button>
            )
          })}
        </nav>

        {/* Logout */}
        <button className="w-full flex items-center justify-center gap-2 px-4 py-2 border border-destructive text-destructive rounded-lg hover:bg-destructive/5 transition font-medium">
          <LogOut size={18} />
          Logout
        </button>
      </div>
    </div>
  )
}
