import { Star } from "lucide-react"

interface Testimonial {
  name: string
  role: string
  school: string
  content: string
  image: string
  rating: number
}

const testimonials: Testimonial[] = [
  {
    name: "Dr. Sarah Chen",
    role: "Cardiology Resident",
    school: "Harvard Medical School",
    content:
      "MedGlobal Connect helped me discover conferences I never would have found. The registration process was seamless and I met amazing doctors from around the world.",
    image: "/medical-professional.png",
    rating: 5,
  },
  {
    name: "Dr. James Wilson",
    role: "Surgery Fellow",
    school: "Stanford University",
    content:
      "The platform makes it incredibly easy to find specialized conferences. I registered for 3 events last year through MedGlobal Connect. Highly recommended!",
    image: "/medical-student.png",
    rating: 5,
  },
  {
    name: "Dr. Priya Patel",
    role: "Medical Student",
    school: "Oxford University",
    content:
      "As a student, finding affordable conference options was always challenging. This platform changed that. Great community and fantastic learning opportunities.",
    image: "/caring-doctor.png",
    rating: 5,
  },
]

export default function Testimonials() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 space-y-4">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">What Our Members Say</h2>
          <p className="text-lg text-muted-foreground">
            Join thousands of medical professionals who trust MedGlobal Connect
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, idx) => (
            <div key={idx} className="bg-card border border-border rounded-xl p-6 space-y-4">
              <div className="flex gap-1">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={16} className="fill-secondary text-secondary" />
                ))}
              </div>
              <p className="text-foreground leading-relaxed">{testimonial.content}</p>
              <div className="flex items-center gap-4 pt-4 border-t border-border">
                <img
                  src={testimonial.image || "/placeholder.svg"}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.role} • {testimonial.school}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
