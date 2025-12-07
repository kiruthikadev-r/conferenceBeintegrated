"use client"

import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import DashboardSidebar from "@/components/dashboard-sidebar"
import DashboardContent from "@/components/dashboard-content"
import { useState } from "react"

export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState("overview")

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid lg:grid-cols-4 gap-8">
          <DashboardSidebar activeTab={activeTab} setActiveTab={setActiveTab} />
          <div className="lg:col-span-3">
            <DashboardContent activeTab={activeTab} />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
