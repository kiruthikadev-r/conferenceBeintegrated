import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import LoginForm from "@/components/login-form"

export const metadata = {
  title: "Login - MedGlobal Connect",
  description: "Sign in to your MedGlobal Connect account",
}

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="flex items-center justify-center py-12 px-4">
        <LoginForm />
      </div>
      <Footer />
    </div>
  )
}
