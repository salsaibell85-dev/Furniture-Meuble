"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { supabase } from "@/lib/supabase"
import { LayoutDashboard, LogOut, Package, Users, Settings, Loader2 } from "lucide-react"

export default function AdminDashboardPage() {
  const [user, setUser] = useState<any>(null)
  const [loading, setLoading] = useState(true)
  const [activeTab, setActiveTab] = useState("dashboard")
  const router = useRouter()

  useEffect(() => {
    async function checkAuth() {
      const { data: { session } } = await supabase.auth.getSession()
      
      if (!session) {
        router.push("/admin/login")
      } else {
        setUser(session.user)
        setLoading(false)
      }
    }

    checkAuth()
  }, [router])

  const handleLogout = async () => {
    await supabase.auth.signOut()
    router.push("/admin/login")
  }

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#fdfaf6]">
        <div className="flex flex-col items-center gap-4 text-center">
          <Loader2 className="h-10 w-10 animate-spin text-[#6d4c3d]" />
          <p className="text-sm font-medium text-muted-foreground tracking-wide">Memeriksa Autentikasi...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="flex min-h-screen flex-col bg-[#fdfaf6] lg:flex-row">
      {/* Sidebar */}
      <aside className="w-full border-r border-[#e8dfcf] bg-white lg:w-72">
        <div className="flex h-full flex-col px-6 py-8">
          <div className="mb-10 px-2">
            <h2 className="font-serif text-2xl font-bold text-[#352014]">Nova Interior</h2>
            <p className="text-xs font-bold uppercase tracking-widest text-[#6d4c3d]/60">Admin Dashboard</p>
          </div>

          <nav className="flex-1 space-y-2">
            <button 
              onClick={() => setActiveTab("dashboard")}
              className={`flex w-full items-center gap-3 rounded-xl px-4 py-3 font-bold transition-all ${
                activeTab === "dashboard" ? "bg-primary/10 text-primary" : "text-muted-foreground/80 hover:bg-muted/50 hover:text-foreground"
              }`}
            >
              <LayoutDashboard className="h-5 w-5" />
              <span>Dashboard</span>
            </button>
            <button 
              onClick={() => setActiveTab("produk")}
              className={`flex w-full items-center gap-3 rounded-xl px-4 py-3 font-bold transition-all ${
                activeTab === "produk" ? "bg-primary/10 text-primary" : "text-muted-foreground/80 hover:bg-muted/50 hover:text-foreground"
              }`}
            >
              <Package className="h-5 w-5" />
              <span>Kelola Produk</span>
            </button>
            <button 
              onClick={() => setActiveTab("pelanggan")}
              className={`flex w-full items-center gap-3 rounded-xl px-4 py-3 font-bold transition-all ${
                activeTab === "pelanggan" ? "bg-primary/10 text-primary" : "text-muted-foreground/80 hover:bg-muted/50 hover:text-foreground"
              }`}
            >
              <Users className="h-5 w-5" />
              <span>Pelanggan</span>
            </button>
            <button 
              onClick={() => setActiveTab("pengaturan")}
              className={`flex w-full items-center gap-3 rounded-xl px-4 py-3 font-bold transition-all ${
                activeTab === "pengaturan" ? "bg-primary/10 text-primary" : "text-muted-foreground/80 hover:bg-muted/50 hover:text-foreground"
              }`}
            >
              <Settings className="h-5 w-5" />
              <span>Pengaturan</span>
            </button>
          </nav>

          <div className="mt-auto pt-6 border-t border-[#f0ebe3]">
            <div className="mb-6 flex items-center gap-3 px-2">
              <div className="h-10 w-10 overflow-hidden rounded-full bg-[#fdfaf6] border border-[#e8dfcf]">
                <div className="flex h-full w-full items-center justify-center text-sm font-bold text-[#6d4c3d]">
                  {user?.email?.charAt(0).toUpperCase()}
                </div>
              </div>
              <div className="overflow-hidden">
                <p className="truncate text-sm font-bold text-[#352014]">{user?.email}</p>
                <p className="text-[10px] uppercase font-bold text-[#6d4c3d]/50">Administrator</p>
              </div>
            </div>
            <button 
              onClick={handleLogout}
              className="group flex w-full items-center gap-3 rounded-xl px-4 py-3 font-bold text-red-600 transition-all hover:bg-red-50"
            >
              <LogOut className="h-5 w-5 transition-transform group-hover:-translate-x-1" />
              <span>Sign Out</span>
            </button>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6 md:p-10 lg:p-14 overflow-y-auto max-h-screen animate-in fade-in slide-in-from-bottom-4 duration-700">
        <header className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h1 className="font-serif text-3xl font-bold text-[#352014]">Dashboard Overview</h1>
            <p className="mt-1 text-muted-foreground italic">Selamat datang kembali, Master Admin!</p>
          </div>
          <div className="flex items-center gap-3">
            <div className="rounded-xl bg-white px-4 py-3 border border-[#e8dfcf] shadow-sm">
              <span className="text-xs font-bold text-muted-foreground block">Server Status</span>
              <span className="text-sm font-bold text-green-600 flex items-center gap-1.5 leading-none">
                <span className="h-1.5 w-1.5 rounded-full bg-green-500 animate-pulse" />
                Live & Connected
              </span>
            </div>
          </div>
        </header>

        {activeTab === "dashboard" && (
          <>
            {/* Stats Grid */}
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <div className="group rounded-3xl bg-white p-8 border border-[#e8dfcf] shadow-sm transition-all hover:shadow-md hover:border-[#6d4c3d]/20">
                <p className="text-xs font-bold uppercase tracking-widest text-[#6d4c3d]/60 mb-2">Total Produk</p>
                <h3 className="text-4xl font-bold text-[#352014]">16</h3>
                <div className="mt-4 flex items-center gap-2 text-xs font-bold text-green-600">
                  <span className="rounded-full bg-green-50 px-2 py-1">+2 Bulan ini</span>
                </div>
              </div>
              <div className="group rounded-3xl bg-white p-8 border border-[#e8dfcf] shadow-sm transition-all hover:shadow-md hover:border-[#6d4c3d]/20">
                <p className="text-xs font-bold uppercase tracking-widest text-[#6d4c3d]/60 mb-2">Pesan Masuk</p>
                <h3 className="text-4xl font-bold text-[#352014]">24</h3>
                <div className="mt-4 flex items-center gap-2 text-xs font-bold text-accent">
                  <span className="rounded-full bg-accent/5 px-2 py-1">Pending: 5</span>
                </div>
              </div>
              <div className="group rounded-3xl bg-white p-8 border border-[#e8dfcf] shadow-sm transition-all hover:shadow-md hover:border-[#6d4c3d]/20">
                <p className="text-xs font-bold uppercase tracking-widest text-[#6d4c3d]/60 mb-2">Sistem</p>
                <h3 className="text-4xl font-bold text-[#352014]">Active</h3>
                <p className="mt-4 text-xs font-bold text-muted-foreground/60 italic">Supabase Auth Connected</p>
              </div>
            </div>

            {/* Quick Actions / Recent Activity Placeholder */}
            <div className="mt-10 rounded-3xl border border-dashed border-[#e8dfcf] bg-white/40 p-20 text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-muted/20 text-muted-foreground/30">
                    <LayoutDashboard className="h-10 w-10" />
                </div>
                <h3 className="text-lg font-bold text-[#352014]">Ringkasan Aktivitas</h3>
                <p className="mx-auto mt-2 max-w-sm text-sm text-muted-foreground leading-relaxed">
                    Statistik mendalam dan grafik aktivitas terbaru akan muncul di sini seiring bertambahnya data Anda.
                </p>
            </div>
          </>
        )}

        {activeTab === "produk" && (
          <div className="rounded-3xl border border-dashed border-[#e8dfcf] bg-white/40 p-20 text-center animate-in fade-in zoom-in-95 duration-500">
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
                <Package className="h-10 w-10" />
            </div>
            <h3 className="text-lg font-bold text-[#352014]">Panel Pengelolaan Produk</h3>
            <p className="mx-auto mt-2 max-w-sm text-sm text-muted-foreground leading-relaxed">
                Fitur pengelolaan produk secara visual sedang disiapkan. Anda dapat mengontrol data melalui dashboard Supabase untuk saat ini.
            </p>
            <button className="mt-6 rounded-xl bg-primary px-6 py-3 text-sm font-bold text-white shadow-lg transition-transform hover:scale-105 active:scale-95">
              Tambah Produk Baru
            </button>
          </div>
        )}

        {activeTab === "pelanggan" && (
          <div className="rounded-3xl border border-dashed border-[#e8dfcf] bg-white/40 p-20 text-center animate-in fade-in zoom-in-95 duration-500">
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-accent/10 text-accent">
                <Users className="h-10 w-10" />
            </div>
            <h3 className="text-lg font-bold text-[#352014]">Database Pelanggan</h3>
            <p className="mx-auto mt-2 max-w-sm text-sm text-muted-foreground leading-relaxed">
                Daftar pelanggan yang telah menghubungi atau membeli produk Anda akan ditampilkan di sini.
            </p>
          </div>
        )}

        {activeTab === "pengaturan" && (
          <div className="rounded-3xl border border-dashed border-[#e8dfcf] bg-white/40 p-20 text-center animate-in fade-in zoom-in-95 duration-500">
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-muted/20 text-muted-foreground/30">
                <Settings className="h-10 w-10" />
            </div>
            <h3 className="text-lg font-bold text-[#352014]">Pengaturan Sistem</h3>
            <p className="mx-auto mt-2 max-w-sm text-sm text-muted-foreground leading-relaxed">
                Konfigurasi website, profil admin, dan preferensi notifikasi dapat diatur di sini.
            </p>
          </div>
        )}
      </main>
    </div>
  )
}
