"use client"

import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { Calendar, User, ArrowRight } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

const blogPosts = [
  {
    id: 1,
    title: "The Future of Medical Conferences: Hybrid vs. In-Person",
    excerpt: "As the world adapts to new norms, medical conferences are evolving. Explore the pros and cons of hybrid and in-person events in 2025.",
    author: "Dr. Sarah Chen",
    date: "May 15, 2025",
    category: "Industry Trends",
    image: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&q=80&w=2000",
  },
  {
    id: 2,
    title: "Top 10 Cardiology Conferences to Attend This Year",
    excerpt: "A curated list of the most influential cardiology gatherings happening around the globe. Don't miss these opportunities to network and learn.",
    author: "James Wilson",
    date: "May 10, 2025",
    category: "Conference Guide",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=2000",
  },
  {
    id: 3,
    title: "Networking Tips for Young Medical Professionals",
    excerpt: "Making the most of your first medical conference can be daunting. Here are essential tips for students and residents to build meaningful connections.",
    author: "Dr. Emily Rodriguez",
    date: "May 5, 2025",
    category: "Career Advice",
    image: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&q=80&w=2000",
  },
  {
    id: 4,
    title: "How AI is Transforming Medical Research Presentation",
    excerpt: "Artificial Intelligence is changing how we analyze and present data. Learn how to leverage AI tools for your next conference presentation.",
    author: "Tech Team",
    date: "April 28, 2025",
    category: "Technology",
    image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=2000",
  },
  {
    id: 5,
    title: "Sustainable Conferences: Reducing the Carbon Footprint",
    excerpt: "The medical community is taking steps towards greener events. Discover the initiatives making conferences more environmentally friendly.",
    author: "Green Health Initiative",
    date: "April 20, 2025",
    category: "Sustainability",
    image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80&w=2000",
  },
  {
    id: 6,
    title: "Grant Writing Workshops: A Must-Attend at Conferences",
    excerpt: "Securing funding is crucial for research. Find out why grant writing workshops are becoming a staple at major medical conferences.",
    author: "Research Board",
    date: "April 15, 2025",
    category: "Research",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=2000",
  },
]

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="bg-primary/5 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-foreground mb-6">Medical Insights & News</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Stay updated with the latest trends in medical conferences, research, and healthcare innovation.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <article key={post.id} className="bg-card border border-border rounded-xl overflow-hidden flex flex-col hover:shadow-lg transition-shadow duration-300">
              <div className="h-48 overflow-hidden relative">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-medium">
                  {post.category}
                </div>
              </div>
              
              <div className="p-6 flex-1 flex flex-col">
                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {post.date}
                  </div>
                  <div className="flex items-center gap-1">
                    <User className="w-4 h-4" />
                    {post.author}
                  </div>
                </div>

                <h2 className="text-xl font-bold mb-3 line-clamp-2 hover:text-primary transition-colors">
                  <Link href={`/blog/${post.id}`}>
                    {post.title}
                  </Link>
                </h2>
                
                <p className="text-muted-foreground mb-6 line-clamp-3 flex-1">
                  {post.excerpt}
                </p>

                <Button variant="outline" className="w-full group" asChild>
                  <Link href={`/blog/${post.id}`}>
                    Read Article <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </div>
            </article>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  )
}
