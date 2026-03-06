"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X, Phone, MapPin, Clock, ChevronDown } from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

const navLinks = [
  { href: "/", label: "Beranda" },
  { href: "/categories", label: "Kategori" },
  { href: "/produk", label: "Produk" },
  { href: "/tentang", label: "Tentang Kami" },
  { href: "/testimoni", label: "Testimoni" },
  { href: "/kontak", label: "Kontak" },
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
            href="https://wa.me/6289692530975"
            className="flex items-center gap-1 font-medium transition-opacity hover:opacity-80"
          >
            <Phone className="h-3 w-3" />
            0896-9253-0975
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
            {navLinks.map((link) =>
              link.label === "Kategori" ? (
                <DropdownMenu key={link.href}>
                  <DropdownMenuTrigger className="flex items-center gap-1 text-sm font-medium text-foreground/80 transition-colors hover:text-primary focus:outline-none">
                    {link.label}
                    <ChevronDown className="h-4 w-4" />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="start" className="w-48">
                    {[
                      "Sofa",
                      "Meja",
                      "Lemari",
                      "Kursi",
                      "Tempat Tidur",
                      "Rak",
                    ].map((cat) => (
                      <DropdownMenuItem key={cat} asChild>
                        <Link
                          href={`/produk?category=${cat}`}
                          className="w-full cursor-pointer"
                        >
                          {cat}
                        </Link>
                      </DropdownMenuItem>
                    ))}
                    <div className="my-1 h-px bg-muted" />
                    <DropdownMenuItem asChild>
                      <Link
                        href="/produk?category=Semua"
                        className="w-full cursor-pointer font-medium text-primary"
                      >
                        Lihat Semua
                      </Link>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm font-medium text-foreground/80 transition-colors hover:text-primary"
                >
                  {link.label}
                </Link>
              )
            )}
          </div>

          {/* CTA + mobile toggle */}
          <div className="flex items-center gap-3">
            <Link
              href="https://wa.me/6289692530975"
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
                href="https://wa.me/6289692530975"
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
