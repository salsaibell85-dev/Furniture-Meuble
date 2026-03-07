import Link from "next/link"
import { Phone, MapPin, Clock, Mail } from "lucide-react"

const categories = [
  "Sofa",
  "Meja Makan",
  "Lemari Pakaian",
  "Tempat Tidur",
  "Kursi Kantor",
  "Rak Buku",
  "Meja TV",
  "Meja Tamu",
]

const quickLinks = [
  { label: "Beranda", href: "#beranda" },
  { label: "Kategori Produk", href: "#kategori" },
  { label: "Produk Unggulan", href: "#produk" },
  { label: "Tentang Kami", href: "#tentang" },
  { label: "Testimoni", href: "#testimoni" },
  { label: "Kontak", href: "#kontak" },
]

export function Footer() {
  return (
    <footer className="bg-foreground text-background">
      <div className="mx-auto max-w-7xl px-4 py-16">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent">
                <span className="font-serif text-lg font-bold text-accent-foreground">N</span>
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-xl font-bold leading-tight">
                  Nova Interior
                </span>
                <span className="text-[10px] font-medium uppercase tracking-widest text-background/60">
                  Design
                </span>
              </div>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-background/70">
              Nova Interior design adalah toko furniture dan jasa desain interior terpercaya di Banjarmasin. Menyediakan
              berbagai furniture berkualitas premium untuk rumah dan kantor Anda.
            </p>
            <div className="mt-4 flex flex-col gap-2">
              <Link
                href="https://wa.me/6289692530975"
                className="flex items-center gap-2 text-sm text-background/70 hover:text-background"
              >
                <Phone className="h-4 w-4" />
                0896-9253-0975
              </Link>
              <div className="flex items-center gap-2 text-sm text-background/70">
                <Mail className="h-4 w-4" />
                info@novainteriordesign.com
              </div>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="font-serif text-base font-bold">Menu</h3>
            <ul className="mt-4 flex flex-col gap-2.5">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-background/70 transition-colors hover:text-background"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="font-serif text-base font-bold">Kategori</h3>
            <ul className="mt-4 flex flex-col gap-2.5">
              {categories.map((cat) => (
                <li key={cat}>
                  <Link
                    href="https://wa.me/6289692530975"
                    className="text-sm text-background/70 transition-colors hover:text-background"
                  >
                    {cat}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Info */}
          <div>
            <h3 className="font-serif text-base font-bold">Informasi</h3>
            <div className="mt-4 flex flex-col gap-4">
              <div className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                <span className="text-sm text-background/70">
                  Jl. Tembus Mantuil, Kelayan Sel., Kec. Banjarmasin Sel., Kota
                  Banjarmasin, Kalimantan Selatan 70112
                </span>
              </div>
              <div className="flex items-start gap-2">
                <Clock className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                <span className="text-sm text-background/70">
                  Buka 24 Jam, Senin - Minggu
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 border-t border-background/10 pt-8">
          <div className="flex flex-col items-center justify-between gap-4 text-center md:flex-row md:text-left">
            <p className="text-xs text-background/50">
              &copy; {new Date().getFullYear()} Nova Interior design. Semua hak dilindungi.
              Toko mebel dan jasa desain interior terbaik di Banjarmasin.
            </p>
            <div className="flex gap-4 text-xs text-background/50">
              <span>Nova Interior Design</span>
              <span>|</span>
              <span>Furniture & Interior Banjarmasin</span>
              <span>|</span>
              <span>Interior Kalimantan Selatan</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
