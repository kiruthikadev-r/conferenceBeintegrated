"use client"
import { LayoutDashboard, Calendar, Users, FileCheck, BarChart3, Settings, LogOut } from "lucide-react"

interface AdminSidebarProps {
  activeTab: string
  setActiveTab: (tab: string) => void
}

const menuItems = [
  { id: "overview", label: "Overview", icon: LayoutDashboard },
  { id: "conferences", label: "Manage Conferences", icon: Calendar },
  { id: "submissions", label: "Pending Submissions", icon: FileCheck },
  { id: "users", label: "Users", icon: Users },
  { id: "analytics", label: "Analytics", icon: BarChart3 },
  { id: "settings", label: "Settings", icon: Settings },
]

export default function AdminSidebar({ activeTab, setActiveTab }: AdminSidebarProps) {
  return (
    <div className="lg:col-span-1 h-fit sticky top-24">
      <div className="bg-card border border-border rounded-xl p-6 space-y-6">
        <div className="text-center pb-6 border-b border-border">
          <div className="w-16 h-16 rounded-full mx-auto mb-3 bg-primary/20 flex items-center justify-center">
            <span className="text-2xl font-bold text-primary">A</span>
          </div>
          <h3 className="font-semibold text-foreground">Admin Panel</h3>
          <p className="text-xs text-secondary mt-1">MedGlobal Connect</p>
        </div>

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

        <button className="w-full flex items-center justify-center gap-2 px-4 py-2 border border-destructive text-destructive rounded-lg hover:bg-destructive/5 transition font-medium">
          <LogOut size={18} />
          Logout
        </button>
      </div>
    </div>
  )
}
