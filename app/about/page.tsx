"use client"

import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { Building2, Users, Globe, Award } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <div className="bg-primary/5 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-foreground mb-6">About Medical Conference Hub</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Connecting healthcare professionals with world-class medical conferences, fostering innovation, and advancing global health.
          </p>
        </div>
      </div>

      {/* Mission Section */}
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">Our Mission</h2>
              <p className="text-muted-foreground mb-4">
                We believe that knowledge sharing is the cornerstone of medical advancement. Our platform is designed to bridge the gap between medical professionals and the events that shape the future of healthcare.
              </p>
              <p className="text-muted-foreground">
                By providing a comprehensive, easy-to-use directory of medical conferences, we help researchers, practitioners, and students find the right opportunities to learn, network, and grow.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-card p-6 rounded-xl border border-border text-center">
                <Users className="w-10 h-10 text-primary mx-auto mb-4" />
                <h3 className="font-bold text-2xl mb-2">50k+</h3>
                <p className="text-sm text-muted-foreground">Active Users</p>
              </div>
              <div className="bg-card p-6 rounded-xl border border-border text-center">
                <Building2 className="w-10 h-10 text-primary mx-auto mb-4" />
                <h3 className="font-bold text-2xl mb-2">1000+</h3>
                <p className="text-sm text-muted-foreground">Conferences</p>
              </div>
              <div className="bg-card p-6 rounded-xl border border-border text-center">
                <Globe className="w-10 h-10 text-primary mx-auto mb-4" />
                <h3 className="font-bold text-2xl mb-2">50+</h3>
                <p className="text-sm text-muted-foreground">Countries</p>
              </div>
              <div className="bg-card p-6 rounded-xl border border-border text-center">
                <Award className="w-10 h-10 text-primary mx-auto mb-4" />
                <h3 className="font-bold text-2xl mb-2">#1</h3>
                <p className="text-sm text-muted-foreground">Platform</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="bg-muted/30 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-foreground mb-12 text-center">Our Leadership Team</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Dr. Sarah Chen",
                role: "Chief Medical Officer",
                image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=400",
              },
              {
                name: "James Wilson",
                role: "CEO & Founder",
                image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400",
              },
              {
                name: "Dr. Emily Rodriguez",
                role: "Head of Research",
                image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&q=80&w=400",
              },
            ].map((member, index) => (
              <div key={index} className="bg-card rounded-xl overflow-hidden border border-border">
                <div className="h-64 overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6 text-center">
                  <h3 className="font-bold text-xl mb-1">{member.name}</h3>
                  <p className="text-primary text-sm">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
