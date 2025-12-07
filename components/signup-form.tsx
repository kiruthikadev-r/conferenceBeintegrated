"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { User, Mail, Lock, Eye, EyeOff, ArrowRight, Loader } from "lucide-react"

export default function SignupForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
    specialization: "",
    userType: "student",
  })
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirm, setShowConfirm] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [agreedToTerms, setAgreedToTerms] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match")
      return
    }
    if (!agreedToTerms) {
      alert("Please agree to the terms")
      return
    }
    setIsLoading(true)
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false)
      alert("Signup functionality will connect to your backend")
    }, 1500)
  }

  return (
    <div className="w-full max-w-md">
      <div className="bg-card border border-border rounded-xl p-8 space-y-6">
        <div className="space-y-2 text-center">
          <h1 className="text-3xl font-bold text-foreground">Create Account</h1>
          <p className="text-muted-foreground">Join the global medical community</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* User Type Selection */}
          <div className="space-y-2">
            <label className="block text-sm font-medium text-foreground">I am a</label>
            <div className="grid grid-cols-2 gap-3">
              {["student", "professional"].map((type) => (
                <button
                  key={type}
                  type="button"
                  onClick={() => setFormData({ ...formData, userType: type })}
                  className={`py-2 px-3 rounded-lg border font-medium transition capitalize ${
                    formData.userType === type
                      ? "bg-primary text-primary-foreground border-primary"
                      : "border-border text-foreground hover:border-primary"
                  }`}
                >
                  {type}
                </button>
              ))}
            </div>
          </div>

          {/* Full Name */}
          <div className="space-y-2">
            <label htmlFor="fullName" className="block text-sm font-medium text-foreground">
              Full Name
            </label>
            <div className="relative">
              <User className="absolute left-3 top-3 text-muted-foreground" size={18} />
              <input
                id="fullName"
                name="fullName"
                type="text"
                placeholder="Dr. Jane Doe"
                value={formData.fullName}
                onChange={handleChange}
                required
                className="w-full pl-10 pr-4 py-2 border border-border rounded-lg bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
          </div>

          {/* Email */}
          <div className="space-y-2">
            <label htmlFor="email" className="block text-sm font-medium text-foreground">
              Email Address
            </label>
            <div className="relative">
              <Mail className="absolute left-3 top-3 text-muted-foreground" size={18} />
              <input
                id="email"
                name="email"
                type="email"
                placeholder="you@example.com"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full pl-10 pr-4 py-2 border border-border rounded-lg bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
          </div>

          {/* Specialization */}
          <div className="space-y-2">
            <label htmlFor="specialization" className="block text-sm font-medium text-foreground">
              Specialization
            </label>
            <select
              id="specialization"
              name="specialization"
              value={formData.specialization}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
            >
              <option value="">Select your specialization</option>
              <option value="Cardiology">Cardiology</option>
              <option value="Neurology">Neurology</option>
              <option value="Surgery">Surgery</option>
              <option value="Pediatrics">Pediatrics</option>
              <option value="Oncology">Oncology</option>
              <option value="Digital Health">Digital Health</option>
              <option value="Other">Other</option>
            </select>
          </div>

          {/* Password */}
          <div className="space-y-2">
            <label htmlFor="password" className="block text-sm font-medium text-foreground">
              Password
            </label>
            <div className="relative">
              <Lock className="absolute left-3 top-3 text-muted-foreground" size={18} />
              <input
                id="password"
                name="password"
                type={showPassword ? "text" : "password"}
                placeholder="••••••••"
                value={formData.password}
                onChange={handleChange}
                required
                className="w-full pl-10 pr-10 py-2 border border-border rounded-lg bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-3 text-muted-foreground hover:text-foreground transition"
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
          </div>

          {/* Confirm Password */}
          <div className="space-y-2">
            <label htmlFor="confirmPassword" className="block text-sm font-medium text-foreground">
              Confirm Password
            </label>
            <div className="relative">
              <Lock className="absolute left-3 top-3 text-muted-foreground" size={18} />
              <input
                id="confirmPassword"
                name="confirmPassword"
                type={showConfirm ? "text" : "password"}
                placeholder="••••••••"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
                className="w-full pl-10 pr-10 py-2 border border-border rounded-lg bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <button
                type="button"
                onClick={() => setShowConfirm(!showConfirm)}
                className="absolute right-3 top-3 text-muted-foreground hover:text-foreground transition"
              >
                {showConfirm ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
          </div>

          {/* Terms Agreement */}
          <label className="flex items-start gap-2 cursor-pointer">
            <input
              type="checkbox"
              checked={agreedToTerms}
              onChange={(e) => setAgreedToTerms(e.target.checked)}
              className="mt-1 w-4 h-4 rounded border-border accent-primary"
            />
            <span className="text-sm text-muted-foreground">
              I agree to the{" "}
              <Link href="#" className="text-primary hover:underline">
                Terms of Service
              </Link>{" "}
              and{" "}
              <Link href="#" className="text-primary hover:underline">
                Privacy Policy
              </Link>
            </span>
          </label>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isLoading || !agreedToTerms}
            className="w-full py-2 bg-primary text-primary-foreground rounded-lg font-medium hover:opacity-90 transition disabled:opacity-50 flex items-center justify-center gap-2"
          >
            {isLoading ? (
              <>
                <Loader size={18} className="animate-spin" />
                Creating account...
              </>
            ) : (
              <>
                Create Account
                <ArrowRight size={18} />
              </>
            )}
          </button>
        </form>

        {/* Divider */}
        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-border"></div>
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-2 bg-card text-muted-foreground">Or sign up with</span>
          </div>
        </div>

        {/* Social Sign Up */}
        <div className="grid grid-cols-2 gap-3">
          <button className="py-2 px-4 border border-border rounded-lg text-foreground hover:bg-muted transition font-medium text-sm">
            Google
          </button>
          <button className="py-2 px-4 border border-border rounded-lg text-foreground hover:bg-muted transition font-medium text-sm">
            LinkedIn
          </button>
        </div>

        {/* Sign In Link */}
        <p className="text-center text-muted-foreground">
          Already have an account?{" "}
          <Link href="/login" className="text-primary font-medium hover:text-primary/80 transition">
            Sign in
          </Link>
        </p>
      </div>
    </div>
  )
}
