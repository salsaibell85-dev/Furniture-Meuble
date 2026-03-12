"use client"

import Image from "next/image"
import Link from "next/link"
import { Star, ShoppingBag, Info, X } from "lucide-react"
import { useState, useEffect, Suspense } from "react"
import { useSearchParams } from "next/navigation"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog"

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
    description: "Sofa elegan dengan busa high-density yang tahan lama dan kain pelapis premium yang lembut di kulit. Desain ergonomis memberikan kenyamanan maksimal untuk ruang tamu Anda. Rangka kayu solid menjamin kekuatan struktural hingga bertahun-tahun penggunaan.",
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
    description: "Dibuat dari kayu jati asli pilihan dengan finishing natural yang menonjolkan keindahan serat kayu. Meja ini memiliki konstruksi kokoh dan desain minimalis yang cocok untuk berbagai gaya interior ruangan.",
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
    description: "Lemari pakaian luas dengan 3 pintu geser yang hemat ruang. Dilengkapi dengan gantungan baju stainless, rak yang dapat disesuaikan, dan laci penyimpanan dokumen penting dengan kunci keamanan.",
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
    description: "Dipan tempat tidur dengan desain scandinavian yang bersih dan modern. Struktur rangka yang stabil mencegah bunyi berderit, memastikan tidur Anda lebih nyenyak dan berkualitas.",
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
    description: "Set meja makan lengkap dengan 4 kursi bergaya modern. Permukaan meja tahan panas dan mudah dibersihkan. Kursi dilengkapi dengan bantalan empuk untuk kenyamanan saat menikmati hidangan bersama keluarga.",
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
    description: "Rak buku serbaguna dengan 5 tingkat penyimpanan terbuka. Cocok untuk menyimpan koleksi buku, pajangan, atau dokumen kantor. Material papan berkualitas tinggi yang tahan lembab.",
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
    description: "Kursi kerja dengan dukungan lumbar yang dapat disesuaikan dan sandaran mesh untuk sirkulasi udara yang baik. Membantu menjaga postur tubuh saat bekerja dalam waktu lama agar tidak cepat lelah.",
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
    description: "Meja TV dengan kombinasi penyimpanan terbuka dan tertutup. Memiliki lubang manajemen kabel agar instalasi perangkat hiburan Anda terlihat rapi dan terorganisir.",
  },
  {
    id: 9,
    name: "Sofa Sectional Velvet",
    category: "Sofa",
    price: 7899000,
    originalPrice: 9499000,
    rating: 5.0,
    reviews: 45,
    image: "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?auto=format&fit=crop&q=80&w=800",
    badge: "Luxury",
    description: "Sofa sectional dengan kain velvet mewah yang memberikan sentuhan glamor pada ruang tamu Anda. Tersedia dalam berbagai pilihan warna yang modern dan berkelas.",
  },
  {
    id: 10,
    name: "Meja Kerja Minimalis",
    category: "Meja",
    price: 2199000,
    originalPrice: 2899000,
    rating: 4.8,
    reviews: 32,
    image: "https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?auto=format&fit=crop&q=80&w=800",
    badge: "Work from Home",
    description: "Meja kerja dengan desain ramping dan laci tersembunyi. Cocok untuk sudut ruangan kecil tanpa mengorbankan fungsionalitas dan estetika.",
  },
  {
    id: 11,
    name: "Lemari Buku Kayu Mahoni",
    category: "Rak",
    price: 4299000,
    originalPrice: 5599000,
    rating: 4.9,
    reviews: 28,
    image: "https://images.unsplash.com/photo-1594620302200-9a762244a156?auto=format&fit=crop&q=80&w=800",
    badge: "Premium Wood",
    description: "Rak buku bergaya klasik yang terbuat dari kayu mahoni berkualitas tinggi. Finishing gelap yang memberikan kesan mewah dan abadi untuk perpustakaan pribadi Anda.",
  },
  {
    id: 12,
    name: "Kursi Lounge Scandinavian",
    category: "Kursi",
    price: 2499000,
    originalPrice: 3299000,
    rating: 4.8,
    reviews: 67,
    image: "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?auto=format&fit=crop&q=80&w=800",
    badge: "Design Award",
    description: "Kursi santai dengan desain scandinavian yang ikonik. Rangka kayu melengkung yang artistik dipadukan dengan bantalan fabric yang super nyaman.",
  },
  {
    id: 13,
    name: "Tempat Tidur Queen Size",
    category: "Tempat Tidur",
    price: 4899000,
    originalPrice: 6599000,
    rating: 4.9,
    reviews: 54,
    image: "https://images.unsplash.com/photo-1540518614846-7eded433c457?auto=format&fit=crop&q=80&w=800",
    badge: "Most Comfortable",
    description: "Tempat tidur queen size dengan headboard berlapis busa empuk. Memberikan dukungan yang baik saat Anda ingin bersantai atau membaca sebelum tidur.",
  },
  {
    id: 14,
    name: "Rak Pajangan Minimalis",
    category: "Rak",
    price: 1199000,
    originalPrice: 1699000,
    rating: 4.7,
    reviews: 39,
    image: "https://images.unsplash.com/photo-1616486029423-aaa4789e8c9a?auto=format&fit=crop&q=80&w=800",
    badge: "Promotion",
    description: "Rak serbaguna yang cocok untuk diletakkan di ruang tamu atau koridor. Desain rampingnya tidak memakan banyak tempat namun memberikan ruang display yang cukup.",
  },
  {
    id: 15,
    name: "Meja Rias Modern",
    category: "Meja",
    price: 2799000,
    originalPrice: 3899000,
    rating: 4.8,
    reviews: 25,
    image: "https://images.unsplash.com/photo-1544450186-39a7ccc3c73c?auto=format&fit=crop&q=80&w=800",
    badge: "Top Seller",
    description: "Meja rias dengan cermin besar dan pencahayaan terintegrasi. Dilengkapi banyak laci untuk menyimpan koleksi kosmetik Anda secara rapi dan terorganisir.",
  },
  {
    id: 16,
    name: "Lemari Dapur Gantung",
    category: "Lemari",
    price: 1999000,
    originalPrice: 2699000,
    rating: 4.9,
    reviews: 42,
    image: "https://images.unsplash.com/photo-1556911220-e152748a7315?auto=format&fit=crop&q=80&w=800",
    badge: null,
    description: "Lemari dapur gantung yang hemat ruang dengan finishing anti gores dan mudah dibersihkan. Cocok untuk menyimpan perlengkapan dapur agar selalu rapi.",
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

function generateWhatsAppLink(product: any) {
  if (!product) return "https://wa.me/6289692530975"

  const phoneNumber = "6289692530975"
  const formattedPrice = formatPrice(product.price)
  const message = `Halo Nova Interior Design,

Saya ingin memesan produk berikut:

Nama Produk: ${product.name}
Harga Produk: ${formattedPrice}
Jumlah Pesanan: [Isi Jumlah Barang]

Data Pemesan:
Nama: [Isi Nama Anda]
Alamat Pengiriman: [Isi Kota/Kecamatan]

Mohon informasi ketersediaan stok dan total biaya (termasuk ongkir). Terima kasih.`

  return `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
}

// Helper component for handling image load errors
const ProductImage = ({ src, alt, className }: { src: string; alt: string; className?: string }) => {
  const [error, setError] = useState(false)
  
  return (
    <div className="relative h-full w-full bg-muted">
      {!error ? (
        <Image
          src={src}
          alt={alt}
          fill
          className={`${className} transition-transform duration-500 group-hover:scale-105`}
          onError={() => setError(true)}
        />
      ) : (
        <div className="flex h-full w-full items-center justify-center bg-muted p-4 text-center">
          <div className="flex flex-col items-center gap-2">
            <ShoppingBag className="h-10 w-10 text-muted-foreground/30" />
            <span className="text-[10px] font-medium text-muted-foreground/60 uppercase tracking-tighter">
              Gambar Segera Hadir
            </span>
          </div>
        </div>
      )}
    </div>
  )
}

function FeaturedProductsContent() {
  const searchParams = useSearchParams()
  const initialCategory = searchParams.get("category") || "Semua"
  const [active, setActive] = useState(initialCategory)
  const [selectedProduct, setSelectedProduct] = useState<any>(null)

  useEffect(() => {
    if (initialCategory && filters.includes(initialCategory)) {
      setActive(initialCategory)
    }
  }, [initialCategory])

  useEffect(() => {
    const handleFilter = (e: any) => {
      if (e.detail && filters.includes(e.detail)) {
        setActive(e.detail)
      }
    }
    window.addEventListener("filterCategory", handleFilter)
    return () => window.removeEventListener("filterCategory", handleFilter)
  }, [])

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
            Produk Pilihan Nova Interior
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            Temukan furniture berkualitas premium dengan desain modern di Nova Interior design.
            Semua produk kami dikurasi untuk memberikan kenyamanan dan keindahan maksimal.
          </p>
        </div>

        {/* Filters */}
        <div className="mb-10 flex flex-wrap items-center justify-center gap-2">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActive(f)}
              className={`rounded-full px-5 py-2 text-sm font-medium transition-all ${active === f
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
              className="group cursor-pointer overflow-hidden rounded-xl bg-card transition-shadow hover:shadow-lg"
              onClick={() => setSelectedProduct(product)}
            >
              <div className="relative aspect-square overflow-hidden">
                <ProductImage
                  src={product.image}
                  alt={`${product.name} - Koleksi furniture premium dari Nova Interior design`}
                  className="object-cover"
                />
                {product.badge && (
                  <span className="absolute left-3 top-3 rounded-full bg-accent px-3 py-1 text-xs font-bold text-accent-foreground">
                    {product.badge}
                  </span>
                )}
                {/* Quick actions */}
                <div className="absolute bottom-3 right-3 flex flex-col gap-2 opacity-0 transition-all duration-300 group-hover:opacity-100">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedProduct(product);
                    }}
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-card text-foreground shadow-lg hover:bg-accent hover:text-accent-foreground"
                    aria-label="Detail Produk"
                  >
                    <Info className="h-5 w-5" />
                  </button>
                  <Link
                    href={generateWhatsAppLink(product)}
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg"
                    aria-label={`Pesan ${product.name} via WhatsApp`}
                    onClick={(e) => e.stopPropagation()}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ShoppingBag className="h-5 w-5" />
                  </Link>
                </div>
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
            href="https://wa.me/6289692530975"
            className="inline-flex items-center gap-2 rounded-lg bg-primary px-8 py-4 text-sm font-semibold text-primary-foreground transition-all hover:opacity-90"
          >
            Lihat Semua Produk via WhatsApp
          </Link>
        </div>
      </div>

      {/* Product Detail Modal */}
      <Dialog open={!!selectedProduct} onOpenChange={() => setSelectedProduct(null)}>
        <DialogContent className="max-w-3xl p-0">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="relative aspect-square md:aspect-auto">
              {selectedProduct && (
                <Image
                  src={selectedProduct.image}
                  alt={selectedProduct.name}
                  fill
                  className="object-cover"
                />
              )}
            </div>
            <div className="flex flex-col p-6 md:p-8">
              <button
                onClick={() => setSelectedProduct(null)}
                className="absolute right-4 top-4 rounded-full bg-card p-1 text-muted-foreground transition-colors hover:text-foreground md:hidden"
              >
                <X className="h-5 w-5" />
              </button>

              <div className="mb-2">
                <span className="text-xs font-bold uppercase tracking-widest text-accent">
                  {selectedProduct?.category}
                </span>
                <DialogTitle className="mt-1 font-serif text-2xl font-bold text-foreground">
                  {selectedProduct?.name}
                </DialogTitle>
              </div>

              <div className="mb-4 flex items-center gap-1">
                <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
                <span className="text-sm font-semibold text-foreground">
                  {selectedProduct?.rating}
                </span>
                <span className="text-sm text-muted-foreground">
                  ({selectedProduct?.reviews} ulasan pembeli)
                </span>
              </div>

              <div className="mb-6">
                <div className="flex items-center gap-3">
                  <span className="text-2xl font-bold text-primary">
                    {selectedProduct && formatPrice(selectedProduct.price)}
                  </span>
                  {selectedProduct?.originalPrice && (
                    <span className="rounded bg-accent/10 px-2 py-1 text-xs font-bold text-accent">
                      Hemat {getDiscount(selectedProduct.originalPrice, selectedProduct.price)}%
                    </span>
                  )}
                </div>
                {selectedProduct?.originalPrice && (
                  <span className="text-sm text-muted-foreground line-through">
                    {formatPrice(selectedProduct.originalPrice)}
                  </span>
                )}
              </div>

              <div className="mb-8 grow">
                <h4 className="mb-2 text-sm font-bold text-foreground">Deskripsi Produk</h4>
                <DialogDescription className="text-sm leading-relaxed text-muted-foreground">
                  {selectedProduct?.description}
                </DialogDescription>
              </div>

              <Link
                href={generateWhatsAppLink(selectedProduct)}
                className="flex items-center justify-center gap-2 rounded-lg bg-primary py-4 text-sm font-bold text-primary-foreground transition-all hover:opacity-90"
                target="_blank"
                rel="noopener noreferrer"
              >
                <ShoppingBag className="h-5 w-5" />
                Pesan Sekarang via WhatsApp
              </Link>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  )
}

export function FeaturedProducts() {
  return (
    <Suspense fallback={<div className="flex h-40 items-center justify-center">Memuat produk...</div>}>
      <FeaturedProductsContent />
    </Suspense>
  )
}
