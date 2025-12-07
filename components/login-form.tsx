"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Mail, Lock, Eye, EyeOff, ArrowRight, Loader } from "lucide-react"

export default function LoginForm() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [showPassword, setShowPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false)
      alert("Login functionality will connect to your backend")
    }, 1500)
  }

  return (
    <div className="w-full max-w-md">
      <div className="bg-card border border-border rounded-xl p-8 space-y-6">
        <div className="space-y-2 text-center">
          <h1 className="text-3xl font-bold text-foreground">Welcome Back</h1>
          <p className="text-muted-foreground">Sign in to your MedGlobal Connect account</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Email Field */}
          <div className="space-y-2">
            <label htmlFor="email" className="block text-sm font-medium text-foreground">
              Email Address
            </label>
            <div className="relative">
              <Mail className="absolute left-3 top-3 text-muted-foreground" size={18} />
              <input
                id="email"
                type="email"
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full pl-10 pr-4 py-2 border border-border rounded-lg bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
          </div>

          {/* Password Field */}
          <div className="space-y-2">
            <label htmlFor="password" className="block text-sm font-medium text-foreground">
              Password
            </label>
            <div className="relative">
              <Lock className="absolute left-3 top-3 text-muted-foreground" size={18} />
              <input
                id="password"
                type={showPassword ? "text" : "password"}
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
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

          {/* Remember & Forgot */}
          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center gap-2 cursor-pointer">
              <input type="checkbox" className="rounded border-border" />
              <span className="text-muted-foreground">Remember me</span>
            </label>
            <Link href="#" className="text-primary hover:text-primary/80 font-medium transition">
              Forgot password?
            </Link>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isLoading}
            className="w-full py-2 bg-primary text-primary-foreground rounded-lg font-medium hover:opacity-90 transition disabled:opacity-50 flex items-center justify-center gap-2"
          >
            {isLoading ? (
              <>
                <Loader size={18} className="animate-spin" />
                Signing in...
              </>
            ) : (
              <>
                Sign In
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
            <span className="px-2 bg-card text-muted-foreground">Or continue with</span>
          </div>
        </div>

        {/* Social Login */}
        <div className="grid grid-cols-2 gap-3">
          <button className="py-2 px-4 border border-border rounded-lg text-foreground hover:bg-muted transition font-medium text-sm">
            Google
          </button>
          <button className="py-2 px-4 border border-border rounded-lg text-foreground hover:bg-muted transition font-medium text-sm">
            LinkedIn
          </button>
        </div>

        {/* Sign Up Link */}
        <p className="text-center text-muted-foreground">
          Don't have an account?{" "}
          <Link href="/signup" className="text-primary font-medium hover:text-primary/80 transition">
            Sign up
          </Link>
        </p>
      </div>

      {/* Additional Info */}
      <div className="mt-6 text-center text-sm text-muted-foreground">
        <p>By signing in, you agree to our</p>
        <div className="flex items-center justify-center gap-1 flex-wrap">
          <Link href="#" className="text-primary hover:underline">
            Terms of Service
          </Link>
          <span>and</span>
          <Link href="#" className="text-primary hover:underline">
            Privacy Policy
          </Link>
        </div>
      </div>
    </div>
  )
}
