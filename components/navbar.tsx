"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X, Phone, MapPin, Clock } from "lucide-react"

const navLinks = [
  { href: "#beranda", label: "Beranda" },
  { href: "#kategori", label: "Kategori" },
  { href: "#produk", label: "Produk" },
  { href: "#tentang", label: "Tentang Kami" },
  { href: "#testimoni", label: "Testimoni" },
  { href: "#kontak", label: "Kontak" },
]

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <>
      {/* Top bar */}
      <div className="bg-primary text-primary-foreground">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2 text-xs md:text-sm">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1">
              <MapPin className="h-3 w-3" />
              <span className="hidden sm:inline">Jl. Tembus Mantuil, Banjarmasin Selatan</span>
              <span className="sm:hidden">Banjarmasin</span>
            </span>
            <span className="flex items-center gap-1">
              <Clock className="h-3 w-3" />
              <span>Buka 24 Jam</span>
            </span>
          </div>
          <Link
            href="https://wa.me/6281256440494"
            className="flex items-center gap-1 font-medium transition-opacity hover:opacity-80"
          >
            <Phone className="h-3 w-3" />
            0812-5644-0494
          </Link>
        </div>
      </div>

      {/* Main navbar */}
      <nav className="sticky top-0 z-50 border-b border-border bg-card/95 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
              <span className="font-serif text-lg font-bold text-primary-foreground">M</span>
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-xl font-bold leading-tight text-foreground">
                Meubel
              </span>
              <span className="text-[10px] font-medium uppercase tracking-widest text-muted-foreground">
                Banjarmasin
              </span>
            </div>
          </Link>

          {/* Desktop links */}
          <div className="hidden items-center gap-8 lg:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-foreground/80 transition-colors hover:text-primary"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* CTA + mobile toggle */}
          <div className="flex items-center gap-3">
            <Link
              href="https://wa.me/6281256440494"
              className="hidden rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-all hover:opacity-90 md:inline-flex"
            >
              Hubungi Kami
            </Link>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="rounded-lg p-2 text-foreground transition-colors hover:bg-secondary lg:hidden"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="border-t border-border bg-card px-4 pb-6 pt-4 lg:hidden">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-base font-medium text-foreground/80 transition-colors hover:text-primary"
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="https://wa.me/6281256440494"
                className="mt-2 rounded-lg bg-primary px-5 py-3 text-center text-sm font-semibold text-primary-foreground"
              >
                Hubungi Kami via WhatsApp
              </Link>
            </div>
          </div>
        )}
      </nav>
    </>
  )
}
