"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { supabase } from "@/lib/supabase"
import { Lock, Mail, Loader2, AlertCircle } from "lucide-react"

export default function AdminLoginPage() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const router = useRouter()

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError(null)

    try {
      const { error: authError } = await supabase.auth.signInWithPassword({
        email,
        password,
      })

      if (authError) throw authError

      router.push("/admin/dashboard")
    } catch (err: any) {
      setError(err.message || "Email atau Password salah")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-[#fdfaf6] px-4 py-20">
      <div className="w-full max-w-md animate-in fade-in zoom-in duration-500">
        <div className="mb-10 text-center">
          <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
            <Lock className="h-8 w-8" />
          </div>
          <h1 className="font-serif text-3xl font-bold text-[#352014]">Admin Login</h1>
          <p className="mt-2 text-muted-foreground">Masuk untuk mengelola katalog Nova Interior</p>
        </div>

        <div className="rounded-3xl border border-[#e8dfcf] bg-white p-8 shadow-xl shadow-brown-500/5 md:p-10">
          {error && (
            <div className="mb-6 flex items-center gap-3 rounded-xl bg-red-50 p-4 text-sm text-red-600 animate-in slide-in-from-top-2">
              <AlertCircle className="h-5 w-5 shrink-0" />
              <p>{error}</p>
            </div>
          )}

          <form onSubmit={handleLogin} className="space-y-6">
            <div className="space-y-2">
              <label className="text-sm font-bold text-[#352014]" htmlFor="email">
                Alamat Email
              </label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
                <input
                  id="email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="admin@example.com"
                  className="w-full rounded-xl border border-[#e8dfcf] bg-[#fdfaf6]/50 py-4 pl-12 pr-4 text-[#352014] outline-none transition-all focus:border-[#6d4c3d] focus:bg-white focus:ring-4 focus:ring-[#6d4c3d]/5"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-bold text-[#352014]" htmlFor="password">
                Password
              </label>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
                <input
                  id="password"
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full rounded-xl border border-[#e8dfcf] bg-[#fdfaf6]/50 py-4 pl-12 pr-4 text-[#352014] outline-none transition-all focus:border-[#6d4c3d] focus:bg-white focus:ring-4 focus:ring-[#6d4c3d]/5"
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#6d4c3d] py-4 font-bold text-white shadow-lg transition-all hover:bg-[#5a3f32] active:scale-[0.98] disabled:opacity-70"
            >
              {loading ? (
                <>
                  <Loader2 className="h-5 w-5 animate-spin" />
                  <span>Memproses...</span>
                </>
              ) : (
                "Masuk ke Dashboard"
              )}
            </button>
          </form>
        </div>

        <div className="mt-8 text-center">
          <p className="text-sm text-muted-foreground">
            Lupa password? Silakan hubungi tim IT Nova Interior Design.
          </p>
        </div>
      </div>
    </div>
  )
}
