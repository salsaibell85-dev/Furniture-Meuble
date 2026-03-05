"use client"

import Image from "next/image"
import Link from "next/link"
import { Star, ShoppingBag } from "lucide-react"
import { useState } from "react"

const products = [
  {
    id: 1,
    name: "Sofa Ruang Tamu Premium",
    category: "Sofa",
    price: 4599000,
    originalPrice: 6299000,
    rating: 4.9,
    reviews: 128,
    image: "/images/prod-sofa-1.jpg",
    badge: "Best Seller",
  },
  {
    id: 2,
    name: "Meja Tamu Kayu Jati",
    category: "Meja",
    price: 1299000,
    originalPrice: 1899000,
    rating: 4.8,
    reviews: 95,
    image: "/images/prod-meja-1.jpg",
    badge: "Promo",
  },
  {
    id: 3,
    name: "Lemari Pakaian 3 Pintu",
    category: "Lemari",
    price: 3799000,
    originalPrice: 5199000,
    rating: 4.9,
    reviews: 73,
    image: "/images/prod-lemari-1.jpg",
    badge: null,
  },
  {
    id: 4,
    name: "Ranjang Kayu Minimalis",
    category: "Tempat Tidur",
    price: 3299000,
    originalPrice: 4599000,
    rating: 4.7,
    reviews: 86,
    image: "/images/prod-bed-1.jpg",
    badge: "Terbaru",
  },
  {
    id: 5,
    name: "Set Meja Makan 4 Kursi",
    category: "Meja",
    price: 5499000,
    originalPrice: 7299000,
    rating: 4.9,
    reviews: 64,
    image: "/images/prod-dining-1.jpg",
    badge: "Promo",
  },
  {
    id: 6,
    name: "Rak Buku 5 Tingkat",
    category: "Rak",
    price: 899000,
    originalPrice: 1299000,
    rating: 4.8,
    reviews: 112,
    image: "/images/prod-rak-1.jpg",
    badge: null,
  },
  {
    id: 7,
    name: "Kursi Kantor Ergonomis",
    category: "Kursi",
    price: 1899000,
    originalPrice: 2499000,
    rating: 4.7,
    reviews: 58,
    image: "/images/prod-kursi-1.jpg",
    badge: "Best Seller",
  },
  {
    id: 8,
    name: "Meja TV Minimalis",
    category: "Meja",
    price: 1599000,
    originalPrice: 2199000,
    rating: 4.8,
    reviews: 41,
    image: "/images/prod-tv-1.jpg",
    badge: "Terbaru",
  },
]

const filters = ["Semua", "Sofa", "Meja", "Lemari", "Kursi", "Tempat Tidur", "Rak"]

function formatPrice(price: number) {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
  }).format(price)
}

function getDiscount(original: number, current: number) {
  return Math.round(((original - current) / original) * 100)
}

export function FeaturedProducts() {
  const [active, setActive] = useState("Semua")

  const filtered =
    active === "Semua"
      ? products
      : products.filter((p) => p.category === active)

  return (
    <section id="produk" className="bg-secondary py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4">
        {/* Header */}
        <div className="mb-10 text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-accent">
            Koleksi Terlaris
          </p>
          <h2 className="font-serif text-3xl font-bold text-foreground md:text-4xl lg:text-5xl">
            Produk Unggulan Kami
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            Temukan furniture berkualitas terbaik dengan harga terjangkau di toko meubel
            Banjarmasin. Semua produk kami menggunakan bahan pilihan dan finishing premium.
          </p>
        </div>

        {/* Filters */}
        <div className="mb-10 flex flex-wrap items-center justify-center gap-2">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActive(f)}
              className={`rounded-full px-5 py-2 text-sm font-medium transition-all ${
                active === f
                  ? "bg-primary text-primary-foreground"
                  : "bg-card text-foreground/70 hover:bg-card hover:text-foreground"
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Products grid */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {filtered.map((product) => (
            <article
              key={product.id}
              className="group overflow-hidden rounded-xl bg-card transition-shadow hover:shadow-lg"
            >
              <div className="relative aspect-square overflow-hidden">
                <Image
                  src={product.image}
                  alt={`${product.name} - Jual ${product.category} berkualitas di toko furniture Banjarmasin`}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {product.badge && (
                  <span className="absolute left-3 top-3 rounded-full bg-accent px-3 py-1 text-xs font-bold text-accent-foreground">
                    {product.badge}
                  </span>
                )}
                {/* Quick action */}
                <Link
                  href="https://wa.me/6281256440494"
                  className="absolute bottom-3 right-3 flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground opacity-0 shadow-lg transition-all duration-300 group-hover:opacity-100"
                  aria-label={`Pesan ${product.name} via WhatsApp`}
                >
                  <ShoppingBag className="h-5 w-5" />
                </Link>
              </div>

              <div className="p-4">
                <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
                  {product.category}
                </p>
                <h3 className="mt-1 text-sm font-semibold text-foreground line-clamp-2">
                  {product.name}
                </h3>

                {/* Rating */}
                <div className="mt-2 flex items-center gap-1">
                  <Star className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
                  <span className="text-xs font-medium text-foreground">
                    {product.rating}
                  </span>
                  <span className="text-xs text-muted-foreground">
                    ({product.reviews} ulasan)
                  </span>
                </div>

                {/* Price */}
                <div className="mt-3 flex items-center gap-2">
                  <span className="text-lg font-bold text-primary">
                    {formatPrice(product.price)}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-xs text-muted-foreground line-through">
                    {formatPrice(product.originalPrice)}
                  </span>
                  <span className="rounded bg-accent/10 px-1.5 py-0.5 text-xs font-bold text-accent">
                    -{getDiscount(product.originalPrice, product.price)}%
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <Link
            href="https://wa.me/6281256440494"
            className="inline-flex items-center gap-2 rounded-lg bg-primary px-8 py-4 text-sm font-semibold text-primary-foreground transition-all hover:opacity-90"
          >
            Lihat Semua Produk via WhatsApp
          </Link>
        </div>
      </div>
    </section>
  )
}
