"use client"

import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { Calendar, User, ArrowLeft } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { useParams } from "next/navigation"

const blogPosts = [
  {
    id: 1,
    title: "The Future of Medical Conferences: Hybrid vs. In-Person",
    content: `
      <p class="mb-4">As the world adapts to new norms, medical conferences are evolving. The debate between hybrid and in-person events is more relevant than ever in 2025.</p>
      <h3 class="text-xl font-bold mb-2">The Rise of Hybrid Events</h3>
      <p class="mb-4">Hybrid events offer the best of both worlds. They allow for the personal connection of in-person meetings while providing the accessibility of virtual attendance. This model has shown to increase overall attendance and engagement.</p>
      <h3 class="text-xl font-bold mb-2">In-Person: The Value of Face-to-Face</h3>
      <p class="mb-4">Despite the convenience of digital, nothing replaces the serendipitous interactions of a physical conference. Networking, hands-on workshops, and the energy of a live crowd are irreplaceable aspects of professional growth.</p>
      <h3 class="text-xl font-bold mb-2">Conclusion</h3>
      <p>The future is likely a blend of both, tailored to the specific needs of the medical community and the goals of each specific event.</p>
    `,
    author: "Dr. Sarah Chen",
    date: "May 15, 2025",
    category: "Industry Trends",
    image: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&q=80&w=2000",
  },
  {
    id: 2,
    title: "Top 10 Cardiology Conferences to Attend This Year",
    content: `
      <p class="mb-4">Cardiology is a rapidly advancing field. Staying up-to-date requires attending the right events. Here are the top conferences you shouldn't miss.</p>
      <ul class="list-disc pl-6 mb-4 space-y-2">
        <li><strong>European Society of Cardiology Congress</strong> - The world's largest gathering of cardiovascular professionals.</li>
        <li><strong>American College of Cardiology Scientific Session</strong> - Premier cardiovascular conference in the US.</li>
        <li><strong>World Congress of Cardiology</strong> - A global perspective on heart health.</li>
      </ul>
      <p>Planning your attendance early ensures you get the best rates and travel arrangements.</p>
    `,
    author: "James Wilson",
    date: "May 10, 2025",
    category: "Conference Guide",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=2000",
  },
  {
    id: 3,
    title: "Networking Tips for Young Medical Professionals",
    content: `
      <p class="mb-4">Making the most of your first medical conference can be daunting. Here are essential tips for students and residents to build meaningful connections.</p>
      <h3 class="text-xl font-bold mb-2">Prepare in Advance</h3>
      <p class="mb-4">Review the attendee list and schedule. Identify key people you want to meet and sessions relevant to your career goals.</p>
      <h3 class="text-xl font-bold mb-2">Be Approachable</h3>
      <p class="mb-4">Don't be afraid to introduce yourself. Most senior professionals are happy to chat with the next generation of doctors.</p>
      <h3 class="text-xl font-bold mb-2">Follow Up</h3>
      <p>Connect on LinkedIn or send a brief email after the conference to keep the relationship alive.</p>
    `,
    author: "Dr. Emily Rodriguez",
    date: "May 5, 2025",
    category: "Career Advice",
    image: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&q=80&w=2000",
  },
  {
    id: 4,
    title: "How AI is Transforming Medical Research Presentation",
    content: `
      <p class="mb-4">Artificial Intelligence is changing how we analyze and present data. Learn how to leverage AI tools for your next conference presentation.</p>
      <p class="mb-4">From automated data visualization to real-time translation services, AI is making research more accessible and impactful.</p>
    `,
    author: "Tech Team",
    date: "April 28, 2025",
    category: "Technology",
    image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=2000",
  },
  {
    id: 5,
    title: "Sustainable Conferences: Reducing the Carbon Footprint",
    content: `
      <p class="mb-4">The medical community is taking steps towards greener events. Discover the initiatives making conferences more environmentally friendly.</p>
      <p class="mb-4">Digital handouts, locally sourced food, and carbon offset programs are becoming standard practice.</p>
    `,
    author: "Green Health Initiative",
    date: "April 20, 2025",
    category: "Sustainability",
    image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80&w=2000",
  },
  {
    id: 6,
    title: "Grant Writing Workshops: A Must-Attend at Conferences",
    content: `
      <p class="mb-4">Securing funding is crucial for research. Find out why grant writing workshops are becoming a staple at major medical conferences.</p>
      <p class="mb-4">These workshops offer direct access to grant officers and successful researchers who can provide invaluable feedback.</p>
    `,
    author: "Research Board",
    date: "April 15, 2025",
    category: "Research",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=2000",
  },
]

export default function BlogPostPage() {
  const params = useParams()
  const id = Number(params.id)
  const post = blogPosts.find((p) => p.id === id)

  if (!post) {
    return (
      <div className="min-h-screen bg-background flex flex-col">
        <Navigation />
        <div className="flex-1 flex flex-col items-center justify-center p-4">
          <h1 className="text-2xl font-bold mb-4">Post not found</h1>
          <Button asChild>
            <Link href="/blog">Back to Blog</Link>
          </Button>
        </div>
        <Footer />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="relative h-[400px] w-full">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <div className="max-w-4xl mx-auto px-4 text-center text-white">
            <div className="inline-block bg-primary px-3 py-1 rounded-full text-sm font-medium mb-4">
              {post.category}
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{post.title}</h1>
            <div className="flex items-center justify-center gap-6 text-sm md:text-base">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                {post.date}
              </div>
              <div className="flex items-center gap-2">
                <User className="w-4 h-4" />
                {post.author}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Button variant="ghost" asChild className="mb-8 pl-0 hover:pl-2 transition-all">
          <Link href="/blog">
            <ArrowLeft className="w-4 h-4 mr-2" /> Back to Blog
          </Link>
        </Button>

        <div 
          className="prose prose-lg dark:prose-invert max-w-none"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </div>

      <Footer />
    </div>
  )
}
