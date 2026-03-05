import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Star } from "lucide-react"

export function Hero() {
  return (
    <section id="beranda" className="relative overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-living-room.jpg"
          alt="Interior ruang tamu modern dengan furniture berkualitas di toko meubel furniture Banjarmasin"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/90 via-foreground/70 to-foreground/30" />
      </div>

      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-start justify-center px-4 py-24 md:py-32 lg:py-40">
        {/* Badge */}
        <div className="mb-6 flex items-center gap-2 rounded-full bg-card/10 px-4 py-2 backdrop-blur-sm">
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
            ))}
          </div>
          <span className="text-sm font-medium text-card">
            Toko Meubel Terbaik Banjarmasin
          </span>
        </div>

        <h1 className="max-w-3xl font-serif text-4xl font-bold leading-tight text-card md:text-5xl lg:text-6xl xl:text-7xl">
          <span className="text-balance">
            Furniture Berkualitas untuk Rumah Impian Anda
          </span>
        </h1>

        <p className="mt-6 max-w-xl text-base leading-relaxed text-card/80 md:text-lg">
          Toko meubel furniture Banjarmasin terlengkap dengan koleksi sofa, meja, lemari,
          kursi, dan tempat tidur berkualitas tinggi. Harga terjangkau, kualitas premium.
        </p>

        <div className="mt-8 flex flex-col gap-4 sm:flex-row">
          <Link
            href="#produk"
            className="group flex items-center justify-center gap-2 rounded-lg bg-accent px-8 py-4 text-sm font-semibold text-accent-foreground transition-all hover:opacity-90"
          >
            Lihat Koleksi
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
          <Link
            href="https://wa.me/6281256440494"
            className="flex items-center justify-center gap-2 rounded-lg border border-card/30 px-8 py-4 text-sm font-semibold text-card backdrop-blur-sm transition-all hover:bg-card/10"
          >
            Konsultasi Gratis
          </Link>
        </div>

        {/* Stats */}
        <div className="mt-12 grid grid-cols-3 gap-6 border-t border-card/20 pt-8 md:gap-12">
          <div>
            <p className="font-serif text-2xl font-bold text-card md:text-4xl">500+</p>
            <p className="mt-1 text-xs text-card/60 md:text-sm">Produk Tersedia</p>
          </div>
          <div>
            <p className="font-serif text-2xl font-bold text-card md:text-4xl">10K+</p>
            <p className="mt-1 text-xs text-card/60 md:text-sm">Pelanggan Puas</p>
          </div>
          <div>
            <p className="font-serif text-2xl font-bold text-card md:text-4xl">15+</p>
            <p className="mt-1 text-xs text-card/60 md:text-sm">Tahun Pengalaman</p>
          </div>
        </div>
      </div>
    </section>
  )
}
