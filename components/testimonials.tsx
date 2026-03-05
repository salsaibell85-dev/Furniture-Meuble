"use client"

import { useState } from "react"
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react"

const testimonials = [
  {
    name: "Hj. Siti Rahmah",
    role: "Ibu Rumah Tangga",
    text: "Saya sudah berlangganan di toko meubel ini sejak 5 tahun lalu. Kualitas furniturenya sangat bagus dan tahan lama. Sofa yang saya beli masih terlihat seperti baru. Pasti akan beli lagi!",
    rating: 5,
    location: "Banjarmasin Timur",
  },
  {
    name: "H. Ahmad Fauzi",
    role: "Pengusaha",
    text: "Toko furniture Banjarmasin yang paling lengkap menurut saya. Saya pernah memesan custom furniture untuk kantor dan hasilnya sangat memuaskan. Pelayanannya ramah dan profesional.",
    rating: 5,
    location: "Banjarmasin Utara",
  },
  {
    name: "Dra. Nur Hasanah",
    role: "PNS",
    text: "Meubel Banjarmasin memang toko meuble terbaik di Banjarmasin. Harga terjangkau tapi kualitasnya tidak murahan. Lemari dan meja makan yang saya beli sangat kokoh dan desainnya elegan.",
    rating: 5,
    location: "Banjarmasin Selatan",
  },
  {
    name: "Ir. Muhammad Rizki",
    role: "Arsitek",
    text: "Sebagai arsitek, saya sering merekomendasikan klien saya untuk membeli furniture di sini. Pilihan produknya beragam, mulai dari minimalis hingga klasik. Kualitas materialnya juga sangat baik.",
    rating: 5,
    location: "Banjarmasin Barat",
  },
  {
    name: "Hj. Fatimah Zahra",
    role: "Interior Designer",
    text: "Toko meuble paling terpercaya di Banjarmasin. Saya sudah banyak berkolaborasi dengan mereka untuk proyek desain interior. Hasil akhirnya selalu memuaskan dan sesuai ekspektasi klien.",
    rating: 5,
    location: "Banjarbaru",
  },
]

export function Testimonials() {
  const [current, setCurrent] = useState(0)

  function next() {
    setCurrent((prev) => (prev + 1) % testimonials.length)
  }

  function prev() {
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const testimonial = testimonials[current]

  return (
    <section id="testimoni" className="bg-primary py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mb-14 text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-primary-foreground/60">
            Testimoni Pelanggan
          </p>
          <h2 className="font-serif text-3xl font-bold text-primary-foreground md:text-4xl lg:text-5xl">
            Apa Kata Pelanggan Kami
          </h2>
        </div>

        <div className="mx-auto max-w-3xl">
          <div className="relative rounded-2xl bg-primary-foreground/10 p-8 backdrop-blur-sm md:p-12">
            <Quote className="absolute left-6 top-6 h-10 w-10 text-primary-foreground/20 md:left-10 md:top-8" />
            {/* Stars */}
            <div className="mb-6 flex justify-center gap-1">
              {[...Array(testimonial.rating)].map((_, i) => (
                <Star key={i} className="h-5 w-5 fill-amber-400 text-amber-400" />
              ))}
            </div>

            <blockquote className="text-center text-lg leading-relaxed text-primary-foreground md:text-xl">
              {`"${testimonial.text}"`}
            </blockquote>

            <div className="mt-8 text-center">
              <p className="font-serif text-lg font-bold text-primary-foreground">
                {testimonial.name}
              </p>
              <p className="text-sm text-primary-foreground/70">
                {testimonial.role} - {testimonial.location}
              </p>
            </div>
          </div>

          {/* Navigation */}
          <div className="mt-8 flex items-center justify-center gap-4">
            <button
              onClick={prev}
              className="flex h-12 w-12 items-center justify-center rounded-full border border-primary-foreground/20 text-primary-foreground transition-colors hover:bg-primary-foreground/10"
              aria-label="Testimoni sebelumnya"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>

            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`h-2.5 rounded-full transition-all ${
                    i === current
                      ? "w-8 bg-primary-foreground"
                      : "w-2.5 bg-primary-foreground/30"
                  }`}
                  aria-label={`Ke testimoni ${i + 1}`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="flex h-12 w-12 items-center justify-center rounded-full border border-primary-foreground/20 text-primary-foreground transition-colors hover:bg-primary-foreground/10"
              aria-label="Testimoni berikutnya"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
