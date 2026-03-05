import Image from "next/image"
import { ArrowUpRight } from "lucide-react"

const categories = [
  {
    name: "Sofa",
    description: "Koleksi sofa modern dan minimalis",
    image: "/images/cat-sofa.jpg",
    count: "80+ Produk",
  },
  {
    name: "Meja",
    description: "Meja makan, tamu, dan kerja",
    image: "/images/cat-meja.jpg",
    count: "120+ Produk",
  },
  {
    name: "Lemari",
    description: "Lemari pakaian dan penyimpanan",
    image: "/images/cat-lemari.jpg",
    count: "65+ Produk",
  },
  {
    name: "Kursi",
    description: "Kursi kantor dan ruang tamu",
    image: "/images/cat-kursi.jpg",
    count: "90+ Produk",
  },
  {
    name: "Tempat Tidur",
    description: "Ranjang dan set kamar tidur",
    image: "/images/cat-tempat-tidur.jpg",
    count: "50+ Produk",
  },
  {
    name: "Rak",
    description: "Rak buku dan rak serbaguna",
    image: "/images/cat-rak.jpg",
    count: "70+ Produk",
  },
]

export function Categories() {
  return (
    <section id="kategori" className="bg-background py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4">
        {/* Header */}
        <div className="mb-14 flex flex-col items-start gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-accent">
              Kategori Furniture
            </p>
            <h2 className="font-serif text-3xl font-bold text-foreground md:text-4xl lg:text-5xl">
              <span className="text-balance">Temukan Furniture Impian Anda</span>
            </h2>
          </div>
          <p className="max-w-md text-muted-foreground">
            Toko meubel furniture Banjarmasin terlengkap dengan berbagai kategori produk
            berkualitas tinggi untuk setiap ruangan di rumah Anda.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((cat) => (
            <article
              key={cat.name}
              className="group relative cursor-pointer overflow-hidden rounded-xl bg-card"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={cat.image}
                  alt={`${cat.name} - Furniture ${cat.name} berkualitas di toko meubel Banjarmasin`}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-foreground/20 to-transparent" />
                {/* Info overlay */}
                <div className="absolute inset-x-0 bottom-0 flex items-end justify-between p-5">
                  <div>
                    <h3 className="font-serif text-xl font-bold text-card md:text-2xl">
                      {cat.name}
                    </h3>
                    <p className="mt-1 text-sm text-card/80">{cat.description}</p>
                    <span className="mt-2 inline-block rounded-full bg-card/20 px-3 py-1 text-xs font-medium text-card backdrop-blur-sm">
                      {cat.count}
                    </span>
                  </div>
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent text-accent-foreground opacity-0 transition-all duration-300 group-hover:opacity-100">
                    <ArrowUpRight className="h-5 w-5" />
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
