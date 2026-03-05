import Image from "next/image"
import Link from "next/link"
import { CheckCircle2 } from "lucide-react"

const highlights = [
  "Berpengalaman lebih dari 15 tahun di industri furniture",
  "Menggunakan bahan berkualitas premium pilihan",
  "Tim pengrajin profesional dan berpengalaman",
  "Showroom terlengkap di Banjarmasin",
  "Layanan konsultasi desain interior gratis",
  "Garansi dan layanan purna jual terpercaya",
]

export function About() {
  return (
    <section id="tentang" className="bg-secondary py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Image */}
          <div className="relative">
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
              <Image
                src="/images/about-showroom.jpg"
                alt="Showroom toko meubel furniture Banjarmasin terlengkap dengan koleksi furniture berkualitas"
                fill
                className="object-cover"
              />
            </div>
            {/* Floating card */}
            <div className="absolute -bottom-6 -right-4 rounded-xl bg-primary p-6 text-primary-foreground shadow-xl md:right-[-2rem]">
              <p className="font-serif text-3xl font-bold">15+</p>
              <p className="text-sm font-medium opacity-90">Tahun Melayani Banjarmasin</p>
            </div>
          </div>

          {/* Content */}
          <div>
            <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-accent">
              Tentang Kami
            </p>
            <h2 className="font-serif text-3xl font-bold text-foreground md:text-4xl">
              <span className="text-balance">
                Toko Meubel Terpercaya di Banjarmasin Sejak 2009
              </span>
            </h2>
            <p className="mt-6 leading-relaxed text-muted-foreground">
              Meubel Banjarmasin adalah toko furniture terlengkap dan terpercaya di Kota
              Banjarmasin, Kalimantan Selatan. Kami menyediakan berbagai macam furniture
              berkualitas tinggi untuk rumah, kantor, dan kebutuhan komersial Anda.
            </p>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              Dengan pengalaman lebih dari 15 tahun, kami berkomitmen memberikan produk
              furniture terbaik dengan harga yang terjangkau. Kepuasan pelanggan adalah
              prioritas utama kami.
            </p>

            {/* Highlights */}
            <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {highlights.map((item) => (
                <div key={item} className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                  <span className="text-sm text-foreground">{item}</span>
                </div>
              ))}
            </div>

            <Link
              href="https://wa.me/6281256440494"
              className="mt-8 inline-flex rounded-lg bg-primary px-8 py-4 text-sm font-semibold text-primary-foreground transition-all hover:opacity-90"
            >
              Hubungi Kami Sekarang
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
