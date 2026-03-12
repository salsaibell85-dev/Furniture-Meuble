"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Eye, EyeOff, Lock, User, ArrowLeft } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsLoading(true)
    // TODO: Implement actual admin authentication logic
    setTimeout(() => setIsLoading(false), 1500)
  }

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center overflow-auto">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-living-room.jpg"
          alt="Nova Interior Design background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-br from-foreground/95 via-foreground/80 to-foreground/60" />
      </div>

      {/* Floating decorative elements */}
      <div className="pointer-events-none absolute inset-0 z-[1] overflow-hidden">
        <div className="absolute -left-20 -top-20 h-72 w-72 rounded-full bg-accent/10 blur-3xl" />
        <div className="absolute -bottom-32 -right-32 h-96 w-96 rounded-full bg-primary/10 blur-3xl" />
      </div>

      {/* Login card */}
      <div className="relative z-10 mx-4 w-full max-w-md">
        {/* Back to home */}
        <Link
          href="/"
          className="mb-6 inline-flex items-center gap-2 text-sm font-medium text-card/70 transition-colors hover:text-card"
        >
          <ArrowLeft className="h-4 w-4" />
          Kembali ke Beranda
        </Link>

        <div className="overflow-hidden rounded-2xl border border-card/10 bg-card/10 shadow-2xl backdrop-blur-xl">
          {/* Card header */}
          <div className="border-b border-card/10 px-8 pb-6 pt-8 text-center">
            {/* Logo */}
            <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-primary shadow-lg">
              <span className="font-serif text-2xl font-bold text-primary-foreground">N</span>
            </div>
            <h1 className="font-serif text-2xl font-bold text-card">
              Admin Panel
            </h1>
            <p className="mt-1.5 text-sm text-card/60">
              Masuk untuk mengelola Nova Interior Design
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-5 px-8 pb-8 pt-6">
            {/* Username */}
            <div className="space-y-2">
              <Label htmlFor="username" className="text-sm font-medium text-card/80">
                Username
              </Label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-card/40" />
                <Input
                  id="username"
                  name="username"
                  type="text"
                  placeholder="Masukkan username"
                  required
                  autoComplete="username"
                  className="h-11 border-card/15 bg-card/5 pl-10 text-card placeholder:text-card/30 focus-visible:border-accent focus-visible:ring-accent/30"
                />
              </div>
            </div>

            {/* Password */}
            <div className="space-y-2">
              <Label htmlFor="password" className="text-sm font-medium text-card/80">
                Password
              </Label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-card/40" />
                <Input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Masukkan password"
                  required
                  autoComplete="current-password"
                  className="h-11 border-card/15 bg-card/5 pl-10 pr-11 text-card placeholder:text-card/30 focus-visible:border-accent focus-visible:ring-accent/30"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-card/40 transition-colors hover:text-card/70"
                  aria-label={showPassword ? "Sembunyikan password" : "Tampilkan password"}
                >
                  {showPassword ? (
                    <EyeOff className="h-4 w-4" />
                  ) : (
                    <Eye className="h-4 w-4" />
                  )}
                </button>
              </div>
            </div>

            {/* Remember me & Forgot */}
            <div className="flex items-center justify-between">
              <label className="flex cursor-pointer items-center gap-2">
                <input
                  type="checkbox"
                  className="h-4 w-4 rounded border-card/20 bg-card/5 accent-accent"
                />
                <span className="text-sm text-card/60">Ingat Saya</span>
              </label>
              <button
                type="button"
                className="text-sm font-medium text-accent/80 transition-colors hover:text-accent"
              >
                Lupa Password?
              </button>
            </div>

            {/* Submit */}
            <Button
              type="submit"
              disabled={isLoading}
              className="h-11 w-full rounded-xl bg-primary text-sm font-semibold text-primary-foreground shadow-lg transition-all hover:opacity-90 disabled:opacity-60"
            >
              {isLoading ? (
                <span className="flex items-center gap-2">
                  <svg
                    className="h-4 w-4 animate-spin"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    />
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                    />
                  </svg>
                  Memproses...
                </span>
              ) : (
                "Masuk"
              )}
            </Button>
          </form>
        </div>

        {/* Footer text */}
        <p className="mt-6 text-center text-xs text-card/40">
          &copy; {new Date().getFullYear()} Nova Interior Design. Hanya untuk admin.
        </p>
      </div>
    </div>
  )
}
