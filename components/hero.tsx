"use client"

import Link from "next/link"
import { ArrowRight, Globe, Stethoscope } from "lucide-react"

export default function Hero() {
  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-background via-background to-muted">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-secondary/10 rounded-full border border-secondary/20">
                <Globe size={16} className="text-secondary" />
                <span className="text-sm text-secondary font-medium">Global Medical Community</span>
              </div>
              <h1 className="text-4xl sm:text-5xl font-bold text-foreground leading-tight">
                Discover Medical Conferences Worldwide
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Connect with the global medical community. Register for international conferences, workshops, and
                symposiums tailored for students and professionals.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/conferences"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:opacity-90 transition"
              >
                Explore Conferences
                <ArrowRight size={18} />
              </Link>
              <Link
                href="#featured"
                className="inline-flex items-center justify-center px-6 py-3 border border-primary text-primary rounded-lg font-medium hover:bg-primary/5 transition"
              >
                Learn More
              </Link>
            </div>

            <div className="grid grid-cols-3 gap-4 pt-4">
              <div>
                <p className="text-2xl font-bold text-primary">500+</p>
                <p className="text-sm text-muted-foreground">Conferences</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-primary">150K+</p>
                <p className="text-sm text-muted-foreground">Members</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-primary">75+</p>
                <p className="text-sm text-muted-foreground">Countries</p>
              </div>
            </div>
          </div>

          <div className="hidden md:block">
            <div className="relative h-96 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl border border-primary/20 flex items-center justify-center">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-xl opacity-20 blur-xl"></div>
                <Stethoscope size={120} className="text-primary/30 relative" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
