import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import SignupForm from "@/components/signup-form"

export const metadata = {
  title: "Sign Up - MedGlobal Connect",
  description: "Create a new MedGlobal Connect account",
}

export default function SignupPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="flex items-center justify-center py-12 px-4">
        <SignupForm />
      </div>
      <Footer />
    </div>
  )
}
