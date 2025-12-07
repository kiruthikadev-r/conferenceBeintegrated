import Link from "next/link"

export default function CTA() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-gradient-to-r from-primary to-secondary rounded-2xl p-12 text-center space-y-6">
        <h2 className="text-3xl sm:text-4xl font-bold text-primary-foreground">
          Ready to Advance Your Medical Career?
        </h2>
        <p className="text-lg text-primary-foreground/90">
          Join thousands of medical professionals discovering world-class conferences and events
        </p>
        <Link
          href="/signup"
          className="inline-flex items-center justify-center px-8 py-4 bg-primary-foreground text-primary rounded-lg font-semibold hover:opacity-90 transition"
        >
          Create Your Account Today
        </Link>
      </div>
    </section>
  )
}
