import Link from "next/link"
import { Mail, Phone, MapPin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-foreground text-background border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">MG</span>
              </div>
              <span className="font-bold text-lg">MedGlobal</span>
            </div>
            <p className="text-sm text-background/70">
              Connecting medical professionals worldwide through global conferences and events.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Platform</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/conferences" className="hover:text-secondary transition">
                  Conferences
                </Link>
              </li>
              <li>
                <Link href="/dashboard" className="hover:text-secondary transition">
                  Dashboard
                </Link>
              </li>
              <li>
                <Link href="/organizer" className="hover:text-secondary transition">
                  For Organizers
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="hover:text-secondary transition">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-secondary transition">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-secondary transition">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Contact</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2">
                <Mail size={16} className="text-secondary" />
                <a href="mailto:info@medglobal.com" className="hover:text-secondary transition">
                  info@medglobal.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={16} className="text-secondary" />
                <a href="tel:+1234567890" className="hover:text-secondary transition">
                  +1 (234) 567-890
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin size={16} className="text-secondary mt-0.5" />
                <span>123 Medical Center Drive, Global City</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-background/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-background/70">
            <p>&copy; 2025 MedGlobal Connect. All rights reserved.</p>
            <div className="flex gap-6">
              <Link href="#" className="hover:text-secondary transition">
                Privacy Policy
              </Link>
              <Link href="#" className="hover:text-secondary transition">
                Terms of Service
              </Link>
              <Link href="#" className="hover:text-secondary transition">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
