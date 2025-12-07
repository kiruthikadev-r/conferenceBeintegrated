"use client"

import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import AdminSidebar from "@/components/admin-sidebar"
import AdminContent from "@/components/admin-content"
import { useState } from "react"

export default function AdminPage() {
  const [activeTab, setActiveTab] = useState("overview")

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid lg:grid-cols-4 gap-8">
          <AdminSidebar activeTab={activeTab} setActiveTab={setActiveTab} />
          <div className="lg:col-span-3">
            <AdminContent activeTab={activeTab} />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
