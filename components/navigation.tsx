"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X } from "lucide-react"

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 bg-background border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-sm">MG</span>
            </div>
            <span className="font-bold text-lg text-foreground hidden sm:inline">MedGlobal</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="/conferences" className="text-foreground hover:text-primary transition">
              Conferences
            </Link>
            <Link href="/about" className="text-foreground hover:text-primary transition">
              About
            </Link>
            <Link href="/blog" className="text-foreground hover:text-primary transition">
              Blog
            </Link>
            <Link href="/contact" className="text-foreground hover:text-primary transition">
              Contact
            </Link>
          </div>

          <div className="hidden md:flex items-center gap-4">
            <Link href="/login" className="px-4 py-2 text-primary hover:bg-muted rounded-lg transition">
              Login
            </Link>
            <Link
              href="/signup"
              className="px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition"
            >
              Sign Up
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden p-2 hover:bg-muted rounded-lg transition">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-3 border-t border-border pt-4">
            <Link href="/conferences" className="block px-4 py-2 hover:bg-muted rounded-lg">
              Conferences
            </Link>
            <Link href="/about" className="block px-4 py-2 hover:bg-muted rounded-lg">
              About
            </Link>
            <Link href="/blog" className="block px-4 py-2 hover:bg-muted rounded-lg">
              Blog
            </Link>
            <Link href="/contact" className="block px-4 py-2 hover:bg-muted rounded-lg">
              Contact
            </Link>
            <div className="flex flex-col gap-2 pt-2 border-t border-border">
              <Link href="/login" className="px-4 py-2 text-center text-primary">
                Login
              </Link>
              <Link href="/signup" className="px-4 py-2 bg-primary text-primary-foreground rounded-lg text-center">
                Sign Up
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
