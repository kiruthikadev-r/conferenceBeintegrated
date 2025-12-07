"use client"

import type React from "react"

import { useState } from "react"
import { Upload, FileText, CheckCircle, Clock } from "lucide-react"

export default function OrganizerPortal() {
  const [formData, setFormData] = useState({
    title: "",
    organization: "",
    date: "",
    endDate: "",
    location: "",
    format: "in-person",
    specialization: "",
    description: "",
    speakers: "",
  })

  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)
  }

  return (
    <main className="max-w-4xl mx-auto px-4 py-12">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-foreground mb-2">Organizer Portal</h1>
        <p className="text-muted-foreground">
          Submit your medical conference to reach thousands of professionals worldwide
        </p>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <form onSubmit={handleSubmit} className="bg-card border border-border rounded-xl p-8 space-y-6">
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-foreground">Conference Details</h2>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Conference Title</label>
                <input
                  type="text"
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Enter conference title"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Organization Name</label>
                <input
                  type="text"
                  name="organization"
                  value={formData.organization}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Your organization"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Start Date</label>
                  <input
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">End Date</label>
                  <input
                    type="date"
                    name="endDate"
                    value={formData.endDate}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Location</label>
                <input
                  type="text"
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="City, Country"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Format</label>
                  <select
                    name="format"
                    value={formData.format}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  >
                    <option value="in-person">In-Person</option>
                    <option value="online">Online</option>
                    <option value="hybrid">Hybrid</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Specialization</label>
                  <select
                    name="specialization"
                    value={formData.specialization}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  >
                    <option value="">Select specialization</option>
                    <option value="Cardiology">Cardiology</option>
                    <option value="Neurology">Neurology</option>
                    <option value="Surgery">Surgery</option>
                    <option value="Pediatrics">Pediatrics</option>
                    <option value="Oncology">Oncology</option>
                    <option value="Digital Health">Digital Health</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Description</label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                  placeholder="Describe your conference in detail"
                ></textarea>
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Featured Speakers</label>
                <textarea
                  name="speakers"
                  value={formData.speakers}
                  onChange={handleChange}
                  rows={3}
                  className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                  placeholder="List your speakers (comma separated)"
                ></textarea>
              </div>
            </div>

            <div className="space-y-4 pt-4 border-t border-border">
              <h2 className="text-lg font-bold text-foreground">Media</h2>
              <div className="border-2 border-dashed border-border rounded-lg p-8 text-center hover:border-primary transition cursor-pointer">
                <Upload className="mx-auto mb-3 text-muted-foreground" size={32} />
                <p className="text-foreground font-medium">Drop your images here</p>
                <p className="text-sm text-muted-foreground">or click to select files</p>
                <input type="file" className="hidden" />
              </div>
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:opacity-90 transition"
            >
              Submit Conference
            </button>
          </form>
        </div>

        <div className="lg:col-span-1">
          <div className="space-y-4 h-fit sticky top-24">
            {/* Submission Status */}
            <div className="bg-card border border-border rounded-xl p-6 space-y-4">
              <h3 className="font-semibold text-foreground">Submission Status</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-secondary/20 flex items-center justify-center">
                    <CheckCircle className="text-secondary" size={18} />
                  </div>
                  <div className="text-sm">
                    <p className="font-medium text-foreground">Basic Info</p>
                    <p className="text-muted-foreground">Complete</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-secondary/20 flex items-center justify-center">
                    <CheckCircle className="text-secondary" size={18} />
                  </div>
                  <div className="text-sm">
                    <p className="font-medium text-foreground">Details</p>
                    <p className="text-muted-foreground">Complete</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center">
                    <Clock className="text-muted-foreground" size={18} />
                  </div>
                  <div className="text-sm">
                    <p className="font-medium text-foreground">Review</p>
                    <p className="text-muted-foreground">Pending</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Guidelines */}
            <div className="bg-card border border-border rounded-xl p-6 space-y-3">
              <h3 className="font-semibold text-foreground flex items-center gap-2">
                <FileText size={18} />
                Guidelines
              </h3>
              <ul className="text-sm text-muted-foreground space-y-2">
                <li>• Provide accurate event details</li>
                <li>• Include at least 3 speakers</li>
                <li>• High-quality cover image required</li>
                <li>• Detailed description (200+ words)</li>
                <li>• Review typically takes 2-3 days</li>
              </ul>
            </div>

            {/* Support */}
            <div className="bg-primary/10 border border-primary/20 rounded-xl p-4 text-sm">
              <p className="text-foreground font-medium mb-2">Need help?</p>
              <p className="text-muted-foreground">
                Contact our organizer support team at{" "}
                <a href="mailto:organizer@medglobal.com" className="text-primary hover:underline">
                  organizer@medglobal.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>

      {submitted && (
        <div className="fixed bottom-4 right-4 bg-secondary text-secondary-foreground px-6 py-3 rounded-lg shadow-lg flex items-center gap-2">
          <CheckCircle size={20} />
          Submission received! We'll review it shortly.
        </div>
      )}
    </main>
  )
}
